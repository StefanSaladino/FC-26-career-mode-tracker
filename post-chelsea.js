(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  if (Array.isArray(D.results)) {
    const i = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Chelsea' && r[2] === 'Champions League');
    const row = ['Napoli','Chelsea','Champions League',1,0,'W',"Pio Esposito 43'",'Davies assist; Trubin denied Endrick; Meret huge 90+1 save; Napoli move to 3-1-1 in Europe'];
    if (i >= 0) D.results[i] = row; else D.results.push(row);
  }

  D.upcoming = [
    ['Inter','Serie A','Nov 28']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 CHELSEA · PIO 43'",
    'DAVIES · SPECTACULAR RUN + ASSIST',
    'MERET · MASSIVE 90+1 SAVE',
    'CHAMPIONS LEAGUE · NAPOLI 3–1–1 · 10 PTS',
    'NEXT · INTER · SERIE A'
  ];

  const article = {
    id:'chelsea-pio-1-0',
    category:'Europe',
    label:'Champions League',
    date:'After Napoli 1–0 Chelsea',
    headline:'Pio Punishes Chelsea, Meret Slams the Door as Napoli Win a European Heavyweight Fight',
    dek:'Chelsea carried the early pressure, but a spectacular Alphonso Davies run ended with Pio Esposito finishing in the 43rd minute before Alex Meret preserved the 1–0 win with a huge stoppage-time save.',
    image:'assets/pio-napoli.webp',
    objectPosition:'50% 30%',
    objectFit:'cover',
    tone:'feature',
    commentHeat:5,
    reaction:'big-win',
    visitorClub:'CHELSEA',
    body:[
      'Napoli wanted a full-strength European answer after the lessons of Bayern and the late resilience against Arsenal. Chelsea supplied the pressure. Napoli supplied the decisive moment.',
      'Chelsea were buzzing early and forced Napoli to defend, but the visitors kept finding transition opportunities. In the 43rd minute Alphonso Davies exploded forward on a spectacular run, found Pio Esposito, and the striker made no mistake for 1–0.',
      'Napoli nearly doubled the lead when Endrick attacked from the wing and forced a major save from Trubin. The threat on the break meant Chelsea could never attack without leaving something behind.',
      'The second half became a test of control and nerve. Nico Paz moved left when Kevin De Bruyne replaced Davies, then Federico Chiesa and Giovanni Di Lorenzo entered for Paz and Michael Kayode as Napoli managed the final phase.',
      'Chelsea still found one last opening in the 90+1st minute. Alex Meret reacted from close range and knocked the shot away for a corner. Napoli survived the final delivery, heard the whistle, and walked away with a statement 1–0 victory.',
      'The result takes Napoli to 3–1–1 and 10 points through five Champions League matches. More importantly, it answers the question left by Bayern: Napoli can take a punch from an elite opponent, punish the opening, and finish the night on top.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.hero = {articleId:'chelsea-pio-1-0',strap:'PIO STRIKES. MERET SAVES. CHELSEA FALL.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',8,1,"Eight logged club goals; scored the winner against Chelsea after decisive goals vs Arsenal and Udinese."];
      if (row[0] === 'Alphonso Davies') return ['Alphonso Davies',1,1,"UCL goal vs Brugge; spectacular assist for Pio's winner against Chelsea."];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,"Huge 90+1 close-range save preserved the 1–0 Champions League win over Chelsea."];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Pio, Again','Eight logged Napoli goals now. Arsenal, Udinese and Chelsea have all felt the damage in high-leverage moments.'],
    ['Meret Owns the Last Word','Chelsea had one last close-range chance in stoppage time. Meret erased it.'],
    ['Davies Changes the Game','The winning goal started with a spectacular Davies carry before he found Pio for the finish.'],
    ['European Answer','After Bayern exposed the execution gap and Arsenal tested Napoli’s resilience, the Chelsea win gives this group its clearest elite European result of the season.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Chelsea: Pio Wins It',src:'assets/pio-napoli.webp',tag:'Champions League',objectPosition:'50% 30%',objectFit:'cover',articleId:article.id});
  }
})();