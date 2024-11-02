// Initialisation du compteur de visiteurs
let visitorCount = 183;

function incrementVisitorCount() {
    visitorCount += Math.floor(Math.random() * 3); // Incrément aléatoire entre 0 et 2
    document.getElementById("visitorCount").innerText = visitorCount;
}

// Mise à jour toutes les 2 secondes
setInterval(incrementVisitorCount, 2000);
