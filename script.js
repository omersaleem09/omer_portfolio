document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully"); // Debugging

    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Read More / Read Less functionality
    document.querySelectorAll(".btn-read-more").forEach(button => {
        button.addEventListener("click", function () {
            let card = this.closest(".project-card");
            card.classList.toggle("expanded");
            this.textContent = card.classList.contains("expanded") ? "Read Less" : "Read More";
        });
    });

    // Count-up animation for Projects Completed (1 to 50)
    const projectsCountEl = document.getElementById("projectsCount");
    let projectCount = 1;
    const targetProjects = 50;
    const durationProjects = 4000;
    const intervalTimeProjects = Math.floor(durationProjects / targetProjects);

    const projectCounter = setInterval(() => {
        projectsCountEl.textContent = projectCount;
        if (projectCount >= targetProjects) {
            clearInterval(projectCounter);
            projectsCountEl.textContent = targetProjects + '+';
        }
        projectCount++;
    }, intervalTimeProjects);

    // Count-up animation for Years of Experience (1 to 5)
    const expCountEl = document.getElementById("expCount");
    let expCount = 1;
    const targetExperience = 5;
    const durationExperience = 3000;
    const intervalTimeExperience = Math.floor(durationExperience / targetExperience);

    const expCounter = setInterval(() => {
        expCountEl.textContent = expCount;
        if (expCount >= targetExperience) {
            clearInterval(expCounter);
            expCountEl.textContent = targetExperience + '+';
        }
        expCount++;
    }, intervalTimeExperience);
});
