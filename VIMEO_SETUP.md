# How to Add Your Vimeo Videos

## Finding Your Vimeo Video ID

1. **Go to your Vimeo video page**
2. **Look at the URL** - it will look like one of these:
   - `https://vimeo.com/123456789`
   - `https://vimeo.com/123456789/abcdef12`
   - `https://player.vimeo.com/video/123456789`

3. **The number after `/video/` or the main number is your Video ID**
   - Example: If URL is `https://vimeo.com/987654321`, your Video ID is `987654321`

## Adding Videos to Your Website

### Option 1: Edit on GitHub (Easiest)

1. Go to your repository: https://github.com/nathanpcali/natecali-website
2. Click on `index.html`
3. Click the **pencil icon** (Edit this file)
4. Find the project you want to update
5. Look for `VIMEO_VIDEO_ID` and replace it with your actual video ID
6. Example: Change `VIMEO_VIDEO_ID` to `987654321`
7. Click **Commit changes**

### Option 2: Edit Locally

1. Open `index.html` in a text editor
2. Find each project item
3. Replace `VIMEO_VIDEO_ID` with your actual Vimeo video ID
4. Save the file
5. Commit and push in GitHub Desktop

## Example

**Before:**
```html
<iframe src="https://player.vimeo.com/video/VIMEO_VIDEO_ID?badge=0&autopause=0&player_id=0&app_id=58479"
```

**After (with your video ID):**
```html
<iframe src="https://player.vimeo.com/video/987654321?badge=0&autopause=0&player_id=0&app_id=58479"
```

## Updating Project Information

While you're editing, also update:
- **Project Title**: Replace "Project Title 1", "Project Title 2", etc.
- **Director Name**: Replace "Director Name"
- **Agency/Client**: Replace "Agency Name" or "Client Name"

## Tips

- **Videos will display in 16:9 aspect ratio** (standard widescreen)
- **Videos are responsive** - they'll scale on mobile devices
- **You can remove projects** you don't want by deleting the entire `<div class="project-item">` section
- **You can add more projects** by copying a project item and pasting it

## Need Help?

If you have multiple videos and want me to add them all at once, just send me:
- Your Vimeo video URLs or IDs
- The project titles
- Director names
- Agency/Client names

And I can update everything for you!


