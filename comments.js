(() => {
  const commentsByArticle = {
    'genoa-drought': [
      ['vesuvio_ultras87','Two straight 0–0s. I am begging one of these forwards to remember the net exists.'],
      ['PartenopeiProfessor','The defensive structure is excellent. The final third is where every promising move goes to die.'],
      ['MarekWasRight','Jankowski turned into prime Buffon for absolutely no reason. Fuck off man.'],
      ['NapoliSempre','Still unbeaten in the league. Arsenal next. Nobody panic.'],
      ['CurvaBChaos','180 league minutes without a goal and somehow I am both furious and weirdly calm. Football is a disease.']
    ],
    'lazio-control': [
      ['azzurro_76','A point with that much rotation is not the apocalypse people are making it out to be.'],
      ['NapoliDoomer','WE ARE FINISHED. DELETE THE CLUB. SELL THE STADIUM.'],
      ['tacticalnonno','Back line was excellent. Midfield was fine. Attack had all the menace of a damp sock.'],
      ['ForzaNapoli94','Clean sheet, unbeaten, move on.'],
      ['CiroFromQueens','If I watch one more promising attack end in absolutely nothing I am launching my controller into the sun.']
    ],
    'sassuolo-response': [
      ['PazEnjoyer','NICO PAZ OFF THE BENCH AND STRAIGHT INTO THE WINNER. THAT IS MY GUY.'],
      ['ChiesaHive','Chiesa heard the criticism and chose violence.'],
      ['MeretUnion','Everyone thank Meret before you start talking about the winner.'],
      ['beierburner','Three goals and people still act like Beier should be sold. Behave.'],
      ['ultras_di_toronto','85th minute winners are great for the soul and absolutely shit for my blood pressure.']
    ],
    'napoli-still-top': [
      ['ScudettoPolice','Top of the table and unbeaten. I will be insufferable until further notice.'],
      ['RealistAzzurro','Two points is not a cushion, it is a suggestion. Keep winning.'],
      ['MaradonaWasHere','Milan, Juve, Inter all lurking. This season is going to be disgusting. I love it.'],
      ['NoPanicNapoli','People wanted perfection in October. We are first. Calm down.'],
      ['AwayEndMenace','If we bottle this I am moving to a monastery.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were just cleaner. That is the level. Learn and move.'],
      ['DaviesExpress','Davies was cooking that entire left side and nobody finished the meal.'],
      ['NapoliDoomer','WE LOST 2–0. PROJECT OVER. EVERYBODY OUT.'],
      ['KDBTruthers','Second half looked different as soon as Kevin came on. That pass still matters.'],
      ['curva_bastoni','Nübel needs to stop saving everything and get a real hobby.']
    ],
    'chiesa-pisa': [
      ['FedeForever','CHIESA 80TH MINUTE. THAT IS CINEMA.'],
      ['PisaTrauma','Why did we make Pisa look like 2011 Barcelona for twenty minutes?'],
      ['StachAttack','Goal and assist from Stach and somehow nobody is talking about it.'],
      ['NapoliTherapy','This club refuses to win a normal match.'],
      ['curvaB_screamer','I aged nine fucking years during that second half.']
    ],
    'pio-shirt': [
      ['PioNation','Five goals. Shirt is his until someone takes it. Simple.'],
      ['BeierDefenseLeague','Can we praise Pio without pretending Beier is useless please?'],
      ['AzzurriScout','The Italy pipeline makes this even more fun.'],
      ['oldschoolnapoli','Young striker scoring goals and everyone already wants to build a statue. Never change.'],
      ['No9Discourse','One quiet game and this comment section will become a war zone. I can feel it.']
    ],
    'three-nos': [
      ['KeepTheCore','204M and still no. Respect.'],
      ['SellHighFC','I love Beier but TWO HUNDRED AND FOUR MILLION DOLLARS???'],
      ['CaptainDiLo','Rejecting the Di Lorenzo offer was the right call for the dressing room alone.'],
      ['MercatoGoblin','Napoli turned off notifications and went to lunch.'],
      ['SpreadsheetUltra','The accountant in me is screaming. The fan in me is delighted.']
    ],
    'paz-kdb': [
      ['PazEnjoyer','It does not have to be one or the other. Play both and let teams suffer.'],
      ['KDBForever','You cannot teach that final pass. Kevin still has it.'],
      ['FutureIsNow','Paz getting the Bayern start tells you everything about the trust level.'],
      ['TacticsInBio','Different profiles. Different game states. This is called having options, lads.'],
      ['CommentSectionCoach','Personally I would simply start twelve players. Problem solved.']
    ],
    'peacock-problem': [
      ['AcademyWatch','If the potential is really low 90s you have to live with some pain.'],
      ['MeretMeansMore','Development is great until it costs points. Meret is the number one.'],
      ['KeeperUnion','Clean sheet against Torino. Let the kid breathe.'],
      ['SavePercentageCop','One clean sheet and suddenly everyone is Gianluigi Buffon.'],
      ['loan_him_now','PLAY HIM OR LOAN HIM. THIS HALF MEASURE SHIT IS HOW KEEPERS DIE.']
    ],
    'italy-pipeline': [
      ['AzzurriCore','Napoli becoming the spine of Italy is exactly the kind of nonsense I signed up for.'],
      ['ClubBeforeCountry','Just send everyone back healthy please.'],
      ['KayodeTruth','Kayode is going to own that right side for club and country.'],
      ['CalcioRomantic','This save is slowly turning into a national-team laboratory and I love it.'],
      ['InternationalBreakHater','Great story. Now abolish international breaks.']
    ],
    'captain-future': [
      ['DiLoRespect','You do not throw away the captain because the younger guy is better now.'],
      ['KayodeEra','Armband or not, Kayode is the future.'],
      ['DressingRoomFC','This is exactly why veteran depth matters in a long season.'],
      ['SentimentPolice','Football is ruthless. If he cannot play, he cannot play.'],
      ['NapoliDad','Why am I emotionally attached to a fictional captaincy transition?']
    ],
    'stach-insurance': [
      ['StachAttack','THE INSURANCE POLICY SCORES GOALS.'],
      ['DepthWinsTitles','These are the signings nobody cares about until February.'],
      ['TransferGradeMerchant','25.5M looks better every time he plays.'],
      ['BenchMob','Start him you cowards.'],
      ['NormalTakeGuy','Useful squad player. That is the entire comment.']
    ]
  };

  const genericPools = {
    positive:[
      'Good piece. The season is long and context matters.',
      'People are overreacting. The underlying structure still looks strong.',
      'I like where this squad is going. Keep building.'
    ],
    negative:[
      'Absolutely not good enough. I refuse to hear excuses.',
      'The warning signs are there and everyone is pretending not to see them.',
      'If this happens in a big match we are cooked.'
    ],
    vulgar:[
      'What the fuck was that final ball though?',
      'I love this club but it is actively trying to kill me.',
      'Some of you need to calm the fuck down and watch the match again.'
    ],
    weird:[
      'My tactical analysis is that we should score more goals than the other team.',
      'I have seen enough. Give the ball to the fastest guy and pray.',
      'This is either the start of something special or a future documentary about pain.'
    ]
  };

  const handles = ['curva_commentator','napoli_in_my_blood','tactical_zio','forza_forever'];
  const hash = value => String(value||'').split('').reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
  const pick = (arr,n) => arr[n % arr.length];

  function commentsFor(article){
    const specific = commentsByArticle[article.id];
    if(specific) return specific;
    const h = hash(article.id || article.headline);
    return [
      [handles[0],pick(genericPools.positive,h)],
      [handles[1],pick(genericPools.negative,h>>2)],
      [handles[2],pick(genericPools.vulgar,h>>4)],
      [handles[3],pick(genericPools.weird,h>>6)]
    ];
  }

  function renderComments(article){
    const rows = commentsFor(article);
    return `<section class="fan-comments" aria-label="Fictional fan comments"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,text],i)=>`<article class="fan-comment"><div class="fan-avatar">${escapeComment(user.slice(0,1).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${escapeComment(user)}</strong><span>${i===0?'just now':`${i*3+2}m`}</span></div><p>${escapeComment(text)}</p><div class="fan-actions"><span>▲ ${17+i*11}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }

  function escapeComment(value=''){
    return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function appendComments(id){
    const reader=document.getElementById('readerContent');
    const article=(window.NAPOLI_DATA?.articles||[]).find(a=>a.id===id);
    if(!reader||!article)return;
    reader.querySelector('.fan-comments')?.remove();
    reader.insertAdjacentHTML('beforeend',renderComments(article));
  }

  document.addEventListener('click',e=>{
    const trigger=e.target.closest?.('[data-article]');
    if(trigger) queueMicrotask(()=>appendComments(trigger.dataset.article));
  });
  document.addEventListener('keydown',e=>{
    const trigger=e.target.closest?.('[data-article]');
    if(trigger&&(e.key==='Enter'||e.key===' ')) setTimeout(()=>appendComments(trigger.dataset.article),0);
  });

  const style=document.createElement('style');
  style.textContent=`
    .fan-comments{margin:0 clamp(20px,7vw,76px) 52px;border-top:4px solid var(--navy);padding-top:22px}
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
    @media(max-width:760px){.fan-comments{margin:0 20px 40px}.fan-comments-head{align-items:flex-start;flex-direction:column;gap:4px}.fan-comments-head small{white-space:normal}.fan-comment{grid-template-columns:34px 1fr}.fan-avatar{width:34px;height:34px}}
    @media(max-width:390px){.fan-comments{margin-left:16px;margin-right:16px}}
  `;
  document.head.appendChild(style);
})();