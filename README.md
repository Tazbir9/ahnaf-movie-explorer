# 🎬 MovieExplorer

A responsive movie/TV explorer built with **React (Vite)**, **Tailwind CSS v4** and the free **TVMaze API**.

## Features
- Home page with Navbar, Hero banner (CTA) and Footer
- Movie listing with debounced search by title (`/search/shows?q=`) and all shows (`/shows`)
- Reusable card component: poster, title, ⭐ rating, 📅 year, See Details button
- Details modal: poster, summary, rating, release date, genres, language, network. Closes via ✕, Close button, backdrop click or Esc
- Fully responsive: 1 column on mobile, up to 4 on desktop

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy
Push to GitHub and import the repo on Vercel or Netlify (SPA rewrites are already configured in `vercel.json` and `public/_redirects`).

## Live demo
<add your deployed link here>
