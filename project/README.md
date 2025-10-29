# Pradip Kumar Chaudhary — Portfolio (Vite + React + Tailwind)

This repository is a small portfolio website for Pradip Kumar Chaudhary — actor, playwright, and director — built with Vite, React 18 and Tailwind CSS.

The site showcases biography, portfolio items (plays, directing credits and film appearances), media and contact information. The project is a lightweight static SPA using client-side routing.

---

## Quick overview

- Framework: React 18 (Vite)
- CSS: Tailwind CSS
- Routing: react-router-dom
- Build tool: Vite

This project is set up for local development using `npm run dev` and production build with `npm run build`.

## Short bio (from site)

Pradip Kumar Chaudhary — Actor • Playwright • Director

Associated with Mandala Theatre Nepal, Pradip's work explores Nepali narratives and social themes rooted in local culture. Notable theatre works referenced in the site include:

- Jhimke Mama (Writer & Director, 2020) — an original play based on a real story by Durga Prasad Pandey.
- Masaantaar (Writer & Director, 2017) — political satire exploring superstition and social dynamics.
- Kalapattharmathi (Director, 2017) — Mandala Theatre production.
- Recent Production (Director, 2024) — a recent theatrical production at Mandala Theatre Nepal.
- Film appearance: Barista Balaram (Actor, 2025) — added as a portfolio entry.

These descriptions are taken from the portfolio data in `src/screens/Portfolio/Portfolio.tsx` and the Home/About copy.

## Project structure (key files)

- `index.html` — app entry HTML
- `src/index.tsx` — React entry
- `src/screens/Home/Home.tsx` — Home / hero / about sections
- `src/screens/Portfolio/Portfolio.tsx` — Portfolio page and portfolio items array
- `src/components/Header/*` and `src/components/Footer/*` — site header and footer
- `src/components/ui/*` — small UI components (button, card, separator, etc.)
- `public/images/` — static images used by the site (hero photos, thumbnails)
- `package.json` — scripts and dependencies

## Run locally

Prerequisite: Node.js (recommended LTS) and npm.

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) to view the site.

3. Create a production build:

```powershell
npm run build
```

## Where to edit content

- Portfolio items: `src/screens/Portfolio/Portfolio.tsx` — the `portfolioItems` array contains each item (title, category, year, role, description). Edit or add entries there.
- Home copy (bio and buttons): `src/screens/Home/Home.tsx` — headings and paragraphs are editable here.
- Images:
  - Hero and portrait images live in `public/images/`.
  - The site references `/images/pkdai.png` and a fallback `/images/pkdai2.jpg` (configured in the Home screen). Add or replace files there. Example path:

```
project/public/images/pkdai2.jpg
```

You can add images by copying them to that folder or using the PowerShell command:

```powershell
# copy from Downloads to project images folder (example)
Copy-Item -Path $env:USERPROFILE\Downloads\pkdai2.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\pkdai2.jpg'
```

If you'd like to add the attached poster image (Jhimke Mama) so it appears on the Home page's Featured Work card, copy it into `public/images/` with this command (example):

```powershell
# copy the poster into the project images folder and name it for the site
Copy-Item -Path $env:USERPROFILE\Downloads\jhimke-mama-poster.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\jhimke-mama-poster.jpg'
```

The Home page expects the file at `/images/jhimke-mama-poster.jpg`. If the image is missing, the site will automatically show a gradient placeholder instead.

To add the Kaalaa Patthar Maathi poster from the Mandala Theatre production page, copy it into `public/images/` with this command (example):

```powershell
Copy-Item -Path $env:USERPROFILE\Downloads\kaalaa-patthar-maathi.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\kaalaa-patthar-maathi.jpg'
```

The Home page renders `/images/kaalaa-patthar-maathi.jpg` for the "Kaalaa Patthar Maathi" card. If the poster file isn't present the card will show the gradient fallback.

## Accessibility and behavior notes

- Buttons in the Home screen use the `Button` component with `asChild` so they can wrap `react-router`'s `<Link>` for client-side navigation.
- Footer social icons are SVGs located in `public/` and were styled with a CSS filter for visibility on dark backgrounds; replacing them with white SVGs is recommended for crisp rendering.

## Recommended next steps / improvements

- Add optimized WebP or resized images for faster loads and smaller bundles (use `sharp` or Vite image plugins).
- Replace dark-filled SVGs with properly colored white SVGs in `public/` for the footer icons so we don't rely on CSS filters.
- Add unit or integration tests (e.g., React Testing Library) for critical UI pieces (filtering portfolio, link navigation).
- Add a modal or detail page for portfolio items if you want richer presentation per project.

## License & credits

This repository contains the source code for a personal portfolio. Content (text and images) belongs to Pradip Kumar Chaudhary (as provided). The codebase uses open-source libraries; check `package.json` for dependency licenses.

---

If you'd like, I can:
- run a quick build/typecheck now and fix any immediate issues,
- add an optimized `pkdai2.jpg` placeholder file into `public/images/` so the About section shows immediately, or
- export a simple deployment instruction for hosting (Vercel, Netlify).

Happy to update the README text if you want a different bio tone or more personal details.# Anima Project

Welcome! This project has been automatically generated by [Anima](https://animaapp.com/).

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)


If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```
