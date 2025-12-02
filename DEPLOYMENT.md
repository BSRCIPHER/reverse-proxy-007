# Deployment Guide - Reverse Proxy Server

## Quick Deploy to Render (Recommended)

### Step 1: Push to GitHub
```bash
cd custom-dummy/proxy-server
git init
git add .
git commit -m "Proxy server for Forge app"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `forge-proxy-server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. Click "Create Web Service"

### Step 3: Get Your URL
- After deployment, you'll get: `https://forge-proxy-server.onrender.com`
- Test it: `https://forge-proxy-server.onrender.com/health`

### Step 4: Update Your Forge App
Update the proxy URL in your React app:
```typescript
const PROXY_URL = "https://forge-proxy-server.onrender.com/proxy";
```

---

## Alternative: Deploy to Railway

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Railway
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js and deploys
6. Get URL from dashboard

---

## Alternative: Deploy to Heroku

### Prerequisites
```bash
npm install -g heroku
```

### Deploy
```bash
cd custom-dummy/proxy-server
heroku login
heroku create forge-proxy-server
git push heroku main
heroku open
```

Your URL: `https://forge-proxy-server.herokuapp.com`

---

## Update Forge App After Deployment

1. Update `App.tsx` with your live proxy URL
2. Rebuild: `npm run build`
3. Deploy: `forge deploy`

---

## Testing Your Live Proxy

```bash
# Health check
curl https://your-proxy-url.com/health

# Test proxy
curl "https://your-proxy-url.com/proxy?url=https://www.google.com"
```

---

## Important Notes

- **Free tier limitations**: Most free tiers sleep after inactivity
- **Cold starts**: First request may be slow (5-10 seconds)
- **Rate limiting**: Consider adding rate limiting for production
- **Security**: Add authentication if needed
- **HTTPS**: All platforms provide free SSL certificates
