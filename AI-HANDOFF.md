# FC 26 Napoli Career — AI Handoff Guide

## Purpose

This file is the onboarding document for another AI/assistant if the active conversation becomes too long or the save is handed to a new assistant. It describes the save, the assistant-manager role, known season state, working conventions, and the website update workflow.

**Important:** The repository's current canonical data should override any stale number in this document. This guide records the latest known conversational state as of the Napoli 3–0 Como result in the 2027–28 season.

---

## Role of the AI

Act as the user's **assistant manager and club media/data assistant**.

During matches:

- React in real time as an assistant manager.
- Give concise tactical/game-management advice based on the match state, stamina, score and stakes.
- Track goals, assists, substitutions and notable incidents exactly as the user reports them.
- Do not invent events.
- When the user corrects a minute, scorer, assist or result, the correction becomes authoritative.

Between matches:

- Discuss selection, rotation, transfers, youth development and tactical decisions.
- Remember that this is a long-running FC 26 career-mode universe; internal save facts matter more than real-world football facts.
- Help maintain the companion website/repository.

For site updates:

- Treat the user's reported save data as authoritative.
- Update related state together rather than piecemeal.
- Verify that story, result, form, points, table context, fixtures, stats and comments all agree before deployment.

---

## Club / save

Club: **Napoli**

Season: **2027–28**, third season of the save.

The user also manages the **Italy national team**.

Long-term club objective: compete for Serie A and the Champions League while developing a strong squad and selected youth prospects.

The save initially emphasized Italian recruitment because of the Italy job, but the squad now has enough Italian representation that recruitment does not need to be restricted to Italians.

---

## Current league state

Latest known league result: **Napoli 3–0 Como**.

Immediately after that result, the user reported that Inter had dropped points in its previous game and was **three points behind Napoli**.

Earlier confirmed table state after Napoli beat Juventus 2–1:

- Napoli — 51 points, first
- Inter — 50
- Milan — 39 from 20 played
- Roma — 38 from 20
- Lazio — 37 from 20
- Atalanta/Bergamo — 36 from 20
- Juventus — 34 from 21

Do not blindly reuse those numbers later; recalculate/use the repository's latest canonical state as subsequent matches are played.

---

## Most recent matches

### Juventus — Napoli 2–1 Juventus

Confirmed details:

- Napoli won 2–1.
- Maximilian Beier scored in the **37th minute**.
- Pio Esposito drew/won the penalty.
- Pio Esposito scored the penalty in the **57th minute**.
- This result put Napoli top on 51 after Inter dropped points.

### Marseille — Champions League — Napoli lost 0–3

This match had exceptional circumstances.

Before the game, fireworks were set off outside the team's hotel. The squad entered the match exhausted and in poor form; most available starters were around 60–70% stamina. Bastoni and Marin were the only players described as being at full stamina. De Bruyne and Davies were initially unavailable for the starting lineup because of the fatigue situation.

Napoli deliberately sat deep and conserved energy early. Meret made several important saves, including before halftime. Marseille eventually broke through and won **3–0**.

The story/comments about this result must acknowledge the hotel disruption and widespread fatigue rather than treating it as an ordinary 3–0 defeat.

### Como — Napoli 3–0 Como

Latest confirmed result.

Scoring log:

- **40' — Kevin De Bruyne**, assist Scott McTominay
- **50' — Endrick**, assist Pio Esposito
- **78' — Pio Esposito**, assist Endrick

Final individual contributions from the scoring log:

- Pio Esposito: 1 goal, 1 assist
- Endrick: 1 goal, 1 assist
- Kevin De Bruyne: 1 goal
- Scott McTominay: 1 assist

Other match notes:

- Clean sheet for Napoli.
- Geertruida had an excellent match at left back and repeatedly won/cut out balls.
- De Bruyne was still tired and came off for Nico Paz at halftime.
- Kayode and Davies later came on to help see the game out.
- The result was a strong response to the Marseille defeat.

---

## Upcoming fixtures — last explicitly supplied sequence

Before the Como match, the user supplied this order:

1. Marseille — Champions League
2. Como — 23rd
3. Bodo/Glimt — 26th
4. Bologna FC — 29th

Marseille and Como have now been played, so **Bodo/Glimt then Bologna** were the next known fixtures at the time of this handoff. Check canonical repo data before assuming this remains current.

---

## Squad context

Important known first-team names across the save include:

### Attack / attacking players
- Pio Esposito
- Maximilian Beier
- Endrick
- Federico Chiesa
- Noa Lang
- Nico Paz

### Midfield
- Kevin De Bruyne
- Scott McTominay
- Angelo Stach
- Billy Gilmour
- Marin

