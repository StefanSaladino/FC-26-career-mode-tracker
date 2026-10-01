(() => {
  const specific = {
    'udinese-pio-clean-sheet': [
      ['PioNation','Seven logged goals and another winner. At some point we can stop calling this a hot streak and admit he is just clinical.'],
      ['BeierDefenseLeague','Back-to-back assists for Beier. Quietly doing a lot of the dirty work around Pio.'],
      ['curva_bastoni','That back four was disgusting today. Udinese got absolutely nothing for free.'],
      ['MeretUnion','One real danger moment and Meret answered it. Exactly what you need from your number one.'],
      ['ChiesaHive','Hit the post late and I still thought it was going in. Permanently one touch away from chaos.'],
      ['tactical_zio','Not the rout people wanted, but this was mature. One goal, control the match, take the points.'],
      ['PioHaterForNoReason','Fine. Seven goals. I will be quiet for exactly one match.'],
      ['NapoliSempre','Win before the break, clean sheet, two weeks to reset. Good night.']
    ],
    'arsenal-pio-91': [
      ['PioNation','90+1 and he absolutely buries it. That is a striker who does not care what minute it is.'],
      ['BeierDefenseLeague','Everyone remembers the finish. Beier found the pass. Huge contribution.'],
      ['MeretUnion','Without Meret this is over long before stoppage time. Give the keeper his flowers.'],
      ['curvaB_screamer','I went from accepting the loss to screaming at my television in half a second.'],
      ['DroughtWatch','Two straight 0–0s and then THAT is how the drought ends. Of course it is.'],
      ['RayaPleaseStop','Raya saved everything for 90 minutes and then Pio finally said enough.'],
      ['SaladinoOutNow','I had the post ready. Then Pio scored. Draft deleted.'],
      ['NapoliTherapy','This club will never allow a normal emotional experience.']
    ],
    'genoa-drought': [
      ['vesuvio_ultras87','Two straight 0–0s. Somebody please locate the goal.'],
      ['PartenopeiProfessor','Defensive structure excellent. Final-third execution absolutely dead.'],
      ['MarekWasRight','Jankowski picked today to become prime Buffon. Naturally.'],
      ['DaviesExpress','Davies gets us sixty yards up the pitch and then the move evaporates.'],
      ['NapoliSempre','Still unbeaten. Arsenal next. Panic later if required.'],
      ['CurvaBChaos','Somehow furious and calm at the same time. This sport is stupid.']
    ],
    'lazio-control': [
      ['azzurro_76','A point with that much rotation is not the apocalypse.'],
      ['NapoliDoomer','WE ARE FINISHED. DELETE THE CLUB.'],
      ['tacticalnonno','Back line good. Midfield fine. Attack had the menace of a damp sock.'],
      ['WhyIsMooreStarting','Development minutes in a title race will always make me nervous.'],
      ['ForzaNapoli94','Clean sheet. Unbeaten. Move on.']
    ],
    'sassuolo-response': [
      ['PazEnjoyer','Paz off the bench and straight into the winner. That is my guy.'],
      ['ChiesaHive','Chiesa dragged us level and Beier finished the job. Proper response.'],
      ['MeretUnion','Everyone thank Meret before discussing the comeback.'],
      ['beierburner','That late winner is exactly why Beier keeps getting trusted.'],
      ['ultras_di_toronto','85th-minute winners are terrible for my blood pressure.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were cleaner. Learn from it and move.'],
      ['DaviesExpress','Davies was cooking that left side and nobody finished the meal.'],
      ['KDBTruthers','The second half changed the second Kevin came on.'],
      ['curva_bastoni','Nübel needs another hobby besides saving everything.'],
      ['NapoliDoomer','PROJECT OVER. I WILL REVERSE THIS TAKE AFTER THE NEXT WIN.']
    ],
    'torino-control': [
      ['EndrickEra','That finish is exactly why Endrick has to keep getting real minutes.'],
      ['PeacockWatch','Clean sheet for Peacock. Development game went exactly how you want it to go.'],
      ['McTominayMileage','Comes on at halftime, finds Endrick for the winner. Job done.'],
      ['RotationPolice','Finally a rotated match that did not become a three-hour medical emergency.'],
      ['BayernNext','Three points, protected legs, now onto Bayern.']
    ],
    'chiesa-pisa': [
      ['FedeForever','CHIESA 80TH MINUTE. CINEMA.'],
      ['PisaTrauma','Why did Pisa look like 2011 Barcelona for twenty minutes?'],
      ['StachAttack','Goal and assist from Stach and somehow nobody talks about it.'],
      ['NapoliTherapy','This club refuses to win a normal match.'],
      ['EndrickEra','Endrick opening the scoring keeps getting forgotten because the ending was insane.']
    ],
    'pio-shirt': [
      ['PioNation','The shirt is his until someone takes it. Simple.'],
      ['BeierDefenseLeague','Praise Pio without pretending Beier is useless challenge.'],
      ['PioHaterForNoReason','Fine goals. Wake me when he scores from the parking lot.'],
      ['No9Discourse','One quiet game and this section becomes a civil war.']
    ],
    'three-nos': [
      ['KeepTheCore','Turning down those numbers is a statement. This save is about winning now.'],
      ['BeierDefenseLeague','Barcelona can keep calling. He is not for sale.'],
      ['PioNation','Bayern offering that much for Pio this early tells you everything.'],
      ['CaptainRespect','Keeping Di Lorenzo matters even if Kayode is the future.'],
      ['MercatoMadness','Three giant offers rejected and somehow the squad got stronger anyway.']
    ],
    'paz-kdb': [
      ['PazEnjoyer','It does not have to be one or the other. Play both and let teams suffer.'],
      ['KDBForever','You cannot teach that final pass.'],
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
      ['ScudettoStress','I hate that every random October match already feels like title-race mathematics.'],
      ['NapoliSempre','Strong start, but nobody gets a trophy for leading in October. Keep going.']
    ]
  };

  const handles = [
    'curva_commentator','napoli_in_my_blood','tactical_zio','scapegoat_selector','forza_forever',
    'northstandnoise','partenopei92','matchday_meltdown','bluewall','touchlinelawyer','awayendchaos','vesuvio_voice'
  ];

  const banks = [
    ['The headline gets the attention, but there is more going on underneath it.','This is one of those stories that will look different again in a month.','There is a real football decision here, not just discourse.','I have changed my mind twice while reading this.'],
    ['The squad context matters more than people are admitting.','There is a sensible argument on both sides of this one.','This feels more like a season-long question than something one match settles.','The next few weeks will tell us a lot more.'],
    ['One player is about to get blamed for all eleven positions and somehow I already know who.','The comments are going to be unbearable if this happens again.','Some of you read the headline and formed a complete tactical thesis.','The overreaction cycle has officially begun.']
  ];

  const hash = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const escapeComment = (value='') => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');

  function genericComments(article){
    const seed = hash(`${article.id}|${article.headline}`);
    const rows = [];
    const usedText = new Set();
    const usedHandles = new Set();
    for(let i=0;i<5;i++){
      let bank=banks[(seed+i*7)%banks.length];
      let text=bank[(seed+i*11)%bank.length];
      let guard=0;
      while(usedText.has(text)&&guard<20){
        bank=banks[(seed+i*7+guard+1)%banks.length];
        text=bank[(seed+i*11+guard+1)%bank.length];
        guard++;
      }
      usedText.add(text);
      let handle=handles[(seed+i*5)%handles.length];
      guard=0;
      while(usedHandles.has(handle)&&guard<handles.length){handle=handles[(seed+i*5+guard+1)%handles.length];guard++;}
      usedHandles.add(handle);
      rows.push([handle,text]);
    }
    return rows;
  }

  function commentsFor(article){ return specific[article.id] || genericComments(article); }

  function renderComments(article){
    const rows = commentsFor(article);
    return `<section class="fan-comments" data-comments-for="${escapeComment(article.id)}" aria-label="Fictional fan comments"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,text],i)=>`<article class="fan-comment"><div class="fan-avatar">${escapeComment(user.slice(0,1).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${escapeComment(user)}</strong><span>${i===0?'just now':`${i*4+3}m`}</span></div><p>${escapeComment(text)}</p><div class="fan-actions"><span>▲ ${13+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
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
    .fan-comments-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:8px}
    .fan-comments-head span{display:block;color:var(--blue);font-size:.68rem;font-weight:950;letter-spacing:.11em;text-transform:uppercase}
    .fan-comments-head h3{margin:3px 0 0;font-size:1.35rem;letter-spacing:-.02em}
    .fan-comments-head small{color:var(--muted);font-size:.7rem;white-space:nowrap}
    .fan-comment{display:grid;grid-template-columns:38px 1fr;gap:12px;padding:16px 0;border-bottom:1px solid var(--line)}
    .fan-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--navy);color:var(--sky);font-weight:950}
    .fan-comment-meta{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
    .fan-comment-meta strong{font-size:.84rem;color:var(--navy)}
    .fan-comment-meta span,.fan-actions{font-size:.68rem;color:var(--muted)}
    .fan-comment p{margin:4px 0 7px!important;font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;font-size:.9rem!important;line-height:1.45!important;color:var(--ink)!important}
    .fan-actions{display:flex;gap:15px;font-weight:800}
    @media(max-width:760px){.fan-comments{margin:0 20px 24px}.fan-comments-head{align-items:flex-start;flex-direction:column;gap:4px}.fan-comments-head small{white-space:normal}.fan-comment{grid-template-columns:34px 1fr}.fan-avatar{width:34px;height:34px}}
    @media(max-width:390px){.fan-comments{margin-left:16px;margin-right:16px}}
  `;
  document.head.appendChild(style);
})();
