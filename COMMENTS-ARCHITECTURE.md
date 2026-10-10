# Comment System Architecture

## PUBLIC NEWSROOM VS PRIVATE DRESSING ROOM · 10 OCTOBER 2026 · PERMANENT RULE

The **manager and assistant manager's private conversations are still canon** and materially shape football decisions, but they are **NOT automatically public statements**. `STAFF-ROOM-CANON.md` preserves the internal Meret/Peacock coaching-room storyline and must **NEVER** be loaded into the Season Room site or sourced for fan comments, press claims, headlines or public tickers. Note: this is an **editorial firewall**, not GitHub privacy; the repository is publicly readable.

**Journalistic camera stays inside the football world.** The newsroom attends matches, watches the game, reads the confirmed team sheet and league honours, and can independently analyse visible results. DO NOT claim the manager or the user "reported" a goal, supplied data, confirmed a match event, furnished a screenshot, or explained what happened to the staff. Do not describe missing user inputs, unverified saves, archive limitations, "in-game", the save, or code work in published football prose. If a detail is unknown, omit the detail and keep the writing natural rather than writing a disclaimer about not receiving it.

**Quotes and manager public criticism:** Only actual public interviews, user-played press conference scenes and expressly authorised public statements may be attributed to the manager. Ordinary tactical chat with the AM—even emotional criticism of players—is PRIVATE. Do not invent quotes, leaks or a press reaction to that private criticism. Football supporters may debate Peacock's observed selection, breakaway stop, clean sheet and Team of the Week award, but may NOT know or react to Saladino's private assessment of Meret. Meret's place in the squad is not necessarily a public crisis because staff privately debated it.

**Scope every interaction:** `internal-coaching`, `press-conference`, `public-interview`, `on-field`, `official-award`, or `public-analysis`. Only the last five can support publication, and press/public interview statements require genuine user-authored public answers.

**Retcon applied to 2028 PSG and Monza coverage:** The analysis piece formerly asserting "Saladino questions Meret" is rewritten as collective European tactics analysis. Monza previews no longer expose the private Peacock trial recommendation. The Peacock Team of the Week article covers the keeper's ACTUAL start, breakaway save, clean sheet and official selection independently. The team's behind-the-scenes reasoning stays preserved in the staff canon, never flattened or forgotten.

---


## CURRENT OPERATING RULES — 9 OCTOBER 2026 (SUPERSEDES ORIGINAL GENERATOR DESIGN BELOW)

- **Preserve existing authored posts, do not replace or drop them.** Threads are assembled by exact article ID from the reviewed maps in `comments-engine-v2.js` and `comments-curated-archive.js`, the Galatasaray and historical backfill archives, original `a.comments` / `a.seededComments` in post scripts, and the 80 **static** saved legacy bespoke comments in `comments-legacy-authored.js`. All authored nested replies remain attached to their original parent. Deduplicate repeated copies of the same author/comment while merging their saved replies.
- **Recurring cast is mandatory continuity:** `CurvaB`, `TacticalNonno`, `SaladinoOutNow`, `NapoliDoomer`, `PioNation`, `PioHaterForNoReason`, `BeierHive`, `MeretUnion`, `DaviesExpress`, `BastoniAgenda`, `BuongiornoBrigade`, `NapoliTherapy`, opposition and Italy fans, and the broader established cast. Preserve each account's voice, grudges and chronology; reuse when genuinely relevant, never stamp the same text across all threads.
- **No synthetic filler:** Retired random, commentHeat, context-hash and old seeded fallback generators stay disabled. `comments.js` must never be executed. Its 80 bespoke seeds have been *copied as inert data*, not restored as an algorithm. Do not backfill later knowledge into earlier threads.
- **Source fidelity:** Article-authored comments are first-class published archival content, not disposable input. Preserve original comments, Italian/Napoletano language, guest voices and nested replies through renderer changes. A previously authored comment may be excluded only if demonstrably factually incorrect or chronologically misplaced; archive it rather than silently destroying the source.
- **Loader and validation:** The archive scripts load before `comments-engine-v2.js` in `index.html`; bump cache query strings with content changes. Validate JS syntax, cross-check loaded IDs and per-article comment/reply counts, review relevant live reader/mobile behavior when a browser is available, and never claim browser verification when none occurred.
- **For new stories:** Follow the **manager's turnout and emotional-intensity scale** below. Substantially more hand-authored comments and meaningful replies are required going forward; an unreviewed new thread still shows the explicit empty state rather than fabricated posts.

