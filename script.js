document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Glowing Effect for Feature Cards
  const featureCards = document.querySelectorAll('.feature-card-wrapper');
  
  featureCards.forEach(card => {
    const glowingEffect = card.querySelector('.glowing-effect');
    
    // Set initial rotation
    let rotation = 0;
    
    // Create animation
    function animateGlow() {
      rotation = (rotation + 1) % 360;
      if (glowingEffect) {
        glowingEffect.style.setProperty('--start', rotation.toString());
      }
      requestAnimationFrame(animateGlow);
    }
    
    // Start animation
    requestAnimationFrame(animateGlow);
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
      if (glowingEffect) {
        glowingEffect.style.opacity = '1';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (glowingEffect) {
        glowingEffect.style.opacity = '0';
      }
    });
  });
});
