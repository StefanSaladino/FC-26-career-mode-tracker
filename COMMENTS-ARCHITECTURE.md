# Comment System Architecture

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
