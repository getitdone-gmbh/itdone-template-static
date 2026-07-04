# ITDone Static Template

The starting point for **static websites** built on the ITDone platform:
plain HTML, CSS and a little vanilla JavaScript — no framework, no build
step. One `web` service serves the files as-is.

```
index.html    the homepage (add more pages as *.html at the root)
styles.css    all styling; design tokens live in :root
script.js     small progressive enhancements
assets/       images & icons
check.js      "build": validates pages + local references
itdone.yaml   deploy contract (web service on :3000)
```

Local preview:

```bash
npm install   # just the static file server
npm start     # serves on http://localhost:3000
npm run build # validates all pages and local links
```

See `AGENTS.md` for the conventions the ITDone build agent follows when
customizing this template.