## Supporter-thread scale and emotional intensity — manager directive · 9 October 2026

**Effective for all NEW articles and new match reports; this replaces the old 2–5 comments default.** A convincing Napoli football community should feel substantially busier, especially when the stakes or surprise warrant it. The article's actual in-universe impact determines both the number of distinct top-level comments and the intensity of the replies, not a random generator.

| Article / event | Editorial target (top-level comments) | Reaction and conversation |
| --- | --- | --- |
| Routine news, previews, minor features, expected results | **6–10** | Thoughtful variety, a handful of authentic replies, modest disagreements and running jokes |
| Typical league/cup match, meaningful player performance, ordinary dropped points | **10–16** | More supporters weighing in, competing player takes, some arguments and meaningful back-and-forth |
| Derby/rivalry, title-six-pointer, major Champions League match, high-profile transfers, controversial selection, unexpected draw or upset | **16–25** | Noticeably crowded and heated; rival fans, distinct factions, receipts, frustrations, passionate Italian/Napoletano reactions, multiple live-feeling reply exchanges |
| Historic final, trophy clincher, catastrophic upset, extraordinary comeback, dramatic elimination, highly shocking or deeply polarising result | **25–40+**, if the confirmed event genuinely warrants it | The comment section should *explode*: jubilant or furious supporter factions, arguments, hot takes, people walking back old predictions, rival visitors, memorable quote-worthy meltdowns, and substantially more nested replies |

**Scale importance AND surprise separately.** Even an ostensibly low-profile fixture can generate a furious crowd if Napoli lose unexpectedly, concede late, blow a big lead, or survive a wild comeback. Conversely, an uneventful expected win should not read like a Champions League final. Emotional heat may also come from a dramatic refereeing incident, managerial controversy or transfer shock when actually confirmed in the save.

- These are **editorial targets**, not mechanically enforced counts or permission to pad threads. A large story should contain multiple distinct reactions and genuinely sustained interactions; do not meet a target with repetitive copy. Add relevant top-level voices and context-responsive replies instead of random filler.
- **Recurring supporter cast and continuity are essential.** Let `CurvaB`, `TacticalNonno`, `SaladinoOutNow`, `NapoliDoomer`, `PioNation`, `PioHaterForNoReason`, `BeierHive`, `MeretUnion`, etc. react consistently and sometimes fight, admit errors, double down or bring receipts from their earlier remarks. Mix these accounts with ordinary fans, rivals and visiting supporters rather than letting the same few monopolise every thread.
- Stronger results may mean **more emotional language**, passionate colloquial Italian, occasional natural Neapolitan and justified profanity; avoid universal all-caps, cartoon rage, identical reactions or outrage unrelated to the actual result. The thread needs both exuberant/angry voices and occasional cooler tactical observers.
- Create **substantial nested reply exchanges** on important stories. Replies answer the specific parent and respect chronology; keep the one-level thread UI unless the design changes explicitly. Opponent fans should have distinct views; fan rivalries should grow through prior article history.
- Do not invent unconfirmed match facts, manager quotations, injuries, controversy or outcomes to manufacture engagement. Never insert future knowledge in historically earlier posts.
- Every reaction remains **hand-authored for that specific article ID** and preserved when article or rendering code changes. The old synthetic generator and generic fallback remain disabled; grow the bespoke editorial threads, not an algorithm.
- On every new article: assign a **reaction tier** from the story's stakes + unexpectedness, author an appropriately sized thread, verify both comment and reply counts and factual/timeline accuracy, and inspect the mobile reader when possible.

