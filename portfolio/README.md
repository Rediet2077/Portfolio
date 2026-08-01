# 🚀 Rediet Sharew — Premium Developer Portfolio

A world-class, production-ready personal portfolio built with React, Vite, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80)

---

## ✨ Features

### Sections
- **Hero** — Typing animation, floating tech icons, animated particles, mouse glow
- **About** — Animated stats counters, photo, bio, education, career goals
- **Skills** — Animated cards with progress bars, category filters, tilt effects
- **Projects** — Glassmorphism cards with case study modals, tech badges, GitHub + Live links
- **GitHub** — Live GitHub API integration (profile, repos, contribution graph)
- **Live Demo** — Deployed apps showcase with status badges, performance indicators
- **Experience** — Animated vertical timeline (education, jobs, certifications)
- **Certifications** — Verified credential cards with issuer logos
- **Testimonials** — Carousel with all-cards grid
- **Contact** — EmailJS form, copy-email, map placeholder, social links
- **Footer** — Animated wave, quick links, social icons, back-to-top

### Global Features
| Feature                  | Details                                      |
|--------------------------|----------------------------------------------|
| 🌓 Dark / Light mode      | Smooth transition, persisted in localStorage |
| 🎨 5 Color themes         | Indigo, Cyan, Rose, Emerald, Amber           |
| 🖱️ Custom animated cursor | Dot + outline with hover expand effect       |
| ⌨️ Command palette        | `Ctrl+K` — navigate, toggle theme, copy email|
| 📜 Scroll progress bar    | Gradient top bar                             |
| ⌛ Loading screen          | Animated logo + progress counter             |
| 🥚 Easter egg             | Konami code → interactive terminal           |
| 🔔 Toast notifications    | react-hot-toast (success/error)              |
| 💫 Framer Motion          | Scroll-triggered animations throughout       |
| 📱 Fully responsive       | Mobile, tablet, desktop                      |
| ♿ Accessible             | Semantic HTML, ARIA labels, keyboard nav     |
| 🔍 SEO optimized          | Meta tags, OG tags, sitemap, robots.txt      |
| 📲 PWA support            | Installable, offline caching via Workbox     |
| 🚀 Performance            | Code splitting, lazy images, Vite build      |

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── Rediet_Sharew_CV.pdf     ← replace with real CV
│
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── GitHub.jsx
│   │   │   ├── LiveDemo.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── Navbar.jsx
│   │       ├── CustomCursor.jsx
│   │       ├── ScrollProgress.jsx
│   │       ├── LoadingScreen.jsx
│   │       ├── CommandPalette.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── BackToTop.jsx
│   │       └── EasterEgg.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── index.js             ← all personal data here
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useGitHub.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── .env.example
```

---

## 🛠️ Tech Stack

| Category     | Library / Tool                        |
|--------------|---------------------------------------|
| Framework    | React 18 + Vite 5                     |
| Styling      | Tailwind CSS 3 + custom CSS           |
| Animation    | Framer Motion                         |
| Icons        | react-icons (Si + Fi)                 |
| Type Effect  | react-type-animation                  |
| Counters     | react-countup                         |
| Toast        | react-hot-toast                       |
| SEO          | react-helmet-async                    |
| Email        | @emailjs/browser                      |
| PWA          | vite-plugin-pwa + Workbox             |
| Router       | react-router-dom                      |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview    # preview the production build locally
```

---

## 🔧 Customization

All personal data lives in **`src/data/index.js`**. Edit:
- `personalInfo` — name, title, email, GitHub, LinkedIn, etc.
- `stats` — counters in the About section
- `skills` — skill cards with proficiency levels
- `projects` — project cards (title, description, tech, links, images)
- `timeline` — experience/education entries
- `certifications` — credential cards
- `testimonials` — testimonial carousel

### Replace the CV
Put your real CV at `public/Rediet_Sharew_CV.pdf`.

### Set up EmailJS (Contact form)
1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a Service, Template, and get your Public Key
3. Copy `.env.example` to `.env` and fill in the values
4. Uncomment the EmailJS lines in `Contact.jsx`

---

## 🚀 Deployment

### Vercel (recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
Or push to GitHub and import on [vercel.com](https://vercel.com).  
The `vercel.json` handles SPA routing automatically.

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```
Or connect the repo on [netlify.com](https://netlify.com).  
The `netlify.toml` handles SPA routing and headers automatically.

---

## 🌍 Environment Variables

```env
# .env (copy from .env.example)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_TOKEN=your_github_pat   # optional, for higher rate limits
```

---

## 🎮 Easter Egg

Type the **Konami code** on the keyboard:  
`↑ ↑ ↓ ↓ ← → ← → B A`  
A terminal window appears — try commands: `help`, `about`, `skills`, `projects`, `contact`, `clear`.

---

## 📄 License

MIT © 2025 Rediet Sharew
