# Nate Cali - Portfolio Website

A modern, responsive portfolio website for video editor Nate Cali.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Ready-to-use contact form (needs backend integration)
- **Portfolio Sections**: Organized sections for Cars, Comedy, Lifestyle, and Archive

## Project Structure

```
natecali-website/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in a web browser to view the website locally
2. For development, you can use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

## Customization

### Adding Your Content

1. **Portfolio Items**: Replace the placeholder portfolio items in each section with your actual video projects
2. **Contact Information**: Update the email and social media links in the contact section
3. **Hero Section**: Modify the hero text to reflect your personal brand

### Adding Videos

To add actual video content, you can:

1. Replace the `.portfolio-placeholder` divs with `<video>` tags or embedded players
2. Use video hosting services like YouTube, Vimeo, or your own hosting
3. Add a modal system to play videos when portfolio items are clicked

Example video embed:
```html
<div class="portfolio-item">
    <video class="portfolio-video" controls>
        <source src="path/to/your/video.mp4" type="video/mp4">
    </video>
    <h3 class="portfolio-title">Your Project Title</h3>
</div>
```

### Contact Form Integration

The contact form currently shows an alert on submission. To make it functional:

1. **Option 1 - Formspree**: Use a service like [Formspree](https://formspree.io/)
2. **Option 2 - EmailJS**: Use [EmailJS](https://www.emailjs.com/) for client-side email sending
3. **Option 3 - Backend**: Set up your own backend API to handle form submissions

Example with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## Deployment

### GitHub Pages (Recommended - Free Hosting)

**Quick Setup Options:**

1. **Easiest: Use GitHub Desktop**
   - Download [GitHub Desktop](https://desktop.github.com/)
   - Sign in and add this folder as a repository
   - Publish to GitHub (make it Public)
   - Enable Pages in repository Settings

2. **Command Line:**
   - See `GITHUB_PAGES_SETUP.md` for detailed instructions
   - Requires Git installed on your computer

3. **Manual Upload:**
   - Create repository on GitHub
   - Upload files via web interface
   - Enable Pages in Settings

**Detailed instructions:** See `QUICK_START.md` or `GITHUB_PAGES_SETUP.md`

Your site will be available at: `https://yourusername.github.io/natecali-website/`

### Other Hosting Options

- **Netlify**: Drag and drop your folder or connect to Git
- **Vercel**: Connect your Git repository
- **Traditional Web Hosting**: Upload files via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Video modal/lightbox for portfolio items
- Image gallery functionality
- Blog section
- Client testimonials
- Project filtering/tagging
- Dark mode toggle

## License

This project is open source and available for personal use.

