document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Optional: Interactive hover effects on project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    });
  
    // Count-up animation for Projects Completed (from 1 to 50)
    const projectsCountEl = document.getElementById('projectsCount');
    let count = 1;
    const target = 50;
    const duration = 2000; // total duration in ms
    const intervalTime = Math.floor(duration / target);
  
    const counter = setInterval(() => {
      projectsCountEl.textContent = count;
      if (count >= target) {
        clearInterval(counter);
        projectsCountEl.textContent = target;
      }
      count++;
    }, intervalTime);
  });
  