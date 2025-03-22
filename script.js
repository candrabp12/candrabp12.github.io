// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Carousel functionality
let scrollAmount = 0;
const scrollPerClick = 300;

function moveSlide(direction) {
  const projectsGrid = document.querySelector(".projects-grid");
  if (projectsGrid) {
    scrollAmount += direction * scrollPerClick;

    if (scrollAmount < 0) {
      scrollAmount = 0;
    } else if (scrollAmount > projectsGrid.scrollWidth - projectsGrid.clientWidth) {
      scrollAmount = projectsGrid.scrollWidth - projectsGrid.clientWidth;
    }

    projectsGrid.scrollTo({ top: 0, left: scrollAmount, behavior: "smooth" });
  }
}

// Contact form submission
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      name: document.querySelector("input[name='name']").value,
      email: document.querySelector("input[name='email']").value,
      message: document.querySelector("textarea[name='message']").value,
    };
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    emailjs.send("service_h45f5ci", "template_hdqjq9i", formData)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  });
}

// Toggle menu untuk mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  }

  // Pastikan menu tertutup saat halaman dimuat ulang
  navLinks.classList.remove("active");
  menuToggle.classList.remove("active");
});
