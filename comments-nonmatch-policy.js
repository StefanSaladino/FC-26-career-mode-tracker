(() => {
  const D=window.NAPOLI_DATA;
  if(!D||!Array.isArray(D.articles))return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const handles=['NapoliSinceBirth','PartenopeiProfessor','VesuvioVoice','CurvaCalculator','RotationPolice','BlueSideNaples','TacticalNonno','NoTacticsJustVibes'];
  const custom={
    'saladino-december-manager-month':[
      ['ScudettoOrBust','Manager of the Month in December. Deserved — now turn that momentum into silverware.'],
      ['NapoliSinceBirth','December felt like the month this team stopped looking like a project and started looking like a contender.'],
      ['SaladinoOutNow','I would like the record to show that I have temporarily suspended my agenda. Congratulations, mister.'],
      ['CurvaCalculator','Winning Manager of the Month and being rewarded with that January schedule is very Napoli.'],
      ['PartenopeiProfessor','The award reflects the improvement in control as much as the results. Napoli are finding different ways to win.'],
      ['NoTacticsJustVibes','Frame the award, then hide it until the trophies arrive. Business first.'],
      ['BlueSideNaples','Recognition for an excellent month. The team looks confident and the manager deserves his share of the credit.']
    ],
    'three-nos':[
      ['MarketWatcher','Turning down that much money for Beier, Pio and the captain is a serious statement about the project.'],
      ['PioNation','Rejecting Bayern for Pio tells you exactly how highly Napoli value his future.'],
      ['NapoliSinceBirth','Continuity over cash. I can live with that when the team is trying to win now.'],
      ['CurvaCalculator','The numbers are enormous, but replacing core players in the same window would have cost more than money.']
    ],
    'pio-shirt':[
      ['PioNation','This is not hype anymore. He has forced the selection debate with actual production.'],
      ['RotationPolice','The best part is that nobody has to hand him the shirt. Keep making him earn it.'],
      ['PartenopeiProfessor','His movement is becoming as important as the goals. That is why the debate has changed.']
    ],
    'paz-kdb':[
      ['KDBClock','Paz is the future, but De Bruyne still sees passes nobody else sees. Both can be true.'],
      ['Pazienza10','Giving Paz the biggest starts now is how you find out whether he can inherit the role.'],
      ['TacticalNonno','This should not become a fake either-or debate. Their profiles solve different problems.']
    ],
    'peacock-problem':[
      ['PeacockWatch','Development minutes only work if the club accepts some volatility. Torino was the good side of that bargain.'],
      ['MeretUnion','Potential matters, but Meret is still the No. 1. The balance has to stay sensible.'],
      ['RotationPolice','Give the kid selected starts, not charity minutes. There is a difference.']
    ],
    'captain-future':[
      ['NapoliSinceBirth','Kayode can be the future without pretending Di Lorenzo has nothing left to offer.'],
      ['CaptainMaterial','The armband is about more than who starts every match. Experience still matters in this squad.'],
      ['RotationPolice','This is exactly the kind of depth a long season needs. No manufactured drama required.']
    ],
    'stach-insurance':[
      ['SquadDepthDept','This is why you buy dependable depth before you desperately need it.'],
      ['PartenopeiProfessor','A goal and an assist is the flashy part. Being able to trust him in rotation is the real value.'],
      ['RotationPolice','Not every signing has to be a superstar. Some just have to make the squad survive the calendar.']
    ],
    'buongiorno-davies-extensions':[
      ['ContractDesk','Getting core players tied down early is exactly the kind of boring business that prevents future chaos.'],
      ['BlueSideNaples','Keep the spine together. Not every important win happens on the pitch.'],
      ['CurvaCalculator','Extensions now are cheaper than panic negotiations later. Good work.']
    ],
    'fixture-run-november':[
      ['CalendarVictim','That run is brutal. Rotation is not optional anymore.'],
      ['RotationPolice','This is where the second XI stops being depth and starts being part of the season plan.'],
      ['EuropeanNights','The schedule will tell us a lot about whether Napoli can fight on multiple fronts.']
    ],
    'napoli-still-top':[
      ['ScudettoOrBust','Unbeaten and top is nice. Staying there is the job.'],
      ['CurvaCalculator','The gap is small enough that every ordinary-looking league match matters now.'],
      ['NapoliSinceBirth','Enjoy the table, but nobody wins the Scudetto in autumn. Keep pushing.']
    ]
  };
  const matchContext=a=>/^(ucl-league-stage|league-regular|coppa-knockout|italy-friendly)$/.test(String(a.commentContext||''))||/match report/i.test(`${a.category||''} ${a.label||''}`);
  const storyLines=a=>{
    const subject=a.headline||'This story';
    const dek=a.dek||'';
    const cat=String(a.category||'').toLowerCase();
    if(/transfer|market/.test(cat))return [
      ['MarketWatcher',`${subject} is the kind of decision we will judge properly in a few months, not tonight.`],
      ['CurvaCalculator',dek?`The important part for me: ${dek}`:'The sporting logic matters more than winning the announcement.'],
      ['NapoliSinceBirth','If this strengthens the project without disrupting the dressing room, I am on board.']
    ];
    if(/opinion|editorial/.test(cat)||/editorial|opinion/.test(String(a.commentContext||'')))return [
      ['PartenopeiProfessor',`There is a real argument in “${subject}”. The next stretch should tell us whether it holds up.`],
      ['TacticalNonno',dek||'The context matters more than the loudest reaction.'],
      ['NoTacticsJustVibes','Reasonable football debate on the internet? This should go well.']
    ];
    if(String(a.commentDomain||'')==='italy')return [
      ['AzzurriWatch',`“${subject}” is exactly the kind of national-team discussion that has to be judged on the bigger qualification picture.`],
      ['QualifyFirst',dek||'The standard is qualification. Everything else is secondary.'],
      ['OldSchoolAzzurro','Selection, form and continuity matter here. This is not a club-match reaction thread.']
    ];
    return [
      ['NapoliSinceBirth',`“${subject}” is a proper season storyline. This is about what it changes next, not a match score.`],
      ['PartenopeiProfessor',dek||'The interesting part is how this affects the squad and the decisions that follow.'],
      ['BlueSideNaples','Good to have stories around the club that are not just ninety-minute reactions.'],
      ['CurvaCalculator','Bookmark this one. We will know later whether it was a small note or a turning point.']
    ];
  };
  const countFor=(a,n)=>Math.max(2,Math.min(n,3+(Array.from(String(a.id)).reduce((x,c)=>x+c.charCodeAt(0),0)%Math.max(1,n-2))));
  function render(){
    const host=document.getElementById('readerContent'); if(!host)return;
    const id=host.dataset.articleId; if(!id)return;
    const a=D.articles.find(x=>String(x.id)===String(id)); if(!a||matchContext(a))return;
    const existing=host.querySelector('.fan-comments');
    if(existing?.dataset.nonmatchPolicy===String(a.id))return;
    const source=custom[a.id]||storyLines(a); const rows=source.slice(0,countFor(a,source.length));
    existing?.remove();
    host.insertAdjacentHTML('beforeend',`<section class="fan-comments" data-comments-for="${esc(a.id)}" data-nonmatch-policy="${esc(a.id)}"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters' thread</div><h3>Comments</h3></div><span>${rows.length} reactions</span></div><div class="comments-list fan-comments-list">${rows.map(([u,t],i)=>`<article class="fan-comment"><div class="comment-avatar fan-avatar">${esc(u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${esc(u)}</strong><span>${i?'5m':'just now'}</span></div><p lang="en">${esc(t)}</p><div class="fan-actions"><span>▲ ${22+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`);
    document.dispatchEvent(new CustomEvent('seasonroom:comments-rendered',{detail:{id:a.id,nonMatch:true}}));
  }
  document.addEventListener('seasonroom:comments-rendered',e=>{if(!e.detail?.nonMatch)queueMicrotask(render)});
  document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(render));
  const host=document.getElementById('readerContent'); if(host)new MutationObserver(()=>queueMicrotask(render)).observe(host,{childList:true,subtree:true});
  window.NAPOLI_NONMATCH_COMMENT_POLICY_VERSION='1.0.0';
})();