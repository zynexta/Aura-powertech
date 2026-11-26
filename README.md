# Aura Powertech Solutions — Premium Solar Energy Website

A complete, production-ready, high-end corporate website engineered for **AURA POWERTECH SOLUTIONS**, a premier renewable energy technology company based in Thiruvananthapuram, Kerala, India.

---

## ☀️ Brand & Visual Identity
- **Primary Orange:** `#F47721` (Energy rays, CTA buttons, active states, key accents)
- **Deep Brand Blue:** `#30358B` / `#12153D` (Typography, headers, structural stability)
- **White & Clean Slate:** `#FFFFFF` / `#FAFAFB` / `#0F172A`
- **Typography Pairing:** *Manrope* (Headings & Display) + *Inter* (Body & Technical details)

---

## 🏢 Verified Company Information
- **Company Name:** AURA POWERTECH SOLUTIONS
- **Business Address:** Building No: 14/3802, Kudappanakunnu, Thiruvananthapuram, Kerala – 695043, India.
- **Contact Numbers:**
  - `+91 9633706081` (Primary / WhatsApp)
  - `+91 9633706004`
  - `+91 9633706007`
- **Email:** `aurapowertechsolutions@gmail.com`

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Routing:** React Router DOM (v7) with scroll restoration
- **Animations:** Lightweight CSS animations + Motion
- **Architecture:** 100% Frontend-only, modular data-driven content, ready for instant Vercel deployment.

---

## 📂 Project Architecture
```
src/
├── assets/
│   ├── images/
│   │   ├── hero/          # Cinematic high-resolution architectural hero image
│   │   ├── projects/      # Authentic installation photography (Metal roof, Deye inverter, Blue structures, Panel close-up)
│   │   └── services/
│   └── logo/              # Clean SVG official brand logo & mark
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx     # Transparent-on-hero, solid glassmorphism on scroll, mobile drawer
│   │   ├── Footer.jsx     # Full corporate footer with click-to-call, address, quick links
│   │   └── WhatsAppButton.jsx # Accessible floating WhatsApp contact button
│   ├── sections/          # Home page editorial sections
│   │   ├── Hero.jsx
│   │   ├── Intro.jsx
│   │   ├── SolutionsGrid.jsx
│   │   ├── WhyChooseSolar.jsx
│   │   ├── FeaturedInstallations.jsx
│   │   ├── ProcessTimeline.jsx
│   │   └── CTASection.jsx
│   └── ui/
│       ├── Logo.jsx       # SVG brand logo (adaptive light/dark)
│       └── Lightbox.jsx   # Interactive modal image viewer for projects
├── data/
│   ├── company.js         # Centralized company information, address, registration
│   ├── services.js        # Editable proposed solar solutions & benefits
│   └── projects.js        # Real installation photo metadata & technical points
├── pages/
│   ├── Home.jsx           # Cinematic hero & comprehensive overview
│   ├── About.jsx          # Mission, vision, core values & regional engineering focus
│   ├── Solutions.jsx      # In-depth residential, commercial, and Deye inverter breakdown
│   ├── Projects.jsx       # Full filtered portfolio with lightbox
│   └── Contact.jsx        # Verified contact info, map link, and WhatsApp enquiry workflow
├── index.css              # Tailwind v4 theme & typography configuration
├── App.jsx                # Router & global shell
└── main.jsx
```

---

## 🚀 Development & Build

### Install dependencies
```bash
npm install
```

### Run local development server
```bash
npm run dev
```

### Production build
```bash
npm run build
```

---

## 🌐 Deployment to Vercel
The project includes `vercel.json` configured with SPA rewrites:
1. Push this repository to GitHub/GitLab.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**.
