(() => {
  // Future articles can override the automatic forum behaviour with:
  // commentHeat: 1-5, reaction: 'upset-loss' etc., visitorClub: 'CHELSEA'.
  const seeded = {
    'arsenal-pio-91': [
      ['PioNation','90+1 and he absolutely buries it. That is a striker who does not care what minute it is.'],
      ['NorthBankVisitor','We should have killed this match long before stoppage time. You got one last look and punished us for it.','ARSENAL'],
      ['MeretUnion','Without Meret this is over long before stoppage time. Give the keeper his flowers.'],
      ['GoonerInPeace','Raya spent ninety minutes saving us and somehow your giant striker still ruined the night. I hate this competition.','ARSENAL'],
      ['SaladinoOutNow','I had the post ready. Then Pio scored. Draft deleted.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were cleaner. Learn from it and move.'],
      ['SuedkurveVisitor','Good team. Big ambitions. But when the chances came, you saw what this level actually costs.','BAYERN'],
      ['DaviesExpress','Davies was cooking that left side and nobody finished the meal.'],
      ['MiaSanMiaTalk','Davies can run at us all night. Scoreboard still says 0-2. Welcome to the deep end.','BAYERN'],
      ['NapoliDoomer','PROJECT OVER. I WILL REVERSE THIS TAKE AFTER THE NEXT WIN.']
    ],
    'udinese-pio-clean-sheet': [
      ['PioNation','Seven logged goals and another winner. At some point we can stop calling this a hot streak and admit he is just clinical.'],
      ['BeierDefenseLeague','Back-to-back assists for Beier. Quietly doing a lot of the dirty work around Pio.'],
      ['FriulaniAway','You needed one finish and then parked the gates. Annoying, but we gave Pio far too much room for the goal.','UDINESE'],
      ['curva_bastoni','That back four was disgusting today. Udinese got absolutely nothing for free.']
    ],
    'genoa-drought': [
      ['vesuvio_ultras87','Two straight 0-0s. Somebody please locate the goal.'],
      ['GrifoneOnTour','League leaders came to Marassi and forgot where the net was. Thanks for the point, lads.','GENOA'],
      ['PartenopeiProfessor','Defensive structure excellent. Final-third execution absolutely dead.'],
      ['RossobluNoise','Call it a drought if you want. We call it ninety minutes of making your expensive attack miserable.','GENOA']
    ],
    'lazio-control': [
      ['azzurro_76','A point with that much rotation is not the apocalypse.'],
      ['LazioAwayDays','All that talk about Napoli depth and we still left with the same number of goals as you.','LAZIO'],
      ['NapoliDoomer','WE ARE FINISHED. DELETE THE CLUB.'],
      ['tacticalnonno','Back line good. Midfield fine. Attack had the menace of a damp sock.']
    ],
    'sassuolo-response': [
      ['PazEnjoyer','Paz off the bench and straight into the winner. That is my guy.'],
      ['NeroverdeGuest','We had you wobbling after Bayern and still found a way to throw it away late. Absolutely sickening.','SASSUOLO'],
      ['ChiesaHive','Chiesa dragged us level and Beier finished the job. Proper response.'],
      ['MapeiMouth','If we defend the last ten minutes like adults, half this article does not exist.','SASSUOLO']
    ],
    'chiesa-pisa': [
      ['FedeForever','CHIESA 80TH MINUTE. CINEMA.'],
      ['PisaAway','You were 2-0 up and we still had your stadium panicking at 2-2. Do not pretend this was comfortable.','PISA'],
      ['StachAttack','Goal and assist from Stach and somehow nobody talks about it.'],
      ['NapoliTherapy','This club refuses to win a normal match.']
    ],
    'torino-control': [
      ['EndrickEra','That finish is exactly why Endrick has to keep getting real minutes.'],
      ['GranataGuest','One McTominay pass, one Endrick finish. That was basically the whole difference.','TORINO'],
      ['PeacockWatch','Clean sheet for Peacock. Development game went exactly how you want it to go.']
    ]
  };

  const profiles = {
    'arsenal-pio-91':[5,'big-draw','ARSENAL'], 'bayern-test':[5,'big-loss','BAYERN'],
    'udinese-pio-clean-sheet':[2,'win','UDINESE'], 'genoa-drought':[3,'frustrating-draw','GENOA'],
    'lazio-control':[3,'frustrating-draw','LAZIO'], 'sassuolo-response':[3,'comeback-win','SASSUOLO'],
    'chiesa-pisa':[3,'chaotic-win','PISA'], 'torino-control':[2,'win','TORINO'],
    'italy-pipeline':[3,'big-win','FRANCE'], 'napoli-still-top':[3,'title-race',''],
    'three-nos':[3,'story',''], 'pio-shirt':[2,'story',''], 'paz-kdb':[2,'story',''],
    'peacock-problem':[2,'story',''], 'captain-future':[2,'story',''], 'stach-insurance':[2,'story','']
  };

  const handles = ['curva_commentator','napoli_in_my_blood','tactical_zio','scapegoat_selector','forza_forever','northstandnoise','partenopei92','matchday_meltdown','bluewall','touchlinelawyer','awayendchaos','vesuvio_voice','SaladinoOutNow','SanPaoloSufferer','ScudettoOrBust','NapoliTherapy','90MinuteNervousBreakdown','TransferListEveryone','ActuallyWatchTheGame','NoTacticsJustVibes'];
  const rivalHandles = ['AwayEndTourist','OppositionScout','ScoreboardMerchant','HereForTheMeltdown','VisitingNoise','WrongEndOfTown','RivalAccount','AwayDayLurker'];
  const targetByHeat = {1:5,2:8,3:11,4:14,5:17};
  const knownClubs = ['CHELSEA','ARSENAL','BAYERN','INTER','MILAN','JUVENTUS','ROMA','LAZIO','GENOA','TORINO','PISA','SASSUOLO','UDINESE','BARCELONA','REAL MADRID','FRANCE'];
  const bigNames = ['CHELSEA','ARSENAL','BAYERN','INTER','MILAN','JUVENTUS','BARCELONA','REAL MADRID','MANCHESTER CITY','LIVERPOOL','PSG','FRANCE'];

  const banks = {
    win:['Three points. Clean enough. Nobody needs a documentary about it.','Good teams win these without turning every match into a crisis meeting.','Bank it and move. The schedule is too ugly to complain about winning.','Not every win needs fireworks. Sometimes you just take the points and go home.'],
    'comeback-win':['I aged nine years and somehow we got three points. Completely normal Napoli experience.','The moment we went behind I knew this thread would become a crime scene. Credit for dragging it back.','I had three different scapegoats selected and then we won. Annoying.','That is the kind of win that makes the dressing room louder than the tactics board.'],
    'chaotic-win':['We won and I am still angry. That should tell you everything.','Three points secured, blood pressure destroyed.','Please win one match like adults. I am begging.','The final whistle is doing a lot of work for the mood in here.'],
    draw:['A point is a point, but nobody is framing this performance.','Not a disaster. Not exactly something I want to watch twice either.','The unbeaten column is doing some heavy lifting for my mood tonight.'],
    'frustrating-draw':['I know we did not lose. My nervous system does not care.','Another ninety minutes of passing around the box like there is a force field over the goal.','Somebody explain how a team this talented can make scoring look like advanced physics.','I am not calling it a crisis. I am also absolutely opening the crisis folder.','Zero goals again and somehow I am expected to act normal tomorrow.'],
    'big-draw':['THAT is why you play to the final whistle. Europe can keep the pretty narratives; give me the point.','I was already writing the post-mortem and then the stadium exploded.','A draw has no business feeling this much like a win but here we are.','These are the nights where a team starts believing it belongs with the heavyweights.','If that goal happens in a knockout tie I may actually leave my body.','Pio just turned ninety minutes of suffering into a result we will remember all year.'],
    loss:['Bad night. Own it, fix it, do not let it become two bad nights.','The performance was not catastrophic. The result still sucks.','Nobody gets protected from criticism after a loss, but the season is not on fire.'],
    'big-loss':['Europe does not care how good the domestic form looks. Miss your chances and elite teams punish you.','I can accept losing to a giant. I cannot accept looking surprised when the level rises.','This is the match the staff need to keep on the projector all week.','No panic, but no excuses either. We found the ceiling tonight and it hit us in the face.','I swear every Champions League loss makes this forum forget the previous six months of football.','If we want to win this competition eventually, nights like this have to hurt.'],
    'big-win':['PRINT THE SCOREBOARD AND SEND IT TO EVERYONE WHO TALKED THIS WEEK.','Big game, big pressure, big response. That is what serious teams do.','I will be unbearable until the next kickoff and nobody can stop me.','All week we heard why they were supposed to expose us. Quiet now, is it?','This is the kind of result you bring up completely unprompted for the next five years.'],
    rivalry:['I do not care about form, xG, weather or the alignment of the planets. Win the rivalry match.','There are three points and then there are THESE three points.','If we lose this one I am muting every football account for a week.','Nobody say calm down. This fixture is not for calm people.'],
    'title-race':['Every dropped point is now a national emergency apparently. Welcome to a title race.','Screenshot the table if you want. Just keep winning.','The only thing worse than being in a title race is not being in one.','I have started doing points projections in October. Someone confiscate my phone.'],
    story:['The squad context matters more than people are admitting.','One player is about to get blamed for all eleven positions and somehow I already know who.','Some of you read the headline and formed a complete tactical thesis.','Give it two weeks and everyone will pretend they always had the correct opinion.','There is a sensible football discussion here, which means the comments will avoid it completely.'],
    'upset-loss':['SALADINO OUT. Do not show me the table. Do not show me the form. Explain THIS result.','TRANSFER LIST EVERYONE. I will calm down tomorrow and reject all the offers, but tonight EVERYONE.','No tactical analysis tonight. Just shame. Pure, concentrated shame.','How are we this expensive, this highly rated, and losing THIS match? I need a congressional inquiry.','I defended this project for MONTHS and this is the thanks I get?','Open training tomorrow. No music. No rondos. Just running until somebody apologizes.','I have deleted the game out of solidarity. See you at kickoff next week.','If anybody needs me I will be staring at the ceiling in complete silence.','The entire rival internet is going to use this scoreline against us for six months. Fantastic.','Saladino has twenty-four hours to explain this result to my mother personally.','I am outside the training ground with a PowerPoint and several extremely unreasonable demands.','Bench the starters. Start the academy. Sack the chef. I am not thinking rationally and I refuse to start now.','This team made me believe and THIS is what they do with that trust. Football is a scam.']
  };

  const rivalGloat = ['Before kickoff your forum was asking how many. After full time it is asking how. Beautiful.','All that depth, all that money, all those ratings, and you still have to read comments from us tonight.','Screenshot the table again. We will screenshot the score.','Your excuses are loading faster than your attack did.','We were told this was supposed to be a routine night for Napoli. Please continue the explanation.','Safe trip home. Bring the possession stats with you if they make you feel better.'];
  const rivalExcuse = ['Enjoy the win. We will see how loud this place is when the rematch comes around.','One result and suddenly every Napoli account has discovered dynasty language. Relax.','Fine margins. You took yours, we did not. Do not turn it into a documentary.','You deserved the result. I still reserve the right to be deeply annoying about it.','Congratulations. I will now spend the evening explaining why this match actually did not count.'];
  const rivalDraw = ['You are celebrating a draw like a trophy and I would mock you harder if I was not furious about how it happened.','We had the match in our hands and somehow your forum is the happy one. Disgusting sport.','Take your point. We are taking the screenshots of the celebration.','I came here to gloat and now I have to pretend a draw was part of the plan.'];

  const h = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const esc = (v='') => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const textOf = a => `${a?.headline||''} ${a?.dek||''} ${(a?.body||[]).join(' ')} ${a?.date||''}`;

  function inferVisitor(a){ const u=textOf(a).toUpperCase(); return knownClubs.find(x=>u.includes(x))||''; }
  function inferHeat(a){
    const u=textOf(a).toUpperCase(); let heat=2;
    if(/CHAMPIONS LEAGUE|\bUCL\b|EUROPE|TITLE|SCUDETTO|DERBY|RIVAL/.test(u)) heat=3;
    if(bigNames.some(x=>u.includes(x))) heat=Math.max(heat,4);
    if(/FINAL|SEMI[- ]?FINAL|QUARTER[- ]?FINAL|KNOCKOUT|TITLE DECIDER|WORLD CUP/.test(u)) heat=5;
    return heat;
  }
  function inferReaction(a){
    const t=textOf(a).toLowerCase(), heat=inferHeat(a);
    if(/upset|stunned|shocked|humiliated|embarrass|relegation|bottom[- ]half/.test(t)&&/loss|defeat|lost|beaten/.test(t)) return 'upset-loss';
    if(/loss|defeat|lost|beaten|0-2|0-3/.test(t)) return heat>=4?'big-loss':'loss';
    if(/draw|level|equaliser|equalizer|0-0|1-1/.test(t)) return heat>=4?'big-draw':'draw';
    if(/comeback|came from behind|late winner/.test(t)) return 'comeback-win';
    if(/win|winner|victory|three points/.test(t)) return heat>=4?'big-win':'win';
    return 'story';
  }
  function profile(a){
    const p=profiles[a.id]||[], reaction=a.reaction||p[1]||inferReaction(a);
    let heat=Number(a.commentHeat||p[0]||inferHeat(a)); heat=Math.max(1,Math.min(5,heat));
    if(reaction==='upset-loss') heat=5;
    return {heat,reaction,visitor:String(a.visitorClub||p[2]||inferVisitor(a)||'').toUpperCase()};
  }
  function uniquePick(bank,seed,used){
    for(let i=0;i<(bank?.length||0)*2;i++){ const x=bank[(seed+i*7)%bank.length]; if(!used.has(x)) return x; }
    return null;
  }
  function uniqueHandle(bank,seed,used){
    for(let i=0;i<bank.length*2;i++){ const x=bank[(seed+i*5)%bank.length]; if(!used.has(x)) return x; }
    return `${bank[seed%bank.length]}_${seed%97}`;
  }
  function rowsFor(a){
    const p=profile(a), rows=[...(seeded[a.id]||[])], usedText=new Set(rows.map(r=>r[1])), usedHandles=new Set(rows.map(r=>r[0]));
    const seed=h(`${a.id}|${a.headline}|${p.reaction}|${p.heat}`), target=p.reaction==='upset-loss'?20:targetByHeat[p.heat], normal=banks[p.reaction]||banks.story;
    let i=0;
    while(rows.length<target&&i<100){
      let visitor='', bank=normal;
      if(p.visitor&&p.heat>=3&&(i%4===1||(p.reaction==='upset-loss'&&i%3===1))){
        visitor=p.visitor;
        bank=['upset-loss','big-loss','loss'].includes(p.reaction)?rivalGloat:['big-draw','draw','frustrating-draw'].includes(p.reaction)?rivalDraw:rivalExcuse;
      } else if(p.reaction==='upset-loss'&&i%5===4){ visitor=(seed+i)%2?'INTER':'MILAN'; bank=rivalGloat; }
      const txt=uniquePick(bank,seed+i*13,usedText)||uniquePick(banks.story,seed+i*17,usedText); if(!txt){i++;continue;}
      const handle=uniqueHandle(visitor?rivalHandles:handles,seed+i*11,usedHandles); usedText.add(txt); usedHandles.add(handle); rows.push(visitor?[handle,txt,visitor]:[handle,txt]); i++;
    }
    return {rows,p};
  }
  function traffic(p,count){ return p.reaction==='upset-loss'?`🔥 MELTDOWN · ${count} shown`:p.heat===5?`🔥 BIG-MATCH THREAD · ${count} shown`:p.heat===4?`HIGH TRAFFIC · ${count} shown`:`${count} shown`; }
  function render(a){
    const {rows,p}=rowsFor(a);
    return `<section class="fan-comments heat-${p.heat}" data-comments-for="${esc(a.id)}" data-reaction="${esc(p.reaction)}"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${esc(traffic(p,rows.length))}</small></div><div class="fan-comments-list">${rows.map(([user,txt,visitor],i)=>`<article class="fan-comment${visitor?' visitor-comment':''}${p.reaction==='upset-loss'&&!visitor?' meltdown-comment':''}"><div class="fan-avatar">${esc(user[0].toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong>${visitor?`<em class="visitor-badge">${esc(visitor)} FAN</em>`:''}<span>${i?' '+(i*3+2)+'m':'just now'}</span></div><p>${esc(txt)}</p><div class="fan-actions"><span>▲ ${13+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }

  let syncing=false;
  function sync(){
    if(syncing)return; const reader=document.getElementById('readerContent'); if(!reader)return;
    const headline=reader.querySelector('#readerHeadline')?.textContent?.trim(); if(!headline){reader.querySelector('.fan-comments')?.remove();return;}
    const a=(window.NAPOLI_DATA?.articles||[]).find(x=>String(x.headline).trim()===headline); if(!a)return;
    const current=reader.querySelector('.fan-comments'); if(current?.dataset.commentsFor===a.id)return;
    syncing=true; current?.remove(); reader.insertAdjacentHTML('beforeend',render(a)); syncing=false;
  }
  const reader=document.getElementById('readerContent'); if(reader){new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});sync();}
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync);});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(sync);});

  const style=document.createElement('style');
  style.textContent=`.fan-comments{margin:0 clamp(20px,7vw,76px) 34px;border-top:4px solid var(--navy);padding-top:22px}.fan-comments.heat-5{border-top-width:6px}.fan-comments-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:8px}.fan-comments-head span{display:block;color:var(--blue);font-size:.68rem;font-weight:950;letter-spacing:.11em;text-transform:uppercase}.fan-comments-head h3{margin:3px 0 0;font-size:1.35rem;letter-spacing:-.02em}.fan-comments-head small{color:var(--muted);font-size:.7rem;white-space:nowrap;font-weight:800}.fan-comment{display:grid;grid-template-columns:38px 1fr;gap:12px;padding:16px 0;border-bottom:1px solid var(--line)}.fan-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--navy);color:var(--sky);font-weight:950}.fan-comment-meta{display:flex;gap:8px;align-items:baseline;flex-wrap:wrap}.fan-comment-meta strong{font-size:.84rem;color:var(--navy)}.fan-comment-meta span,.fan-actions{font-size:.68rem;color:var(--muted)}.visitor-badge{font-style:normal;font-size:.57rem;font-weight:950;letter-spacing:.06em;padding:2px 5px;border:1px solid var(--line);border-radius:3px;color:var(--muted);background:#fff}.visitor-comment{background:linear-gradient(90deg,rgba(8,26,45,.035),transparent 62%);margin-left:-10px;margin-right:-10px;padding-left:10px;padding-right:10px}.meltdown-comment p{font-weight:650}.fan-comments[data-reaction="upset-loss"] .fan-comments-head small{color:#9d1c1c}.fan-comment p{margin:4px 0 7px!important;font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;font-size:.9rem!important;line-height:1.45!important;color:var(--ink)!important}.fan-actions{display:flex;gap:15px;font-weight:800}@media(max-width:760px){.fan-comments{margin:0 20px 24px}.fan-comments-head{align-items:flex-start;flex-direction:column;gap:4px}.fan-comments-head small{white-space:normal}.fan-comment{grid-template-columns:34px 1fr}.fan-avatar{width:34px;height:34px}.visitor-comment{margin-left:-6px;margin-right:-6px;padding-left:6px;padding-right:6px}}@media(max-width:390px){.fan-comments{margin-left:16px;margin-right:16px}}`;
  document.head.appendChild(style);
})();