## ORIGINAL ENGINE DESIGN (HISTORICAL, NO LONGER ACTIVE)


## Purpose

The comment section should feel like a live football community without ever contradicting the article or match state. The system has two sources only:

1. **Fact-gated automated comments** — reusable comments selected only when their conditions are true.
2. **Article-specific seeded comments** — bespoke reactions written for important stories/results.

The goal is to retire overlapping generic/context/authenticity/editorial generators as independent sources of truth. One engine should own the final thread.

## Source of truth

Every article should expose structured comment metadata. The comment engine must use these fields instead of trying to infer match state from prose.

Recommended fields:

```js
commentMeta: {
  status: 'final', // preview | live | halftime | final | news
  competition: 'serie-a',
  context: 'league-regular',
  opponent: 'COMO',
  napoliGoals: 3,
  opponentGoals: 0,
  result: 'win', // win | draw | loss | null
  cleanSheet: true,
  scorers: ['De Bruyne', 'Endrick', 'Pio Esposito'],
  assists: ['McTominay', 'Pio Esposito', 'Endrick'],
  tablePosition: 1,
  tableLead: 3,
  specialTags: ['pio-goal-assist', 'endrick-goal-assist', 'geertruida-strong-game']
}
```

## Canonical recurring supporter cast

These accounts are part of the save universe. **Do not delete, replace, homogenize or silently retire them when the comment engine changes.** New personas may be added, but the established cast must remain available and their agendas must stay recognizable over time. They do not all appear in every thread; recurring characters should be sprinkled naturally so recognition is rewarding rather than repetitive.

### Manager agenda / chaos accounts

- **SaladinoOutNow** — permanent anti-Stefan Saladino agenda. Can find a reason to demand the manager's dismissal after almost anything, including wins and clean sheets. The comedy is that success forces increasingly desperate rationalizations. Occasionally admits the agenda has suffered a setback (canonical energy: “I regret to inform everyone that my agenda has suffered a significant setback.”). Never convert him into a normal supporter because Napoli are winning.
- **NapoliDoomer** — declares the project/club/season finished at the first sign of trouble and is fully capable of reversing the take after the next win.
- **NapoliTherapy / 90MinuteNervousBreakdown / SanPaoloSufferer / matchday_meltdown** — emotionally damaged Napoli regulars. They expect every comfortable situation to become stressful.
- **NoTacticsJustVibes** — embraces the chaos and reacts emotionally rather than pretending to be an analyst.
- **TransferListEveryone / scapegoat_selector** — irrational blame and instant-sale energy when somebody has a bad moment.
- **VARConspiracyDesk / touchlinelawyer** — officiating paranoia and procedural outrage when the match actually gives them something to complain about.

### Player defenders, cults and agendas

- **PioNation / PioEra / PioShirtOwner** — the Pio Esposito believers. Protect him, celebrate him, demand minutes and become increasingly unreasonable when he delivers.
- **PioHaterForNoReason** — irrational Pio critic. This account is deliberately unfair and must survive Pio's success. A Pio goal does not necessarily end the agenda; it may simply produce a new complaint. Use sparingly so the bit stays funny.
- **BeierDefenseLeague / BeierHive** — Beier defenders who notice his work even when another striker gets the headline. With Beier's breakout, they now have receipts.
- **EndrickEra** — Endrick advocate; especially vocal when his minutes or production justify a larger role.
- **PazEnjoyer / Pazienza** — Nico Paz believers; interested in creativity and the KDB succession story.
- **ChiesaHive / FedeForever / ChiesaCurve** — Chiesa defenders and emotional supporters.
- **MeretUnion / MeretWall / MeretRedemptionTour** — goalkeeper defenders who keep receipts from big saves and push back when Meret is overlooked.
- **DaviesExpress / DaviesDrive** — Alphonso Davies attack/transition enthusiasts.
- **BastoniAgenda / BastoniWall** — Bastoni defenders who treat elite defensive interventions as headline events.
- **BuongiornoBrigade** — refuses to let Bastoni receive all the credit for the centre-back partnership.
- **StachAttack** — Stach appreciation account, particularly for low-glamour utility contributions.
- **CaptainRespect** — defends Di Lorenzo's value and legacy even as Kayode emerges.
- **KDBClock / KDBVision** — De Bruyne veteran-quality appreciation.
- **GeertruidaWatch** — tracks the value of Geertruida's versatility and quiet defensive work.
- **PeacockWatch** — follows Peacock's development and senior opportunities.

