(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const explicit = {
    'bayern-test':['napoli','ucl-league-stage','big-loss','BAYERN'],
    'arsenal-pio-91':['napoli','ucl-league-stage','big-draw','ARSENAL'],
    'chelsea-pio-1-0':['napoli','ucl-league-stage','big-win','CHELSEA'],
    'salzburg-pio-1-1':['napoli','ucl-league-stage','frustrating-draw','RB SALZBURG'],
    'udinese-pio-clean-sheet':['napoli','league-regular','win','UDINESE'],
    'genoa-drought':['napoli','league-regular','frustrating-draw','GENOA'],
    'lazio-control':['napoli','league-regular','frustrating-draw','LAZIO'],
    'sassuolo-response':['napoli','league-regular','comeback-win','SASSUOLO'],
    'chiesa-pisa':['napoli','league-regular','chaotic-win','PISA'],
    'torino-control':['napoli','league-regular','win','TORINO'],
    'fiorentina-kdb-1-0':['napoli','league-regular','win','FIORENTINA'],
    'lecce-endrick-pio-2-0':['napoli','league-regular','win','LECCE'],
    'inter-title-race-preview':['napoli','league-title-race','rivalry','INTER'],
    'inter-live-bastoni-header':['napoli','league-title-race','frustrating-draw','INTER'],
    'juventus-pio-penalty-1-0':['napoli','league-title-race','big-win','JUVENTUS'],
    'cagliari-davies-winner-2-1':['napoli','coppa-knockout','cup-win','CAGLIARI'],
    'fixture-run-november':['napoli','schedule','title-race','NONE'],
    'buongiorno-davies-extensions':['napoli','club-news','club-news','NONE'],
    'three-nos':['napoli','transfer','story','NONE'],
    'pio-shirt':['napoli','feature','story','NONE'],
    'paz-kdb':['napoli','dressing-room','story','NONE'],
    'peacock-problem':['napoli','opinion','story','NONE'],
    'captain-future':['napoli','dressing-room','story','NONE'],
    'stach-insurance':['napoli','feature','story','NONE'],
    'napoli-still-top':['napoli','league-title-race','title-race','NONE'],
    'opinion-fortress-needs-goals':['napoli','editorial','editorial','NONE'],
    'opinion-two-points-conversation':['napoli','editorial','title-race','NONE'],
    'opinion-pio-dependence':['napoli','editorial','editorial','NONE'],
    'opinion-beier-case':['napoli','editorial','editorial','NONE'],
    'opinion-defensive-identity':['napoli','editorial','editorial','NONE'],
    'curva-right-to-be-irritated':['napoli','editorial','editorial','NONE'],
    'italy-pipeline':['italy','italy-analysis','editorial','NONE'],
    'italy-saladino-turnaround':['italy','italy-analysis','editorial','NONE'],
    'italy-france-approval':['italy','italy-analysis','editorial','NONE'],
    'italy-wales-warning':['italy','italy-analysis','editorial','NONE'],
    'italy-napotalia-question':['italy','italy-analysis','editorial','NONE'],
    'italy-esposito-brothers-debate':['italy','italy-analysis','editorial','NONE'],
    'italy-five-match-temperature':['italy','italy-analysis','editorial','NONE'],
    'italy-scotland-esposito-3-0':['italy','italy-friendly','big-win','SCOTLAND'],
    'italy-south-africa-pio-1-0':['italy','italy-friendly','win','SOUTH AFRICA']
  };

  const opponentFromText = a => {
    const text = `${a.date||''} ${a.headline||''}`.toUpperCase();
    const names = ['BAYERN','ARSENAL','CHELSEA','RB SALZBURG','INTER','JUVENTUS','CAGLIARI','LECCE','FIORENTINA','UDINESE','GENOA','LAZIO','SASSUOLO','PISA','TORINO','SCOTLAND','SOUTH AFRICA','FRANCE','WALES','ICELAND'];
    return names.find(n => text.includes(n)) || 'NONE';
  };

  D.articles.forEach(a => {
    let row = explicit[a.id];
    if (!row) {
      const italy = a.category === 'Italy' || /^italy-/i.test(a.id) || /AZZURRI|NATIONAL TEAM/i.test(`${a.label||''} ${a.date||''}`);
      if (italy) row = ['italy','italy-analysis','editorial','NONE'];
      else {
        const cat = String(a.category||'').toLowerCase();
        const label = String(a.label||'').toLowerCase();
        const match = /match report|serie a|champions league|coppa|supercoppa/.test(`${cat} ${label}`);
        if (match) row = ['napoli',/champions/.test(`${cat} ${label}`)?'ucl-league-stage':/coppa/.test(`${cat} ${label}`)?'coppa-knockout':'league-regular',a.reaction||'win',a.visitorClub||opponentFromText(a)];
        else row = ['napoli',/transfer|market/.test(`${cat} ${label}`)?'transfer':/opinion|column|tactics|curva/.test(`${cat} ${label}`)?'editorial':'feature',a.reaction||'story','NONE'];
      }
    }
    const [domain,context,reaction,visitor] = row;
    a.commentDomain = domain;
    a.commentContext = context;
    a.reaction = reaction;
    a.visitorClub = visitor;
    // Hard isolation: national-team stories can never inherit club-rival visitors.
    if (domain === 'italy' && ['INTER','JUVENTUS','MILAN','ROMA','LAZIO','NAPOLI'].includes(a.visitorClub)) a.visitorClub = 'NONE';
  });

  window.NAPOLI_ARTICLE_CONTEXT_AUDIT = D.articles.map(a => ({id:a.id,category:a.category,domain:a.commentDomain,context:a.commentContext,reaction:a.reaction,visitor:a.visitorClub}));
})();