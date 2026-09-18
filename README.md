# Angga Prawira | Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/AnggaPhi/AnggaPhi.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/AnggaPhi/AnggaPhi.github.io/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/badge/Website-anggaphi.github.io-2E7D52?style=flat&logo=googlechrome&logoColor=white)](https://anggaphi.github.io/)

Personal portfolio platform for **Angga Prawira** — E-Commerce Specialist, 3D Printing Specialist, AI Explorer, and IT Consultant based in Tangerang Selatan, Indonesia.

---

## 🚀 Live Website
- **Production URL**: [https://anggaphi.github.io/](https://anggaphi.github.io/)

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Linter**: Oxlint
- **Hosting / CI/CD**: GitHub Pages via GitHub Actions

---

## ⚙️ Deployment & Hosting Architecture

This site is deployed automatically using **GitHub Actions** (`.github/workflows/deploy.yml`).

### Critical Repository Configuration
To ensure the site is always deployed properly:
1. Under **Repository Settings** > **Pages**:
   - **Source**: Must remain set to **`GitHub Actions`** (`build_type: workflow`).
   - ⚠️ *Do not switch back to "Deploy from a branch", as raw Vite `.tsx` source cannot be parsed directly by browsers without a build step.*
2. Every push to `main` automatically:
   - Runs linter (`oxlint`) and TypeScript validation (`tsc --noEmit`).
   - Compiles and bundles production static assets (`npm run build`).
   - Validates that `dist/index.html` and bundled JS/CSS assets exist.
   - Deploys directly to the GitHub Pages environment.

---

## 💻 Local Development

### Prerequisites
- Node.js 20+
- npm

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run full code validation (lint + typecheck + production build)
npm run validate

# Preview production build locally
npm run preview
```
