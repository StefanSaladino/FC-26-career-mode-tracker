(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'juventus-1-2-napoli-title-lead',
    category:'Match Report',
    label:'Serie A',
    date:'Juventus 1–2 Napoli · FT',
    headline:'Napoli Fight Back to Beat Juventus 2–1 and Go Top of Serie A',
    dek:'Jonathan David put Juventus ahead before Beier levelled for Napoli. Pio Esposito then drew the second-half penalty and scored it himself to complete the comeback, while Inter’s dropped points sent Napoli top on 51.',
    image:'assets/pio-napoli.webp',
    objectPosition:'50% 24%',
    objectFit:'cover',
    tone:'news',
    commentHeat:5,
    reaction:'league-win',
    visitorClub:'JUVENTUS',
    commentContext:'league-title-race',
    body:[
      'Napoli came from behind in Turin to beat Juventus 2–1 and reclaim first place in Serie A.',
      'Jonathan David opened the scoring for Juventus in the 29th minute, but Napoli responded before halftime when Maximilian Beier scored the equalizer in the 37th minute.',
      'Napoli completed the turnaround in the 57th minute after Pio Esposito drew a penalty. Pio took the spot kick himself and converted it to make it 2–1.',
      'The match had chances at both ends. Di Gregorio denied Nico Paz, Meret saved from Kenan Yildiz, and David also struck the post before missing the rebound.',
      'Napoli used the bench to manage the closing stages, with Endrick and Stach replacing Paz and De Bruyne, Lang coming on for Davies, and Di Lorenzo replacing Kayode.',
      'The result became even bigger after Inter dropped points. Napoli now sit top of Serie A on 51 points, one ahead of Inter on 50. Milan are on 39 points from 20 matches, Roma 38 from 20, Lazio 37 from 20, Atalanta 36 from 20, and Juventus 34 from 21.',
      'A comeback win away to Juventus, combined with Inter’s slip, puts Napoli back at the summit at a crucial point in the title race.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => !['juventus-pio-penalty-1-0', article.id].includes(a.id));
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','Juventus','Serie A',2,1,'W',"Beier 37'; Pio Esposito 57' (pen)",'Pio Esposito drew and converted the winning penalty'];
    D.results = D.results.filter(r => !(r[2] === 'Serie A' && ((r[0] === 'Napoli' && r[1] === 'Juventus') || (r[0] === 'Juventus' && r[1] === 'Napoli'))));
    D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => !(row[0] === 'Juventus' && String(row[1]).includes('Serie A')));

  D.hero = {articleId:article.id,strap:'COMEBACK IN TURIN · NAPOLI GO TOP'};
  D.ticker = [
    'FT · JUVENTUS 1–2 NAPOLI',
    "BEIER 37' · PIO 57' PEN",
    'SERIE A · NAPOLI TOP · 51 POINTS',
    'INTER · 50 POINTS',
    'JUVENTUS · 34 POINTS FROM 21'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Turin Statement');
    D.whispers.unshift(['Turin Statement','Napoli came from 1–0 down to beat Juventus 2–1 in Turin. Beier scored the equalizer before Pio drew and converted the winning penalty; Inter’s dropped points put Napoli top on 51.']);
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => !['juventus-pio-penalty-1-0', article.id].includes(item.articleId));
    D.media.unshift({type:'image',title:'Napoli Come Back to Win in Turin',src:'assets/pio-napoli.webp',tag:'FT · Juventus 1–2 Napoli · Napoli Top',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();