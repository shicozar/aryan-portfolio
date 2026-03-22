# Aryan · Portfolio

Retro arcade-themed developer portfolio built with React + Vite.

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build

```bash
npm run build
# Output in /dist
```

---

## Deploy (Free Options)

### Option A — Vercel (Recommended, easiest)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Done! You get a free `yourname.vercel.app` URL

### Option B — Netlify
1. Push this folder to a GitHub repo
2. Go to https://netlify.com → "Add new site" → "Import from Git"
3. Connect GitHub, select the repo
4. Build command: `npm run build` · Publish directory: `dist`
5. Click **Deploy** — free `yourname.netlify.app` URL

### Option C — GitHub Pages
1. In `vite.config.js`, set `base: '/your-repo-name/'`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run build && npm run deploy`

---

## Customisation

All content lives in **`src/data.js`** — edit name, skills, projects, links there.  
Colours are CSS variables in **`src/index.css`** under `:root`.
