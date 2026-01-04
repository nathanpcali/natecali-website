// Simple smooth scroll for any anchor links (if you add them later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add click handlers for projects to open videos/modals
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        // You can add functionality here to:
        // - Open a video modal
        // - Navigate to a project page
        // - Play a video inline
        console.log('Project clicked:', index);
        
        // Example: If you want to add video links later
        // const videoUrl = project.dataset.videoUrl;
        // if (videoUrl) {
        //     window.open(videoUrl, '_blank');
        // }
    });
});

// Optional: Add subtle fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe projects for subtle fade-in
projects.forEach(project => {
    project.style.opacity = '0.7';
    project.style.transition = 'opacity 0.4s ease';
    observer.observe(project);
    
    // Set to full opacity after a moment
    setTimeout(() => {
        project.style.opacity = '1';
    }, 100);
});
