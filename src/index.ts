/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { Popup } from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)
    
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    console.log('This is actually being modified !!!!!');
}).catch(e => console.error(e));




function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

// Open the popup when we enter a given zone
let doorPopup1: any = undefined;
let popupText = "Wie viele Hochschulen und Universitäten sind Teil des eTeach-Netzwerks? ";
let popupAnswers = ["5", "10"];
let second_text = "Inkorrekt, 10 Universitäten sind Teil des eTeach-Netzwerks.";
let answer = "Richtig, 10 Universitäten sind Teil des eTeach-Netzwerks";
// Define the initial and secondary layers
let enablePopupLayer1 = "myLayer1";
let doorLayer1 = "myDoor1";
let colliderDoorLayer1 = "myDoor1Col";
let enablePopupLayer3 = "myLayer3";
let isUnlockedDoorLayer1 = false;

//let currentPopup1  : any = undefined;

// Open the popup when we enter a given zone
if (isUnlockedDoorLayer1 === false) {
    let sub = WA.room.onEnterLayer(enablePopupLayer1).subscribe(() => {
        /*         if (doorPopup1) {
                    doorPopup1.close();
                } */
        // Create the popup
        doorPopup1 = WA.ui.openPopup("popupRectangle1", popupText, [{
            label: popupAnswers[0],
            className: "primary",
            callback: (popup) => {
                popup.close();
                doorPopup1 = WA.ui.openPopup("popupRectangle1", second_text, [{
                    label: "Schließen",
                    className: "primary",
                    callback: (popup) => {
                        popup.close();

                    }
                }]);
            }
        },
        {
            label: popupAnswers[1],
            className: "primary",
            callback: (popup) => {
                popup.close();
                doorPopup1 = WA.ui.openPopup("popupRectangle1", answer, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: (popup) => {
                            popup.close();
                            isUnlockedDoorLayer1 = true;
                            WA.room.hideLayer(enablePopupLayer1);
                            WA.room.hideLayer(doorLayer1);
                            WA.room.hideLayer(colliderDoorLayer1);
                            WA.room.showLayer(enablePopupLayer3);
                            sub.unsubscribe();
                        }
                    }
                ]);
            }
        }
        ]);
    });
}
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer1").subscribe(() => {
    if (doorPopup1 !== undefined) {
        doorPopup1.close();
    }
});

// Open the popup when we enter a given zone
let doorPopup2: any = undefined;
let popupText2 = "Wann und wo findet die Jahrestagung von eTeach-Netzwerk start?";
let popupAnswers2 = ["04-05.12.2024 in FSU Jena", "10-11.12.2024 in HU Berlin"];
let answer2 = "Falsch! ist am 04.-05. November 2024, in FSU Jena";
let second_text2 = "Richtig, 04.-05. November 2024, in FSU Jena";
// Define the initial and secondary layers
let enablePopupLayer2 = "myLayer2";
let doorLayer2 = "myDoor2";
let colliderDoorLayer2 = "myDoor2Col";
let enablePopupLayer4 = "myLayer4";
let isUnlockedDoorLayer2 = false;

// Open the popup when we enter a given zone
if (isUnlockedDoorLayer2 === false) {
    let sub2 = WA.room.onEnterLayer(enablePopupLayer2).subscribe(() => {
        // Close the current popup if it exists
        /*         if (doorPopup2) {
                    doorPopup2.close();
                } */
        // Create the popup
        doorPopup2 = WA.ui.openPopup("popupRectangle2", popupText2, [{
            label: popupAnswers2[0],
            className: "primary",
            callback: (popup2) => {
                popup2.close();
                doorPopup2 = WA.ui.openPopup("popupRectangle2", second_text2, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: (popup2) => {
                            popup2.close();

                            isUnlockedDoorLayer2 = true;
                            WA.room.hideLayer(enablePopupLayer2);
                            WA.room.hideLayer(doorLayer2);
                            WA.room.hideLayer(colliderDoorLayer2);
                            WA.room.showLayer(enablePopupLayer4);
                            sub2.unsubscribe();
                        }
                    }
                ]);
            }
        },
        {
            label: popupAnswers2[1],
            className: "primary",
            callback: (popup2) => {
                popup2.close();
                doorPopup2 = WA.ui.openPopup("popupRectangle2", answer2, [{
                    label: "Schließen",
                    className: "primary",
                    callback: (popup2) => {
                        popup2.close();

                    }
                }]);
            }
        }
        ]);
    });
}
// Close the popup when we leave the zone.
let leave2 = WA.room.onLeaveLayer("myLayer2").subscribe(() => {
    if (doorPopup2 !== undefined) {
        doorPopup2.close();
    }
});

// Open the popup when we enter a given zone
let doorPopup3: Popup;
let popupText3 = "Welche ist eines der Schwerpunktthemen des Jahres im eTeach-Netzwerk?";
let popupAnswers3 = ["KI", " Tools, Medientechnik", "Hybride Lehre"];
let answer3 = "Falsch! ist KI";
let second_text3 = "Richtig, KI";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
let doorLayer3 = "myDoor3";
let colliderDoorLayer3 = "myDoor3Col";
let enablePopupLayer5 = "myLayer5";
let isUnlockedDoorLayer3 = false;

// Open the popup when we enter a given zone

