# MUDIVEDU ARSHADD — Premium Personal Portfolio

A world-class, responsive personal portfolio website engineered for **MUDIVEDU ARSHADD**, Full-Stack Developer, Mobile App Developer, and UI/UX Designer with 5+ years of experience.

Built with a **Glassmorphism + Neon Gradient** visual design system, dark-mode default with light-mode toggle, custom cursor glow, floating WhatsApp communication hubs, and dynamic case study modals.

---

## 🚀 Key Features

- **Glassmorphism Design System**: Frosted glass panels (`backdrop-blur-xl`), animated gradient orbs (violet, blue, cyan), and gradient typography.
- **Hero Section**: Pulsing availability badge, animated role typing rotator, quick CTAs, glass profile frame with gradient ring, and floating tech chips (React, Next.js, Node.js, Flutter, MongoDB, Figma).
- **About Me**: Complete story, quick info cards (Location, Experience, Languages, Availability), 4 animated stats cards, and current learning chips.
- **Technical Skills**: Grouped glass categories (Frontend, Backend, Mobile Apps, Databases, Design, DevOps) with level progress meters and an infinite horizontal marquee ribbon.
- **Featured Projects**: Filter tabs (*All*, *Websites*, *Mobile Apps*, *Full-Stack*, *UI/UX Design*), 3D hover effects, and full-screen glass modal case studies with challenges, solutions, and live links.
- **Career & Education Timeline**: Vertical glowing gradient timeline covering 5 years of engineering achievements.
- **Services (What I Do)**: 6 high-demand service cards with deliverables checklists and instant *"Get a Quote"* buttons that prefill the contact form.
- **Client Testimonials**: Auto-play glass carousel with star ratings and client attributions.
- **Interactive Contact Hub**:
  - Direct `tel:` phone tap-to-call links.
  - Individual green WhatsApp buttons linking to `https://wa.me/91XXXXXXXXXX`.
  - One-click email copy buttons with instant toast notifications.
  - Interactive map card centered on Sadum, Chittoor District, Andhra Pradesh.
  - Complete validated contact form with anti-spam honeypot, celebration confetti, and `/api/contact` API endpoint.
- **Floating WhatsApp Button**: Bottom-right floating button with green pulse glow and quick-chat preset launcher.
- **Curriculum Vitae Modal**: In-browser ATS resume preview with direct PDF download and print options.
- **SEO & Structured Data**: Person & LocalBusiness Schema.org JSON-LD, OpenGraph, and Twitter cards.

---

## 📁 Content Directory Structure (`/src/data`)

All data is strictly decoupled from the UI components. You can update any text, project, or phone number by editing these files:

- `/src/data/profile.ts`: Name, bio, tagline, phones, WhatsApp links, emails, location, socials, stats.
- `/src/data/skills.ts`: Categories, technical proficiencies, percentages, and marquee items.
- `/src/data/projects.ts`: Project titles, mockups, descriptions, tags, challenges, solutions, live URLs, GitHub & Play Store links.
- `/src/data/experience.ts`: Work history, roles, companies, achievements, and education.
- `/src/data/services.ts`: Services offered, descriptions, deliverables checklists.
- `/src/data/testimonials.ts`: Client reviews, ratings, company names, and locations.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Unit Tests
```bash
npm test # or: node --test src/utils/portfolio-utils.test.ts
```

---

## ⚙️ Environment Variables (`.env`)

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

To enable live email forwarding for the contact form:
```env
# Optional: Resend API Key (https://resend.com)
RESEND_API_KEY="re_123456789"
CONTACT_RECIPIENT_EMAIL="appdevoloper80@gmail.com"

# Or SMTP settings:
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## 📄 Updating Profile Photo & Resume

- **Profile Photo**: Replace `/public/profile.jpg` with your own portrait image (or edit `profilePhoto` in `/src/data/profile.ts`).
- **Resume PDF**: Replace `/public/resume.pdf` with your updated resume file.

---

## 🌐 Deploy to Vercel (Zero Config)

1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset: **Vite** (detected automatically).
5. Add any environment variables from `.env`.
6. Click **Deploy**!

### Custom Domain
In your Vercel project dashboard, navigate to **Settings > Domains** and add your custom domain (e.g. `arshadd.dev`).
Add the CNAME or A records indicated by Vercel in your DNS provider (Cloudflare, GoDaddy, Namecheap).
