function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and service items
  const animateElements = document.querySelectorAll('.card, .service-card, .portfolio-item, .team-member, .testimonial-card');
  animateElements.forEach(el => observer.observe(el));
}

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
  .card, .service-card, .portfolio-item, .team-member, .testimonial-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);