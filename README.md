# Napoli FC26 — 2027–28 Season Room

A static, dependency-free football team site for a Napoli / Italy FC 26 Career Mode save.

The site is designed as an in-universe football newsroom rather than a spreadsheet dashboard: lead stories, match reports, dressing-room drama, transfer fallout, stats, fixtures, squad pages and a media wall.

## Live site

`https://stefansaladino.github.io/FC-26-career-mode-tracker/`

## Canonical current save state

This README is the continuity reference for the save. Every material development discussed with the manager must be recorded here and/or in the appropriate site data file. Unknown outcomes are never guessed.

### Current domestic position — after Bologna

- **Serie A:** Napoli are **1st on 57 points from 23 matches: 17W–6D–0L**, 33 GF, 12 GA, +21. Napoli remain **unbeaten in Serie A**.
- **Inter/Lombardia FC:** 2nd, **52 points from 23**, 15W–7D–1L, 42 GF, 20 GA, +22.
- Inter's **1–1 draw with Como**, combined with Napoli's 1–0 win at Bologna, stretched Napoli's lead to **five points**.
- Milan: 45 points from 22; Roma: 44 from 23; Atalanta/Bergamo Calcio: 42 from 22; Lazio/Latium: 41 from 23.

### Latest Napoli results

- **Bologna 0–1 Napoli — Serie A:** Maximilian Beier came on as a substitute and scored the winner in the **53rd minute**. No assist recorded. Clean sheet and three points.
- **Bodø/Glimt 2–1 Napoli — Champions League:** Evjen 15', Pio Esposito 38' from Maximilian Beier, Evjen 57'. Napoli lost but **secured a place in the Champions League knockout playoffs**.
- **Napoli 3–0 Como — Serie A:** the preceding league win remains part of the recorded results; do not conflate this match with the Marseille European fixture.
- **Marseille 3–0 Napoli — Champions League:** separate European defeat. Marseille and Como are distinct fixtures and all article/comment context must remain separated.

### European status — IMPORTANT

- Napoli have completed the Champions League league phase and **qualified for the knockout playoffs** rather than being eliminated.
- The knockout-playoff opponent is **Inter**.
- **Feb 15 — Napoli vs Inter — Champions League knockout playoff, first leg, HOME.**
- **Feb 23 — Inter vs Napoli — Champions League knockout playoff, second leg, AWAY.**
- This is a **two-legged European tie**. Do not describe either leg as a league fixture and do not treat Feb 15 as a one-off knockout match.
- Four days after the European second leg, Napoli face Inter again in Serie A, producing **three Inter matches in 13 days**.

### Upcoming fixtures

- **Feb 2:** Napoli vs Sassuolo — **Coppa Italia**, home.
- **Feb 6:** Napoli vs Fiorentina — **Serie A**, home.
- **Feb 12:** Udinese vs Napoli — **Serie A**, away.
- **Feb 15:** Napoli vs Inter — **Champions League knockout playoff, first leg**, home.
- **Feb 20:** Lecce vs Napoli — **Serie A**, away.
- **Feb 23:** Inter vs Napoli — **Champions League knockout playoff, second leg**, away.
- **Feb 27:** Inter vs Napoli — **Serie A**, away.

### Current recorded Napoli production

Stats include all recorded Napoli matches, including friendlies, and are current through the 1–0 win at Bologna.

- **Pio Esposito:** 19 goals, 8 assists.
- **Maximilian Beier:** 11 goals, 5 assists. Bologna winner added; no assist on that goal.
- **Endrick:** 7 goals, 6 assists.
- **Nico Paz:** 2 goals, 7 assists.
- **Kevin De Bruyne:** 3 goals, 1 assist.
- **Alphonso Davies:** 2 goals, 2 assists.
- **Federico Chiesa:** 2 goals, 1 assist.
- **Scott McTominay:** 1 goal, 4 assists.
- **Alessandro Bastoni:** 1 goal, 0 assists.
- **Anton Stach:** 1 goal, 1 assist.
- **Billy Gilmour:** 0 goals, 1 assist.
- **Mikey Moore:** 0 goals, 1 assist.
- **Noa Lang:** 0 goals, 1 assist.

### January squad / development storyline

- **Academy promotions:** O. Burnett (GK, 18/64), G. Ricci (CB, 18/65) and C. Brun (RM, 18/61) were promoted from the academy.
- **Burnett:** sent on a **two-year loan** after promotion. Destination club not yet recorded.
- **Ricci and Brun:** remain in the senior development structure while next steps are assessed.
- **Federico Chiesa:** 30 years old, 82 OVR and wants to leave. Fiorentina offered **$36.2m**. Negotiation was delegated at a **$50m opening price / $45m floor**. No sale is recorded until an agreement is confirmed.
- Loan and academy players remain a separate category from the main first-team roster on the site.

### February pressure point

Napoli enter February **five points clear of Inter and unbeaten in Serie A**, but the month combines the Scudetto race with European survival. The Feb 15 and Feb 23 Inter matches are the two legs of the Champions League knockout playoff; the Feb 27 Inter match is Serie A. The three matches must never be conflated.

### Editorial reminder

- **Inter triple-header buildup story — REQUIRED:** publish when the Feb 15 first leg is approaching, not prematurely. Use the latest table, injuries, transfer-window outcome, squad availability and intervening results. Current benchmark: Napoli 57, Inter 52 after 23 matches; Napoli 17W–6D–0L. Include the Bologna/Como swing and frame the Feb 15 HOME UCL first leg, Feb 23 AWAY UCL second leg and Feb 27 AWAY Serie A match correctly.

## Site synchronization rules

Whenever the save advances, update **all** affected surfaces together:

- Latest result and match-centre results.
- Upcoming fixtures, removing completed fixtures and preserving competition/home-away context.
- Player goals/assists from confirmed match events only.
- Serie A table when the manager provides an updated table.
- News article/storyline and relevant comments.
- README continuity state.
- Ticker/hero where the new event warrants it.
- Cache version after site changes so GitHub Pages does not serve stale data.

## Content model

- `data.js` contains base match results, player stats, squad information, fictional in-universe articles, rumours and media entries.
- Post-match/current-state override files bring the save forward chronologically.
- `stats-official.js` is the current authoritative running player-production layer.
- `standings-current.js` stores the latest supplied Serie A table state.
- `development-roster.js` tracks loaned players and the youth pipeline separately from the first team.
- `app.js` renders the newsroom, article reader, match centre, squad, stats and media wall.

All newsroom reporting, quotes and rumours are fictional and refer only to this FC 26 Career Mode save.

## Local use

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000`.

## GitHub Pages

Pages source: **Deploy from a branch** — `main`, `/ (root)`. Every push to `main` updates the published site automatically. No build step or package dependencies are required.
