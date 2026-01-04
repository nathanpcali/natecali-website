# Quick Start - GitHub Pages Deployment

## Option 1: Install Git (Recommended)

### Install Git on macOS:

1. **Install Xcode Command Line Tools** (includes Git):
   ```bash
   xcode-select --install
   ```
   - This will open a dialog - click "Install"
   - Wait for installation to complete

2. **Verify installation**:
   ```bash
   git --version
   ```

3. **Configure Git** (first time only):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

---

## Option 2: Use GitHub Desktop (Easier, No Terminal)

If you prefer a visual interface:

1. **Download GitHub Desktop**:
   - Go to: https://desktop.github.com/
   - Download and install

2. **Sign in** with your GitHub account

3. **Add your repository**:
   - File → Add Local Repository
   - Navigate to: `/Users/natecali/Documents/natecali-website`
   - Click "Add Repository"

4. **Publish to GitHub**:
   - Click "Publish repository" button
   - Name it: `natecali-website`
   - Make it **Public**
   - Click "Publish"

5. **Enable GitHub Pages**:
   - Go to your repository on github.com
   - Settings → Pages
   - Source: **main** branch, **/ (root)** folder
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/natecali-website/`

---

## Option 3: Manual Upload (No Git Required)

If you don't want to install anything:

1. **Create repository on GitHub**:
   - Go to github.com
   - Click **+** → **New repository**
   - Name: `natecali-website`
   - Make it **Public**
   - **Don't** initialize with README
   - Click **Create repository**

2. **Upload files**:
   - On the repository page, click **"uploading an existing file"**
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Click **Commit changes**

3. **Enable GitHub Pages**:
   - Settings → Pages
   - Source: **main** branch, **/ (root)** folder
   - Save

---

## After Setup - Next Steps

Once your site is live:

1. **Test your site**: Visit `https://YOUR_USERNAME.github.io/natecali-website/`
2. **Add your content**: Replace placeholder portfolio items
3. **Connect domain** (optional): See `GITHUB_PAGES_SETUP.md` for instructions

---

## Which Option Should You Choose?

- **Option 1 (Git)**: Best for ongoing updates, full control
- **Option 2 (GitHub Desktop)**: Easiest, visual interface
- **Option 3 (Manual Upload)**: Quickest, no installation needed

**Recommendation**: Start with Option 2 (GitHub Desktop) if you're new to Git, or Option 3 for the quickest setup.

