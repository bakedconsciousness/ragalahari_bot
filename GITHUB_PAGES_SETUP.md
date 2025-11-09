# GitHub Pages Setup Instructions

Your calculator is ready to be hosted on GitHub Pages for FREE!

## Quick Setup (2 minutes)

### Step 1: Merge the branch to main

Since the code is currently on branch `claude/investigate-session-contents-011CUwgnbEEbGejemKnkv5zQ`, you need to merge it to `main`:

1. Go to your GitHub repository: `https://github.com/bakedconsciousness/ragalahari_bot`
2. Click "Pull requests" tab
3. Click "New pull request"
4. Set base branch to `main` (or create it if it doesn't exist)
5. Set compare branch to `claude/investigate-session-contents-011CUwgnbEEbGejemKnkv5zQ`
6. Click "Create pull request"
7. Click "Merge pull request"

**OR** if you have the repo locally:
```bash
git checkout main
git merge claude/investigate-session-contents-011CUwgnbEEbGejemKnkv5zQ
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab (top right)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click "Save"

### Step 3: Access Your Live Calculator

After 1-2 minutes, your calculator will be live at:

**https://bakedconsciousness.github.io/ragalahari_bot/**

That's it! Your calculator is now hosted for free on GitHub Pages.

## What's Deployed

The `index.html` file contains a fully functional calculator with:
- Beautiful gradient UI
- All arithmetic operations
- Keyboard support
- Mobile responsive design
- No backend needed - runs entirely in the browser!

## Updates

To update your calculator, just push changes to the `main` branch and GitHub Pages will automatically redeploy.

## Note

The Flask version (`app.py`) is still available if you want to deploy to a platform that supports Python backends, but for GitHub Pages, the static `index.html` version is what will be used.
