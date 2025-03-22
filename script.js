// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Carousel functionality
let scrollAmount = 0;
const scrollPerClick = 300; // Adjust this value based on project width + gap

function moveSlide(direction) {
  const projectsGrid = document.querySelector('.projects-grid');
  scrollAmount += direction * scrollPerClick;

  // Prevent scrolling past the start or end
  if (scrollAmount < 0) {
    scrollAmount = 0;
  } else if (scrollAmount > projectsGrid.scrollWidth - projectsGrid.clientWidth) {
    scrollAmount = projectsGrid.scrollWidth - projectsGrid.clientWidth;
  }

  projectsGrid.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}
document.querySelector('.contact form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    name: document.querySelector('input[name="Gmail"]').value,
    email: document.querySelector('input[name="candragocan9@gmail.com"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  emailjs.send('service_h45f5c', 'template_hdqjq9i', formData)
    .then(function(response) {
      alert('Message sent successfully!');
      document.querySelector('.contact form').reset();
    }, function(error) {
      alert('Failed to send message. Please try again.');
    });
});
// Toggle menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Menutup menu saat mengklik di luar area menu
document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-toggle') && !event.target.closest('.nav-links')) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
