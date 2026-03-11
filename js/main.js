// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Unisketch website loaded');
  
  // Initialize navigation
  initNavigation();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize contact form
  initContactForm();
});

// Utility: Smooth scroll to section
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Utility: Add active class to navigation links
function setActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

setActiveNavLink();