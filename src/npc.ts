// npc.ts

interface NPC {
    name: string;
    dialogue: string[];
}

class WorkAdventureNPC implements NPC {
    name: string;
    dialogue: string[];

    constructor(name: string, dialogue: string[]) {
        this.name = name;
        this.dialogue = dialogue;
    }

    greet(): string {
        return this.dialogue[0];
    }

    respond(playerInput: string): string {
        // Example logic for responding to player input
        return "I'm sorry, I don't understand.";
    }
}

export { WorkAdventureNPC };
