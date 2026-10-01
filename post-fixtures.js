(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  D.upcoming = [
    ['Inter','Serie A','Nov 28'],
    ['Lecce','Serie A','Nov 5'],
    ['RB Salzburg','Champions League','Nov 8'],
    ['Juventus','Serie A','Nov 12'],
    ['Cagliari','Coppa Italia','Nov 15'],
    ['Empoli','Serie A','Nov 19'],
    ['Roma','Serie A','Nov 25'],
    ['Juventus','Supercoppa Italiana','Nov 30']
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Juve Double');
    D.whispers.push(['Juve Double','Juventus sit one point behind Napoli ahead of the Nov 12 league meeting, with another showdown waiting in the Supercoppa on Nov 30.']);
  }
})();