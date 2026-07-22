# ValenciaHQ — Sitio Institucional

Next.js (App Router) + React 19 + Tailwind CSS v4. Migrado desde el prototipo
HTML a componentes, con metadata SEO completa, sitemap/robots automáticos y
JSON-LD.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (`strict`)
- **Tailwind CSS v4** (config vía `@theme` en `app/globals.css`, sin
  `tailwind.config.ts`)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono) vía
  `next/font/google`

## Estructura

```
app/
  layout.tsx      # metadata, fonts, JSON-LD
  page.tsx        # ensambla los componentes
  sitemap.ts       # /sitemap.xml
  robots.ts        # /robots.txt
  globals.css      # design tokens (colores, fuentes)
components/
  Nav, Hero, Terminal, Services, SeoDiff, Process,
  StackSection, Addons, PortfolioRate, Contact, Footer, Reveal
lib/
  site-config.ts   # dominio, email, ubicación — un solo lugar para editar
```

## Correr en local

```bash
npm install
npm run dev
```

## Antes de deployar

- [ ] Confirmar dominio final en `lib/site-config.ts` (`siteConfig.url`). Hoy
      apunta a `https://www.valenciahq.com`. Si en algún momento pasa por un
      subdominio de staging, actualizar acá y no dejarlo así de forma
      permanente (ver nota de SEO: subdominios no heredan la autoridad del
      dominio raíz).
- [ ] Reemplazar el email/GitHub en `site-config.ts` si cambian.
- [ ] Agregar una imagen Open Graph real (`public/og.png`, 1200×630) y
      referenciarla en `app/layout.tsx` → `metadata.openGraph.images`. Sin
      esto, los links compartidos en WhatsApp/LinkedIn no muestran preview.
- [ ] `npm run build` local antes de mergear, para confirmar que compila con
      acceso normal a internet (fonts de Google se resuelven en build time).

## Subir esto al repo (`github.com/valenciaHQ/portfolio`)

Siguiendo el mismo flujo de `Cómo Trabajamos.md` (rama + PR, nunca push
directo a `main`):

```bash
# Si es la primera vez que cloná el repo en esta máquina:
git clone https://github.com/valenciaHQ/portfolio.git
cd portfolio

# Si el repo ya tenía contenido previo, copiá estos archivos adentro
# reemplazando lo que corresponda antes de seguir.

git checkout -b feature/nextjs-migration
git add .
git commit -m "feat: migrar sitio institucional a Next.js con SEO técnico"
git push -u origin feature/nextjs-migration
```

Después abrí el PR desde la terminal (si tenés `gh` instalado) o desde el
navegador:

```bash
gh pr create --title "feat: migrar sitio a Next.js" --body "Migración del prototipo HTML a Next.js App Router. Incluye metadata SEO, sitemap, robots.txt y JSON-LD." --base main
```

O directamente en:
`https://github.com/valenciaHQ/portfolio/pull/new/feature/nextjs-migration`

## Deploy

Pensado para Vercel (Edge/Serverless, según el stack documentado). Conectar
el repo en Vercel y apuntar el dominio `www.valenciahq.com` desde ahí — no
hace falta configuración adicional, Next.js App Router funciona out of the
box.
