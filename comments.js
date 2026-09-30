(() => {
  const specific = {
    'udinese-pio-clean-sheet': [
      ['PioNation','Seven logged goals and another winner. At some point we can stop calling this a hot streak and admit he is just clinical.'],
      ['BeierDefenseLeague','Back-to-back assists for Beier. Quietly doing a lot of the dirty work around Pio.'],
      ['curva_bastoni','That back four was disgusting today. Udinese got absolutely nothing for free.'],
      ['MeretUnion','One real danger moment and Meret answered it. That is exactly what you need from your number one.'],
      ['ChiesaHive','Hit the post late and I still thought it was going in. Man is permanently one touch away from chaos.'],
      ['tactical_zio','Not the five-goal beating everyone wanted, but honestly this was mature. One goal and then suffocate the game.'],
      ['PioHaterForNoReason','Fine. Seven goals. I will be quiet for exactly one match.'],
      ['NapoliSempre','Win before the break, clean sheet, two weeks to reset. No notes.']
    ],
    'arsenal-pio-91': [
      ['PioNation','90+1 and he absolutely buries it. That is a striker who does not care what minute it is.'],
      ['BeierDefenseLeague','People only remember the finish. Beier found the pass. Huge contribution.'],
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
      ['ChiesaHive','Chiesa heard the criticism and chose violence.'],
      ['MeretUnion','Everyone thank Meret before discussing the comeback.'],
      ['beierburner','Three goals and people still talk like Beier is disposable.'],
      ['ultras_di_toronto','85th-minute winners are terrible for my blood pressure.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were cleaner. Learn from it and move.'],
      ['DaviesExpress','Davies was cooking that left side and nobody finished the meal.'],
      ['KDBTruthers','Second half changed the second Kevin came on.'],
      ['curva_bastoni','Nübel needs another hobby besides saving everything.'],
      ['NapoliDoomer','PROJECT OVER. I WILL REVERSE THIS TAKE AFTER THE NEXT WIN.']
    ],
    'chiesa-pisa': [
      ['FedeForever','CHIESA 80TH MINUTE. CINEMA.'],
      ['PisaTrauma','Why did Pisa look like 2011 Barcelona for twenty minutes?'],
      ['StachAttack','Goal and assist from Stach and somehow nobody talks about it.'],
      ['NapoliTherapy','This club refuses to win a normal match.']
    ],
    'pio-shirt': [
      ['PioNation','The shirt is his until someone takes it. Simple.'],
      ['BeierDefenseLeague','Praise Pio without pretending Beier is useless challenge.'],
      ['PioHaterForNoReason','Fine goals. Wake me when he scores from the parking lot.'],
      ['No9Discourse','One quiet game and this section becomes a civil war.']
    ],
    'paz-kdb': [
      ['PazEnjoyer','It does not have to be one or the other. Play both and let teams suffer.'],
      ['KDBForever','You cannot teach that final pass.'],
      ['TacticsInBio','Different profiles for different game states. This is called depth.'],
      ['CommentSectionCoach','Personally I would start twelve players. Problem solved.']
    ]
  };

  const handles = [
    'curva_commentator','napoli_in_my_blood','tactical_zio','scapegoat_selector','forza_forever',
    'northstandnoise','partenopei92','matchday_meltdown','bluewall','touchlinelawyer','awayendchaos','vesuvio_voice'
  ];

  const banks = [
    ['That was one of those matches where the scoreline tells about half the story.','You can see the idea even when the execution is messy.','This team is becoming annoyingly difficult to kill off.','I need one normal match before this season ends. Just one.'],
    ['The midfield spacing was much better than people are giving it credit for.','Everyone wants fireworks every week. Sometimes control is the point.','There were warning signs, but there were answers too.','I am filing this under useful rather than pretty.'],
    ['One player is about to get blamed for all eleven positions and somehow I already know who.','The comments are going to be unbearable if this happens again.','Some of you watched a completely different match and I respect the confidence.','The overreaction cycle has officially begun.'],
    ['That final ball is going to haunt me for a full twenty-four hours.','Football would be easier if we simply scored every chance. I have solved the sport.','I have seen enough to form three contradictory opinions.','This is exactly the kind of result that looks smarter two weeks later.'],
    ['The manager will get blamed either way, so at least make the discourse entertaining.','Rotation discourse loading in three, two, one...','Every substitution is genius after a win and terrorism after a draw. Never change.','I am once again asking everyone to wait more than five minutes before declaring a crisis.']
  ];

  const hash = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const escapeComment = (value='') => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');

  function genericComments(article){
    const seed = hash(`${article.id}|${article.headline}`);
    const rows = [];
    const used = new Set();
    for(let i=0;i<6;i++){
      const bank=banks[(seed+i*7)%banks.length];
      let text=bank[(seed+i*11)%bank.length];
      let guard=0;
      while(used.has(text)&&guard<12){text=bank[(seed+i*11+guard+1)%bank.length];guard++;}
      used.add(text);
      rows.push([handles[(seed+i*5)%handles.length],text]);
    }
    return rows;
  }

  function commentsFor(article){ return specific[article.id] || genericComments(article); }

  function renderComments(article){
    const rows = commentsFor(article);
    return `<section class="fan-comments" aria-label="Fictional fan comments"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,text],i)=>`<article class="fan-comment"><div class="fan-avatar">${escapeComment(user.slice(0,1).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${escapeComment(user)}</strong><span>${i===0?'just now':`${i*4+3}m`}</span></div><p>${escapeComment(text)}</p><div class="fan-actions"><span>▲ ${13+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }

  function appendComments(id){
    const reader=document.getElementById('readerContent');
    const article=(window.NAPOLI_DATA?.articles||[]).find(a=>a.id===id);
    if(!reader||!article)return;
    reader.querySelector('.fan-comments')?.remove();
    reader.insertAdjacentHTML('beforeend',renderComments(article));
  }

  document.addEventListener('click',e=>{const trigger=e.target.closest?.('[data-article]');if(trigger) queueMicrotask(()=>appendComments(trigger.dataset.article));});
  document.addEventListener('keydown',e=>{const trigger=e.target.closest?.('[data-article]');if(trigger&&(e.key==='Enter'||e.key===' ')) setTimeout(()=>appendComments(trigger.dataset.article),0);});

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
