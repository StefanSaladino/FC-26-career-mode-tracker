(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'salzburg-pio-1-1',
    category:'Match Report',
    label:'Champions League',
    date:'Napoli 1–1 RB Salzburg · FT',
    headline:'Pio Strikes Again, but Salzburg Snatch a 1–1 Draw Late',
    dek:'Pio Esposito finished Beier’s pass four minutes after halftime, but a 79th-minute Salzburg equaliser after a Meret spill denied Napoli the win.',
    image:'assets/pio-napoli.webp',
    objectPosition:'50% 24%',
    objectFit:'cover',
    tone:'news',
    commentHeat:4,
    reaction:'frustrating-draw',
    visitorClub:'RB SALZBURG',
    commentContext:'ucl-league-stage',
    body:[
      'Napoli were held to a 1–1 draw by RB Salzburg in a Champions League league-stage match that turned on two second-half moments.',
      'The reshuffled attack featured Pio Esposito and Maximilian Beier together from the start, with Nico Paz operating wide and Scott McTominay central. Napoli created openings in the first half, but Salzburg also forced Alex Meret into several important saves before the interval.',
      'Federico Chiesa was introduced after halftime and Napoli broke through in the 49th minute. Beier found Pio through the middle and the striker finished brilliantly with his left foot for 1–0.',
      'Napoli had chances to extend the lead, including efforts from McTominay and Stach, while Schlager repeatedly kept Salzburg alive.',
      'Fresh legs followed later: Michael Kayode came on at right midfield, Alessandro Bastoni replaced Geertruida, and Billy Gilmour replaced Stach as Napoli tried to protect the advantage.',
      'The lead disappeared in the 79th minute when Meret spilled the ball and Salzburg turned the loose ball into the equaliser.',
      'The draw leaves Napoli with a point from a match they had under control after Pio’s opener, and attention now turns immediately to the Serie A trip to Juventus.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','RB Salzburg','Champions League',1,1,'D',"Pio Esposito 49'",'Beier assist; Salzburg equaliser 79\' after Meret spill'];
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'RB Salzburg' && r[2] === 'Champions League');
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => row[0] !== 'RB Salzburg');

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',10,2,'Ten logged Napoli goals; scored in the 1–1 Champions League draw with Salzburg.'];
      if (row[0] === 'Maximilian Beier') return [row[0],Number(row[1]||0),Number(row[2]||0)+1,'Assisted Pio Esposito in the 1–1 draw with Salzburg.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Salzburg Frustration');
    D.whispers.unshift(['Salzburg Frustration','Pio put Napoli ahead in the 49th from Beier’s pass, but a 79th-minute equaliser after a Meret spill turned a likely win into a 1–1 draw.']);
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Pio Breaks Through Against Salzburg',src:'assets/pio-napoli.webp',tag:'FT · Napoli 1–1 RB Salzburg',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();