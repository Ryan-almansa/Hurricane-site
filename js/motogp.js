document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        const motoImage = this.querySelector('::after');
        motoImage.style.animation = 'drive 1s linear forwards';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const textArray = [
        'Bienvenue sur notre site Moto GP.',
        'Découvrez les dernières courses.',
        'Suivez les pilotes et les équipes.',
        'Plongez dans l\'univers du Moto GP !'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            currentText = textArray[textIndex].substring(0, charIndex--);
        } else {
            currentText = textArray[textIndex].substring(0, charIndex++);
        }

        textElement.textContent = currentText;

        if (!isDeleting && charIndex === textArray[textIndex].length) {
            setTimeout(() => isDeleting = true, 1000); // Pause à la fin du texte
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        const speed = isDeleting ? 50 : 150;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});



document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const textArray = [
        'Découvrez les champions du Moto GP.',
        'Plongez dans l\'univers de la vitesse.',
        'Rencontrez les pilotes légendaires.',
        'Les rois des circuits en un clic !'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            currentText = textArray[textIndex].substring(0, charIndex--);
        } else {
            currentText = textArray[textIndex].substring(0, charIndex++);
        }

        textElement.textContent = currentText;

        if (!isDeleting && charIndex === textArray[textIndex].length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});




/*******responsive*******/
const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });