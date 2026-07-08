// Menú móvil
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('active', isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año en el footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formulario de contacto (placeholder: aún no está conectado a un backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = '¡Gracias! Hemos recibido tu mensaje y te contactaremos muy pronto.';
    contactForm.reset();
  });
}
