# Publishing Guide — Soojin Hwang Portfolio

This is a static website. Every file uses **relative paths**, so it runs as-is on any
static host (GitHub Pages, Netlify, Vercel, etc.) with no build step.

**Target repo:** https://github.com/herosoo/soojin-hwang-portfolio.git
**Live URL:** https://herosoo.github.io/soojin-hwang-portfolio/

> **This is an UPDATE to an already-deployed site.** The repo exists and GitHub
> Pages is already turned on. You do **not** need to init git or re-enable Pages —
> just replace the site files with this latest version, commit, and push. Pages
> redeploys automatically (usually within a minute).

> **Vercel is connected to this GitHub repo.** Vercel auto-deploys on every push
> to the production branch (`main`) — the same `git push` below updates Vercel too.
> Do **not** run `vercel` from the CLI or re-import the project; that would create a
> second, disconnected deployment. Just push to GitHub and let Vercel rebuild.
> After pushing, confirm the new build at vercel.com/dashboard (or wait ~1 min and
> hard-refresh the Vercel URL).

---

## What Claude Code should do (updating the existing deploy)

The user already has a local clone of the repo from the last deploy. Point Claude
Code at this download and the existing clone, then:

1. **Copy the latest files** from this download into the existing local clone,
   overwriting what's there. Ship exactly these (see file list below):
   - `index.html`
   - `vercel.json` (clean-URL rewrites — **required for the extensionless links to work**)
   - `support.js`, `image-slot.js`
   - every `*.dc.html` page that the live site links to
   - the whole `assets/` folder
2. **Commit and push to `main`:**

```bash
cd <path-to-existing-local-clone>
# (copy the new files in first — see step 1)
git add -A
git commit -m "Update portfolio — latest design"
git push origin main
```

3. **Confirm** the live URL loads the new version (hard-refresh; Pages caches):
   `https://herosoo.github.io/soojin-hwang-portfolio/`

### If you don't have the old clone handy

Clone fresh, drop the new files in, and push:

```bash
git clone https://github.com/herosoo/soojin-hwang-portfolio.git
cd soojin-hwang-portfolio
# copy the new files from this download over the top, then:
git add -A
git commit -m "Update portfolio — latest design"
git push origin main
```

### First-time only (already done — skip unless the repo was reset)

```bash
git init && git remote add origin https://github.com/herosoo/soojin-hwang-portfolio.git
git add -A && git commit -m "Publish portfolio site" && git branch -M main && git push -u origin main
gh api -X POST repos/herosoo/soojin-hwang-portfolio/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

---

## How the site is structured

- **`index.html`** — the home page and entry point (hero, selected work, about, contact).
- **`support.js`** — the client-side runtime that renders every `.dc.html` page. **Required.** Must ship.
- **`image-slot.js`** — helper used by some pages. Ship it.
- **`assets/`** — all images and videos (`tmobile/`, `coverage/`, `mondrian/`). Ship the whole folder.

### Case-study pages (linked from `index.html`)

Files use clean slugs; the site links to them by **extensionless URL** (see `vercel.json`):

- `agentic-ai.dc.html`  → `/agentic-ai`
- `coverage-map.dc.html`  → `/coverage-map`
- `AI-enterprise.dc.html`  → `/ai-enterprise`
- `mondrian-ai-dashboard.dc.html` and `mondrian-ai-report.dc.html` (embedded as iframes on the home page — referenced directly by filename, no rewrite needed)
- `about.dc.html`  → `/about` (linked from the nav)

> **Clean URLs are Vercel-only.** `vercel.json` rewrites `/agentic-ai` → `/agentic-ai.dc.html`, etc.
> The internal links are absolute extensionless paths (`/agentic-ai`), so they only resolve on a host
> that applies these rewrites. **GitHub Pages does not support this** — those absolute links will 404
> there. Deploy via Vercel (the connected GitHub push already triggers it). If you must keep GitHub
> Pages, the links would have to be reverted to relative `*.dc.html` form.

> Keep the file names exactly as-is (they match `vercel.json` — note `AI-enterprise.dc.html` is
> capitalized, and its rewrite destination matches that casing) or the links will break.

### Safe to delete before publishing (old backups / unused)

These are not referenced by the live site:

- `mondrian-ai-v1.dc.html`
- `tmobile-coverage-map-v1.dc.html`
- `home.dc.html`  *(the real home is `index.html`)*
- `screenshots/`, `publish/`, `deploy/`, `uploads/`  *(working folders, not part of the site)*
- `PUBLISHING.md`  *(this file)*

Deleting them is optional but keeps the repo clean.

---

## Notes / gotchas

- **No server logic.** Pure static HTML/JS/CSS + media. GitHub Pages serves it directly.
- **Fonts** load from Google Fonts over the network — nothing to bundle.
- **Videos** are `.webm` with `.gif` fallbacks already in `assets/`. Modern browsers use the `.webm`.
- Do **not** rename `support.js` or move it out of the root — every page loads `./support.js`.
- If Pages shows a blank page, confirm `support.js` and the `assets/` folder actually got committed (check `git status` didn't ignore them).
