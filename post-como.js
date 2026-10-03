(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'napoli-3-0-como-response',
    category:'Match Report',
    label:'Serie A',
    date:'Napoli 3–0 Como · FT',
    headline:'Napoli Respond in Style: Endrick and Pio Shine in 3–0 Win Over Como',
    dek:'Napoli answer the difficult night in Marseille with a controlled 3–0 league win. De Bruyne opened the scoring before Endrick and Pio Esposito each finished with a goal and an assist.',
    tone:'news',
    commentHeat:5,
    reaction:'league-win',
    visitorClub:'COMO',
    commentContext:'league-title-race',
    body:[
      'Napoli produced the response they needed after the Champions League defeat in Marseille, beating Como 3–0 in a composed Serie A performance.',
      'Kevin De Bruyne opened the scoring in the 40th minute after an assist from Scott McTominay, giving Napoli a deserved 1–0 lead at halftime.',
      'De Bruyne, still managing fatigue from the disrupted Marseille trip, was replaced by Nico Paz at the interval.',
      'Napoli doubled the lead in the 50th minute when Pio Esposito played Endrick through and the Brazilian finished for 2–0.',
      'The pair combined again in the 78th minute with the roles reversed: Endrick supplied the assist and Pio Esposito scored Napoli’s third.',
      'Pio and Endrick therefore finished with one goal and one assist each, while De Bruyne scored and McTominay registered an assist.',
      'Geertruida delivered an excellent defensive performance at left back, repeatedly cutting out Como attacks, while Bastoni also produced an important early block and Meret kept the clean sheet.',
      'Inter’s dropped points mean Napoli finish the match three points clear of their title rivals at the top of Serie A.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    D.results = D.results.filter(r => !(r[2] === 'Serie A' && ((r[0] === 'Napoli' && r[1] === 'Como') || (r[0] === 'Como' && r[1] === 'Napoli'))));
    D.results.push(['Napoli','Como','Serie A',3,0,'W',"De Bruyne 40'; Endrick 50'; Pio Esposito 78'","Assists: McTominay, Pio Esposito, Endrick"]);
  }

  D.upcoming = [
    ['Bodø/Glimt','Champions League','Jan 26'],
    ['Bologna FC','Serie A','Jan 29']
  ];

  D.hero = {articleId:article.id,strap:'SERIE A · STATEMENT RESPONSE · NAPOLI THREE POINTS CLEAR'};
  D.ticker = [
    'FT · NAPOLI 3–0 COMO',
    "DE BRUYNE 40' · ENDRICK 50' · PIO 78'",
    'PIO · 1 GOAL · 1 ASSIST',
    'ENDRICK · 1 GOAL · 1 ASSIST',
    'NAPOLI · THREE POINTS CLEAR OF INTER'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Perfect Response');
    D.whispers.unshift(['Perfect Response','Napoli answer the Marseille defeat with a 3–0 win over Como. Endrick and Pio both record a goal and an assist, while Inter’s dropped points leave Napoli three clear at the top.']);
  }
})();