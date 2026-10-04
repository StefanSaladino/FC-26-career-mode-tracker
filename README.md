# Napoli FC26 — 2027–28 Season Room

A static, dependency-free football team site for a Napoli / Italy FC 26 Career Mode save.

The site is designed as an in-universe football newsroom rather than a spreadsheet dashboard: lead stories, match reports, dressing-room drama, transfer fallout, stats, fixtures, squad pages and a media wall.

## Live site

`https://stefansaladino.github.io/FC-26-career-mode-tracker/`

## Content model

- `data.js` contains match results, player stats, squad information, fictional in-universe articles, rumours and media entries.
- `app.js` renders the newsroom, article reader, match centre, squad, stats and media wall.
- `development-roster.js` tracks loaned players and the current youth-academy pipeline separately from the first team.
- `assets/` contains local editorial artwork.

All newsroom reporting, quotes and rumours are fictional and refer only to the Career Mode save.

## Save-state / storyline log

**Tracking rule:** every material save development discussed with the manager is part of the canonical storyline and must be recorded here and/or in the site's appropriate data/story file. This includes match events and results, transfer approaches and negotiations, player requests, injuries, selection decisions, squad-role developments, ratings changes, academy decisions, loans and other ongoing narratives. Unknown outcomes remain pending rather than being guessed.

### January 2028 — current storyline

- **Serie A — Bologna 0–1 Napoli:** a rotated Napoli side won through substitute Maximilian Beier's 53rd-minute goal. No assist was recorded. Napoli protected the lead for a clean-sheet away win.
- **Title-race swing:** **Inter were held 1–1 by Como** while Napoli beat Bologna. Napoli therefore gained two points on their principal Scudetto rival on the matchday, adding further weight to the three Inter meetings scheduled in February.
- **Champions League — Bodø/Glimt 2–1 Napoli:** Evjen opened the scoring in the 15th minute. Pio Esposito was denied at 18', then equalised at 38' from Maximilian Beier. Beier was denied from close range on a counter at 44'. The match was 1–1 at halftime. Evjen scored his second at 57' and Bodø/Glimt won 2–1. Despite the defeat, **Napoli secured a place in the Champions League knockout playoffs**, guaranteeing that the European campaign continues.
- **Academy promotions completed:** O. Burnett (GK, 18/64), G. Ricci (CB, 18/65) and C. Brun (RM, 18/61) were promoted from the academy into the senior development structure with the January window still open.
- **Burnett loan completed:** O. Burnett (GK, 18/64) has left Napoli on a **two-year loan** after his academy promotion. He now joins Lawton among Napoli's young goalkeepers developing away from the club. Destination club not yet recorded.
- **Ricci and Brun development:** G. Ricci (CB, 18/65) and C. Brun (RM, 18/61) remain with the senior development group while Napoli seek their next steps.
- **Federico Chiesa transfer request:** Chiesa (30, 82 OVR) wants to leave Napoli. Fiorentina submitted a **$36.2m** offer. Negotiation has been **delegated** with instructions to open at **$50m** and accept no less than a **$45m floor**. Status: **negotiation pending**; no sale is recorded until an agreement is actually reached.

### February 2028 — confirmed fixture run

- **Feb 2:** Sassuolo — Coppa Italia, home.
- **Feb 6:** Fiorentina — Serie A, home.
- **Feb 12:** Udinese — Serie A, away.
- **Feb 15:** **Inter — Champions League knockout playoff first leg, home.**
- **Feb 20:** Lecce — Serie A, away.
- **Feb 23:** **Inter — Champions League knockout playoff second leg, away.**
- **Feb 27:** **Inter — Serie A, away.**
- **Inter rivalry pressure point:** Napoli will face Inter three times in 13 days. The two-leg Champions League playoff determines whether Napoli's European season continues, and only four days after the second leg Napoli return to face Inter away in Serie A. With Inter also central to the Scudetto race, this stretch has the potential to define both the European campaign and the domestic title fight.

### Editorial reminders / future story beats

- **Inter triple-header buildup story — REQUIRED:** once Napoli have progressed through the immediate fixtures and the Feb 15 Champions League first leg is approaching, publish a dedicated feature framing the three Inter matches in 13 days as a potentially season-defining rivalry stretch. Do **not** publish it too early: incorporate the latest Serie A table position, form, injuries, transfer-window outcome, squad availability and any developments from the matches before Inter. **Include the Jan 29 title-race swing in which Napoli beat Bologna 1–0 while Inter were held 1–1 by Como.** The feature should emphasize the Feb 15 home UCL first leg, Feb 23 away second leg, and Feb 27 away Serie A meeting, with the European campaign and Scudetto race colliding in the same rivalry.

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
