# GitHub Pages Setup Guide

This guide will help you deploy your website to GitHub Pages for free hosting.

## Prerequisites
- GitHub account (free)
- Git installed on your computer
- Terminal/Command Line access

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `natecali-website` (or any name you prefer)
4. Description: "Portfolio website for Nate Cali"
5. Set to **Public** (required for free GitHub Pages)
6. **Don't** initialize with README (we already have files)
7. Click **Create repository**

### Option B: Using GitHub CLI (if installed)
```bash
gh repo create natecali-website --public
```

---

## Step 2: Initialize Git in Your Project

Open Terminal/Command Line and navigate to your project folder:

```bash
cd /Users/natecali/Documents/natecali-website
```

Initialize git repository:
```bash
git init
```

---

## Step 3: Create .gitignore File

Create a `.gitignore` file to exclude unnecessary files:

```bash
# macOS
.DS_Store
.AppleDouble
.LSOverride

# Editor directories
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
```

---

## Step 4: Add and Commit Files

Add all your files:
```bash
git add .
```

Commit the files:
```bash
git commit -m "Initial commit: Portfolio website"
```

---

## Step 5: Connect to GitHub Repository

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/natecali-website.git
```

Or if you prefer SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/natecali-website.git
```

---

## Step 6: Push to GitHub

Push your code:
```bash
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub credentials.

---

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

---

## Step 8: Access Your Website

Your site will be available at:
```
https://YOUR_USERNAME.github.io/natecali-website/
```

**Note:** It may take a few minutes for the site to go live after enabling Pages.

---

## Step 9: Connect Custom Domain (Optional)

To use `natecali.com` instead of the GitHub URL:

### 9.1: In GitHub Repository
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `natecali.com`
3. Click **Save**

### 9.2: In Your Domain Registrar
Add a CNAME record:
- **Type:** CNAME
- **Name:** @ (or www)
- **Value:** YOUR_USERNAME.github.io
- **TTL:** 3600 (or default)

Or add A records (if CNAME doesn't work):
- **Type:** A
- **Name:** @
- **Value:** 
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### 9.3: Wait for DNS Propagation
- Can take 24-48 hours
- Check with: `dig natecali.com` or online DNS checker

### 9.4: Enable HTTPS
- GitHub will automatically provision SSL certificate
- May take a few hours after domain is verified

---

## Step 10: Update Your Site

Whenever you make changes:

```bash
# Navigate to project folder
cd /Users/natecali/Documents/natecali-website

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

Your site will automatically update (may take 1-2 minutes).

---

## Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after first deployment
- Check repository Settings → Pages to ensure it's enabled
- Verify the branch is set to `main` and folder is `/ (root)`

### Custom Domain Not Working?
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings show your domain
- Ensure domain is verified (green checkmark)

### Changes Not Showing?
- Clear browser cache (Cmd+Shift+R on Mac)
- Wait a few minutes for GitHub to rebuild
- Check repository for latest commit

### 404 Error?
- Ensure `index.html` is in the root directory
- Check file names are correct (case-sensitive)
- Verify all file paths in HTML are correct

---

## Quick Reference Commands

```bash
# Navigate to project
cd /Users/natecali/Documents/natecali-website

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes (if working from multiple locations)
git pull
```

---

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ✅ Test your site
3. ✅ Add your actual portfolio content
4. ✅ Connect custom domain (if desired)
5. ✅ Share your site!

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- GitHub Support: https://support.github.com
- Git Documentation: https://git-scm.com/doc

