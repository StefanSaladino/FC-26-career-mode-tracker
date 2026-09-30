# Napoli FC26 — 2027–28 Season Room

A static, dependency-free football team site for a Napoli / Italy FC 26 Career Mode save.

The site is designed as an in-universe football newsroom rather than a spreadsheet dashboard: lead stories, match reports, dressing-room drama, transfer fallout, stats, fixtures, squad pages and a media wall.

## Live site

GitHub Pages deploys directly from the `main` branch root:

`https://stefansaladino.github.io/FC-26-career-mode-tracker/`

## Content model

- `data.js` contains match results, player stats, squad information, fictional in-universe articles, rumours and media entries.
- `app.js` renders the newsroom, article reader, match centre, squad, stats and media wall.
- `assets/` contains local editorial artwork.
- Future gameplay clips can be added to the media wall as local web video files or embeds.

All newsroom reporting, quotes and rumours are fictional and refer only to the Career Mode save.

## Local use

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000`.

## GitHub Pages

Pages source: **Deploy from a branch**

- Branch: `main`
- Folder: `/ (root)`

Every push to `main` updates the published site automatically. No build step or package dependencies are required.
