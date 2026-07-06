# Portfolio

Personal portfolio website — an AI Engineer portfolio built with **Next.js, Tailwind CSS, Framer Motion, Lenis** smooth scroll, and an interactive **Spline** 3D hero. No preloader; the page renders instantly with a light hero fade-in.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit things

Almost everything lives in **one file**: [`lib/content.ts`](./lib/content.ts).
- `site` — your name, role, tagline, email, resume path
- `socials` — your social links
- `about`, `skillGroups`, `projects`, `timeline` — section content
- `heroSplineUrl` — your 3D hero scene (see below)

## Change the accent color / theme

Open [`app/globals.css`](./app/globals.css) and edit the CSS variables under `:root`.
The whole site is driven by `--accent` (RGB channels, space-separated). For example, for a violet accent:

```css
--accent: 139 92 246;
--accent-glow: 139 92 246;
```

## Set your Spline 3D hero scene

1. Go to https://spline.design/ and open the **Community** tab (thousands of free scenes) — or design your own.
2. Open a scene → **Export** (top-right) → choose **Public URL** / **Code (React)** → copy the URL ending in `.splinecode`.
3. Paste it into `heroSplineUrl` in `lib/content.ts`.

A default scene is pre-filled so the site works immediately. Set `heroSplineUrl = ""` to use the built-in animated placeholder instead of Spline.

## Add your resume

Drop `resume.pdf` into the `public/` folder (path already wired as `/resume.pdf`). To hide the button, set `resumeUrl: ""` in `lib/content.ts`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config. Or:

```bash
npm run build && npm run start
```
