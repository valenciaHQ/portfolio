# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript (strict)
- Tailwind CSS v4 — config lives in `app/globals.css` via `@theme`, no `tailwind.config.ts`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono) via `next/font/google`

## Package manager

This project uses **npm** (`package-lock.json` is committed) — not pnpm, despite the global default in `~/CLAUDE.md`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Structure

- `app/layout.tsx` — metadata, fonts, JSON-LD (`ProfessionalService` schema)
- `app/page.tsx` — assembles page sections in order
- `app/sitemap.ts`, `app/robots.ts` — auto-generated SEO routes
- `app/icon.tsx`, `app/opengraph-image.tsx` — dynamic favicon/OG image via `next/og` (no static image assets, generated at request time)
- `components/` — one section per file: `Nav`, `Hero`, `Terminal`, `Services`, `SeoDiff`, `Process`, `StackSection`, `Addons`, `PortfolioRate`, `Contact`, `Footer`, `Reveal`
- `lib/site-config.ts` — single source of truth for domain, email, WhatsApp number, location; edit here, not inline in components

## Conventions

- Site content and copy are in Spanish — target audience is small/local Argentine businesses that lack a website or need a basic growth/SEO strategy
- Design tokens (colors) are CSS vars in `app/globals.css`, exposed to Tailwind via `@theme inline`
- Pricing/services content lives as typed arrays at the top of `components/Services.tsx` and `components/Addons.tsx`
- No shadcn/ui, no Radix, no `tailwind.config.ts` — plain Tailwind v4 + hand-rolled components
