# Tripp Thomas — Portfolio

Custom Astro site for [trippcreates.github.io/Tripp-Portfolio](https://trippcreates.github.io/Tripp-Portfolio/).
Design: "Drafting Table" — engineering-drawing inspired, IBM Plex type, faint paper grid, red-pencil accent.

---

## One-time setup

1. **Install Node.js** (version 18 or higher).
   Download from [nodejs.org](https://nodejs.org/) — pick the LTS version.

2. **Open a terminal** in this folder and run:
   ```bash
   npm install
   ```
   This installs Astro and its dependencies into `node_modules/` (about 1–2 minutes).

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Open the URL it prints (usually `http://localhost:4321/Tripp-Portfolio/`) in your browser. Edits to any file will hot-reload instantly.

---

## How the site is organized

```
src/
├── pages/
│   ├── index.astro              ← Homepage (edit this for the About/intro text)
│   └── projects/
│       ├── feed-system.md       ← One markdown file per project
│       ├── rc-plane.md
│       ├── model-rocket.md
│       └── drone.md
├── layouts/
│   ├── BaseLayout.astro         ← Shared header/footer
│   └── ProjectLayout.astro      ← Project page template (with title block)
├── components/
│   ├── TitleBlock.astro         ← The engineering-drawing title block
│   └── ProjectCard.astro        ← Homepage project cards
└── styles/
    └── global.css               ← All design tokens (colors, spacing, type)

public/
├── favicon.svg
└── images/                      ← Drop all your project photos here
```

---

## Adding content

### Writing a project page

Each project is one `.md` file in `src/pages/projects/`. The top "frontmatter" block (between the `---` lines) controls the **title block** that appears at the top of the page. Edit those fields and write the body in markdown below.

```markdown
---
layout: ../../layouts/ProjectLayout.astro
title: Rocket Feed System
subtitle: One-line description of the project.
no: FEED-25-01            # Project number — any string you want
dates: Sep 2024 — Feb 2025
role: Feed system lead
team: UCLA Rocket Project
software: SolidWorks · Ansys
result: 13,000 ft · Mach 0.9
status: Launched
hero: /images/feedsystem-hero.jpg     # path inside /public
heroAlt: Description of hero image
---

## Section heading
Body text in **markdown**.

![Caption](/images/some-photo.jpg)
```

### Adding photos

1. Drop the image file into `public/images/`.
2. Reference it with `/images/your-filename.jpg` (note the leading slash).
3. The image will appear with the drafting-style thin black border automatically.

### Adding a new project

1. Create a new `.md` file in `src/pages/projects/` (e.g. `cubesat.md`).
2. Copy the frontmatter from one of the existing project files and fill in your own values.
3. Add an entry to the `projects` array in `src/pages/index.astro` so it shows up on the homepage:
   ```js
   {
     slug: 'cubesat',                     // matches the .md filename
     no: 'SAT-26-01',
     title: 'CubeSat',
     subtitle: 'One-line description.',
     dates: 'Spring 2026',
     result: 'Built and tested',
   },
   ```

---

## Customizing the design

All visual choices live in **`src/styles/global.css`** at the top, under `:root`. Common changes:

| What | Variable | Current |
| ---- | -------- | ------- |
| Paper background | `--paper` | `#FCFCFA` |
| Grid line color | `--grid` | `#DDE2E8` |
| Body text color | `--ink` | `#1A1817` |
| Accent color | `--red-pencil` | `#B5392E` |
| Max content width | `--max-w` | `880px` |

Don't like the grid background? In `global.css`, find the `body` selector and delete the `background-image` and `background-size` lines.

---

## Publishing to GitHub Pages

The repo already has a GitHub Action (`.github/workflows/deploy.yml`) that builds and deploys the site on every push to `main`.

**One-time GitHub setup:**

1. Push this project to your `Tripp-Portfolio` repo (replacing the current Jekyll files).
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment," change the **Source** from "Deploy from a branch" to **"GitHub Actions."**
4. That's it. Every push to `main` will rebuild and redeploy automatically (takes about 1–2 minutes).

The site will be live at `https://trippcreates.github.io/Tripp-Portfolio/` just like before.

### Switching to a custom domain (optional)

If you buy a domain (e.g. `trippthomas.com`):

1. In repo **Settings → Pages**, enter the domain under "Custom domain."
2. Update `astro.config.mjs`:
   ```js
   site: 'https://trippthomas.com',
   base: '/',                     // change from '/Tripp-Portfolio'
   ```
3. Update your DNS at the registrar to point at GitHub Pages ([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

## Useful commands

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Design notes

- **Type:** IBM Plex Sans (body + display) and IBM Plex Mono (labels, metadata, technical content). Loaded from Google Fonts.
- **Signature element:** the engineering "title block" on each project page. It encodes real metadata at a glance — the way an actual drawing does.
- **Section markers (§01, §02, etc.):** generated automatically by the section headings. The §-symbol is colored red-pencil to reference engineering markup.
- **Border-radius is zero everywhere** — hard rectangles, like a drawing.

Built with [Astro](https://astro.build/).
