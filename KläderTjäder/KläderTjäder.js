//Lista över klädesplagg som kan rekommenderas
const plagglista = ["Scarf", "Jeans", "Skjorta","Cowboyboots","Kjol"];

// Slumpa ett plagg 
function slumpaPlagg() {
    const index = Math.floor(Math.random()*(plagglista.length));
    return plagglista[index];
}

// Skriver ut vilket plagg som rekommenderas
function visaRekommenderatPlagg() {
    const plagg = slumpaPlagg();
    document.write('Tjädern rekommenderar: ${plagg}');
}

// Kör funktionen när sidan laddats
window.onload = visaRekommenderatPlagg();
