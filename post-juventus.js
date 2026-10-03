(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'juventus-1-2-napoli-title-lead',
    category:'Match Report',
    label:'Serie A',
    date:'Juventus 1–2 Napoli · FT',
    headline:'Napoli Fight Back to Beat Juventus 2–1 and Go Top of Serie A',
    dek:'Jonathan David put Juventus ahead before Beier levelled from Pio Esposito’s assist and Pio converted a 57th-minute penalty. Inter’s dropped points send Napoli top on 51.',
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
      'Jonathan David opened the scoring for Juventus in the 29th minute, but Napoli responded before halftime. In the 37th minute, Pio Esposito supplied Maximilian Beier for the equalizer to send the teams into the break level at 1–1.',
      'Napoli completed the turnaround in the 57th minute. Pio stepped up from the penalty spot and buried the kick into the bottom-right corner to make it 2–1.',
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
    const row = ['Juventus','Napoli','Serie A',1,2,'W',"Jonathan David 29'; Beier 37'; Pio Esposito 57' (pen)",'Beier assisted by Pio Esposito; Pio scored the winning penalty'];
    D.results = D.results.filter(r => !(r[2] === 'Serie A' && ((r[0] === 'Napoli' && r[1] === 'Juventus') || (r[0] === 'Juventus' && r[1] === 'Napoli'))));
    D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => !(row[0] === 'Juventus' && String(row[1]).includes('Serie A')));

  D.hero = {articleId:article.id,strap:'COMEBACK IN TURIN · NAPOLI GO TOP'};
  D.ticker = [
    'FT · JUVENTUS 1–2 NAPOLI',
    "DAVID 29' · BEIER 37' · PIO 57' PEN",
    'SERIE A · NAPOLI TOP · 51 POINTS',
    'INTER · 50 POINTS',
    'JUVENTUS · 34 POINTS FROM 21'
  ];

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => row[0] === 'Pio Esposito'
      ? ['Pio Esposito',11,3,'Scored the 57th-minute winning penalty and assisted Beier in the 2–1 win away to Juventus.']
      : row);
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Turin Statement');
    D.whispers.unshift(['Turin Statement','Napoli came from 1–0 down to beat Juventus 2–1 in Turin. Beier equalized from Pio’s assist before Pio scored the winner from the spot; Inter’s dropped points put Napoli top on 51.']);
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => !['juventus-pio-penalty-1-0', article.id].includes(item.articleId));
    D.media.unshift({type:'image',title:'Napoli Come Back to Win in Turin',src:'assets/pio-napoli.webp',tag:'FT · Juventus 1–2 Napoli · Napoli Top',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();