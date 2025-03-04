// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle the navigation on hamburger click
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Smooth scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
            // Close the mobile menu after clicking a link
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });
  
    // Dummy contact form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your message!");
      form.reset();
    });
  });
  