Player defenders and player haters are both canon. **Do not flatten the ecosystem into universal praise when the team is successful.** Contradictory fan agendas are a feature.

### Tactical / squad-management regulars

- **TacticalNonno / tacticalnonno / MidfieldNonno** — old-school tactical criticism, usually specific to shape, midfield control or game management.
- **RotationPolice** — scrutinizes every rotation decision and is willing to blame squad management for problems.
- **SquadDepthDept** — opposite tendency: stresses that congested schedules require the bench and rotation players.
- **CurvaCalculator** — lives inside title-race, aggregate and qualification arithmetic.
- **CalendarVictim** — complains about fixture congestion.
- **PressingTruther / SecondBallMerchant / LowBlockSurvivor / SetPiecePanic / HalftimeOverthinker / ExpectedGoalsHater** — recognizable tactical hobbyhorses; deploy only when the article actually supports the subject.
- **ActuallyWatchTheGame / PartenopeiProfessor / SouthStandAnalyst / PiazzaPundit** — comparatively reasonable analysts who keep the thread from becoming pure shouting.

### Core Napoli community

Recurring general supporters include **VesuvioVoice, CurvaB, ScudettoOrBust, BlueSideNaples, ForzaSempre, SanPaoloSoul, SempreNapoli, OldSchoolAzzurro, VomeroView, NaplesAwayDays, NapoliSinceBirth, OneNilEnjoyer, CleanSheetCult, LateGoalTrauma, EuropeanNights, CupRomantic, TitleRaceInsomnia, MercatoMadness, NoSellingAllowed, VesuviusPress, AwayDayNapoli, curva_commentator, napoli_in_my_blood, partenopei92, northstandnoise, bluewall, vesuvio_voice** and other established handles already present in legacy seeded threads.

Do not purge an older named account merely because a newer engine has a shorter handle array. The legacy pool is canon material to preserve and selectively reuse.

### Opposition and rival invaders

Opposition fans are part of the atmosphere, especially around major matches. Preserve established visitor identities where possible (Inter/Nerazzurri accounts, Milan supporters, Juventus supporters, Arsenal/Gooner accounts, Bayern/Südkurve accounts, Chelsea visitors, Roma/Lazio/Genoa/Torino/Fiorentina/Pisa/Sassuolo/Udinese visitors, etc.). Generic visitor handles such as **AwayEndTourist, OppositionScout, ScoreboardMerchant, VisitingNoise, RivalWithReceipts, CommentSectionInvader, RivalHistorian, AwayFanOnWifi** may supplement them.

Rival supporters should sound like rival supporters: they may troll, cope, acknowledge a fair result reluctantly, or arrive with receipts. They should not read like Napoli supporters wearing a different username.

### Continuity rules for personas

1. **Additive, not replacement.** Engine migrations must carry the cast forward.
2. **Agendas persist.** A player hater does not become a fan because of one goal; a defender does not abandon his player after one miss.
3. **Opinions may evolve, identities should not randomly reset.** Reversal-prone accounts can reverse rapidly because that is their established personality.
4. **Do not overcrowd threads.** Most articles need only a few recognizable recurring accounts among ordinary supporters.
5. **Match the account to the story.** Pio accounts belong where Pio is relevant; rival fans belong around their club; tactical hobbyhorses require factual support.
6. **Retroactive additions are allowed.** Older articles can receive one or two recurring-character comments when this strengthens continuity, but existing seeded comments should be preserved rather than rewritten.
7. **Facts gate every agenda.** `SaladinoOutNow` may irrationally interpret a 3–0 win as evidence against the manager, but cannot claim Napoli lost 3–0. `PioHaterForNoReason` may complain after a Pio brace, but cannot claim Pio did not score.
8. **Football-internet voice.** Comments should feel partisan, petty, funny, emotional and occasionally analytical — not like generic generated summaries of the article.

