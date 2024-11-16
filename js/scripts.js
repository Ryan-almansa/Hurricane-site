// Initialisation du compteur de visiteurs
let visitorCount = 183;

function incrementVisitorCount() {
    visitorCount += Math.floor(Math.random() * 3); // Incrément aléatoire entre 0 et 2
    document.getElementById("visitorCount").innerText = visitorCount;
}

// Mise à jour toutes les 2 secondes
setInterval(incrementVisitorCount, 2000);


// Effet de particules
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];

function createParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3,
            xSpeed: Math.random() - 0.5,
            ySpeed: Math.random() - 0.5
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    });
}

function updateParticles() {
    particles.forEach(p => {
        p.x += p.xSpeed;
        p.y += p.ySpeed;

        if (p.x < 0 || p.x > canvas.width) p.xSpeed *= -1;
        if (p.y < 0 || p.y > canvas.height) p.ySpeed *= -1;
    });
}

function animateParticles() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
createParticles();
animateParticles();

// Effet de défilement (Scroll Reveal)
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 50) {
            reveal.classList.add('active');
        }
    });
});
