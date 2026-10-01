(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  D.upcoming = [
    ['Inter','Serie A','Oct 28'],
    ['Lecce','Serie A','Nov 5'],
    ['RB Salzburg','Champions League','Nov 8'],
    ['Juventus','Serie A','Nov 12'],
    ['Cagliari','Coppa Italia','Nov 15'],
    ['Empoli','Serie A','Nov 19'],
    ['Roma','Serie A','Nov 25'],
    ['Juventus','Supercoppa Italiana','Nov 30']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 CHELSEA · PIO 43'",
    'NEXT · INTER · SERIE A · OCT 28 · FOUR-POINT GAP',
    'NOV 5 · LECCE · SERIE A',
    'NOV 8 · RB SALZBURG · CHAMPIONS LEAGUE',
    'NOV 12 · JUVENTUS · ONE POINT BEHIND NAPOLI',
    'NOV 15 · CAGLIARI · COPPA ITALIA',
    'NOV 19 · EMPOLI · SERIE A',
    'NOV 25 · ROMA · SERIE A',
    'NOV 30 · JUVENTUS · SUPERCOPPA ITALIANA'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Juve Double','Schedule Squeeze'].includes(item[0]));
    D.whispers.unshift(
      ['Schedule Squeeze','Inter on Oct 28 opens a run across Serie A, the Champions League, Coppa Italia and the Supercoppa, with very little room for wasted rotation.'],
      ['Juve Double','Juventus sit one point behind Napoli ahead of the Nov 12 league meeting, with another showdown waiting in the Supercoppa on Nov 30.']
    );
  }
})();