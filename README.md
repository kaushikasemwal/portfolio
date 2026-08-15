# Kaushika Semwal — Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-6FFF00?style=for-the-badge&logo=githubpages&logoColor=010828)](https://kaushikasemwal.github.io/orbis-nft/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=010828)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-6FFF00?style=flat-square&logoColor=010828)](LICENSE)

A modern, responsive single-page portfolio website featuring **video backgrounds**, **liquid glass UI effects**, and a **dark space theme** with neon accents. Built with React 18 + TypeScript + Vite + Tailwind CSS v4.

---

## 🌐 Live Demo

**[https://kaushikasemwal.github.io/orbis-nft/](https://kaushikasemwal.github.io/orbis-nft/)**

*(Deployed via GitHub Pages)*

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **6 Sections** | Hero, Education, Experience, Projects, Skills & Achievements, Contact |
| **Video Backgrounds** | Unique looping videos per section (CloudFront) |
| **Liquid Glass UI** | Custom `backdrop-filter` glassmorphism on cards, nav, buttons |
| **Custom Typography** | Anton (headings), Condiment (accents), System mono (body) |
| **Dark Theme** | `#010828` bg, `#EFF4FF` text, `#6FFF00` neon accents |
| **Fully Responsive** | Mobile-first, seamless on all devices |
| **Project Links** | GitHub + Live Demo buttons per project |
| **Contact Form** | Formspree-powered, no backend needed |
| **Texture Overlay** | Full-screen noise with `mix-blend-mode: lighten` |
| **Scroll Animations** | IntersectionObserver-powered reveal animations |

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Icons**: Custom inline SVGs (no external icon library)
- **Deployment**: GitHub Pages (via `gh-pages`)

---

## 📦 Project Structure

```
orbis-nft/
├── index.html
├── package.json
├── vite.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .gitignore
└── src/
    ├── main.tsx
    ├── index.css          # Tailwind v4 + liquid-glass + texture + animation utilities
    ├── App.tsx            # Section composition
    ├── hooks/
    │   └── useScrollReveal.ts  # IntersectionObserver scroll animation hook
    └── components/
        ├── Navigation.tsx      # Sticky nav with liquid-glass links
        ├── Hero.tsx            # Video bg, name, title, CTAs, social icons
        ├── Education.tsx       # 3 education cards with video bg
        ├── Experience.tsx      # 2 experience cards with highlights
        ├── Projects.tsx        # 6 project cards with GitHub/Live links
        ├── Skills.tsx          # Technical/soft skills, certs, achievements with timeline dropdowns
        ├── Contact.tsx         # Contact info, interests, Formspree form
        ├── DesktopSocialIcons.tsx
        ├── MobileSocialIcons.tsx
        ├── TextureOverlay.tsx  # Full-screen noise texture
        └── Icons.tsx           # Custom SVG icons (Mail, LinkedIn, GitHub, Phone, Chevron)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run Locally

```bash
git clone https://github.com/kaushikasemwal/orbis-nft.git
cd orbis-nft
npm install
npm run dev          # http://localhost:5173
```

### Build for Production

```bash
npm run build        # Outputs to dist/
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | `#010828` | Page background |
| `--color-cream` | `#EFF4FF` | Primary text |
| `--color-neon` | `#6FFF00` | Accents, CTAs, highlights |

### Typography (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap" rel="stylesheet">
```

| Font | CSS Variable | Usage |
|------|--------------|-------|
| Anton | `--font-grotesk` | Headings, nav, buttons |
| Condiment | `--font-condiment` | Accent overlay text |
| System Mono | `font-mono` | Body, descriptions, meta |

### Liquid Glass Effect

```css
.liquid-glass {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### Scroll Reveal Animation

```css
.reveal-up { opacity: 0; transform: translateY(30px); transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-up-visible { opacity: 1; transform: translateY(0); }
.reveal-child { opacity: 0; transform: translateY(20px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-up-visible .reveal-child { opacity: 1; transform: translateY(0); }
```

---

## 🚢 Deployment (GitHub Pages)

### Automatic (GitHub Actions)

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

### Manual (gh-pages)

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

Then enable **GitHub Pages** → Source: `gh-pages` branch.

---

## 📄 License

MIT License — free to use, modify, and distribute.

```
MIT License

Copyright (c) 2025 Kaushika Semwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgements

- **Design Inspiration**: Orbis.Nft landing page spec
- **Video Assets**: CloudFront hosted MP4s
- **Fonts**: Google Fonts (Anton, Condiment)
- **Icons**: Custom SVGs based on Lucide design language

---

<div align="center">

**Built with ❤️ by [Kaushika Semwal](https://github.com/kaushikasemwal)**

[⬆ Back to Top](#kaushika-semwal--portfolio)

</div>