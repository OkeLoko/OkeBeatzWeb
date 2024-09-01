document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

async function handlePreSaveClick() {
    try {
        const response = await fetch('/JavaScript/project-root/public/click', { method: 'POST' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('click-count').innerText = `Pre-Save button clicked ${data.clickCount} times`;

        // Redirige al usuario a otro enlace después de hacer clic
        window.location.href = 'https://cutt.ly/Gebjx1EO';  // Reemplaza esto con el enlace al que deseas redirigir
    } catch (error) {
        console.error('Error recording click:', error);
    }
}

async function fetchClickCount() {
    try {
        const response = await fetch('/JavaScript/project-root/public/click-count');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('click-count').innerText = `Pre-Save button clicked ${data.clickCount} times`;
    } catch (error) {
        console.error('Error fetching click count:', error);
    }
}

function updateCountdown() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let targetDate = new Date(currentYear, 5, 23);
    if (today >= targetDate) {
        targetDate.setFullYear(currentYear + 1);
    }
    const difference = targetDate - today;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

    document.getElementById('countdown-days').innerText = `${days} días`;
    document.getElementById('countdown-time').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);

document.getElementById('pre-save-button').addEventListener('click', function() {
    window.open('https://cutt.ly/Gebjx1EO', '_blank');
});
document.addEventListener('DOMContentLoaded', function() {
    const links = [
        'https://soundcloud.com/oke-beatz/pinkpenny-1?si=68fb49a03b674e9b9be8b6af100fec00&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://open.spotify.com/playlist/0Yct0P8gdLKM8q34VQrPQB?si=c7e584607b984f53&nd=1&dlsi=24a092d57be14439',
        'https://archillect.com/archivehttps://archillect.com/410185',
        'https://music.apple.com/mx/artist/oke-beatz/1504711111',
        'https://github.com/OkeLoko/AtomSmash'
    ];
    document.getElementById('random').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];
        window.open(randomLink, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    const musicButton = document.getElementById('music-button');
    musicButton.addEventListener('click', function() {
        window.location.href = 'music.html'; // Redirigir a la nueva página de audio
    });
});

/*Fin Glitch*/
window.onload = function() {
    fetchClickCount();
};
