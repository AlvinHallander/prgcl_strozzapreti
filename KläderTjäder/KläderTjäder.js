//Lista över klädesplagg som kan rekommenderas
const plagglista = ["Images/scarf.jpg", "Images/jeans.jpg", "Images/cowboyBoots.jpg","Images/jorts.jpg", "Images/skirt.jpg","Images/hawaii.jpg", "Images/frozenshirt.jpg"];

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
    htmlkod += "<th><p>Tjädern rekommenderar detta plagg just för dig:</p></th>";
    htmlkod += "<td><img src='" + plagg + "' alt='rekommenderat plagg' height='300px' width='420px'></td>";
    htmlkod += "</tr>";
    document.write(htmlkod);
}
// Kör funktionen när sidan laddats
window.onload = visaRekommenderatPlagg();