let sub3 = WA.room.onEnterLayer(enablePopupLayer3).subscribe(() => {
    // Create the popup
    doorPopup3 = WA.ui.openPopup("popupRectangle3", popupText3, [{
        label: popupAnswers3[0],
        className: "primary",
        callback: (doorPopup3) => {
            doorPopup3.close();
            doorPopup3 = WA.ui.openPopup("popupRectangle3", second_text3, [
                {
                    label: "Tür öffnen",
                    className: "primary",
                    callback: (doorPopup3) => {
                        doorPopup3.close();


                        WA.room.hideLayer(enablePopupLayer3);
                        WA.room.hideLayer(doorLayer3);
                        WA.room.hideLayer(colliderDoorLayer3);
                        WA.room.showLayer(enablePopupLayer5);
                        sub3.unsubscribe();
                    }
                }
            ]);
        }
    },
    {
        label: popupAnswers3[1],
        className: "primary",
        callback: (doorPopup3) => {
            doorPopup3.close();
            doorPopup3 = WA.ui.openPopup("popupRectangle3", answer3, [{
                label: "Schließen",
                className: "primary",
                callback: (doorPopup3) => {
                    doorPopup3.close();

                }
            }]);
        }
    },
    {
        label: popupAnswers3[2],
        className: "primary",
        callback: (popup3) => {
            popup3.close();
            doorPopup3 = WA.ui.openPopup("popupRectangle3", answer3, [{
                label: "Schließen",
                className: "primary",
                callback: (popup3) => {
                    popup3.close();

                }
            }]);
        }
    }
    ]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer3").subscribe(() => {
    if (doorPopup3 !== undefined) {
        doorPopup3.close();
        
    }
    doorPopup3.close();
    
});

// Open the popup when we enter a given zone
let doorPopup4: any = undefined;
let popupText4 = "Wie viele Kontaktstellen haben wir im Netzwerk der Thüringer Hochschulen und Universitäten?";
let popupAnswers4 = ["11", " 15"];
let answer4 = "Falsch! ist 11";
let second_text4 = "Richtig, 11";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
let doorLayer4 = "myDoor4";
let colliderDoorLayer4 = "myDoor4Col";
//let enablePopupLayer5 = "myLayer5";
let isUnlockedDoorLayer4 = false;

// Open the popup when we enter a given zone
    let sub4 = WA.room.onEnterLayer(enablePopupLayer4).subscribe(() => {
        /*         if (doorPopup3) {
                    doorPopup3.close();
                } */
        // Create the popup
        doorPopup4 = WA.ui.openPopup("popupRectangle4", popupText4, [{
            label: popupAnswers4[0],
            className: "primary",
            callback: (popup4) => {
                popup4.close();
                doorPopup4 = WA.ui.openPopup("popupRectangle4", second_text4, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: (popup4) => {
                            popup4.close();

                            isUnlockedDoorLayer4 = true;
                            WA.room.hideLayer(enablePopupLayer4);
                            WA.room.hideLayer(doorLayer4);
                            WA.room.hideLayer(colliderDoorLayer4);
                            WA.room.showLayer(enablePopupLayer5);

                        }
                    }
                ]);
            }
        },
        {
            label: popupAnswers4[1],
            className: "primary",
            callback: (popup4) => {
                popup4.close();
                doorPopup4 = WA.ui.openPopup("popupRectangle4", answer4, [{
                    label: "Schließen",
                    className: "primary",
                    callback: (popup4) => {
                        popup4.close();

                    }
                }
                ]);
            }
        }
        ]);
    });

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer4").subscribe(() => {
    if (doorPopup4 !== undefined) {
        doorPopup4.close();
    }
});

// Open the popup when we enter a given zone
let doorPopup5: any = undefined;
let popupText5 = "Welche Veranstaltung findet einmal im Monat für die Lehrenden statt?";
let popupAnswers5 = ["Innovation@eTeach", " Talks@eTeach"];
let answer5 = "Falsch! ist Talks@eTeach";
let second_text5 = "Richtig, Talks@eTeach";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
let doorLayer5 = "myDoor5";
let colliderDoorLayer5 = "myDoor5Col";
//let enablePopupLayer5 = "myLayer5";
let isUnlockedDoorLayer5 = false;

// Open the popup when we enter a given zone

WA.room.onEnterLayer(enablePopupLayer5).subscribe(() => {
        /*         if (doorPopup3) {
                    doorPopup3.close();
                } */
        // Create the popup
        doorPopup5 = WA.ui.openPopup("popupRectangle5", popupText5, [{
            label: popupAnswers5[1],
            className: "primary",
            callback: (popup5) => {
                popup5.close();
                doorPopup5 = WA.ui.openPopup("popupRectangle5", second_text5, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: (popup5) => {
                            popup5.close();

                            isUnlockedDoorLayer5 = true;
                            WA.room.hideLayer(enablePopupLayer5);
                            WA.room.hideLayer(doorLayer5);
                            WA.room.hideLayer(colliderDoorLayer5);
                            //WA.room.showLayer(enablePopupLayer5);

                        }
                    }
                ]);
            }
        },
        {
            label: popupAnswers5[0],
            className: "primary",
            callback: (popup5) => {
                popup5.close();
                doorPopup5 = WA.ui.openPopup("popupRectangle5", answer5, [{
                    label: "Schließen",
                    className: "primary",
                    callback: (popup5) => {
                        popup5.close();

                    }
                }
                ]);
            }
        }
        ]);
    });

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer5").subscribe(() => {
   
        doorPopup5.close();
    
});












