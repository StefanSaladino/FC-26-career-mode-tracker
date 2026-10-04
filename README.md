# Napoli FC26 — 2027–28 Season Room

A static, dependency-free football team site for a Napoli / Italy FC 26 Career Mode save.

## Canonical current save state

This README is the continuity reference for the save. Every material development discussed with the manager must be recorded here and/or in the appropriate site data file. Unknown outcomes are never guessed.

### Current domestic position — after Bologna

- **Serie A:** Napoli are **1st on 57 points from 23 matches: 17W–6D–0L**, 33 GF, 12 GA, +21. Napoli remain **unbeaten in Serie A**.
- **Inter/Lombardia FC:** 2nd, **52 points from 23**, 15W–7D–1L, 42 GF, 20 GA, +22.
- Inter's **1–1 draw with Como**, combined with Napoli's 1–0 win at Bologna, stretched Napoli's lead to **five points**.
- Milan: 45 points from 22; Roma: 44 from 23; Atalanta/Bergamo Calcio: 42 from 22; Lazio/Latium: 41 from 23.

### Latest Napoli results — chronological, newest first

1. **Bologna 0–1 Napoli — Serie A:** Maximilian Beier came on as a substitute and scored the winner in the **53rd minute**. No assist recorded. Napoli kept a clean sheet and took all three points.
2. **Bodø/Glimt 2–1 Napoli — Champions League:** **Evjen 15'**, **Pio Esposito 38' (assist: Maximilian Beier)**, **Evjen 57'**. Pio had also been denied by the goalkeeper at 18', while Beier was denied from close range at 44'. The match was 1–1 at halftime. Napoli lost 2–1, but the result **did not eliminate Napoli**: Napoli secured a place in the **Champions League knockout playoffs**.
3. **Napoli 3–0 Como — Serie A:** Kevin De Bruyne opened the scoring; Endrick and Pio Esposito also scored. Endrick and Pio each finished with a goal and an assist. This is a separate domestic fixture and must never be conflated with Marseille.
4. **Marseille 3–0 Napoli — Champions League:** separate European defeat before the Como league win. Marseille, Como and Bodø/Glimt are three distinct fixtures with distinct match/article/comment context.

**Recent-result continuity rule:** until another Napoli match is completed, the site's recent-results sequence must begin **Bologna 0–1 Napoli → Bodø/Glimt 2–1 Napoli → Napoli 3–0 Como → Marseille 3–0 Napoli**. Bodø/Glimt must remain visible directly behind Bologna and its Pio goal/Beier assist must remain included in running player statistics.

### European status — IMPORTANT

- Napoli's most recent Champions League match was the **2–1 defeat away to Bodø/Glimt**.
- Despite that defeat, Napoli completed the Champions League league phase with a place in the **knockout playoffs**. The European campaign is still alive.
- **Feb 15 — Napoli vs Inter — Champions League knockout playoff, first leg, HOME.**
- **Feb 23 — Inter vs Napoli — Champions League knockout playoff, second leg, AWAY.**
- Four days later, **Feb 27 — Inter vs Napoli — Serie A, AWAY.** These are three separate fixtures and the two European matches form one two-legged tie.

### Upcoming fixtures

- **Feb 2:** Napoli vs Sassuolo — **Coppa Italia**, home. Planned rotation; Kevin De Bruyne is expected to start.
- **Feb 6:** Napoli vs Fiorentina — **Serie A**, home.
- **Feb 12:** Udinese vs Napoli — **Serie A**, away.
- **Feb 15:** Napoli vs Inter — **Champions League knockout playoff, first leg**, home.
- **Feb 20:** Lecce vs Napoli — **Serie A**, away.
- **Feb 23:** Inter vs Napoli — **Champions League knockout playoff, second leg**, away.
- **Feb 27:** Inter vs Napoli — **Serie A**, away.

### Current recorded Napoli production

Stats include all recorded Napoli matches and are current through Bologna. **Bodø/Glimt is included: Pio's 38' goal and Beier's assist count.**

- **Pio Esposito:** 19 goals, 8 assists.
- **Maximilian Beier:** 11 goals, 5 assists.
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

### Deadline-day transfer storyline

- **Endrick — Juventus bid REJECTED:** Juventus made an extraordinary **$188M** eleventh-hour offer for Endrick. Napoli **rejected the bid**. Endrick remains a Napoli player for the Scudetto race and Champions League knockout campaign. The context is critical: Napoli are five points clear, unbeaten in Serie A, the window is closing, and the buyer was a major domestic rival. This is a completed decision, not a pending negotiation.
- **Federico Chiesa:** wants to leave. Fiorentina offered **$36.2M** and negotiation was delegated at a **$50M opening price / $45M floor**. No sale is recorded until an agreement is confirmed.

### January squad / development storyline

- **Academy promotions:** O. Burnett (GK, 18/64), G. Ricci (CB, 18/65) and C. Brun (RM, 18/61) were promoted.
- **Burnett:** sent on a **two-year loan**. Destination club not yet recorded.
- **Ricci and Brun:** remain in the senior development structure.

### February pressure point

Napoli enter February **five points clear of Inter and unbeaten in Serie A**, but after European defeats to Marseille and Bodø/Glimt the Champions League form is a genuine concern. Napoli face Inter three times in 13 days: Feb 15 HOME in UCL leg one, Feb 23 AWAY in UCL leg two, and Feb 27 AWAY in Serie A.

### Editorial reminders

- **Inter triple-header buildup story — REQUIRED:** publish when Feb 15 approaches. Use the latest table, injuries, transfer-window outcome, squad availability and intervening results. Include the Bologna/Como title-race swing, the Marseille/Bodø European context, and the **deadline-day rejection of Juventus' $188M Endrick bid** as evidence that Napoli chose sporting continuity over cash before the decisive stretch.
- **Endrick/Juventus story — PUBLISHED:** headline framing is Napoli rejecting a massive domestic-rival bid on deadline day. Do not portray Endrick as sold, negotiating personal terms, or unsettled unless a later event establishes that.

## Site synchronization rules

Whenever the save advances, update **all** affected surfaces together: latest results; upcoming fixtures; confirmed goals/assists; table when supplied; newsroom/storyline; README; ticker/hero where warranted; and cache version after site changes.

## Content model

- `data.js` contains base match results, player stats, squad information, fictional in-universe articles, rumours and media entries.
- Post-match/current-state override files bring the save forward chronologically.
- `stats-official.js` is the current authoritative running player-production layer.
- `standings-current.js` stores the latest supplied Serie A table state.
- `development-roster.js` tracks loaned players and the youth pipeline separately from the first team.
- `app.js` renders the site.

All newsroom reporting, quotes and rumours are fictional and refer only to this FC 26 Career Mode save.
