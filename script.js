"use strict";
export const __esModule = true;
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
console.log('Script started successfully');
var currentPopup = undefined;
// Waiting for the API to be ready
WA.onInit().then(function () {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);
    WA.room.onEnterLayer('clockZone').subscribe(function () {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    });
    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp);
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    (0, bootstrapExtra)().then(function () {
        console.log('Scripting API Extra ready');
    })["catch"](function (e) { return console.error(e); });
    console.log('This is actually being modified !!!!!');
})["catch"](function (e) { return console.error(e); });
function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
// Open the popup when we enter a given zone
var doorPopup1 = undefined;
var popupText = "Wie viele Hochschulen und Universitäten sind Teil des eTeach-Netzwerks? ";
var popupAnswers = ["5", "10"];
var second_text = "Inkorrekt, 10 Universitäten sind Teil des eTeach-Netzwerks.";
var answer = "Richtig, 10 Universitäten sind Teil des eTeach-Netzwerks";
// Define the initial and secondary layers
var enablePopupLayer1 = "myLayer1";
var doorLayer1 = "myDoor1";
var colliderDoorLayer1 = "myDoor1Col";
var enablePopupLayer3 = "myLayer3";
var isUnlockedDoorLayer1 = false;
//let currentPopup1  : any = undefined;
// Open the popup when we enter a given zone
if (isUnlockedDoorLayer1 === false) {
    var sub_1 = WA.room.onEnterLayer(enablePopupLayer1).subscribe(function () {
        /*         if (doorPopup1) {
                    doorPopup1.close();
                } */
        // Create the popup
        doorPopup1 = WA.ui.openPopup("popupRectangle1", popupText, [{
                label: popupAnswers[0],
                className: "primary",
                callback: function (popup) {
                    popup.close();
                    doorPopup1 = WA.ui.openPopup("popupRectangle1", second_text, [{
                            label: "Schließen",
                            className: "primary",
                            callback: function (popup) {
                                popup.close();
                            }
                        }]);
                }
            },
            {
                label: popupAnswers[1],
                className: "primary",
                callback: function (popup) {
                    popup.close();
                    doorPopup1 = WA.ui.openPopup("popupRectangle1", answer, [
                        {
                            label: "Tür öffnen",
                            className: "primary",
                            callback: function (popup) {
                                popup.close();
                                isUnlockedDoorLayer1 = true;
                                WA.room.hideLayer(enablePopupLayer1);
                                WA.room.hideLayer(doorLayer1);
                                WA.room.hideLayer(colliderDoorLayer1);
                                WA.room.showLayer(enablePopupLayer3);
                                sub_1.unsubscribe();
                            }
                        }
                    ]);
                }
            }
        ]);
    });
}
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer1").subscribe(function () {
    if (doorPopup1 !== undefined) {
        doorPopup1.close();
    }
});
// Open the popup when we enter a given zone
var doorPopup2 = undefined;
var popupText2 = "Wann und wo findet die Jahrestagung von eTeach-Netzwerk start?";
var popupAnswers2 = ["04-05.12.2024 in FSU Jena", "10-11.12.2024 in HU Berlin"];
var answer2 = "Falsch! ist am 04.-05. November 2024, in FSU Jena";
var second_text2 = "Richtig, 04.-05. November 2024, in FSU Jena";
// Define the initial and secondary layers
var enablePopupLayer2 = "myLayer2";
var doorLayer2 = "myDoor2";
var colliderDoorLayer2 = "myDoor2Col";
var enablePopupLayer4 = "myLayer4";
var isUnlockedDoorLayer2 = false;
// Open the popup when we enter a given zone
if (isUnlockedDoorLayer2 === false) {
    var sub2_1 = WA.room.onEnterLayer(enablePopupLayer2).subscribe(function () {
        // Close the current popup if it exists
        /*         if (doorPopup2) {
                    doorPopup2.close();
                } */
        // Create the popup
        doorPopup2 = WA.ui.openPopup("popupRectangle2", popupText2, [{
                label: popupAnswers2[0],
                className: "primary",
                callback: function (popup2) {
                    popup2.close();
                    doorPopup2 = WA.ui.openPopup("popupRectangle2", second_text2, [
                        {
                            label: "Tür öffnen",
                            className: "primary",
                            callback: function (popup2) {
                                popup2.close();
                                isUnlockedDoorLayer2 = true;
                                WA.room.hideLayer(enablePopupLayer2);
                                WA.room.hideLayer(doorLayer2);
                                WA.room.hideLayer(colliderDoorLayer2);
                                WA.room.showLayer(enablePopupLayer4);
                                sub2_1.unsubscribe();
                            }
                        }
                    ]);
                }
            },
            {
                label: popupAnswers2[1],
                className: "primary",
                callback: function (popup2) {
                    popup2.close();
                    doorPopup2 = WA.ui.openPopup("popupRectangle2", answer2, [{
                            label: "Schließen",
                            className: "primary",
                            callback: function (popup2) {
                                popup2.close();
                            }
                        }]);
                }
            }
        ]);
    });
}
// Close the popup when we leave the zone.
var leave2 = WA.room.onLeaveLayer("myLayer2").subscribe(function () {
    if (doorPopup2 !== undefined) {
        doorPopup2.close();
    }
});
// Open the popup when we enter a given zone
var doorPopup3;
var popupText3 = "Welche ist eines der Schwerpunktthemen des Jahres im eTeach-Netzwerk?";
var popupAnswers3 = ["KI", " Tools, Medientechnik", "Hybride Lehre"];
var answer3 = "Falsch! ist KI";
var second_text3 = "Richtig, KI";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
var doorLayer3 = "myDoor3";
var colliderDoorLayer3 = "myDoor3Col";
var enablePopupLayer5 = "myLayer5";
var isUnlockedDoorLayer3 = false;
// Open the popup when we enter a given zone
var sub3 = WA.room.onEnterLayer(enablePopupLayer3).subscribe(function () {
    // Create the popup
    doorPopup3 = WA.ui.openPopup("popupRectangle3", popupText3, [{
            label: popupAnswers3[0],
            className: "primary",
            callback: function (doorPopup3) {
                doorPopup3.close();
                doorPopup3 = WA.ui.openPopup("popupRectangle3", second_text3, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: function (doorPopup3) {
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
            callback: function (doorPopup3) {
                doorPopup3.close();
                doorPopup3 = WA.ui.openPopup("popupRectangle3", answer3, [{
                        label: "Schließen",
                        className: "primary",
                        callback: function (doorPopup3) {
                            doorPopup3.close();
                        }
                    }]);
            }
        },
        {
            label: popupAnswers3[2],
            className: "primary",
            callback: function (popup3) {
                popup3.close();
                doorPopup3 = WA.ui.openPopup("popupRectangle3", answer3, [{
                        label: "Schließen",
                        className: "primary",
                        callback: function (popup3) {
                            popup3.close();
                        }
                    }]);
            }
        }
    ]);
});
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer3").subscribe(function () {
    if (doorPopup3 !== undefined) {
        doorPopup3.close();
    }
    doorPopup3.close();
});
// Open the popup when we enter a given zone
var doorPopup4 = undefined;
var popupText4 = "Wie viele Kontaktstellen haben wir im Netzwerk der Thüringer Hochschulen und Universitäten?";
var popupAnswers4 = ["11", " 15"];
var answer4 = "Falsch! ist 11";
var second_text4 = "Richtig, 11";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
var doorLayer4 = "myDoor4";
var colliderDoorLayer4 = "myDoor4Col";
//let enablePopupLayer5 = "myLayer5";
var isUnlockedDoorLayer4 = false;
// Open the popup when we enter a given zone
var sub4 = WA.room.onEnterLayer(enablePopupLayer4).subscribe(function () {
    /*         if (doorPopup3) {
                doorPopup3.close();
            } */
    // Create the popup
    doorPopup4 = WA.ui.openPopup("popupRectangle4", popupText4, [{
            label: popupAnswers4[0],
            className: "primary",
            callback: function (popup4) {
                popup4.close();
                doorPopup4 = WA.ui.openPopup("popupRectangle4", second_text4, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: function (popup4) {
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
            callback: function (popup4) {
                popup4.close();
                doorPopup4 = WA.ui.openPopup("popupRectangle4", answer4, [{
                        label: "Schließen",
                        className: "primary",
                        callback: function (popup4) {
                            popup4.close();
                        }
                    }
                ]);
            }
        }
    ]);
});
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer4").subscribe(function () {
    if (doorPopup4 !== undefined) {
        doorPopup4.close();
    }
});
// Open the popup when we enter a given zone
var doorPopup5 = undefined;
var popupText5 = "Welche Veranstaltung findet einmal im Monat für die Lehrenden statt?";
var popupAnswers5 = ["Innovation@eTeach", " Talks@eTeach"];
var answer5 = "Falsch! ist Talks@eTeach";
var second_text5 = "Richtig, Talks@eTeach";
// Define the initial and secondary layers
//let enablePopupLayer3 = "myLayer3";
var doorLayer5 = "myDoor5";
var colliderDoorLayer5 = "myDoor5Col";
//let enablePopupLayer5 = "myLayer5";
var isUnlockedDoorLayer5 = false;
// Open the popup when we enter a given zone
WA.room.onEnterLayer(enablePopupLayer5).subscribe(function () {
    /*         if (doorPopup3) {
                doorPopup3.close();
            } */
    // Create the popup
    doorPopup5 = WA.ui.openPopup("popupRectangle5", popupText5, [{
            label: popupAnswers5[1],
            className: "primary",
            callback: function (popup5) {
                popup5.close();
                doorPopup5 = WA.ui.openPopup("popupRectangle5", second_text5, [
                    {
                        label: "Tür öffnen",
                        className: "primary",
                        callback: function (popup5) {
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
            callback: function (popup5) {
                popup5.close();
                doorPopup5 = WA.ui.openPopup("popupRectangle5", answer5, [{
                        label: "Schließen",
                        className: "primary",
                        callback: function (popup5) {
                            popup5.close();
                        }
                    }
                ]);
            }
        }
    ]);
});
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myLayer5").subscribe(function () {
    doorPopup5.close();
});
