(() => {
  const ARTICLE_ID = 'empoli-2-1-offense-response';
  const HEADLINE_START = 'Beier and Pio Answer the Noise:';
  const rows = [
    ['PioXI','Goal and assist. Pio did exactly what we needed after all that talk about the attack going quiet.',''],
    ['BeierBeliever','Fifth minute, clean through, no hesitation. Beier needed that and took it properly.',''],
    ['PazVision','That ball from Paz for the second was filthy. Pio still had to finish it, but Nico created the opening.',''],
    ['PartenopeiPulse','Two goals before the 22nd minute after everyone spent the break asking where the attack went. That is an answer.',''],
    ['PeacockWatch','Good to see Peacock get the start. Important save in the first half too — these minutes matter for his sharpness.',''],
    ['CurvaNapoli','Should have killed it earlier with the chances we created, but three points is three points. Roma next.',''],
    ['EmpoliAway','Going 2–0 down that early made it almost impossible. Yepes gave us hope late but Napoli managed the finish.','EMPOLI'],
    ['ScudettoWatch','Inter +2. Milan +1. No room to breathe now. Every league match feels massive.',''],
    ['NapoliNervi','Of course we had to make the last fifteen minutes stressful after being completely in control 😂',''],
    ['ForzaPartenope','Beier scores, Pio scores and assists, Paz creates. More of THAT front-foot football please.','']
  ];

  const esc = (value='') => String(value)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');

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
    if (section.dataset.resultSpecific === ARTICLE_ID) return;

    section.dataset.commentsFor = ARTICLE_ID;
    section.dataset.commentContext = 'serie-a-title-race';
    section.dataset.contextEngine = 'result-specific';
    section.dataset.resultSpecific = ARTICLE_ID;
    section.className = 'fan-comments heat-5';
    section.innerHTML = `<div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · SERIE A · NAPOLI 2–1 EMPOLI · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([name,text,club],i) => `<article class="fan-comment${club ? ' visitor-comment' : ''}"><div class="fan-avatar">${esc(name.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(name)}</strong>${club ? `<em class="visitor-badge">${esc(club)} FAN</em>` : ''}<span>${i===0?'just now':`${2+i*3}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${34+i*8}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
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