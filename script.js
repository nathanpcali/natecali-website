// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll indicator click handler
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const workSection = document.querySelector('#work');
        if (workSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = workSection.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
    scrollIndicator.style.cursor = 'pointer';
}

// Project item click handlers (for future video modal/page implementation)
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((project, index) => {
    project.addEventListener('click', () => {
        // You can add functionality here to:
        // - Open a video modal
        // - Navigate to a project detail page
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

// Observe project items for subtle fade-in
projectItems.forEach((project, index) => {
    project.style.opacity = '0.8';
    project.style.transition = 'opacity 0.4s ease';
    observer.observe(project);
    
    // Stagger the fade-in
    setTimeout(() => {
        project.style.opacity = '1';
    }, index * 50);
});
