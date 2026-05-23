# ITDone Static Template

A modern, dark-themed static site template built with **Astro** and **Tailwind CSS**.

Designed as a starting point for landing pages, portfolios, marketing sites, event pages, or anything else that doesn't need a backend.

## What's inside

```
src/
├── pages/
│   └── index.astro        # Homepage — composes the components
├── components/
│   ├── Nav.astro          # Top navigation
│   ├── Hero.astro         # Big headline + CTA buttons
│   ├── Features.astro     # Three-column feature grid
│   ├── CTA.astro          # Final call-to-action card
│   └── Footer.astro       # Three-column footer
├── layouts/
│   └── Layout.astro       # HTML scaffolding + dark gradient background
└── styles/
    └── global.css         # Tailwind layers + utility classes (.btn-primary, .card, .gradient-text)
```

All components accept props with defaults — see the `interface Props` block at the top of each file.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build & serve

```bash
npm run build    # produces ./dist
npm start        # serves ./dist on $PORT (default 3000)
```

## Customization quickstart

- **Brand name & content**: edit the default props in `Hero.astro`, `CTA.astro`, `Footer.astro`, `Nav.astro` — or override via props when composing in `index.astro`.
- **Colors**: change the `accent` palette in `tailwind.config.cjs`.
- **Background**: tweak `bg-hero-gradient` in `tailwind.config.cjs`.
- **Typography**: swap the Google Font import in `src/layouts/Layout.astro` and the `fontFamily` in `tailwind.config.cjs`.

## Deploy to ITDone Cloud

The `itdone.yaml` is already configured. Just push to the linked repo and the platform builds + deploys automatically.
