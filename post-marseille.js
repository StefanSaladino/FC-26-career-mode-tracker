(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'marseille-3-0-napoli-fireworks-fatigue',
    category:'Match Report',
    label:'Champions League',
    date:'Marseille 3–0 Napoli · FT',
    headline:'Exhausted Napoli Fall 3–0 in Marseille After Brutal Night',
    dek:'Napoli held Marseille scoreless through halftime despite arriving badly depleted for energy, but the resistance broke in the second half as the hosts scored three times.',
    tone:'news',
    commentHeat:5,
    reaction:'loss',
    visitorClub:'MARSEILLE',
    commentContext:'champions-league-marseille',
    body:[
      'Napoli’s push for a Champions League top-eight place took a major hit with a 3–0 defeat away to Marseille.',
      'The squad entered the match in extraordinary circumstances after fireworks outside the team hotel left almost the entire group badly fatigued. Kevin De Bruyne and Alphonso Davies were unavailable, while only Bastoni and Marin entered the match at full stamina.',
      'Napoli responded by sitting deep and conserving energy. Meret made several important saves, Bastoni produced an early block and Marin helped hold the defensive line together as the visitors reached halftime at 0–0.',
      'Marseille increased the pressure after the interval. They hit the post and forced another major save from Meret before finally opening the scoring. Højbjerg later made it 2–0 and Marseille added a third before full time.',
      'The scoreline was heavy, but the physical condition of the squad shaped the entire match. Napoli now have to recover quickly with Como next in Serie A before Bodø/Glimt and Bologna complete a demanding run of fixtures.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    D.results = D.results.filter(r => !(r[2] === 'Champions League' && ((r[0] === 'Marseille' && r[1] === 'Napoli') || (r[0] === 'Napoli' && r[1] === 'Marseille'))));
    D.results.push(['Marseille','Napoli','Champions League',3,0,'L','Marseille scored three second-half goals','Napoli reached halftime 0–0 despite severe squad fatigue; Meret made several key saves']);
  }

  D.upcoming = [
    ['Como','Serie A','Jan 23'],
    ['Bodø/Glimt','Champions League','Jan 26'],
    ['Bologna FC','Serie A','Jan 29']
  ];

  D.hero = {articleId:article.id,strap:'CHAMPIONS LEAGUE · EXHAUSTED NAPOLI FALL IN MARSEILLE'};
  D.ticker = [
    'FT · MARSEILLE 3–0 NAPOLI',
    'NAPOLI HELD 0–0 AT HALFTIME BEFORE SECOND-HALF COLLAPSE',
    'NEXT · COMO · SERIE A · JAN 23',
    'JAN 26 · BODØ/GLIMT · CHAMPIONS LEAGUE',
    'JAN 29 · BOLOGNA FC · SERIE A'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Marseille Aftermath');
    D.whispers.unshift(['Marseille Aftermath','Napoli arrived with almost the entire squad well below full stamina after fireworks outside the team hotel. Recovery is now the immediate priority before Como.']);
  }
})();