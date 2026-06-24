// ── Nav: destaca o link da seção visível ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Nav: esconde/mostra ao rolar ──────────────────────────────────────
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;

  // fecha o menu mobile se o usuário rolar a página
  closeMobileMenu();
});

// ── Animação de entrada nos cards (scroll reveal) ─────────────────────
const cards = document.querySelectorAll('.card, .promo-card, .dep-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity .5s ease, transform .5s ease';
  revealObserver.observe(card);
});

// Lightbox da galeria
function abrirLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('ativo');
}
function fecharLightbox() {
  document.getElementById('lightbox').classList.remove('ativo');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharLightbox();
});

// ── Menu hambúrguer (mobile) ───────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hambBtn');
  const aberto = menu.classList.toggle('aberto');
  btn.classList.toggle('ativo', aberto);
  btn.setAttribute('aria-expanded', aberto);
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hambBtn');
  menu.classList.remove('aberto');
  btn.classList.remove('ativo');
  btn.setAttribute('aria-expanded', 'false');
}

document.getElementById('hambBtn').addEventListener('click', toggleMobileMenu);
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// fecha o menu mobile automaticamente se a tela for redimensionada para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});