(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  if (Array.isArray(D.results)) {
    const upsert = row => {
      const i = D.results.findIndex(r => r[0] === row[0] && r[1] === row[1] && r[2] === row[2]);
      if (i >= 0) D.results[i] = row; else D.results.push(row);
    };

    upsert(['Italy','South Africa','Friendly',1,0,'W','Pio Esposito','Pio scores as Italy edge South Africa']);
    upsert(['Italy','Scotland','Friendly',3,0,'W','Sebastiano Esposito x2; Tonali','Second straight clean sheet; Esposito brace']);
    upsert(['Napoli','Fiorentina','Serie A',1,0,'W',"Kevin De Bruyne 29'",'Chiesa assist; Meret huge save; Stach goal-line clearance; rotated XI protects three points before Chelsea']);
  }

  D.upcoming = [
    ['Chelsea','Champions League','Nov 23'],
    ['Inter','Serie A','Nov 28']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 FIORENTINA · DE BRUYNE 29'",
    'CHIESA · ASSIST ON THE WINNER',
    'MERET + STACH · LAST-LINE HEROICS',
    'ITALY · 1–0 SOUTH AFRICA · 3–0 SCOTLAND',
    'NEXT · CHELSEA · CHAMPIONS LEAGUE'
  ];

  const article = {
    id:'fiorentina-kdb-1-0',
    category:'Serie A',
    label:'Match Report',
    date:'After Napoli 1–0 Fiorentina',
    headline:'De Bruyne Delivers, Napoli Survive the Storm — Now Chelsea Gets the Full Force',
    dek:'Kevin De Bruyne finished Chiesa’s feed in the 29th minute, then Meret and Stach produced the defining defensive interventions as a rotated Napoli protected a 1–0 win three days before Chelsea.',
    image:'assets/chiesa-napoli.jpg',
    objectPosition:'50% 25%',
    objectFit:'cover',
    tone:'feature',
    commentHeat:3,
    reaction:'win',
    visitorClub:'FIORENTINA',
    body:[
      'Napoli came into Fiorentina with one eye firmly on Chelsea and still walked away with all three points.',
      'Kevin De Bruyne had already been denied point-blank by David De Gea before the breakthrough arrived in the 29th minute. Federico Chiesa supplied the feed, De Bruyne found the finish on his second major chance, and Napoli had the 1–0 lead the rotated side needed.',
      'De Bruyne was withdrawn at halftime for Mikey Moore, with Chiesa moving into the middle as Napoli managed minutes ahead of Europe. The game then turned dangerous. Alex Meret produced a huge save and, on the ensuing corner, Anton Stach headed the ball off the line to preserve the advantage.',
      'Napoli responded with another spell of pressure and Billy Gilmour narrowly missed before giving way to Rafa Marín. Marc Cucurella was replaced by Alphonso Davies, while Alessandro Bastoni was eventually introduced after Moise Kean went close for Fiorentina.',
      'The final whistle confirmed the exact result Napoli wanted from a difficult scheduling spot: one goal, one clean sheet, three points, and most of the European core protected. Chelsea arrive in three days. This time there will be no holding anything back.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.hero = {articleId:'fiorentina-kdb-1-0',strap:'THREE POINTS BANKED. NOW UNLEASH EVERYTHING.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Kevin De Bruyne') return ['Kevin De Bruyne',2,1,'Goals vs Como and Fiorentina; assist on Paz winner; delivered before Chelsea.'];
      if (row[0] === 'Federico Chiesa') return ['Federico Chiesa',1,1,'Late winner vs Pisa; assist on De Bruyne winner vs Fiorentina.'];
      if (row[0] === 'Anton Stach') return ['Anton Stach',1,1,'Goal + assist vs Pisa; crucial goal-line clearance vs Fiorentina.'];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Huge saves vs Brugge, Udinese and Fiorentina; protected another 1–0 clean sheet.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.firstXI)) {
    D.firstXI = D.firstXI.map(row => {
      if (row[1] === 'Alessandro Bastoni') return [row[0],row[1],90];
      if (row[1] === 'Alessandro Buongiorno') return [row[0],row[1],87];
      return row;
    });
  }

  if (D.squadPublic && Array.isArray(D.squadPublic.Defenders)) {
    D.squadPublic.Defenders = D.squadPublic.Defenders.map(row => {
      if (row[0] === 'Alessandro Bastoni') return [row[0],row[1],90,row[3]];
      if (row[0] === 'Alessandro Buongiorno') return [row[0],row[1],87,row[3]];
      return row;
    });
  }

  D.whispers = [
    ['Chelsea: Full Strength','The Fiorentina rotation did its job. Napoli can now send the full first-choice group at Chelsea with no reason to manage the occasion.'],
    ['Meret Saves the Plan','A huge save followed by Stach’s goal-line clearance kept a difficult 1–0 match from becoming a late scramble.'],
    ['Chiesa Keeps Producing','Chiesa created De Bruyne’s winner and then handled the central role after halftime.'],
    ['Esposito Family Window','Pio scored against South Africa before Sebastiano Esposito hit two against Scotland. Italy left the break with two wins and two clean sheets.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Fiorentina: Chiesa Creates the Winner',src:'assets/chiesa-napoli.jpg',tag:'Serie A',objectPosition:'50% 25%',objectFit:'cover',articleId:article.id});
  }
})();