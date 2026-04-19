'use strict';

// ── Loader ────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 600);
});

// ── Navbar: solid on scroll + active link tracking ────────────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-menu a[href^="#"]');
  let current = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// ── Gallery filter ────────────────────────────────────────────────────────────
const filterBtns   = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== '*' && !item.classList.contains(filter));
    });

    // Refresh the lightbox image list after filtering
    buildLightboxList();
  });
});

// ── Lightbox ──────────────────────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = lightbox?.querySelector('img');
const lbClose  = lightbox?.querySelector('.lb-close');
const lbPrev   = lightbox?.querySelector('.lb-prev');
const lbNext   = lightbox?.querySelector('.lb-next');

let lbList  = [];   // [{src, alt}] for currently visible items
let lbIndex = 0;

function buildLightboxList() {
  lbList = Array.from(document.querySelectorAll('.gallery-item:not(.hidden) a')).map(a => ({
    src: a.href,
    alt: a.querySelector('img')?.alt ?? ''
  }));
}

function openLightbox(src) {
  buildLightboxList();
  lbIndex = lbList.findIndex(img => img.src === src);
  if (lbIndex < 0) lbIndex = 0;
  renderLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function renderLightbox() {
  if (!lbImg || !lbList.length) return;
  lbImg.src = lbList[lbIndex].src;
  lbImg.alt = lbList[lbIndex].alt;
}

if (lightbox) {
  buildLightboxList();

  document.querySelectorAll('.gallery-item a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      openLightbox(a.href);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);

  lbPrev?.addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + lbList.length) % lbList.length;
    renderLightbox();
  });

  lbNext?.addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % lbList.length;
    renderLightbox();
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; renderLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbList.length; renderLightbox(); }
  });
}

// ── Scroll reveal (IntersectionObserver) ──────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback for old browsers
  revealEls.forEach(el => el.classList.add('visible'));
}
