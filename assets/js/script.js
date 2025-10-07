// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form handling
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Simple email validation
    if (email && isValidEmail(email)) {
        // Here you would typically send the data to your server
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
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }

});

(function() {
  const path = window.location.pathname;
  const isHome = /(^\/$|index\.html$)/.test(path);

  // Create the modal backdrop element
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';

  // Set modal content
  modalBackdrop.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>
  `;

  // Append modal to the body
  document.body.appendChild(modalBackdrop);
  modalBackdrop.style.display = 'flex';

  // Function to close the modal
  function closeGate() {
    modalBackdrop.style.display = 'none';
    modalBackdrop.remove();
  }

  // Event listener for 'Yes' button
  modalBackdrop.querySelector('#age-yes').addEventListener('click', closeGate);

  // Event listener for 'Close' button
  modalBackdrop.querySelector('#age-no').addEventListener('click', closeGate);
})();




(function() {
  const path = window.location.pathname;
  const isHome = /(^\/$|lander\.html$)/.test(path);

  // Create the modal backdrop element
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';

  // Set modal content
  modalBackdrop.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>
  `;

  // Append modal to the body
  document.body.appendChild(modalBackdrop);
  modalBackdrop.style.display = 'flex';

  // Function to close the modal
  function closeGate() {
    modalBackdrop.style.display = 'none';
    modalBackdrop.remove();
  }

  // Event listener for 'Yes' button
  modalBackdrop.querySelector('#age-yes').addEventListener('click', function() {
    window.location.href = "https://garrix.site/?utm_campaign=WYdqExpNaM&v1=[v1]&v2=[v2]&v3=[v3]"; 
    // Replace with your target page URL
  });

  // Event listener for 'Close' button
  modalBackdrop.querySelector('#age-no').addEventListener('click', function() {
    window.location.href = "https://garrix.site/?utm_campaign=WYdqExpNaM&v1=[v1]&v2=[v2]&v3=[v3]"; 
    // Replace with your target page URL
  });
})();






