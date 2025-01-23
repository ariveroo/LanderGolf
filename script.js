// Variables globales
const navLinks = document.querySelectorAll('.nav-links a');
const heroSection = document.querySelector('.hero');
const contactForm = document.querySelector('.contact form');
const featuresArticles = document.querySelectorAll('.features article');

// FUNCIONALIDAD 1: Scroll suave para navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('.html', '');
        document.querySelector(`#${targetId}`)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FUNCIONALIDAD 2: Animación en el héroe
window.addEventListener('load', () => {
    heroSection.classList.add('visible');
});

// FUNCIONALIDAD 3: Animación dinámica para "features"
featuresArticles.forEach((article, index) => {
    article.style.animationDelay = `${index * 0.3}s`;
    article.classList.add('animate-feature');
});

// FUNCIONALIDAD 4: Validación de formulario
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (!name.value.trim()) {
        showError(name, 'El nombre es obligatorio.');
        valid = false;
    } else {
        removeError(name);
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        showError(email, 'Introduce un correo válido.');
        valid = false;
    } else {
        removeError(email);
    }

    if (!message.value.trim()) {
        showError(message, 'El mensaje no puede estar vacío.');
        valid = false;
    } else {
        removeError(message);
    }

    if (valid) {
        alert('Formulario enviado con éxito. ¡Gracias por contactarnos!');
        contactForm.reset();
    }
});

// FUNCIONES AUXILIARES PARA VALIDACIÓN
function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('small');
        error.classList.add('error-message');
        input.parentElement.appendChild(error);
    }
    error.textContent = message;
    input.classList.add('input-error');
}

function removeError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.remove();
    }
    input.classList.remove('input-error');
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// FUNCIONALIDAD 5: Cambio de fondo al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        document.body.style.backgroundColor = '#e5d1ff';
    } else {
        document.body.style.backgroundColor = '#f3e8ff';
    }
    lastScroll = currentScroll;
});

// FUNCIONALIDAD 6: Animación en botones
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// FUNCIONALIDAD 7: Mostrar tooltip dinámico
ctaButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const tooltip = document.createElement('span');
        tooltip.textContent = '¡Haz clic aquí!';
        tooltip.classList.add('tooltip');
        document.body.appendChild(tooltip);

        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;

        button.addEventListener('mouseleave', () => {
            tooltip.remove();
        });
    });
});

// FUNCIONALIDAD 8: Agregar una barra de progreso en la página
const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// FUNCIONALIDAD 9: Mostrar un modal dinámico
const learnMoreButton = document.getElementById('learnMore');
learnMoreButton?.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>¡Bienvenido a Lander Golf!</h2>
            <p>Explora más sobre nuestros servicios y disfruta de una experiencia única.</p>
            <button class="close-modal">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
        modal.remove();
    });
});

// FUNCIONALIDAD 10: Efecto de texto dinámico
const slogan = document.querySelector('.slogan');
const sloganText = slogan?.textContent;
if (sloganText) {
    slogan.textContent = '';
    sloganText.split('').forEach((char, index) => {
        setTimeout(() => {
            slogan.textContent += char;
        }, index * 100);
    });
}
