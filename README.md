# ITDone Static Template

A modern, dark-themed site template built with **Next.js** (App Router) and **Tailwind CSS**.

Designed as a starting point for landing pages, portfolios, marketing sites, event pages, or anything else that doesn't need a backend. Pages are statically prerendered at build time.

## What's inside

```
app/
├── layout.tsx          # Root layout — HTML scaffolding, dark gradient background, Inter font
├── page.tsx            # Homepage — composes the components
└── globals.css         # Tailwind layers + utility classes (.btn-primary, .card, .gradient-text)
components/
├── Nav.tsx             # Top navigation
├── Hero.tsx            # Big headline + CTA buttons
├── Features.tsx        # Feature grid
├── CTA.tsx             # Final call-to-action card
└── Footer.tsx          # Three-column footer
```

All components accept props with defaults — see the `interface ...Props` block at the top of each file. Override them when composing in `app/page.tsx`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & serve

```bash
npm run build    # produces .next/
npm start        # serves on $PORT (default 3000) via `next start`
```

## Customization quickstart

- **Brand name & content**: edit the default props in `Hero.tsx`, `CTA.tsx`, `Footer.tsx`, `Nav.tsx` — or override via props when composing in `app/page.tsx`.
- **Colors**: change the `accent` palette in `tailwind.config.cjs`.
- **Background**: tweak `bg-hero-gradient` in `tailwind.config.cjs`.
- **Typography**: swap the `Inter` import in `app/layout.tsx` (via `next/font/google`) and the `fontFamily` in `tailwind.config.cjs`.

## Deploy to ITDone Cloud

The `itdone.yaml` is already configured. The Node buildpack runs `npm run build`, and the `Procfile` (`web: npm start`) starts the Next.js server on `$PORT`. Just push to the linked repo and the platform builds + deploys automatically.
