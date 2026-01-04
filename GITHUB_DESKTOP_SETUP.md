# GitHub Desktop Setup - Step by Step

## Initialize Repository in GitHub Desktop

Since the folder isn't a git repository yet, follow these steps:

### Method 1: Let GitHub Desktop Initialize It

1. **Open GitHub Desktop**

2. **File → New Repository** (or click the "+" button)

3. **Fill in the details:**
   - **Name:** `natecali-website`
   - **Local Path:** Click "Choose..." and navigate to:
     `/Users/natecali/Documents/natecali-website`
   - **Description:** (optional) "Portfolio website for Nate Cali"
   - **Git ignore:** None (we already have a .gitignore file)
   - **License:** None

4. **Click "Create Repository"**

5. **GitHub Desktop will now show your files**

6. **Make your first commit:**
   - You'll see all your files listed
   - In the bottom left, type a commit message: "Initial commit: Portfolio website"
   - Click **"Commit to main"**

7. **Publish to GitHub:**
   - Click the **"Publish repository"** button (top right)
   - Make sure **"Keep this code private"** is **UNCHECKED** (must be public for free Pages)
   - Click **"Publish Repository"**
   - Sign in to GitHub if prompted

8. **Enable GitHub Pages:**
   - Go to your repository on github.com (click "View on GitHub" in GitHub Desktop)
   - Click **Settings** (top menu)
   - Click **Pages** (left sidebar)
   - Under **Source**, select:
     - Branch: **main**
     - Folder: **/ (root)**
   - Click **Save**

9. **Your site will be live in a few minutes at:**
   ```
   https://YOUR_USERNAME.github.io/natecali-website/
   ```

---

## If You Already Added the Folder

If you already tried to add the folder and got the error:

1. **Close GitHub Desktop** (if it's open)

2. **Open GitHub Desktop again**

3. **File → New Repository** (don't use "Add Existing Repository")

4. Follow the steps above starting from step 3

---

## Troubleshooting

### "Repository already exists" error?
- The folder might already have a hidden `.git` folder
- In GitHub Desktop: File → Add Local Repository
- Navigate to the folder and select it

### Files not showing?
- Make sure you're in the correct folder
- Check that `index.html`, `styles.css`, and `script.js` are in the folder

### Can't publish?
- Make sure you're signed in to GitHub
- Check your internet connection
- Try signing out and back in to GitHub Desktop

---

## Next Steps After Publishing

1. ✅ Wait 2-5 minutes for GitHub Pages to build
2. ✅ Visit your site URL
3. ✅ Test all sections
4. ✅ Add your portfolio content
5. ✅ Connect custom domain (optional - see GITHUB_PAGES_SETUP.md)