## Hard factual gates

Automated comments must be eligible only when their conditions match the metadata.

Examples:

- `needs-second-goal` requires `status === 'live' && napoliGoals === 1`.
- `clean-sheet-praise` requires `status === 'final' && opponentGoals === 0`.
- `comfortable-win` requires `status === 'final' && result === 'win' && goalDifference >= 2`.
- `title-lead` requires a known positive `tableLead`.
- Preview comments require `status === 'preview'` and must never appear after full time.
- Live clock/game-management comments must never appear when `status === 'final'`.
- Loss/frustration banks cannot appear after a win.
- Comments naming a scorer/assist/player event require that player/event to exist in the article metadata.

If a comment cannot prove that its premise is true, it is not eligible.

## Seeded comments

Important articles can define a short ordered list of bespoke comments. These appear first and are treated as editorially verified facts.

Example for Napoli 3–0 Como:

```js
seededComments: [
  ['PioNation', 'A goal and an assist for Pio. Complete centre-forward day.'],
  ['EndrickEra', 'Endrick with a goal and an assist too. That partnership was cooking.'],
  ['KDBClock', 'De Bruyne opens it before halftime and Napoli never look back.'],
  ['CleanSheetCult', 'Three goals, clean sheet, three points clear. Exactly the response needed.'],
  ['GeertruidaWatch', 'Geertruida at left back was winning everything today.']
]
```

Seeded comments should describe the actual story, not generic filler.

## Automated thread composition

After seeded comments, the engine fills the thread from eligible automated pools. Suggested mix:

- 25% result/scoreline reactions
- 20% competition/table context
- 20% player-performance comments, but only for tagged/verified players
- 15% tactical comments
- 10% opposition/visitor reactions
- 10% personality/humour comments

The percentages are targets, not strict requirements. Factual eligibility always wins.

## Comment lifecycle

For each new result/story:

1. Update the canonical match/result data.
2. Recalculate form, points, table context and player statistics.
3. Update upcoming fixtures.
4. Create/update the article.
5. Populate `commentMeta` from the same canonical data.
6. Add bespoke seeded comments when the story warrants them.
7. Generate the remainder of the thread from fact-gated pools.
8. Validate the thread against the article metadata.
9. Bump asset/cache versions.
10. Push the complete update to `main` together.

Do not patch comments independently from the result data unless repairing the comment engine itself.

## Validation rules

Before deployment, reject a generated thread if any of these occur:

- It asks for another Napoli goal when the final score already contains that goal or more.
- It discusses a comeback when Napoli never trailed.
- It celebrates a clean sheet when Napoli conceded.
- It says Napoli conceded when the opponent score is zero.
- It uses preview/future tense on a completed result.
- It references an incorrect competition or knockout/aggregate state.
- It names a scorer, assister, injury or incident absent from verified metadata.
- It references a table gap inconsistent with the current stored table context.
- It references a previous article's opponent/event.

When validation fails, drop the comment rather than attempting to make it fit.

## Current migration direction

Legacy files such as `comments.js`, `comments-context.js`, `comments-authenticity.js`, `comments-editorial.js`, and one-off comment override files represent historical layers. During the overhaul, **preserve the recurring cast and useful comment copy as canon**, while migrating selection logic into one engine. Once parity is verified, old generators should stop executing so there is exactly one owner of the rendered thread. Retiring a generator must never mean retiring the personalities it contained.

## Design principle

**Structured facts first, personality second.** The comments can be dramatic, biased, funny, pessimistic or celebratory, but they cannot be factually incompatible with the story they sit under.
