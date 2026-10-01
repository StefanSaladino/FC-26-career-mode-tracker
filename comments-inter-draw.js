(() => {
  const ARTICLE_HEADLINE = 'Point Taken in Milan: Napoli Hold Inter to 1–1 in the Title-Race Clash';
  const rows = [
    ['LateGoalTrauma','Eighty minutes of protecting that lead and then Inter finally get through. That feels like two points dropped even if a draw away to the leaders is not a bad result.',''],
    ['CurvaCalculator','We were ten minutes plus stoppage time from cutting the gap to ONE. Instead it stays four. That is the part that hurts.',''],
    ['BastoniAgenda','Bastoni scoring against his old club should have been the perfect ending. I am sick that the header did not end up being the winner.',''],
    ['NerazzurriNoise','You had us chasing the match for most of the second half, but the table still says four points. I will absolutely take that.','INTER'],
    ['BuongiornoWall','That goal-saving tackle from Buongiorno was outrageous. He deserved the clean sheet after that intervention.',''],
    ['ScudettoOrBust','I cannot call this a disaster because we went to the leaders and got a point. I also cannot pretend I am happy after leading until the 80th.',''],
    ['InteristaInPeace','From our side the equaliser feels huge. Going seven clear was gone, but letting you cut it to one would have changed the entire title race.','INTER'],
    ['ChiesaHive','Chiesa puts the corner exactly where Bastoni needs it. Great set piece, great header, brutal that it only buys a draw.',''],
    ['TitleRaceInsomnia','This is why six-pointers are horrible. One late goal changes the emotional meaning of the entire night without changing who is above who.',''],
    ['AwayDayNapoli','Before kickoff I would have accepted a point in Milan. At 79 minutes I absolutely would not have. Both things can be true.',''],
    ['NerazzurriGuest','Napoli were better than I wanted them to be tonight, but Inter found the goal when it mattered. Four-point cushion preserved.','INTER'],
    ['FullTimeWhistle','The frustrating part is how close we were to turning the race completely. Still unbeaten at Chelsea and Inter away is serious work.',''],
    ['PartenopeiProfessor','The performance was good enough to win. The result was not. That distinction matters more than pretending every draw is either heroic or catastrophic.',''],
    ['SetPiecePanic','Bastoni from a Chiesa corner against Inter is absurdly poetic. Football refused to let us keep the ending.',''],
    ['NoTacticsJustVibes','I spent seventy-nine minutes preparing the ONE POINT BACK screenshot and then deleted it immediately.',''],
    ['GuestSection','A draw suits us far more than it suits you. You needed to close that out once you were ahead.','INTER'],
    ['NapoliTherapy','This one is going to annoy me for days. Not because we were bad — because we were that close.',''],
    ['BlueSideNaples','Take the point, take the performance, remember the 80th-minute pain, and make sure Lecce pays for it.','']
  ];

  const esc = (value='') => String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');

  function render() {
    const reader = document.getElementById('readerContent');
    if (!reader) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent?.trim();
    if (headline !== ARTICLE_HEADLINE) return;
    const current = reader.querySelector('.fan-comments');
    if (!current || current.dataset.interDrawFixed === '1') return;

    current.outerHTML = `<section class="fan-comments heat-5" data-comments-for="inter-live-bastoni-header" data-reaction="draw" data-comment-context="league-title-race" data-context-engine="2" data-inter-draw-fixed="1"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · SERIE A · TITLE-RACE DRAW · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,text,visitor],i)=>`<article class="fan-comment${visitor?' visitor-comment':''}"><div class="fan-avatar">${esc(user[0])}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong>${visitor?`<em class="visitor-badge">${esc(visitor)} FAN</em>`:''}<span>${i===0?'just now':`${2+i*3}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${32+i*11}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }

  const reader = document.getElementById('readerContent');
  if (reader) {
    new MutationObserver(() => queueMicrotask(render)).observe(reader,{childList:true,subtree:true});
  }
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(render));});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(render));});
  queueMicrotask(render);
})();
