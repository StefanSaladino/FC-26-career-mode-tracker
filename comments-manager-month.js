(() => {
  const ARTICLE_ID = 'saladino-december-manager-month';
  const HEADLINE_START = 'Saladino Named Manager of the Month';
  const rows = [
    ['ScudettoOrBust','Manager of the Month in December, Supercoppa final in January. Keep the standards exactly where they are.',''],
    ['NapoliSinceBirth','Deserved. December felt like the month this team stopped looking like a project and started looking like a contender.',''],
    ['RotationPolice','The award is nice. Now the real test is managing Inter, Milan, Empoli, Monza and Juventus without running the squad into the ground.',''],
    ['SaladinoOutNow','I would like the record to show that I have temporarily suspended my agenda. Congratulations, mister.',''],
    ['CurvaCalculator','Manager of the Month and immediately handed this January schedule. Football has a sense of humour.',''],
    ['PartenopeiProfessor','The biggest improvement has been control. Napoli are finding different ways to win instead of needing the same game every week.',''],
    ['EuropeanNights','Recognition earned in December. Now go turn it into silverware against Inter.',''],
    ['SquadDepthDept','This is where the full squad has to justify itself. The manager got the award; January is going to test every rotation decision.',''],
    ['NoTacticsJustVibes','Frame the award, then hide it until after the Supercoppa final. We have business to do.',''],
    ['BlueSideNaples','Whatever happens next, December was excellent. The team looks confident and the manager deserves credit for it.',''],
    ['CalendarVictim','Imagine winning Manager of the Month and your prize is this January fixture list.',''],
    ['VesuviusPress','The award matters because it reflects a run, not one result. Napoli have built real momentum going into the final.','']
  ];

  const esc = (value='') => String(value)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\"/g,'&quot;').replace(/'/g,'&#039;');

  let scheduled = false;
  function render() {
    scheduled = false;
    const host = document.getElementById('readerContent');
    if (!host) return;
    const headline = host.querySelector('#readerHeadline')?.textContent?.trim() || '';
    const articleId = host.querySelector('[data-article-id]')?.dataset?.articleId || '';
    if (articleId !== ARTICLE_ID && !headline.startsWith(HEADLINE_START)) return;

    let section = host.querySelector('.fan-comments');
    if (!section) {
      section = document.createElement('section');
      section.className = 'fan-comments';
      host.appendChild(section);
    }
    if (section.dataset.storySpecific === ARTICLE_ID) return;

    section.dataset.commentsFor = ARTICLE_ID;
    section.dataset.commentContext = 'manager-award';
    section.dataset.contextEngine = 'story-specific';
    section.dataset.storySpecific = ARTICLE_ID;
    section.className = 'fan-comments heat-3';
    section.innerHTML = `<div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · MANAGER OF THE MONTH · DECEMBER 2027 · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([name,text,club],i) => `<article class="fan-comment${club ? ' visitor-comment' : ''}"><div class="fan-avatar">${esc(name.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(name)}</strong>${club ? `<em class="visitor-badge">${esc(club)} FAN</em>` : ''}<span>${i===0?'just now':`${3+i*4}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${29+i*7}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
  }

  function scheduleRender() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(render);
  }

  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(scheduleRender).observe(reader,{subtree:true,childList:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(scheduleRender);});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(scheduleRender);});
  scheduleRender();
})();