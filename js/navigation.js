function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }
  
  // Close menu when link is clicked
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      if (menuToggle) {
        menuToggle.innerHTML = '☰';
      }
    });
  });
  
  // Close menu on outside click
  document.addEventListener('click', function(event) {
    const isClickInsideNav = document.querySelector('nav').contains(event.target);
    if (!isClickInsideNav && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (menuToggle) {
        menuToggle.innerHTML = '☰';
      }
    }
  });
}