/* ========================================================
   ROHTAS TOURISM — SHARED JAVASCRIPT
   ======================================================== */

// -------- Dark Mode --------
function initDarkMode() {
  const saved = localStorage.getItem('rohtas-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function updateIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rohtas-theme', next);
    updateIcon();
  });
}
// Apply saved theme immediately (before DOM ready) to prevent flash
(function() {
  const saved = localStorage.getItem('rohtas-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

// -------- Navbar scroll effect --------
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// -------- Mobile hamburger toggle --------
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// -------- Scroll-triggered fade-in --------
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));
}

// -------- Scroll-to-Top Button --------
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// -------- Lightbox gallery --------
function initLightbox() {
  const galleryImgs = document.querySelectorAll('.gallery-grid img');
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!galleryImgs.length || !lightbox || !lightboxImg) return;

  let currentIndex = 0;

  galleryImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    });
  });

  document.querySelector('.lightbox-close')?.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  document.querySelector('.lightbox-left')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
  });

  document.querySelector('.lightbox-right')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
      lightboxImg.src = galleryImgs[currentIndex].src;
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryImgs.length;
      lightboxImg.src = galleryImgs[currentIndex].src;
    }
  });
}

// -------- Card renderer --------
function renderCards(containerSelector, list, limit) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const items = limit ? list.slice(0, limit) : list;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column:1/-1;">
        <div class="emoji">🔍</div>
        <h3>No attractions found</h3>
        <p>Try a different search term or clear the filter.</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(a => `
    <a href="attraction.html?id=${a.id}" class="card fade-up">
      <div class="card-img-wrapper">
        <span class="card-badge">${getCategoryLabel(a.category)}</span>
        <img src="${a.heroImage}" alt="${a.name}" class="card-img" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${a.name}</h3>
        <p class="card-text">${a.description}</p>
        <p class="card-meta">📍 ${a.tagline}</p>
      </div>
    </a>
  `).join('');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  container.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// -------- Search (attractions page) --------
function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  if (!input) return;

  let currentCategory = 'all';

  function getFiltered(query) {
    let list = currentCategory === 'all'
      ? attractions
      : attractions.filter(a => a.category === currentCategory);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }
    return list;
  }

  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    const val = input.value.trim();
    if (clearBtn) clearBtn.classList.toggle('show', val.length > 0);
    timer = setTimeout(() => {
      renderCards('#attractions-grid', getFiltered(val));
    }, 200);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('show');
      renderCards('#attractions-grid', getFiltered(''));
      input.focus();
    });
  }

  // Wire up filter tabs to work with search
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderCards('#attractions-grid', getFiltered(input.value.trim()));
    });
  });
}

// -------- Filter tabs (standalone fallback) --------
function initFilterTabs() {
  // If search is present, it handles tabs — skip
  if (document.getElementById('search-input')) return;
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      const filtered = cat === 'all' ? attractions : attractions.filter(a => a.category === cat);
      renderCards('#attractions-grid', filtered);
    });
  });
}

// -------- Contact form validation --------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    form.innerHTML = `
      <div style="text-align:center;padding:40px 0;">
        <div style="font-size:3rem;margin-bottom:16px">✅</div>
        <h3 style="margin-bottom:8px">Thank You!</h3>
        <p style="color:var(--text-muted)">Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    `;
  });
}

// -------- Dynamic copyright year --------
function initDynamicYear() {
  const el = document.querySelector('.footer-bottom');
  if (el) {
    el.innerHTML = `&copy; ${new Date().getFullYear()} Rohtas District Tourism. All rights reserved.`;
  }
}

// -------- Auto-init on DOM ready --------
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollTop();
  initLightbox();
  initSearch();
  initFilterTabs();
  initContactForm();
  initDynamicYear();
});
