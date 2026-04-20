# Mentor TPA — Product Requirements Document

## Project
Corporate website frontend (demo, no backend/CMS) for Mentor TPA — a technology-enabled healthcare administration and claims infrastructure company. B2B positioning: SECP licensed, Shariah compliant, AI enabled, nationwide provider network.

## Audiences
- Self-funded companies (employers / HR / Finance)
- Insurance companies (carriers, MGAs, re-insurers)
- Healthcare providers (hospitals, clinics, labs, pharmacies)

## Tech
- React 19 (CRA + craco) + React Router 7
- Tailwind + Shadcn/UI, Manrope font (Google Fonts — Axiforma alternative)
- Sonner for toasts
- Static seed data for hospitals

## Design System
- Primary palette: White (#ffffff), Mentor Blue (#0048ff), Black (#11111f). Blue used sparingly as accent.
- Typography: Manrope (400/500/600/700/800). Tight letter-spacing (-0.035 / -0.045em) on headlines. Uppercase eyebrows with blue hairline.
- Layout: left-aligned asymmetric grids, generous whitespace, hard-edged cards (14px radius), no purple/violet gradients, subtle blue accents.

## Implemented (2026-02)
- 15 routes: Home, About, Solutions Overview, Self-Funded, Insurance, Providers, Services, Technology, Provider Network, Hospital Panel, Request Proposal, Book Demo, Contact, Privacy, Terms
- Sticky navbar with Solutions / Services dropdowns, 2 CTAs (Book Demo / Get a Proposal), mobile hamburger menu
- Footer with CTA band, 4-column site map, trust pills, `info@mentortpa.com` contact (consistent across Footer, Contact, Privacy, Terms)
- All page copy rewritten word-for-word per user Message 35 draft; Hospital Panel kept as "coming soon" empty state per user instruction
- 3 forms: Request Proposal, Book Demo, Contact — full frontend validation + success states + sonner toasts (MOCKED submission via setTimeout)
- SEO-ready <meta> tags in index.html
- All interactive elements have data-testid

## Visuals & Interactivity pass (2026-02, current session)
- New shared components: `Reveal` (IntersectionObserver scroll animations), `Counter` (animated numeric stats), `MediaImage` (responsive image w/ hover zoom, grain overlay, blue corner frames), `images.js` (curated Unsplash catalog)
- New CSS utilities: `mesh-hero`, `mesh-dark`, `grid-dark`, `tilt-card`, `glow-pill`, `btn-shimmer`, `float-y`, `halo`, `u-expand`, `img-corner`, scroll-reveal variants
- Imagery added across Home, About, Services, Technology, ProviderNetwork, SelfFunded, Insurance, Providers, SolutionsOverview, HospitalPanel, Contact, BookDemo, RequestProposal (Unsplash stock, lazy-loaded, with blue corner frames + soft gradient overlays)
- Interactive elements: animated counters on all stat blocks (300+, 15,000+, 700+, 98.4%), scroll-reveal on all major blocks, tilt-card hover on cards, shimmer hover on primary CTAs, glow-pill hover on dark stat tiles, Services page has a sticky category filter (All/Claims/Network/Members/Care) with live filtering
- Testing agent iteration_2: 100% pass on critical flows, 0 console errors, 0 runtime errors

## Backlog (P1)
- Wire forms to backend `/api/` endpoints (request-proposal, book-demo, contact)
- Backend model for hospital panel (replace seed data)
- CMS for editable copy / hospital entries (admin dashboard)
- sitemap.xml + robots.txt generation
- Google Analytics 4 / Search Console hookup
- spam protection (Cloudflare Turnstile / reCAPTCHA)

## Backlog (P2)
- Blog / resources section
- Case studies
- Press / careers pages
- i18n (Urdu)
- Provider login portal link

## Not in scope (explicitly deferred by user)
- Backend APIs (deferred)
- Admin dashboard / CMS (deferred)
- Authentication (deferred)
