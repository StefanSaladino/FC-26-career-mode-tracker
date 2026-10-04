# Napoli FC26 — 2027–28 Season Room

A static, dependency-free football team site for a Napoli / Italy FC 26 Career Mode save.

The site is designed as an in-universe football newsroom rather than a spreadsheet dashboard: lead stories, match reports, dressing-room drama, transfer fallout, stats, fixtures, squad pages and a media wall.

## Live site

GitHub Pages deploys directly from the `main` branch root:

`https://stefansaladino.github.io/FC-26-career-mode-tracker/`

## Content model

- `data.js` contains match results, player stats, squad information, fictional in-universe articles, rumours and media entries.
- `app.js` renders the newsroom, article reader, match centre, squad, stats and media wall.
- `development-roster.js` tracks loaned players and the current youth-academy pipeline separately from the first team.
- `assets/` contains local editorial artwork.
- Future gameplay clips can be added to the media wall as local web video files or embeds.

All newsroom reporting, quotes and rumours are fictional and refer only to the Career Mode save.

## Save-state / storyline log

**Tracking rule:** every material save development discussed with the manager is part of the canonical storyline and must be recorded here and/or in the site's appropriate data/story file. This includes match events and results, transfer approaches and negotiations, player requests, injuries, selection decisions, squad-role developments, ratings changes, academy decisions, loans and other ongoing narratives. Unknown outcomes remain pending rather than being guessed.

### January 2028 — current open threads

- **Federico Chiesa transfer request:** Chiesa (30, 82 OVR) wants to leave Napoli. Fiorentina have submitted a **$36.2m** offer with seven days remaining in the January window. Negotiation has been **delegated** with instructions to open at **$50m** and accept no less than a **$45m floor**. Status: **negotiation pending**; no sale is recorded until an agreement is actually reached.
- **Academy promotion window:** with seven days left in January, Burnett (GK, 18/64), Ricci (CB, 18/65) and Brun (RM, 18/61) are the leading candidates for promotion followed by senior loans. No promotion/loan is recorded until completed in-game.
- **Development pipeline:** loaned and academy players are tracked separately from the senior Napoli roster. Current loan and academy ratings are maintained in `development-roster.js`.

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
