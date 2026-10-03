(() => {
  const articleId = 'italy-tonali-orsolini-injuries';
  const comments = [
    ['AzzurriWatch','Tonali being out changes the midfield balance immediately. That is the absence I worry about most.'],
    ['ItaliaXI','Orsolini out too means the wide options get thinner at the same time. Bad timing for the squad.'],
    ['PioNation','Two injuries, two openings. Somebody in this group is about to get a bigger role than expected.'],
    ['MidfieldNonno','Replacing Tonali is not about finding the same player. The midfield shape has to change around whoever comes in.'],
    ['AzzurriDepth','This is exactly why the national-team pool has to stay broad. International windows punish shallow squads.'],
    ['BolognaVoice','Brutal for Orsolini. He had earned the chance to be part of this group.'],
    ['NapoliItalia','Now I want to see how the manager adjusts instead of trying to force the original plan without the original players.'],
    ['SquadSheetNerd','The interesting question is whether the replacements are like-for-like or whether Italy changes shape entirely.'],
    ['ForzaAzzurri','Get them healthy. No reason to gamble with either player in an international window.'],
    ['SelectionDebate','This just made the next team sheet a lot more interesting. Midfield and the right side both have decisions to make.'],
    ['CalcioTactico','Tonali removes progression and intensity; Orsolini removes direct width. Those are two different problems to solve.'],
    ['AzzurriSempre','Annoying news, but this is what depth is for. Next man up.']
  ];

  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  function replaceComments(){
    const reader = document.getElementById('readerContent');
    if (!reader || reader.dataset.articleId !== articleId) return;
    const current = reader.querySelector('.fan-comments');
    if (!current) return requestAnimationFrame(replaceComments);
    current.outerHTML = `<section class="fan-comments heat-3" data-comments-for="${articleId}" data-reaction="selection-news"><div class="fan-comments-head"><div><span>AZZURRI COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${comments.length} shown</small></div><div class="fan-comments-list">${comments.map(([user,txt],i)=>`<article class="fan-comment"><div class="fan-avatar">${esc(user[0])}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><span>${i===0?'just now':`${2+i*4}m`}</span></div><p>${esc(txt)}</p><div class="fan-actions"><span>▲ ${18+i*11}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`;
  }
  document.addEventListener('seasonroom:article-opened', e => { if (e.detail?.id === articleId) requestAnimationFrame(()=>requestAnimationFrame(replaceComments)); });
})();