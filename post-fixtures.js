(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // Current in-game calendar supplied after the Real Madrid first leg.
  // March is authoritative; April remains provisional pending the UCL tie.
  D.upcoming = [
    ['Parma','Serie A','Mar 12 · Away'],
    ['Real Madrid','Champions League','Mar 15 · Away · Round of 16 second leg'],
    ['Genoa','Serie A','Mar 18 · Home']
  ];

  D.ticker = [
    'FT · NAPOLI 1–0 REAL MADRID · BEIER 89′',
    'NEXT · PARMA · SERIE A · MAR 12 · AWAY',
    'MAR 15 · REAL MADRID · CHAMPIONS LEAGUE · AWAY · SECOND LEG',
    'MAR 18 · GENOA · SERIE A · HOME',
    'SERIE A · NAPOLI 66 · MILAN 60 · INTER 58'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Juve Double','Schedule Squeeze'].includes(item[0]));
    D.whispers.unshift(
      ['Madrid Return','Napoli take a 1–0 first-leg lead to Madrid on March 15. The tie is alive, and the Bernabéu decides who moves on.'],
      ['March Squeeze','Parma away comes first on March 12, followed three days later by Real Madrid away and then Genoa at home on March 18.']
    );
  }
})();