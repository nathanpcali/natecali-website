# Next Steps After Publishing to GitHub

## Step 1: Enable GitHub Pages

1. **Go to your repository on GitHub:**
   - In GitHub Desktop, click **"View on GitHub"** (or go to github.com and find your repository)

2. **Enable Pages:**
   - Click **Settings** (top menu of the repository)
   - Scroll down and click **Pages** (left sidebar)
   - Under **Source**, select:
     - **Branch:** `main`
     - **Folder:** `/ (root)`
   - Click **Save**

3. **Wait 2-5 minutes** for GitHub to build your site

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/natecali-website/
   ```
   (Replace YOUR_USERNAME with your actual GitHub username)

---

## Step 2: Test Your Site

1. **Visit your site URL** (from step 1.4 above)
2. **Check:**
   - ✅ Navigation works
   - ✅ All sections load (Cars, Comedy, Lifestyle, Archive, Contact)
   - ✅ Mobile menu works (resize browser or use mobile device)
   - ✅ Smooth scrolling works
   - ✅ Contact form displays (submission won't work yet - needs backend)

---

## Step 3: Customize Your Content

### Replace Placeholder Content:

1. **Portfolio Items:**
   - Open `index.html` in a text editor
   - Find the portfolio sections (Cars, Comedy, Lifestyle, Archive)
   - Replace placeholder divs with your actual video embeds or images

2. **Contact Information:**
   - Update email in contact section
   - Add your social media links
   - Set up form backend (see below)

3. **Hero Section:**
   - Update tagline if desired
   - Add a background image if you want

### Example: Adding a Video

Replace a placeholder like this:
```html
<div class="portfolio-placeholder">
    <span>Video Project 1</span>
</div>
```

With an embedded video:
```html
<div class="portfolio-video">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

Or use a video tag:
```html
<video controls>
    <source src="path/to/your/video.mp4" type="video/mp4">
</video>
```

---

## Step 4: Set Up Contact Form (Optional)

The contact form currently shows an alert. To make it functional:

### Option A: Use Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Sign up (free tier available)
3. Create a form and get your form endpoint
4. Update the form in `index.html`:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Use EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up and configure
3. Add their script to your HTML
4. Update form JavaScript

### Option C: Backend API
- Set up your own backend to handle form submissions

---

## Step 5: Connect Custom Domain (Optional)

To use `natecali.com` instead of the GitHub URL:

1. **In GitHub Repository:**
   - Settings → Pages
   - Under "Custom domain", enter: `natecali.com`
   - Click Save

2. **In Your Domain Registrar:**
   - Add a CNAME record:
     - **Type:** CNAME
     - **Name:** @ (or www)
     - **Value:** YOUR_USERNAME.github.io
   - Or add A records (see GITHUB_PAGES_SETUP.md for IP addresses)

3. **Wait 24-48 hours** for DNS to propagate

4. **GitHub will automatically add SSL** (HTTPS) after domain is verified

---

## Step 6: Making Updates

Whenever you make changes to your site:

1. **Edit files** in your folder (`index.html`, `styles.css`, `script.js`)

2. **In GitHub Desktop:**
   - You'll see your changes listed
   - Type a commit message (e.g., "Updated portfolio content")
   - Click **"Commit to main"**

3. **Push to GitHub:**
   - Click **"Push origin"** (or it may push automatically)
   - Wait 1-2 minutes for site to update

4. **Refresh your site** to see changes

---

## Quick Checklist

- [ ] Enable GitHub Pages
- [ ] ] Test site is live
- [ ] Replace placeholder portfolio items with your content
- [ ] Update contact information
- [ ] Set up contact form backend (optional)
- [ ] Connect custom domain (optional)
- [ ] Share your site!

---

## Need Help?

- **Site not loading?** Wait a few more minutes, check repository Settings → Pages
- **Changes not showing?** Clear browser cache (Cmd+Shift+R on Mac)
- **Want to customize more?** Edit the CSS file for colors, fonts, spacing
- **Questions?** Check the other guides in this folder

---

## Your Site URL

Once Pages is enabled, your site will be at:
```
https://YOUR_USERNAME.github.io/natecali-website/
```

Bookmark it and share it!

