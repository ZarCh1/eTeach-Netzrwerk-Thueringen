/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
//import { Popup } from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";    
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { UIWebsite } from "@workadventure/iframe-api-typings";
import { Popup } from "@workadventure/iframe-api-typings";

console.log('Script started successfully');

let currentPopup: Popup | null;
let currentPrompt: UIWebsite;

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




function closePopUp(currentPopup: any) {

    currentPopup?.close();
    currentPopup = null;
    //leaveLayerSubscription.unsubscribe();
}

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

// Open the popup when we enter a given zone

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

let popupRectangle = "popupRectangle1";
let popupRectangle2 = "popupRectangle2";
let popupRectangle3 = "popupRectangle3";
let popupRectangle4 = "popupRectangle4";
let popupRectangle5 = "popupRectangle5";

let leaveLayerSubscription: any = undefined;
//let currentPopup1  : any = undefined;

async function openPopup(doorLayer: string, enablePopupLayer: string, colliderDoorLayer: string, popupRectangle: string, popupText: string, popupAnswers: string[], answer: string, second_text: string, subscriptionIndex: number) {
    if (currentPopup) return;
    currentPopup = WA.ui.openPopup(popupRectangle, popupText, [{
        label: popupAnswers[0],
        className: "primary",
        callback: () => {
            currentPopup?.close();
            currentPopup = null;
            currentPopup = WA.ui.openPopup(popupRectangle, second_text, [{
                label: "Schließen",
                className: "primary",
                callback: () => {
                    currentPopup?.close();
                    currentPopup = null;
                }
            }]);
        }
    },
    {
        label: popupAnswers[1],
        className: "primary",
        callback: () => {
            currentPopup?.close();
                    currentPopup = null;
            currentPopup = WA.ui.openPopup(popupRectangle, answer, [{
                label: "Tür öffnen",
                className: "primary",
                callback: () => {
                    currentPopup?.close();
                    currentPopup = null;
                    WA.room.hideLayer(enablePopupLayer);
                    WA.room.hideLayer(doorLayer);
                    WA.room.hideLayer(colliderDoorLayer);
                    // unsubscribe
                    if (subscriptionIndex === 1) {
                        subscription1.unsubscribe();
                    } else if (subscriptionIndex === 2) {
                        subscription2.unsubscribe();
                    } else if (subscriptionIndex === 3) {
                        subscription3.unsubscribe();
                    } else if (subscriptionIndex === 4) {
                        subscription4.unsubscribe();
                    } else if (subscriptionIndex === 5) {
                        subscription5.unsubscribe();
                    }
                }
            }]);
        }
    }
    ]);

    WA.room.onLeaveLayer(enablePopupLayer).subscribe(() => {
        currentPopup?.close();
        currentPopup = null;
    });
}

// Example usage
const subscription1 = WA.room.onEnterLayer(enablePopupLayer1).subscribe(async () => {
    await openPopup(doorLayer1, enablePopupLayer1, colliderDoorLayer1, popupRectangle, popupText, popupAnswers, answer, second_text, 1);
});

const subscription2 = WA.room.onEnterLayer(enablePopupLayer2).subscribe(async () => {
    await openPopup(doorLayer2, enablePopupLayer2, colliderDoorLayer2, popupRectangle2, popupText2, popupAnswers2, answer2, second_text2, 2);
});

const subscription3 = WA.room.onEnterLayer(enablePopupLayer3).subscribe(async () => {
    await openPopup(doorLayer3, enablePopupLayer3, colliderDoorLayer3, popupRectangle3, popupText3, popupAnswers3, answer3, second_text3, 3);
});

const subscription4 = WA.room.onEnterLayer(enablePopupLayer4).subscribe(async () => {
    await openPopup(doorLayer4, enablePopupLayer4, colliderDoorLayer4, popupRectangle4, popupText4, popupAnswers4, answer4, second_text4, 4);
});

const subscription5 = leaveLayerSubscription = WA.room.onEnterLayer(enablePopupLayer5).subscribe(async () => {
    await openPopup(doorLayer5, enablePopupLayer5, colliderDoorLayer5, popupRectangle5, popupText5, popupAnswers5, answer5, second_text5, 5);
});



async function closeAllPrompts(): Promise<void> {
    let wss: UIWebsite[] = await WA.ui.website.getAll();
    wss.forEach(ws => {
        ws.close();
    })
}








