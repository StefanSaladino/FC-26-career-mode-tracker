(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'juventus-pio-penalty-1-0',
    category:'Match Report',
    label:'Serie A',
    date:'Juventus 0–1 Napoli · FT',
    headline:'Pio from the Spot: Napoli Beat Juventus and Go Top of Serie A',
    dek:'Mikey Moore won the penalty and Pio Esposito buried it into the bottom-right corner in the 74th minute as Napoli shut Juventus out in snowy Turin — and Inter dropping points sends Napoli back to the summit.',
    image:'assets/pio-napoli.webp',
    objectPosition:'50% 24%',
    objectFit:'cover',
    tone:'news',
    commentHeat:5,
    reaction:'league-win',
    visitorClub:'JUVENTUS',
    commentContext:'league-title-race',
    body:[
      'Napoli left Turin with a huge 1–0 Serie A win over Juventus after a tense match played in heavy snow.',
      'There was almost nothing between the sides through the opening hour. Endrick forced Di Gregorio into an early save and Napoli generated pressure from corners, but the difficult surface kept the match scrappy and scoreless at halftime.',
      'The breakthrough came in the 74th minute when Mikey Moore drew a penalty. Pio Esposito took responsibility and tucked the spot kick cleanly into the bottom-right corner for 1–0.',
      'Juventus pushed hard after falling behind, but Napoli defended the advantage with discipline. Alessandro Bastoni produced a clutch intervention late on, while Michael Kayode helped Napoli escape pressure and carry the ball away on the counter.',
      'Napoli resisted the temptation to force a second goal in the closing minutes, using possession and safer decisions to drain the clock before the final whistle.',
      'The result became even bigger after Inter dropped points elsewhere. Napoli now sit top of Serie A on 51 points, one ahead of Inter on 50. Milan are on 39 points from 20 matches, Roma 38 from 20, Lazio 37 from 20, Atalanta 36 from 20, and Juventus 34 from 21.',
      'Napoli have reclaimed first place at a crucial stage of the title race, with the victory in Turin turning into a statement result once the scores elsewhere came in.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','Juventus','Serie A',1,0,'W',"Pio Esposito 74' (pen)",'Mikey Moore won the penalty; Bastoni key late intervention; clean sheet in Turin'];
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Juventus' && r[2] === 'Serie A');
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => !(row[0] === 'Juventus' && row[1] === 'Serie A'));

  D.hero = {articleId:article.id,strap:'NAPOLI WIN IN TURIN. NAPOLI GO TOP.'};
  D.ticker = [
    'FT · JUVENTUS 0–1 NAPOLI',
    "PIO 74' PENALTY · MIKEY MOORE WINS IT",
    'SERIE A · NAPOLI TOP · 51 POINTS',
    'INTER · 50 POINTS',
    'JUVENTUS · 34 POINTS FROM 21'
  ];

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => row[0] === 'Pio Esposito'
      ? ['Pio Esposito',11,2,'Eleven logged Napoli goals; scored the 74th-minute winning penalty away to Juventus.']
      : row);
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Turin Statement');
    D.whispers.unshift(['Turin Statement','Pio’s 74th-minute penalty, won by Mikey Moore, delivered a 1–0 away win over Juventus. With Inter dropping points, Napoli move top of Serie A on 51 points, one clear of Inter.']);
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Pio Wins It in Turin',src:'assets/pio-napoli.webp',tag:'FT · Juventus 0–1 Napoli · Napoli Top',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();