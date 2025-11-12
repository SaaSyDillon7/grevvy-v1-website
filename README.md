# GREVVY Version 1 - Quantum AI HubSpot Solutions

[![Built with Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

🚀 **Transform your HubSpot into an AI powerhouse** with quantum-powered automation and leadership-guided intelligence.

**Live Site:** https://grevvy.com (pending deployment)
**Repository:** https://github.com/SaaSyDillon7/grevvy-v1-website

## 🌟 Features

### Design & UX
- **Particle Background Animation** - Quantum-inspired floating particles with RAF optimization
- **Glassmorphism UI** - Modern frosted glass effects throughout
- **Gradient System** - Purple/Cyan brand gradients with smooth transitions
- **Smooth Scroll Navigation** - Section-based navigation
- **Fully Responsive** - Mobile-first approach with optimized layouts

### Complete Single-Page Website
1. **Hero Section** - Animated badge, gradient text, dual CTAs
2. **Value Proposition** - 3 core benefits with hover animations
3. **Services Overview** - GREVVY ONBOARD & AI subscription cards
4. **Interactive Workflow Demo** - Auto-playing 3-step process
5. **Results Metrics** - Animated count-up (280% ROI, 14 days to value)
6. **Case Studies** - 3 detailed success stories with metrics
7. **Pricing** - DIY vs DFY toggle with 8 pricing tiers
8. **FAQ Accordion** - 7 common questions
9. **Final CTA** - Trust badges and social proof
10. **Footer** - Links, social media, branding

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🌐 Deploy to Cloudflare Pages (grevvy.com)

```bash
# Build the site
npm run build

# Deploy with Wrangler
wrangler pages deploy .next --project-name=grevvy-website

# Configure custom domain in Cloudflare Dashboard
# Pages → grevvy-website → Custom domains → Add grevvy.com
```

## 📦 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript 5.6** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Advanced animations
- **React Intersection Observer** - Scroll-triggered effects

## 🎨 Brand System

**Colors:**
- Purple: #a855f7 (primary)
- Cyan: #22d3ee (secondary)
- Supporting: Pink, Blue, Green, Yellow

**Gradients:**
- Brand: Purple → Cyan
- Hero BG: Dark slate → Purple → Dark slate
- Text: White → Purple-200 → Cyan-200

## 🔐 Environment Variables

Configured in `.env.local`:
- Supabase (database & auth)
- HubSpot API (Portal ID: 49043992)
- Stripe (payments)
- Meeting booking links

## 📁 Project Structure

```
app/              # Next.js app directory
├── globals.css   # Tailwind + custom styles
├── layout.tsx    # Root layout with SEO
├── page.tsx      # Main single-page site
├── robots.ts     # SEO robots config
└── sitemap.ts    # Sitemap generation

components/       # React components
├── ParticleBackground.tsx
├── Navigation.tsx
├── Hero.tsx
├── ValueProposition.tsx
├── ServicesOverview.tsx
├── HowItWorks.tsx
├── Results.tsx
├── CaseStudies.tsx
├── Pricing.tsx
├── FAQ.tsx
├── FinalCTA.tsx
└── Footer.tsx
```

## 🎯 Next Steps

1. **Add Brand Assets** - Place logos in `public/` directory
2. **Connect Forms** - Integrate HubSpot forms for lead capture
3. **Deploy to Production** - Use Cloudflare Pages for grevvy.com
4. **Add Analytics** - Google Analytics 4 + HubSpot tracking
5. **Optimize Assets** - Add OG images and optimize fonts

## 🤖 Built with Claude Code

This project was generated using [Claude Code](https://claude.com/claude-code).

© 2025 GREVVY LLC. All rights reserved.
