# Agent instructions

Read this first, every time. It describes how THIS app is built so you don't
have to re-discover it. Follow these conventions instead of inventing your own.
Do **not** rewrite or delete this file — it is guidance, not a scratchpad
(use `CLAUDE.md` for your own notes).

## What this is
A **static marketing/content site** — landing page, portfolio, product site,
blog, event page. There is **no backend, no database, no auth**, by design.
And there is **no framework and no build step**: the site is plain HTML, CSS
and a little vanilla JavaScript, served as-is. If a task genuinely needs user
accounts, persistent data, or dashboards, this is the **wrong template**
(that's the `fullstack` template) — say so rather than bolting an API/DB onto
this one.

## Stack & layout
- **Plain HTML + CSS + vanilla JS.** No React, no Tailwind, no bundler, no
  TypeScript, no npm packages for the site itself. Do not introduce any.
- `index.html` — the homepage. Semantic sections: header/nav, hero, features,
  about, CTA, footer.
- `styles.css` — ALL styling. The `:root` block at the top holds the design
  tokens (colors, fonts, spacing). **Restyle the site by editing tokens
  first**; only add rules below when a token can't express it.
- `script.js` — small enhancements only (nav toggle, scroll reveal, footer
  year). The site must work with JavaScript disabled.
- `assets/` — images, icons, downloads. Reference them with relative paths.
- `check.js` — the "build": validates every page (doctype, title, and that
  all local href/src references resolve). Runs via `npm run build`. Do not
  weaken or delete it; if it fails, fix the page, not the check.
- `package.json` — only exists for serving (`serve`) and the check script.
  Do not add dependencies.
- **itdone.yaml** is the deploy contract (one `web` service, port 3000,
  public). Treat it as fixed unless the task is specifically about
  deployment topology.

## How to add things
- **New page:** add `about.html` (etc.) at the root, copying the head/header/
  footer of `index.html` so navigation and styling stay consistent. Link it
  from the nav. Run `npm run build` — it catches broken links.
- **New section:** add a `<section>` in the page with a class, style it in
  `styles.css` using the existing tokens. Add the `reveal` class for the
  standard scroll-in animation.
- **Images:** put files in `assets/` and reference them relatively
  (`assets/team.jpg`). Never hotlink external images.
- **Fonts:** loaded from Google Fonts in the `<head>`; change the families
  there AND in the `--font-display`/`--font-body` tokens together.
- **Interactivity:** vanilla JS in `script.js`. Keep it progressive —
  content must not depend on it.

## Hard rules
- Plain HTML/CSS/JS only — introducing a framework, preprocessor or build
  tool is wrong even if the task sounds easier that way.
- The web process is `npm start` (a static file server on `$PORT`, default
  3000). Don't change the port in `itdone.yaml` and don't replace the server.
- Every page must pass `npm run build` (check.js) before you are done.
- Keep it MVP and minimal: no placeholder/TODO stubs, implement what the
  task asks, don't add non-essential files — this is meant to stay small
  and readable.
