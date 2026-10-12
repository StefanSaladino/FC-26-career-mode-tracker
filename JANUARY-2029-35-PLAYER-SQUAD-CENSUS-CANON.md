# Napoli FC 26 · 2028–29 Squad Census

**In-save date:** 7 January 2029, ahead of Napoli–Palermo. **Authority:** manager spoken confirmation. **35 players confirmed:** 22 at Napoli, 13 away on loan. Figures supersede older squad snapshots, without revising the historical ratings quoted in past articles.

## Senior squad: 22

| Player | Age | OVR | Position |
|---|---:|---:|---|
| Alex Meret | 31 | 86 | GK |
| Peacock | 20 | 74 | GK |
| Alphonso Davies | 28 | 89 | LM / LB |
| Marc Cucurella | 30 | 88 | LB |
| Riccardo Calafiori | 26 | 87 | LB / CB |
| Alessandro Bastoni | 29 | 91 | CB |
| Lutsharel Geertruida | 28 | 82 | RB / CB / CDM |
| Alessandro Buongiorno | 29 | 88 | CB |
| Sam Beukema | 30 | 81 | CB |
| Rafa Marín | 26 | 81 | CB |
| Giovanni Di Lorenzo | 35 | 77 | RB |
| Michael Kayode | 24 | 87 | RB |
| Hasa | 25 | 78 | CM / CAM |
| Kevin De Bruyne | 37 | 81 | CAM / CM |
| Scott McTominay | 32 | 88 | CM / CDM |
| Anton Stach | 30 | 81 | CDM / CM |
| João Neves | 24 | 93 | CM / CDM |
| Nico Paz | 24 | 88 | CAM / RM |
| Michael Olise | 27 | 91 | RW / RM |
| Mikey Moore | 21 | 84 | W / AM |
| Maximilian Beier | 26 | 89 | ST |
| Pio Esposito | 23 | 87 | ST |

## Out on loan: 13

| Player | Age | OVR | Position |
|---|---:|---:|---|
| Lawton | 18 | 73 | GK |
| O. Burnett | 19 | 71 | GK |
| Marianucci | 24 | 75 | CB |
| Valentini | 19 | 69 | CB |
| G. Ricci | 19 | 68 | CB |
| Reyna | 20 | 69 | CB |
| Sanchez | 19 | 66 | CDM |
| L. Resende | 17 | 68 | CAM |
| C. Brun | 19 | 71 | RM |
| Mancini | 20 | 75 | RM |
| Rao | 22 | 73 | LW |
| Vergara | 25 | 73 | RW |
| Giovane | 25 | 76 | ST |

## Personnel decisions and guardrails

- **Giovanni Di Lorenzo** (35 / 77) is still a Napoli player and captain. Contract negotiations have broken down. Everton approached him, but no departure, signed agreement or transfer fee is confirmed. Do not record a completed sale or remove him from the senior squad.
- **Luis Hasa** (25 / 78) has returned from loan. He is in the senior squad for now; his role is under evaluation. **Not** on the list of 13 players presently loaned out. Do not invent a completed transfer or new loan.
- **L. Resende** (17 / 68) is loaned out and has already been promoted from the academy; his rating now supersedes the older 65 OVR loan record. Academy potential ranges for other youth players were **not** newly provided.
- **Peacock** is 20 / 74. **Lawton** is 18 / 73 on loan. **O. Burnett** is 19 / 71 on loan. Do not accidentally relabel loaned goalkeepers as first-team keepers.
- Normalize spoken surnames against established squad names: Ali-Burnette → O. Burnett; Buik ema → Sam Beukema; Gertruda → Lutsharel Geertruida; Marinucci → Marianucci; Brunn → C. Brun; Emmanuel Rao → Rao; Haza → Hasa. Do not silently create duplicate player rows.
- Only ages, current overalls, and loan statuses were updated. **No new lineup, kickoff result, match stats, transfer fee, or player interview is implied.** The next fixture remains **Palermo at home, Serie A, 7 January 2029, unplayed**, after Napoli defeated Parma 2–0 January 4; standings remain Napoli 45 points from 18 played.

## Implementation

The current live presentation is provided by `state-squad-ratings-jan7-2029.js`, imported after the dated 4 January Parma state and before `app.js` in `index.html`. The squad rows now render verified ages alongside overalls. Historical documents retain their period-specific ratings as archival information, rather than being rewritten retroactively.
