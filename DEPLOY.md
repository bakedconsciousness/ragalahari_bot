# Deployment Instructions

## Quick Deploy to Free Hosting Services

Your calculator app is ready to deploy! Choose one of these free hosting options:

### Option 1: Render (Recommended)

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select the `ragalahari_bot` repository
4. Configure:
   - **Name**: ragalahari-calculator (or your choice)
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Plan**: Free
5. Click "Create Web Service"
6. Wait 2-3 minutes for deployment
7. Your app will be live at `https://ragalahari-calculator.onrender.com`

### Option 2: Railway

1. Go to [railway.app](https://railway.app) and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `ragalahari_bot`
4. Railway will auto-detect Python and deploy
5. Your app will be live with a generated URL

### Option 3: Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login and deploy
fly auth login
fly launch
fly deploy
```

### Option 4: PythonAnywhere

1. Go to [pythonanywhere.com](https://pythonanywhere.com) and sign up
2. Open a Bash console
3. Clone the repo: `git clone https://github.com/bakedconsciousness/ragalahari_bot.git`
4. Set up web app in the Web tab
5. Configure WSGI file to point to your app

## Local Testing

```bash
pip install -r requirements.txt
python app.py
```

Visit `http://localhost:8080`

## Features

- Beautiful gradient UI
- Responsive design
- Keyboard support
- Basic arithmetic operations
- Parentheses and percentages
