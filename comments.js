(() => {
  // Rows are [handle, comment, optional visiting-club label].
  // Future match articles can explicitly set:
  // commentHeat: 1–5
  // reaction: win | big-win | comeback-win | chaotic-win | draw | frustrating-draw | big-draw | loss | big-loss | upset-loss | rivalry | title-race
  // visitorClub: e.g. 'CHELSEA'
  // If those fields are omitted, this file infers a sensible profile from the article.
  const specific = {
    'udinese-pio-clean-sheet': [
      ['PioNation','Seven logged goals and another winner. At some point we can stop calling this a hot streak and admit he is just clinical.'],
      ['BeierDefenseLeague','Back-to-back assists for Beier. Quietly doing a lot of the dirty work around Pio.'],
      ['FriulaniAway','You needed one finish and then parked the gates. Annoying, but we gave Pio far too much room for the goal.','UDINESE'],
      ['curva_bastoni','That back four was disgusting today. Udinese got absolutely nothing for free.'],
      ['MeretUnion','One real danger moment and Meret answered it. Exactly what you need from your number one.'],
      ['ChiesaHive','Hit the post late and I still thought it was going in. Permanently one touch away from chaos.'],
      ['tactical_zio','Not the rout people wanted, but this was mature. One goal, control the match, take the points.'],
      ['PioHaterForNoReason','Fine. Seven goals. I will be quiet for exactly one match.'],
      ['NapoliSempre','Win before the break, clean sheet, two weeks to reset. Good night.']
    ],
    'arsenal-pio-91': [
      ['PioNation','90+1 and he absolutely buries it. That is a striker who does not care what minute it is.'],
      ['NorthBankVisitor','We should have killed this match long before stoppage time. You got one last look and punished us for it.','ARSENAL'],
      ['BeierDefenseLeague','Everyone remembers the finish. Beier found the pass. Huge contribution.'],
      ['MeretUnion','Without Meret this is over long before stoppage time. Give the keeper his flowers.'],
      ['curvaB_screamer','I went from accepting the loss to screaming at my television in half a second.'],
      ['GoonerInPeace','Raya spent ninety minutes saving us and somehow your giant striker still ruined the night. I hate this competition.','ARSENAL'],
      ['DroughtWatch','Two straight 0–0s and then THAT is how the drought ends. Of course it is.'],
      ['RayaPleaseStop','Raya saved everything for 90 minutes and then Pio finally said enough.'],
      ['SaladinoOutNow','I had the post ready. Then Pio scored. Draft deleted.'],
      ['NapoliTherapy','This club will never allow a normal emotional experience.']
    ],
    'genoa-drought': [
      ['vesuvio_ultras87','Two straight 0–0s. Somebody please locate the goal.'],
      ['GrifoneOnTour','League leaders came to Marassi and forgot where the net was. Thanks for the point, lads.','GENOA'],
      ['PartenopeiProfessor','Defensive structure excellent. Final-third execution absolutely dead.'],
      ['MarekWasRight','Jankowski picked today to become prime Buffon. Naturally.'],
      ['RossobluNoise','Call it a drought if you want. We call it ninety minutes of making your expensive attack miserable.','GENOA'],
      ['DaviesExpress','Davies gets us sixty yards up the pitch and then the move evaporates.'],
      ['NapoliSempre','Still unbeaten. Arsenal next. Panic later if required.'],
      ['CurvaBChaos','Somehow furious and calm at the same time. This sport is stupid.']
    ],
    'lazio-control': [
      ['azzurro_76','A point with that much rotation is not the apocalypse.'],
      ['LazioAwayDays','All that talk about Napoli depth and we still left with the same number of goals as you.','LAZIO'],
      ['NapoliDoomer','WE ARE FINISHED. DELETE THE CLUB.'],
      ['tacticalnonno','Back line good. Midfield fine. Attack had the menace of a damp sock.'],
      ['Aquila1900','You can blame rotation. We will happily take the clean sheet and the point.','LAZIO'],
      ['WhyIsMooreStarting','Development minutes in a title race will always make me nervous.'],
      ['ForzaNapoli94','Clean sheet. Unbeaten. Move on.']
    ],
    'sassuolo-response': [
      ['PazEnjoyer','Paz off the bench and straight into the winner. That is my guy.'],
      ['NeroverdeGuest','We had you wobbling after Bayern and still found a way to throw it away late. Absolutely sickening.','SASSUOLO'],
      ['ChiesaHive','Chiesa dragged us level and Beier finished the job. Proper response.'],
      ['MeretUnion','Everyone thank Meret before discussing the comeback.'],
      ['MapeiMouth','Enjoy the comeback speeches. If we defend the last ten minutes like adults, half this article does not exist.','SASSUOLO'],
      ['beierburner','That late winner is exactly why Beier keeps getting trusted.'],
      ['ultras_di_toronto','85th-minute winners are terrible for my blood pressure.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were cleaner. Learn from it and move.'],
      ['SuedkurveVisitor','Good team. Big ambitions. But when the chances came, you saw what this level actually costs.','BAYERN'],
      ['DaviesExpress','Davies was cooking that left side and nobody finished the meal.'],
      ['KDBTruthers','The second half changed the second Kevin came on.'],
      ['MiaSanMiaTalk','Davies can run at us all night. Scoreboard still says 0–2. Welcome to the deep end.','BAYERN'],
      ['curva_bastoni','Nübel needs another hobby besides saving everything.'],
      ['NapoliDoomer','PROJECT OVER. I WILL REVERSE THIS TAKE AFTER THE NEXT WIN.']
    ],
    'torino-control': [
      ['EndrickEra','That finish is exactly why Endrick has to keep getting real minutes.'],
      ['GranataGuest','One McTominay pass, one Endrick finish. That was basically the whole difference and somehow that makes it more irritating.','TORINO'],
      ['PeacockWatch','Clean sheet for Peacock. Development game went exactly how you want it to go.'],
      ['McTominayMileage','Comes on at halftime, finds Endrick for the winner. Job done.'],
      ['ToroTillIDie','Congrats on the rotation win. We will remember how comfortable you looked before the goal.','TORINO'],
      ['RotationPolice','Finally a rotated match that did not become a three-hour medical emergency.'],
      ['BayernNext','Three points, protected legs, now onto Bayern.']
    ],
    'chiesa-pisa': [
      ['FedeForever','CHIESA 80TH MINUTE. CINEMA.'],
      ['PisaAway','You were 2–0 up and we still had your stadium panicking at 2–2. Do not pretend this was comfortable.','PISA'],
      ['PisaTrauma','Why did Pisa look like 2011 Barcelona for twenty minutes?'],
      ['StachAttack','Goal and assist from Stach and somehow nobody talks about it.'],
      ['NerazzurriPisa','If Chiesa puts that five yards wider, every Napoli account is melting down tonight. Fine margins.','PISA'],
      ['NapoliTherapy','This club refuses to win a normal match.'],
      ['EndrickEra','Endrick opening the scoring keeps getting forgotten because the ending was insane.']
    ],
    'pio-shirt': [
      ['PioNation','The shirt is his until someone takes it. Simple.'],
      ['BeierDefenseLeague','Praise Pio without pretending Beier is useless challenge.'],
      ['InteristaPassingBy','Napoli fans crowning a striker in October. Surely this has never gone wrong before.','INTER'],
      ['PioHaterForNoReason','Fine goals. Wake me when he scores from the parking lot.'],
      ['No9Discourse','One quiet game and this section becomes a civil war.']
    ],
    'three-nos': [
      ['KeepTheCore','Turning down those numbers is a statement. This save is about winning now.'],
      ['CuleWindowWatch','Two hundred million rejected for Beier? Fine. We will ask again when he starts liking Barcelona posts.','BARCELONA'],
      ['BeierDefenseLeague','Barcelona can keep calling. He is not for sale.'],
      ['BayernScoutRoom','You turned down 133.6 for Pio and then brought him to Munich anyway? We were only trying to save everybody time.','BAYERN'],
      ['PioNation','Bayern offering that much for Pio this early tells you everything.'],
      ['CaptainRespect','Keeping Di Lorenzo matters even if Kayode is the future.'],
      ['MercatoMadness','Three giant offers rejected and somehow the squad got stronger anyway.']
    ],
    'paz-kdb': [
      ['PazEnjoyer','It does not have to be one or the other. Play both and let teams suffer.'],
      ['KDBForever','You cannot teach that final pass.'],
      ['MadridistaGuest','Paz discourse after every big match is going to be hilarious. You paid superstar money, now enjoy superstar expectations.','REAL MADRID'],
      ['TacticsInBio','Different profiles for different game states. This is called depth.'],
      ['CommentSectionCoach','Personally I would start twelve players. Problem solved.']
    ],
    'peacock-problem': [
      ['PeacockWatch','The potential is obvious. The question is how many league points development is allowed to cost.'],
      ['KeeperUnion','A clean sheet against Torino buys him more patience. It does not settle the debate.'],
      ['LoanHimNow','Still think regular loan minutes would be better than random starts.'],
      ['AcademyAddict','If he really has low-90s potential you have to find a development path somehow.']
    ],
    'italy-pipeline': [
      ['AzzurriCentral','The Napoli-to-Italy pipeline is getting ridiculous and I am completely fine with it.'],
      ['LesBleusVisitor','One 1–0 and suddenly you are rebuilding the Roman Empire in the comments. We will see you again.','FRANCE'],
      ['KayodeClub','Kayode earning national-team trust while starting for Napoli is exactly the development loop you want.'],
      ['PioNation','Pio club form feeding directly into Italy minutes. Keep it moving.'],
      ['ClubCountryNerd','Two clean sheets for Italy and the same defensive core developing together at club level. There is value in that.']
    ],
    'captain-future': [
      ['CaptainRespect','Kayode can be the future without pretending Di Lorenzo has nothing left to offer.'],
      ['KayodeClub','The long-term job is clearly his. The transition does not need to become a drama.'],
      ['DepthWinsTitles','Experienced rotation fullbacks are exactly what you need in a deep European season.'],
      ['ArmbandTalk','Keep the armband where it is until there is an actual reason to change it.']
    ],
    'stach-insurance': [
      ['StachAttack','Bought as insurance and immediately puts up a goal and assist. Perfect depth signing.'],
      ['SquadBuilder','This is the kind of move that looks boring in August and brilliant in March.'],
      ['MidfieldUnion','Can cover multiple jobs and does not complain about being rotation. Extremely useful.'],
      ['PisaTrauma','Still laughing at that goalkeeper parry turning into a Stach goal.']
    ],
    'napoli-still-top': [
      ['TableWatcher','Unbeaten and top after eight. That is the only table argument I need right now.'],
      ['MilanTracker','Two points is nothing. Keep stacking wins.'],
      ['InterAwayAccount','Enjoy the October screenshots. Titles are not handed out before the Christmas decorations go up.','INTER'],
      ['ScudettoStress','I hate that every random October match already feels like title-race mathematics.'],
      ['RossoneroPassingBy','Top by two and already writing dynasty posts. Please keep the receipts visible.','MILAN'],
      ['NapoliSempre','Strong start, but nobody gets a trophy for leading in October. Keep going.']
    ]
  };

  const profiles = {
    'udinese-pio-clean-sheet': {heat:2,reaction:'win',visitor:'UDINESE'},
    'arsenal-pio-91': {heat:5,reaction:'big-draw',visitor:'ARSENAL'},
    'genoa-drought': {heat:3,reaction:'frustrating-draw',visitor:'GENOA'},
    'lazio-control': {heat:3,reaction:'frustrating-draw',visitor:'LAZIO'},
    'sassuolo-response': {heat:3,reaction:'comeback-win',visitor:'SASSUOLO'},
    'bayern-test': {heat:5,reaction:'big-loss',visitor:'BAYERN'},
    'torino-control': {heat:2,reaction:'win',visitor:'TORINO'},
    'chiesa-pisa': {heat:3,reaction:'chaotic-win',visitor:'PISA'},
    'pio-shirt': {heat:2,reaction:'story'},
    'three-nos': {heat:3,reaction:'story'},
    'paz-kdb': {heat:2,reaction:'story'},
    'peacock-problem': {heat:2,reaction:'story'},
    'italy-pipeline': {heat:3,reaction:'big-win',visitor:'FRANCE'},
    'captain-future': {heat:2,reaction:'story'},
    'stach-insurance': {heat:2,reaction:'story'},
    'napoli-still-top': {heat:3,reaction:'title-race'}
  };

  const handles = [
    'curva_commentator','napoli_in_my_blood','tactical_zio','scapegoat_selector','forza_forever',
    'northstandnoise','partenopei92','matchday_meltdown','bluewall','touchlinelawyer','awayendchaos','vesuvio_voice',
    'SaladinoOutNow','SanPaoloSufferer','PiazzaPlebiscito','ScudettoOrBust','NapoliTherapy','90MinuteNervousBreakdown',
    'SecondHalfMerchant','VesuvioAfterDark','TransferListEveryone','ActuallyWatchTheGame','CurvaBAtWork','NoTacticsJustVibes'
  ];

  const genericBanks = [
    'The headline gets the attention, but there is more going on underneath it.',
    'This is one of those stories that will look different again in a month.',
    'There is a real football decision here, not just discourse.',
    'The squad context matters more than people are admitting.',
    'One player is about to get blamed for all eleven positions and somehow I already know who.',
    'Some of you read the headline and formed a complete tactical thesis.',
    'I have changed my mind twice while reading this.',
    'The next few weeks will tell us a lot more.'
  ];

  const reactionBanks = {
    win: [
      'Three points. Clean enough. Nobody needs a documentary about it.',
      'Good teams win these without turning every match into a crisis meeting.',
      'Bank it and move. The schedule is too ugly to complain about winning.',
      'Not every win needs fireworks. Sometimes you just take the points and go home.'
    ],
    'comeback-win': [
      'I aged nine years and somehow we got three points. Completely normal Napoli experience.',
      'The moment we went behind I knew this thread would become a crime scene. Credit for dragging it back.',
      'That is the kind of win that makes the dressing room louder than the tactics board.',
      'I had three different scapegoats selected and then we won. Annoying.'
    ],
    'chaotic-win': [
      'We won and I am still angry. That should tell you everything.',
      'Three points secured, blood pressure destroyed.',
      'Please win one match like adults. I am begging.',
      'The final whistle is doing a lot of work for the mood in here.'
    ],
    draw: [
      'A point is a point, but nobody is framing this performance.',
      'Not a disaster. Not exactly something I want to watch twice either.',
      'The unbeaten column is doing some heavy lifting for my mood tonight.'
    ],
    'frustrating-draw': [
      'I know we did not lose. My nervous system does not care.',
      'Another ninety minutes of passing around the box like there is a force field over the goal.',
      'Somebody explain how a team this talented can make scoring look like advanced physics.',
      'I am not calling it a crisis. I am also absolutely opening the crisis folder.'
    ],
    'big-draw': [
      'THAT is why you play to the final whistle. Europe can keep the pretty narratives; give me the point.',
      'I was already writing the post-mortem and then the stadium exploded.',
      'A draw has no business feeling this much like a win but here we are.',
      'These are the nights where a team starts believing it belongs with the heavyweights.',
      'If that goal happens in a knockout tie I may actually leave my body.'
    ],
    loss: [
      'Bad night. Own it, fix it, do not let it become two bad nights.',
      'The performance was not catastrophic. The result still sucks.',
      'Nobody gets protected from criticism after a loss, but the season is not on fire.'
    ],
    'big-loss': [
      'Europe does not care how good the domestic form looks. Miss your chances and elite teams punish you.',
      'I can accept losing to a giant. I cannot accept looking surprised when the level rises.',
      'This is the match the staff need to keep on the projector all week.',
      'No panic, but no excuses either. We found the ceiling tonight and it hit us in the face.',
      'I swear every Champions League loss makes this forum forget the previous six months of football.'
    ],
    'big-win': [
      'PRINT THE SCOREBOARD AND SEND IT TO EVERYONE WHO TALKED THIS WEEK.',
      'Big game, big pressure, big response. That is what serious teams do.',
      'I will be unbearable until the next kickoff and nobody can stop me.',
      'All week we heard why they were supposed to expose us. Quiet now, is it?',
      'This is the kind of result you bring up completely unprompted for the next five years.'
    ],
    rivalry: [
      'I do not care about form, xG, weather or the alignment of the planets. Win the rivalry match.',
      'There are three points and then there are THESE three points.',
      'If we lose this one I am muting every football account for a week.',
      'Nobody say calm down. This fixture is not for calm people.'
    ],
    'title-race': [
      'Every dropped point is now a national emergency apparently. Welcome to a title race.',
      'Screenshot the table if you want. Just keep winning.',
      'The only thing worse than being in a title race is not being in one.',
      'I have started doing points projections in October. Someone confiscate my phone.'
    ],
    story: [
      'This is exactly the kind of topic that becomes unbearable after one bad match.',
      'There is a sensible football discussion here, which means the comments will avoid it completely.',
      'Give it two weeks and everyone will pretend they always had the correct opinion.',
      'The discourse has officially become more complicated than the actual selection decision.'
    ],
    'upset-loss': [
      'SALADINO OUT. Do not show me the table. Do not show me the form. Explain THIS result.',
      'TRANSFER LIST EVERYONE. I will calm down tomorrow and reject all the offers, but tonight EVERYONE.',
      'No tactical analysis tonight. Just shame. Pure, concentrated shame.',
      'How are we this expensive, this highly rated, and losing THIS match? I need a congressional inquiry.',
      'I defended this project for MONTHS and this is the thanks I get?',
      'Open training tomorrow. No music. No rondos. Just running until somebody apologizes.',
      'I have deleted the game out of solidarity. See you at kickoff next week.',
      'If anybody needs me I will be staring at the ceiling in complete silence.',
      'The entire rival internet is going to use this scoreline against us for six months. Fantastic.',
      'Saladino has twenty-four hours to explain this result to my mother personally.',
      'I am outside the training ground with a PowerPoint and several extremely unreasonable demands.',
      'There are losses and then there are results that make you reconsider every decision since preseason.',
      'Bench the starters. Start the academy. Sack the chef. I am not thinking rationally and I refuse to start now.',
      'This team made me believe and THIS is what they do with that trust. Football is a scam.'
    ]
  };

  const rivalGloat = [
    'Before kickoff your forum was asking how many. After full time it is asking how. Beautiful.','
    All that depth, all that money, all those ratings — and you still have to read comments from us tonight.',
    'Screenshot the table again. We will screenshot the score.',
    'Your excuses are loading faster than your attack did.',
    'We were told this was supposed to be a routine night for Napoli. Please continue the explanation.',
    'Safe trip home. Bring the possession stats with you if they make you feel better.'
  ];

  const rivalExcuses = [
    'Enjoy the win. We will see how loud this place is when the rematch comes around.',
    'One result and suddenly every Napoli account has discovered dynasty language. Relax.',
    'Fine margins. You took yours, we did not. Do not turn it into a documentary.',
    'You deserved the result. I still reserve the right to be deeply annoying about it.',
    'Congratulations. I will now spend the evening explaining why this match actually did not count.'
  ];

  const rivalDraw = [
    'You are celebrating a draw like a trophy and I would mock you harder if I was not furious about how it happened.',
    'We had the match in our hands and somehow your forum is the happy one. Disgusting sport.',
    'Take your point. We are taking the screenshots of the celebration.',
    'I came here to gloat and now I have to pretend a draw was part of the plan.'
  ];

  const rivalHandles = ['AwayEndTourist','OppositionScout','ScoreboardMerchant','HereForTheMeltdown','VisitingNoise','WrongEndOfTown','RivalAccount','AwayDayLurker'];
  const knownClubs = ['CHELSEA','ARSENAL','BAYERN','INTER','MILAN','JUVENTUS','ROMA','LAZIO','GENOA','TORINO','PISA','SASSUOLO','UDINESE','BARCELONA','REAL MADRID','FRANCE'];
  const bigNames = ['CHELSEA','ARSENAL','BAYERN','INTER','MILAN','JUVENTUS','BARCELONA','REAL MADRID','MANCHESTER CITY','LIVERPOOL','PSG','FRANCE'];
  const targetByHeat = {1:5,2:8,3:11,4:14,5:17};

  const hash = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const escapeComment = (value='') => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const articleText = article => `${article?.headline||''} ${article?.dek||''} ${(article?.body||[]).join(' ')} ${article?.date||''}`;

  function inferVisitor(article){
    const upper = articleText(article).toUpperCase();
    return knownClubs.find(club => upper.includes(club)) || '';
  }

  function inferHeat(article){
    const upper = articleText(article).toUpperCase();
    let heat = 2;
    if (/CHAMPIONS LEAGUE|\bUCL\b|EUROPE|TITLE|SCUDETTO|DERBY|RIVAL/.test(upper)) heat = 3;
    if (bigNames.some(club => upper.includes(club))) heat = Math.max(heat,4);
    if (/FINAL|SEMI[- ]?FINAL|QUARTER[- ]?FINAL|KNOCKOUT|TITLE DECIDER|WORLD CUP/.test(upper)) heat = 5;
    return heat;
  }

  function inferReaction(article){
    const lower = articleText(article).toLowerCase();
    if (/upset|stunned|shocked|humiliated|embarrass|relegation|bottom[- ]half/.test(lower) && /loss|defeat|lost|beaten/.test(lower)) return 'upset-loss';
    if (/loss|defeat|lost|beaten|0–2|0-2|0–3|0-3/.test(lower)) return inferHeat(article)>=4 ? 'big-loss' : 'loss';
    if (/draw|level|equaliser|equalizer|0–0|0-0|1–1|1-1/.test(lower)) return inferHeat(article)>=4 ? 'big-draw' : 'draw';
    if (/comeback|came from behind|late winner/.test(lower)) return 'comeback-win';
    if (/win|winner|victory|three points/.test(lower)) return inferHeat(article)>=4 ? 'big-win' : 'win';
    return 'story';
  }

  function profileFor(article){
    const preset = profiles[article.id] || {};
    const reaction = article.reaction || preset.reaction || inferReaction(article);
    let heat = Number(article.commentHeat || preset.heat || inferHeat(article));
    heat = Math.max(1,Math.min(5,heat));
    if (reaction === 'upset-loss') heat = 5;
    return {
      heat,
      reaction,
      visitor: String(article.visitorClub || preset.visitor || inferVisitor(article) || '').toUpperCase()
    };
  }

  function pickUnique(bank, seed, usedText){
    if(!bank?.length) return null;
    for(let offset=0;offset<bank.length*2;offset++){
      const text = bank[(seed+offset*7)%bank.length];
      if(!usedText.has(text)) return text;
    }
    return null;
  }

  function nextHandle(seed, usedHandles, bank=handles){
    for(let offset=0;offset<bank.length*2;offset++){
      const handle = bank[(seed+offset*5)%bank.length];
      if(!usedHandles.has(handle)) return handle;
    }
    return `${bank[seed%bank.length]}_${seed%97}`;
  }

  function dynamicRows(article, profile, existing){
    const rows = [...existing];
    const usedText = new Set(rows.map(r=>r[1]));
    const usedHandles = new Set(rows.map(r=>r[0]));
    const seed = hash(`${article.id}|${article.headline}|${profile.reaction}|${profile.heat}`);
    const target = profile.reaction==='upset-loss' ? 20 : targetByHeat[profile.heat];
    const reactionBank = reactionBanks[profile.reaction] || reactionBanks.story;

    let i=0;
    while(rows.length<target && i<80){
      let visitor = '';
      let bank = reactionBank;
      const remaining = target - rows.length;
      const shouldVisit = profile.visitor && profile.heat>=3 && (i%4===1 || (profile.reaction==='upset-loss' && i%3===1));

      if(shouldVisit){
        visitor = profile.visitor;
        if(profile.reaction==='upset-loss' || profile.reaction==='big-loss' || profile.reaction==='loss') bank = rivalGloat;
        else if(profile.reaction==='big-draw' || profile.reaction==='draw' || profile.reaction==='frustrating-draw') bank = rivalDraw;
        else bank = rivalExcuses;
      } else if(profile.reaction==='upset-loss' && i%5===4){
        // Title rivals piling into an embarrassing-loss thread makes the forum feel especially toxic.
        visitor = (seed+i)%2 ? 'INTER' : 'MILAN';
        bank = rivalGloat;
      } else if(remaining<=2 && profile.reaction==='story') {
        bank = genericBanks;
      }

      const text = pickUnique(bank,seed+i*13,usedText) || pickUnique(genericBanks,seed+i*17,usedText);
      if(!text){ i++; continue; }
      const handleBank = visitor ? rivalHandles : handles;
      const handle = nextHandle(seed+i*11,usedHandles,handleBank);
      usedText.add(text);
      usedHandles.add(handle);
      rows.push(visitor ? [handle,text,visitor] : [handle,text]);
      i++;
    }
    return rows;
  }

  function genericComments(article){
    return dynamicRows(article,profileFor(article),[]);
  }

  function commentsFor(article){
    const profile = profileFor(article);
    return {rows:dynamicRows(article,profile,specific[article.id] || []),profile};
  }

  function trafficLabel(profile, count){
    if(profile.reaction==='upset-loss') return `🔥 MELTDOWN · ${count} shown`;
    if(profile.heat===5) return `🔥 BIG-MATCH THREAD · ${count} shown`;
    if(profile.heat===4) return `HIGH TRAFFIC · ${count} shown`;
    return `${count} shown`;
  }

  function renderComments(article){
    const {rows,profile} = commentsFor(article);
    return `<section class="fan-comments heat-${profile.heat}" data-comments-for="${escapeComment(article.id)}" data-reaction="${escapeComment(profile.reaction)}" aria-label="Fictional fan comments"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${escapeComment(trafficLabel(profile,rows.length))}</small></div><div class="fan-comments-list">${rows.map(([user,text,visitor],i)=>`<article class="fan-comment${visitor?' visitor-comment':''}${profile.reaction==='upset-loss'&&!visitor?' meltdown-comment':''}"><div class="fan-avatar">${escapeComment(user.slice(0,1).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${escapeComment(user)}</strong>${visitor?`<em class="visitor-badge">${escapeComment(visitor)} FAN</em>`:''}<span>${i===0?'just now':`${i*3+2}m`}</span></div><p>${escapeComment(text)}</p><div class="fan-actions"><span>▲ ${13+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }

  let syncing = false;
  function syncCommentsToReader(){
    if(syncing) return;
    const reader=document.getElementById('readerContent');
    if(!reader) return;
    const headline=reader.querySelector('#readerHeadline')?.textContent?.trim();
    if(!headline){ reader.querySelector('.fan-comments')?.remove(); return; }
    const article=(window.NAPOLI_DATA?.articles||[]).find(a=>String(a.headline).trim()===headline);
    if(!article) return;
    const current=reader.querySelector('.fan-comments');
    if(current?.dataset.commentsFor===article.id) return;
    syncing=true;
    current?.remove();
    reader.insertAdjacentHTML('beforeend',renderComments(article));
    syncing=false;
  }

  const reader=document.getElementById('readerContent');
  if(reader){
    new MutationObserver(()=>queueMicrotask(syncCommentsToReader)).observe(reader,{childList:true,subtree:true});
    syncCommentsToReader();
  }

  document.addEventListener('click',e=>{
    if(e.target.closest?.('[data-article]')) requestAnimationFrame(syncCommentsToReader);
  });
  document.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]')) requestAnimationFrame(syncCommentsToReader);
  });

  const style=document.createElement('style');
  style.textContent=`
    .fan-comments{margin:0 clamp(20px,7vw,76px) 34px;border-top:4px solid var(--navy);padding-top:22px}
    .fan-comments.heat-5{border-top-width:6px}
    .fan-comments-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:8px}
    .fan-comments-head span{display:block;color:var(--blue);font-size:.68rem;font-weight:950;letter-spacing:.11em;text-transform:uppercase}
    .fan-comments-head h3{margin:3px 0 0;font-size:1.35rem;letter-spacing:-.02em}
    .fan-comments-head small{color:var(--muted);font-size:.7rem;white-space:nowrap;font-weight:800}
    .fan-comment{display:grid;grid-template-columns:38px 1fr;gap:12px;padding:16px 0;border-bottom:1px solid var(--line)}
    .fan-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--navy);color:var(--sky);font-weight:950}
    .fan-comment-meta{display:flex;gap:8px;align-items:baseline;flex-wrap:wrap}
    .fan-comment-meta strong{font-size:.84rem;color:var(--navy)}
    .fan-comment-meta span,.fan-actions{font-size:.68rem;color:var(--muted)}
    .visitor-badge{font-style:normal;font-size:.57rem;font-weight:950;letter-spacing:.06em;padding:2px 5px;border:1px solid var(--line);border-radius:3px;color:var(--muted);background:#fff}
    .visitor-comment{background:linear-gradient(90deg,rgba(8,26,45,.035),transparent 62%);margin-left:-10px;margin-right:-10px;padding-left:10px;padding-right:10px}
    .meltdown-comment p{font-weight:650}
    .fan-comments[data-reaction="upset-loss"] .fan-comments-head small{color:#9d1c1c}
    .fan-comment p{margin:4px 0 7px!important;font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;font-size:.9rem!important;line-height:1.45!important;color:var(--ink)!important}
    .fan-actions{display:flex;gap:15px;font-weight:800}
    @media(max-width:760px){.fan-comments{margin:0 20px 24px}.fan-comments-head{align-items:flex-start;flex-direction:column;gap:4px}.fan-comments-head small{white-space:normal}.fan-comment{grid-template-columns:34px 1fr}.fan-avatar{width:34px;height:34px}.visitor-comment{margin-left:-6px;margin-right:-6px;padding-left:6px;padding-right:6px}}
    @media(max-width:390px){.fan-comments{margin-left:16px;margin-right:16px}}
  `;
  document.head.appendChild(style);
})();
