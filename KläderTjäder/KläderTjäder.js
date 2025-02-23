//Lista över klädesplagg som kan rekommenderas
const plagglista = ["Images/scarf.jpg", "Images/jeans.jpg", "Images/cowboyBoots.jpg","Images/skirt.jpg"];

// Slumpa ett plagg 
function slumpaPlagg() {
    const index = Math.floor(Math.random()*(plagglista.length));
    return plagglista[index];
}

// Skriver ut vilket plagg som rekommenderas
function visaRekommenderatPlagg() {
    const plagg = slumpaPlagg();
    htmlkod = "";
    htmlkod += "<tr>";
    htmlkod += "<th><h2>Tjädern rekommenderar detta plagg just för dig:</h2></th>";
    htmlkod += "<td><img src='" + plagg + "' alt='rekommenderat plagg' height='300px' width='420px'></td>";
    htmlkod += "</tr>";
    document.write(htmlkod);
}

// Kör funktionen när sidan laddats
window.onload = visaRekommenderatPlagg();
