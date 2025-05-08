document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute('href');
            window.open(targetUrl, '_blank');
        });
    });

    const toggleMenu = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    toggleMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});