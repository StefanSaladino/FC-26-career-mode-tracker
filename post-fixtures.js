(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  D.upcoming = [
    ['Inter','Serie A','Nov 28'],
    ['Lecce','Serie A','Dec 5'],
    ['RB Salzburg','Champions League','Dec 8'],
    ['Juventus','Serie A','Dec 12'],
    ['Cagliari','Coppa Italia','Dec 15'],
    ['Empoli','Serie A','Dec 19'],
    ['Roma','Serie A','Dec 25'],
    ['Juventus','Supercoppa Italiana','Dec 30']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 CHELSEA · PIO 43'",
    'NEXT · INTER · SERIE A · NOV 28 · FOUR-POINT GAP',
    'DEC 5 · LECCE · SERIE A',
    'DEC 8 · RB SALZBURG · CHAMPIONS LEAGUE',
    'DEC 12 · JUVENTUS · ONE POINT BEHIND NAPOLI',
    'DEC 15 · CAGLIARI · COPPA ITALIA',
    'DEC 19 · EMPOLI · SERIE A',
    'DEC 25 · ROMA · SERIE A',
    'DEC 30 · JUVENTUS · SUPERCOPPA ITALIANA'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Juve Double','Schedule Squeeze'].includes(item[0]));
    D.whispers.unshift(
      ['Schedule Squeeze','Inter on Nov 28 opens a run across Serie A, the Champions League, Coppa Italia and the Supercoppa, with very little room for wasted rotation.'],
      ['Juve Double','Juventus sit one point behind Napoli ahead of the Dec 12 league meeting, with another showdown waiting in the Supercoppa on Dec 30.']
    );
  }
})();