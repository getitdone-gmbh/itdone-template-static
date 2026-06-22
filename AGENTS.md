# Agent instructions

Read this first, every time. It describes how THIS app is built so you don't
have to re-discover it. Follow these conventions instead of inventing your own.
Do **not** rewrite or delete this file — it is guidance, not a scratchpad
(use `CLAUDE.md` for your own notes).

## What this is
A **static marketing/content site** — landing page, portfolio, product site, blog,
event page. There is **no backend, no database, no auth**, by design. One web
service serves prerendered pages. If a task genuinely needs user accounts,
persistent data, or dashboards, this is the **wrong template** (that's the
`fullstack` template) — say so rather than bolting an API/DB onto this one.

## Stack & layout
- **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind**, one web service listening on **:3000**.
- `app/layout.tsx` — root layout: HTML scaffolding, the dark gradient background, and the Inter font (loaded via `next/font/google`). Site-wide `<head>`/metadata lives here.
- `app/page.tsx` — the homepage. It just composes the section components in order.
- `app/globals.css` — Tailwind layers + the shared utility classes: `.btn-primary`, `.btn-secondary`, `.card`, `.gradient-text`. Reuse these instead of re-styling from scratch.
- `components/` — one file per section: `Nav`, `Hero`, `Features`, `CTA`, `Footer`. Each is a React Server Component that takes a props interface with sensible defaults.
- `tailwind.config.cjs` — design tokens: the `accent` color palette, the `bg-hero-gradient`, and the fade-in/fade-up animations.
- **itdone.yaml** is the deploy contract (one `web` service, port 3000, public). Treat it as fixed unless the task is specifically about deployment topology.

## How to add things
- **New page / route:** add `app/<route>/page.tsx`. It renders statically at build time — keep it that way (no per-request data fetching) unless the task truly needs it.
- **New section on the homepage:** add a `components/<Name>.tsx` (copy the shape of an existing one — a props interface with defaults, default-exported function), then render it inside `app/page.tsx` in the right spot. Keep section components server components.
- **Interactivity (menus, toggles, forms):** only then add `'use client'` at the top of that component. Default to server components; don't make the whole page a client component.
- **Styling:** use Tailwind utilities and the existing classes in `globals.css`. Change brand colors in one place — the `accent` palette in `tailwind.config.cjs`. Don't introduce a second styling system (CSS modules, styled-components, etc.).
- **A dependency:** run `npm install <pkg>` (via run_command, with `cwd` at the repo root). Do NOT hand-edit `package.json` dependencies, and do not commit lockfiles or `node_modules`.

## Hard rules
- The web process MUST listen on `$PORT` (default 3000) — the `start` script and `Procfile` already do this; don't change the port in `itdone.yaml`.
- Keep it static: no backend, no database, no auth layer in this template.
- Keep it MVP and minimal: no placeholder/TODO stubs, implement what the story asks, don't add non-essential dependencies or tooling — this is meant to stay small and readable.
- Edit content by changing the default props in the section components (or passing props from `app/page.tsx`) — don't fork a component just to change its copy.