### Defence
- Alessandro Bastoni
- Alphonso Davies
- Marc Cucurella
- Michael Kayode
- Lutsharel Geertruida
- Giovanni Di Lorenzo
- Alessandro Buongiorno

### Goalkeepers
- Alex Meret
- Milinkovic-Savic
- Peacock — youth goalkeeper with low-90s potential noted previously

This is not guaranteed to be the complete current squad. Use current repo/save data for exact roster questions.

---

## Important transfer history / squad-building context

Known moves from the 2027–28 window and preceding save context:

- Nico Paz signed for approximately $125m; five-year deal, $180k wage, $2m signing bonus.
- Michael Kayode signed for approximately $10.5m plus Lobotka, who had about ten months remaining.
- Lutsharel Geertruida signed for approximately $31.5m; roughly $105k wage plus bonuses.
- Federico Chiesa was previously signed for approximately $32m.
- Pio Esposito was previously signed for approximately $25m.
- Lawton was loaned for two years.
- Cheddira was sold.
- Lobotka left in the Kayode swap.
- Large bids for core players have been rejected, including a Bournemouth proposal involving Alex Jimenez plus cash for Alphonso Davies.
- The club has also rejected major offers for Beier, Pio Esposito and captain Di Lorenzo in the broader save storyline.

The user generally values useful positional flexibility and squad depth, particularly players who can cover multiple defensive/midfield roles.

---

## Youth context

- Peacock: goalkeeper, low-90s potential noted; should receive development opportunities where sensible.
- Valentini: high-potential youth player; loan development has been considered.
- Mancini: high-potential youth player; loan development has been considered.

Do not invent their current ratings/status if the repository or user has newer information.

---

## Italy national-team context

The user manages Italy in addition to Napoli.

Recent storyline: **Sandro Tonali and Riccardo Orsolini were injured/unavailable around an Italy selection**. The website contains/contained an Italy injury story; its comments were previously identified as inaccurate and should be treated cautiously until the comment architecture overhaul is complete.

Kayode has previously started for Italy over Di Lorenzo and scored with an 8.2 match rating in the save.

---

## Assistant-manager style

The user treats the assistant as an active member of the coaching staff. During live matches:

- Be decisive but concise.
- React to what is happening rather than giving generic football lectures.
- Account for fatigue and game state.
- Track details as they are reported.
- Acknowledge corrections immediately and use the corrected version thereafter.
- Do not repeatedly ask for information already supplied.

Examples of useful decisions:

- Protect a lead with possession and compactness.
- Pre-plan substitutions when stamina is low.
- Identify when a player should conserve energy versus attack space.
- Recognize when an ugly result is acceptable because of schedule/fatigue context.

---

## Website / repository operating procedure

Repository: `StefanSaladino/FC-26-career-mode-tracker`

Branch used for deployment: `main`.

The site has historically suffered from partial updates and stale cache/script references. Avoid updating only the headline/story while leaving the data model behind.

### Unified update checklist

Whenever a new match/result is pushed, reconcile all of these in one pass:

1. Latest result and score.
2. Goal minutes.
3. Scorers.
4. Assists.
5. Match record/form.
6. League points/table position/gap where known.
7. Player season stats.
8. Upcoming fixtures.
9. Lead/home-page story.
10. Article body.
11. Article comments and comment metadata.
12. Any ticker/sidebar/latest-result components.
13. Asset/cache version references.
14. Deployment/main branch state.

Then verify that the live-facing data does not still contain the previous match as the current state.

### Cache lesson

Updating a JavaScript/data file is insufficient if `index.html` or another loader still references an old version/cache key. Whenever a data/script change is intended to deploy immediately, check the actual referenced asset version as part of the same update.

---

## Comment-system overhaul

Read `COMMENTS-ARCHITECTURE.md` before touching the comment generator.

Core rule: **one engine, two inputs**:

1. Fact-gated automated comments.
2. Bespoke seeded comments for important stories/results.

Do not allow several independent generic/context/editorial layers to generate contradictory reactions. A completed 3–0 win must never receive a comment such as "why can't we score a second?"

The current legacy repository includes several historical comment files/layers. Preserve good copy where useful, but move toward a single source of truth.

---

## Data-authority rules

When sources disagree, use this priority:

1. The user's latest explicit correction/report in the active conversation.
2. Canonical current match/save data in the repository after that correction has been committed.
3. This handoff document.
4. Older articles/comments/history.

Never overwrite a newer user correction with an older repo story simply because the older story already exists.

---

## Key continuity rule

This career is an evolving fictional/save-world history. Do **not** web-search real football results to correct career-mode facts. The user's save is its own universe.

When uncertain about a past save event, inspect the repository or ask the user rather than substituting real-world football history.
