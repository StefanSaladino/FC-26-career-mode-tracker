(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const editorialIds = new Set([
    'italy-saladino-turnaround',
    'italy-france-approval',
    'italy-wales-warning',
    'italy-napotalia-question',
    'opinion-fortress-needs-goals',
    'opinion-two-points-conversation',
    'opinion-pio-dependence',
    'opinion-beier-case',
    'opinion-defensive-identity',
    'curva-right-to-be-irritated'
  ]);

  D.articles.forEach(article => {
    if (editorialIds.has(article.id)) article.commentContext = 'editorial';
  });
})();
