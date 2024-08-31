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
        'https://ln.run/03r7C',
        'https://ln.run/3ssJ2',
        'https://ln.run/U-ogK',
        'https://ln.run/Y0iIJ',
        'https://ln.run/Hmtwu'
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

    const audioButton = document.getElementById('audio-button');
    audioButton.addEventListener('click', function() {
        window.location.href = 'audio.html'; // Redirigir a la nueva página de audio
    });

    const musicButton = document.getElementById('music-button');
    musicButton.addEventListener('click', function() {
        window.location.href = 'music.html'; // Redirigir a la nueva página de audio
    });
});

/*Inicio Glitch*/ 


function calculateDaysRemaining() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let targetDate = new Date(currentYear, 5, 23); // 23 de junio

    if (today >= targetDate) {
        targetDate.setFullYear(currentYear + 1);
    }

    const difference = targetDate - today;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return days;
}

function triggerGlitch() {
    const countdownMessage = document.getElementById('countdown-message');
    const daysRemaining = calculateDaysRemaining();
    countdownMessage.innerText = `Faltan ${daysRemaining} días para 23`;

    // Calcula la posición para centrar el mensaje
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    countdownMessage.style.top = `${scrollY + viewportHeight / 2}px`;
    countdownMessage.style.left = `${scrollX + viewportWidth / 2}px`;
    countdownMessage.style.transform = 'translate(-50%, -50%)';
    
    countdownMessage.style.display = 'block';
    countdownMessage.classList.add('glitch');
    document.body.classList.add('glitch');

    setTimeout(() => {
        countdownMessage.style.display = 'none';
        countdownMessage.classList.remove('glitch');
        document.body.classList.remove('glitch');
    }, 500); // La duración del efecto glitch debe coincidir con la duración de la animación definida en CSS
}

// setInterval(triggerGlitch, 23000); // Activa el glitch cada 30 segundos
// triggerGlitch(); // Activa el glitch al cargar la página por primera vez


/*Fin Glitch*/
window.onload = function() {
    fetchClickCount();
};
