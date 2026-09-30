# Napoli FC26 — 2027–28 Career Mode Tracker

Static, dependency-free website for a Napoli / Italy FC 26 Career Mode save.

## Live site

Once GitHub Pages is enabled with **Source: GitHub Actions**, the site is available at:

`https://stefansaladino.github.io/FC-26-career-mode-tracker/`

## Local use

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000`.

## GitHub Pages

The repository includes the official GitHub Pages Actions deployment pattern. Pushes to `main` automatically deploy the repository root.

If this is the first deployment, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. GitHub's `configure-pages` action cannot self-enable Pages using the normal `GITHUB_TOKEN` alone.

No build step or package dependencies are required.
