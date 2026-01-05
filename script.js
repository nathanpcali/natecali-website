// Navbar scroll effect - scale logo on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add 'scrolled' class when scrolled past hero section
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

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

// Scroll animations for project items - scale only (no opacity)
const observerOptions = {
    threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    rootMargin: '-10% 0px -10% 0px'
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const project = entry.target;
        const intersectionRatio = entry.intersectionRatio;
        
        if (entry.isIntersecting) {
            // Scale to 115% when in center of viewport (intersectionRatio > 0.5)
            if (intersectionRatio > 0.5) {
                project.classList.add('in-view');
            } else {
                project.classList.remove('in-view');
            }
        } else {
            // Remove scale when leaving viewport
            project.classList.remove('in-view');
        }
    });
}, observerOptions);

// Observe all project items for scroll animations
projectItems.forEach((project) => {
    // Observe each project item
    projectObserver.observe(project);
});


// Play button functionality - play video with sound when clicked
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        const videoContainer = button.parentElement;
        const iframe = videoContainer.querySelector('.vimeo-player');
        const videoId = iframe.getAttribute('data-video-id') || iframe.src.match(/\/video\/(\d+)/)?.[1];
        
        if (videoId) {
            // Update iframe to play with sound (unmuted, with controls)
            iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&controls=1&loop=0&badge=0&autopause=0&player_id=0&app_id=58479`;
            
            // Hide play button immediately after clicking
            button.style.display = 'none';
            button.classList.add('hidden');
        }
    });
});

// Show play button on hover for videos that are muted
projectItems.forEach((project) => {
    const playButton = project.querySelector('.play-button');
    const iframe = project.querySelector('.vimeo-player');
    
    if (playButton && iframe) {
        project.addEventListener('mouseenter', () => {
            if (iframe.src.includes('muted=1')) {
                playButton.style.opacity = '0.9';
            }
        });
        
        project.addEventListener('mouseleave', () => {
            if (iframe.src.includes('muted=1')) {
                playButton.style.opacity = '0.7';
            }
        });
    }
});
