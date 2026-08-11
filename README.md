# Shiza Shahzad Portfolio

Premium personal portfolio for **Shiza Shahzad**, a **Microbiologist & Molecular Geneticist**.

The site is designed as an editorial scientific profile: warm, rigorous, typographically led, and intentionally restrained. It uses a maroon and beige visual system, GSAP motion, and abstract DNA/microscopy-inspired motifs while avoiding fabricated credentials, fake publications, and generic science cliches.

## Status

This is a first-phase portfolio foundation. The only confirmed public facts currently represented are:

- Name: Shiza Shahzad
- Professional identity: Microbiologist & Molecular Geneticist
- Visual direction: Maroon + beige

Unknown academic, biographical, research, publication, CV, contact, and affiliation details are not invented. Sections are written as honest content-readiness areas until verified content is provided.

## Features

- Next.js App Router with React and TypeScript
- Server-rendered page structure with small client-only motion components
- GSAP hero, section, menu, cursor, and DNA-loop animation
- Responsive editorial layout for desktop, tablet, and mobile
- Mobile hamburger navigation animated with GSAP
- Reduced-motion support
- Accessible landmarks, headings, focus states, and navigation controls
- Custom text-selection styling
- Footer credit for Syntra Studio

## Tech Stack

- Next.js
- React
- TypeScript
- GSAP
- Playwright for browser verification
- Global CSS with design tokens

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Type-check the project:

```bash
npm run typecheck
```

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    HeroDna.tsx
    Navigation.tsx
    PortfolioMotion.tsx
```

## Content Integrity

This portfolio represents a real scientific professional. Do not add or publish unverified:

- degrees, universities, laboratories, employers, or locations
- publications, journals, DOIs, citations, or metrics
- awards, dates, years of experience, or testimonials
- research findings, thesis titles, or specializations

When real content is supplied, add it conditionally and preserve exact factual metadata.

## Design Direction

The visual language should remain:

- editorial research profile
- contemporary academic
- molecular minimalism
- warm, credible, calm, and precise

Avoid neon science motifs, fake charts, stock laboratory cliches, healthcare-blue palettes, and generic resume-template layouts.

## Motion Direction

Motion should support reading and hierarchy:

- hero text reveal
- restrained section entrances
- subtle DNA loop and parallax
- GSAP mobile menu choreography
- quiet custom cursor on fine-pointer devices

Respect `prefers-reduced-motion` and avoid animation that becomes the subject of the page.

## Credits

Designed and developed by [Syntra Studio](https://syntrastudio.co).
