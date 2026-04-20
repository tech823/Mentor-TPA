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
- Sticky navbar with Solutions dropdown, 2 CTAs (Book Demo / Get a Proposal), mobile hamburger menu
- Footer with CTA band, 4-column site map, trust pills
- Home: hero w/ dashboard mockup, trust marquee, problem → what we do → audience split → network → AI → value → vs traditional TPA → final CTA
- Hospital Panel: 50 real Pakistani hospitals, search + 4 filter dropdowns (city/province/type/specialty) + 3 toggles (cashless/OPD/IPD), desktop table + mobile cards, featured stars
- 3 forms: Request Proposal (10 fields), Book Demo (with calendar), Contact — full frontend validation + success states + sonner toasts
- SEO-ready <meta> tags in index.html
- All interactive elements have data-testid

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
