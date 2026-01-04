# Step-by-Step Wix Setup Instructions

## Prerequisites
- Wix account (Premium plan recommended for Dev Mode)
- Your custom HTML/CSS/JS files ready

---

## Phase 1: Initial Setup

### 1. Create New Wix Site
1. Log into Wix
2. Click **Create New Site**
3. Choose **Start from Scratch** or a **Blank Template**
4. Name it "Nate Cali Portfolio"

---

## Phase 2: Enable Dev Mode

### 2. Enable Developer Tools
1. Click **Settings** (gear icon, top right)
2. Scroll to **Advanced**
3. Toggle **Dev Mode** ON
4. Click **Enable Dev Mode** (may require Premium plan)

---

## Phase 3: Create Page Structure

### 3. Set Up Single Page Design (Recommended)
1. Delete default pages (keep one page)
2. Rename page to "Home"
3. This will be your single-page portfolio

### 4. Add Sections
For each section (Hero, Cars, Comedy, Lifestyle, Archive, Contact):
1. Click **+ Add** → **Section**
2. Choose a blank section
3. Name it appropriately (e.g., "Hero Section")

---

## Phase 4: Build Hero Section

### 5. Hero Content
1. Click **+ Add** → **Text**
2. Add heading: "Nate Cali"
3. Add subheading: "Editor"
4. Add description: "Crafting compelling stories through video editing"

### 6. Hero Styling
1. Select the text elements
2. Use **Design** panel to:
   - Set large font size for name (48-72px)
   - Set font weight to Bold
   - Adjust spacing and colors

### 7. Hero Background
1. Select the section
2. Click **Change Background**
3. Choose gradient or solid color
4. Match your design

---

## Phase 5: Create Navigation

### 8. Add Menu
1. Click **+ Add** → **Menu**
2. Add menu items:
   - Home
   - Cars
   - Comedy
   - Lifestyle
   - Archive
   - Contact

### 9. Set Up Anchor Links
1. For each section, click the section
2. In **Settings**, add an **Anchor ID**:
   - Hero: `home`
   - Cars: `cars`
   - Comedy: `comedy`
   - Lifestyle: `lifestyle`
   - Archive: `archive`
   - Contact: `contact`

3. In menu, link each item to its anchor:
   - Select menu item → **Link Settings** → **Anchor** → Choose the anchor

---

## Phase 6: Build Portfolio Sections

### 10. Create Portfolio Grid (Cars Section)
1. Click **+ Add** → **Gallery** or **Repeater**
2. Choose **Grid Layout**
3. Add 4 placeholder items
4. For each item:
   - Add image/video placeholder
   - Add text below for title

### 11. Repeat for Other Sections
- Repeat step 10 for Comedy, Lifestyle, and Archive sections
- Archive can have 6 items instead of 4

### 12. Add Section Headings
1. Above each gallery, add:
   - **Text** element with section title (Cars, Comedy, etc.)
   - **Text** element with description

---

## Phase 7: Contact Section

### 13. Add Contact Form
1. Click **+ Add** → **Contact Form**
2. Wix will create a form automatically
3. Configure in **Settings**:
   - Add fields: Name, Email, Message
   - Set up email notifications
   - Choose recipient email

### 14. Add Contact Info
1. Add **Text** elements for:
   - Email address
   - Social media links
2. Style as needed

---

## Phase 8: Add Custom CSS

### 15. Access Custom Code
1. Click **Settings** → **Custom Code**
2. Click **+ Add Custom Code**

### 16. Add CSS
1. Select **CSS**
2. Name it "Portfolio Styles"
3. Paste contents from `wix-compatible.css`
4. Placement: **Head**
5. Apply to: **All Pages**
6. Click **Apply**

### 17. Add Google Fonts
1. In **Custom Code**, add another code block
2. Select **HTML**
3. Paste:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
4. Placement: **Head**
5. Apply to: **All Pages**

---

## Phase 9: Add Custom JavaScript

### 18. Add JavaScript
1. In **Custom Code**, click **+ Add Custom Code**
2. Select **JavaScript**
3. Name it "Portfolio Scripts"
4. Paste your `script.js` content (may need Wix-specific modifications)
5. Placement: **Body - end**
6. Apply to: **All Pages**

### 19. Wix-Specific JavaScript Notes
- Wix uses jQuery, so you can use `$` selector
- Some selectors may need to be adjusted for Wix elements
- Test functionality after adding

---

## Phase 10: Mobile Optimization

### 20. Test Mobile View
1. Click **Mobile View** icon (top toolbar)
2. Check each section
3. Adjust:
   - Text sizes
   - Spacing
   - Gallery columns (should be 1 column on mobile)

### 21. Mobile-Specific Adjustments
- Use Wix's **Responsive Settings** for each element
- Hide/show elements on mobile if needed
- Adjust padding and margins

---

## Phase 11: Final Touches

### 22. Add Your Content
- Replace placeholder images with your portfolio videos/images
- Update all text content
- Add actual project titles

### 23. SEO Settings
1. Click **Settings** → **SEO**
2. Add:
   - Site title: "Nate Cali - Editor"
   - Description: "Professional Video Editor specializing in Cars, Comedy, and Lifestyle content"
   - Keywords: relevant keywords

### 24. Connect Domain
1. Go to **Settings** → **Domains**
2. Connect your domain (natecali.com)
3. Follow Wix's domain connection instructions

---

## Phase 12: Publish

### 25. Preview
1. Click **Preview** to test everything
2. Check all links work
3. Test contact form
4. Test on different devices

### 26. Publish
1. Click **Publish**
2. Your site is now live!

---

## Troubleshooting

### CSS Not Applying?
- Make sure Dev Mode is enabled
- Check that code is in the correct placement (Head for CSS)
- Clear browser cache
- Use browser inspector to check if styles are loading

### JavaScript Not Working?
- Check browser console for errors
- Wix may conflict with some jQuery/vanilla JS
- May need to wrap code in `$w.onReady()` for Wix Velo

### Elements Not Aligning?
- Use Wix's **Layout** tools
- Check **Responsive Settings**
- Use **Spacer** elements for spacing

---

## Alternative: Use Wix Velo (Advanced)

If you have coding experience:
1. Enable **Velo by Wix** (formerly Corvid)
2. Import your code files directly
3. More control, but requires Wix-specific API knowledge

---

## Need Help?

If you get stuck:
1. Wix Help Center: support.wix.com
2. Wix Community Forums
3. Consider using a code-friendly platform (Webflow, Framer) for easier integration

