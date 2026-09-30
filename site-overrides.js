(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const VERSION = '20260930-30';
  const local = file => `assets/${file}?v=${VERSION}`;
  const media = {
    bayern: {src:'https://upload.wikimedia.org/wikipedia/commons/5/5a/Allianz_Arena_at_Night_%28168589194%29.jpg',credit:'Ralph / Wikimedia Commons · CC BY 2.0',source:'https://commons.wikimedia.org/wiki/File:Allianz_Arena_at_Night_(168589194).jpg',objectPosition:'50% 55%',objectFit:'cover'},
    chiesa: {src:local('chiesa-napoli.jpg'),credit:'Season Room generated composite — Federico Chiesa visualized in Napoli colours for this FC 26 save.',source:null,objectPosition:'50% 42%',objectFit:'cover'},
    pio: {src:local('pio-napoli.jpg'),credit:'Season Room generated composite — Pio Esposito visualized in Napoli colours for this FC 26 save.',source:null,objectPosition:'50% 38%',objectFit:'cover'},
    market: {src:'https://upload.wikimedia.org/wikipedia/commons/4/41/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%281%29.jpg',credit:'Mister No / Wikimedia Commons · CC BY 3.0',source:'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(1).jpg',objectPosition:'50% 57%',objectFit:'cover'},
    paz: {src:'https://upload.wikimedia.org/wikipedia/commons/1/19/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%284%29.jpg',credit:'Mister No / Wikimedia Commons · CC BY 3.0',source:'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(4).jpg',objectPosition:'50% 52%',objectFit:'cover'},
    peacock: {src:'https://upload.wikimedia.org/wikipedia/commons/6/69/Association_football_goal_in_training_football_field_cropped.jpg',credit:'Santeri Viinamäki / Wikimedia Commons · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Association_football_goal_in_training_football_field_cropped.jpg',objectPosition:'50% 51%',objectFit:'cover'},
    italy: {src:'https://upload.wikimedia.org/wikipedia/commons/f/f2/Coverciano%2C_Firenze%2C_Italia.jpg',credit:'Wikimedia Commons · CC0',source:'https://commons.wikimedia.org/wiki/File:Coverciano,_Firenze,_Italia.jpg',objectPosition:'50% 54%',objectFit:'cover'},
    captain: {src:'https://upload.wikimedia.org/wikipedia/commons/8/87/SSC_Napoli_logo_on_the_pitch_of_the_Stadium_San_Paolo.jpg',credit:'Tanzen80 / Wikimedia Commons · CC BY-SA 2.0',source:'https://commons.wikimedia.org/wiki/File:SSC_Napoli_logo_on_the_pitch_of_the_Stadium_San_Paolo.jpg',objectPosition:'50% 52%',objectFit:'cover'},
    stach: {src:'https://upload.wikimedia.org/wikipedia/commons/a/af/Stadio_San_Paolo_Napoli_2019.jpg',credit:'Tarkus42 / Wikimedia Commons · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_Napoli_2019.jpg',objectPosition:'50% 52%',objectFit:'cover'}
  };

  const ensureResult = row => {
    if (!Array.isArray(D.results)) return;
    if (!D.results.some(r => r[0]===row[0] && r[1]===row[1] && r[2]===row[2])) D.results.push(row);
  };
  ensureResult(['Napoli','Sassuolo','Serie A',2,1,'W',"Chiesa 40'; Beier 85'",'Paz assist on Beier winner; Meret made multiple key second-half saves']);
  ensureResult(['Napoli','Lazio','Serie A',0,0,'D','—','Rotated side; clean sheet; unbeaten league run preserved']);

  const lazioArticle = {
    id:'lazio-control', category:'Match Report', label:'Rotation Point', date:'After Napoli 0–0 Lazio',
    headline:'No Breakthrough, No Damage: Napoli Grind Out a Point Against Lazio',
    dek:'A heavily rotated Napoli never found the decisive pass, but a clean sheet kept the league unbeaten run intact with Genoa and Arsenal looming.',
    image:media.market.src, imageCredit:media.market.credit, imageSource:media.market.source, objectPosition:media.market.objectPosition, objectFit:media.market.objectFit, tone:'analysis',
    body:[
      'This was not a night for beauty. Napoli rotated aggressively with the calendar tightening, protected several first-choice legs and accepted that control mattered almost as much as creation.',
      'The match stayed cagey from the opening half through the final whistle. Lazio threatened in spells, Napoli found transition opportunities, but neither side produced the finish that would break the game open.',
      'The biggest positive was structural. The rotated back line held, the goalkeeper kept the clean sheet and Napoli avoided turning a frustrating match into a damaging one.',
      'The cost is two dropped points in a tight title race. The benefit is that the unbeaten Serie A run survives and several heavy hitters remain fresher for the stretch ahead.',
      'Genoa now closes October. Then comes Arsenal in Europe. The schedule is no longer asking whether Napoli have depth — it is demanding proof.'
    ]
  };

  const sassuoloArticle = {
    id:'sassuolo-response',category:'Match Report',label:'Response Delivered',date:'After Napoli 2–1 Sassuolo',
    headline:'Beier Finishes the Comeback as Napoli Answer Bayern the Right Way',
    dek:'Pinamonti struck first, Chiesa levelled before halftime and Nico Paz created Beier’s 85th-minute winner in the response Napoli needed after Bayern.',
    image:media.chiesa.src,imageCredit:media.chiesa.credit,imageSource:null,objectPosition:media.chiesa.objectPosition,objectFit:media.chiesa.objectFit,tone:'breaking',
    body:['Napoli needed a response after Bayern and Sassuolo made them earn it.','Chiesa levelled in the 40th minute before Meret made several important second-half saves.','Davies and Paz changed the game from the bench, with Paz finding Beier for the 85th-minute winner.','The 2–1 win kept Napoli unbeaten in Serie A.']
  };
  const tableStory = {
    id:'napoli-still-top',category:'Serie A',label:'Title Race',date:'After eight matches',
    headline:'Still Top, Still Unbeaten: Napoli Keep Their Grip on Serie A',
    dek:'Eight matches, no defeats and 20 points. The Sassuolo comeback kept Napoli two points clear at the top while Milan, Juventus and Inter remained close behind.',
    image:media.market.src,imageCredit:media.market.credit,imageSource:media.market.source,objectPosition:media.market.objectPosition,objectFit:media.market.objectFit,tone:'feature',
    body:['After eight league matches Napoli sat on 20 points from six wins and two draws.','Milan were closest on 18, with Juventus and Inter on 17.','The Sassuolo comeback mattered because every domestic slip now has title-race weight.']
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => !['lazio-control','sassuolo-response','napoli-still-top'].includes(a.id));
    D.articles.unshift(lazioArticle, sassuoloArticle, tableStory);
    const articleMap = {'bayern-test':media.bayern,'chiesa-pisa':media.chiesa,'pio-shirt':media.pio,'three-nos':media.market,'paz-kdb':media.paz,'peacock-problem':media.peacock,'italy-pipeline':media.italy,'captain-future':media.captain,'stach-insurance':media.stach};
    D.articles.forEach(article => {
      const im = articleMap[article.id];
      if (!im || article.image) return;
      article.image=im.src; article.imageCredit=im.credit; article.imageSource=im.source; article.objectPosition=im.objectPosition; article.objectFit=im.objectFit;
    });
  }

  window.NAPOLI_IMAGE_FALLBACK = null;
})();
