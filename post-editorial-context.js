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

  // Official FIGC-hosted Azzurri imagery for the national-team desk.
  const AZZURRI_BADGE = 'https://www.figc.it/media/186789/logo_blu_on_white.jpg';
  const AZZURRI_HISTORY = 'https://images.figc.it/view/acePublic/alias/contentid/1id5ar32na5k2q1zla1/0/group-image-16-9.jpg?f=3x2&q=0.75&w=3840';
  const italyArt = {
    'italy-saladino-turnaround': { image: AZZURRI_BADGE, objectFit: 'contain', objectPosition: '50% 50%' },
    'italy-france-approval': { image: AZZURRI_HISTORY, objectFit: 'cover', objectPosition: '50% 50%' },
    'italy-wales-warning': { image: AZZURRI_BADGE, objectFit: 'contain', objectPosition: '50% 50%' },
    'italy-napotalia-question': { image: AZZURRI_HISTORY, objectFit: 'cover', objectPosition: '50% 50%' }
  };

  D.articles.forEach(article => {
    if (editorialIds.has(article.id)) article.commentContext = 'editorial';
    if (italyArt[article.id]) Object.assign(article, italyArt[article.id]);
  });
})();
