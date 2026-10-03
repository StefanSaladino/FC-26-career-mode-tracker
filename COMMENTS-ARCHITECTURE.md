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

Legacy files such as `comments.js`, `comments-context.js`, `comments-authenticity.js`, `comments-editorial.js`, and one-off comment override files represent historical layers. During the overhaul, preserve useful comment copy but migrate selection logic into one engine. Once parity is verified, old generators should stop executing so there is exactly one owner of the rendered thread.

## Design principle

**Structured facts first, personality second.** The comments can be dramatic, biased, funny, pessimistic or celebratory, but they cannot be factually incompatible with the story they sit under.
