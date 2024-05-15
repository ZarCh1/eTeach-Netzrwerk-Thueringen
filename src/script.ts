// script.ts

// Import Work Adventure NPC class
import { WorkAdventureNPC } from './npc';

// Fetch NPC data from JSON file
fetch('npc_data.json')
  .then(response => response.json())
  .then(data => {
    // Create NPC instances based on the retrieved data
    const npcs = data.npcs.map((npcData: any) => new WorkAdventureNPC(npcData.name, npcData.dialogue));

    // Listen for interaction event (e.g., player clicks on NPC)
    document.addEventListener('click', (event) => {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement.classList.contains('npc')) {
            // Retrieve NPC name from the clicked element (assuming it's stored in a data attribute)
            const npcName = clickedElement.dataset.npcName;

            // Find the NPC instance with the matching name
            const npc = npcs.find((npc: WorkAdventureNPC) => npc.name === npcName);

            // Display NPC dialogue
            if (npc) {
                displayDialogue(npc);
            }
        }
    });
  })
  .catch(error => {
    console.error('Error fetching NPC data:', error);
  });

// Function to display NPC dialogue
function displayDialogue(npc: WorkAdventureNPC) {
  const dialogueContainer = document.getElementById('npc-dialogue');
  if (dialogueContainer) {
    dialogueContainer.innerHTML = ''; // Clear previous dialogue

    // Display NPC greeting
    const greetingElement = document.createElement('p');
    greetingElement.textContent = npc.greet();
    dialogueContainer.appendChild(greetingElement);

    // Display NPC dialogue lines
    npc.dialogue.slice(1).forEach((line) => {
      const lineElement = document.createElement('p');
      lineElement.textContent = line;
      dialogueContainer.appendChild(lineElement);
    });
  }
}
