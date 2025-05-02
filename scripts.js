// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          const headerHeight = document.querySelector('header').offsetHeight;
          
          window.scrollTo({
              top: targetSection.offsetTop - headerHeight,
              behavior: 'smooth'
          });
      });
  });
  
  // Highlight active navigation section on scroll
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;
      
      document.querySelectorAll('.section').forEach(section => {
          const sectionTop = section.offsetTop - headerHeight - 20;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              document.querySelectorAll('nav a').forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === '#' + sectionId) {
                      link.classList.add('active');
                  }
              });
          }
      });
  });
});

// Add active class style in CSS
document.head.insertAdjacentHTML('beforeend', `
  <style>
      nav a.active {
          color: #007bff;
      }
      nav a.active:after {
          width: 100%;
      }
  </style>
`);