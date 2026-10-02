(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const labels = {
    'contract-renewal': 'CONTRACT NEWS · RENEWAL / EXTENSION',
    'transfer-in': 'TRANSFER NEWS · ARRIVAL',
    'transfer-out': 'TRANSFER NEWS · DEPARTURE',
    'transfer-rumour': 'TRANSFER NEWS · RUMOUR / NEGOTIATION'
  };

  const banks = {
    'contract-renewal': [
      'This is the kind of business that keeps a project from turning into a yearly rebuild.',
      'Locking down core players before the contract situation becomes a distraction is exactly what I want.',
      'Good. Now we can stop pretending every big club in Europe is about to take half the squad.',
      'The wage matters, but keeping elite players through their prime matters more when the structure still makes sense.',
      'Extensions are boring right up until you fail to do them and suddenly your entire season becomes a transfer saga.',
      'This feels like continuity rather than panic. Keep the spine together and build around it.',
      'The best contract news is the kind that removes a future problem before it becomes one.',
      'No transfer fee, no adaptation period, no replacing a proven starter. Sometimes the smartest move is keeping what already works.',
      'I care less about the headline and more about the message: the core clearly still believes in this project.',
      'Now that the renewals are done, the football can go back to being the story.'
    ],
    'transfer-in': [
      'Now tell me where he actually fits in the XI, because the fee means nothing if the role is vague.',
      'Welcome to Naples. The first question is whether this raises the ceiling or just makes the bench more expensive.',
      'I like the signing, but the real test is how quickly he understands the way this team plays.',
      'New signing excitement is undefeated until the first bad touch. Give him time before the verdicts become insane.',
      'If this fills an actual squad need instead of just collecting another name, I am all for it.',
      'The transfer fee will get all the attention, but the role and minutes are what will decide whether this works.',
      'This squad is deep enough now that arriving players have to earn their place immediately.',
      'Good profile, good age, useful fit. Now prove it on the pitch.',
      'I am already imagining the combinations and I refuse to apologize for it.',
      'The window is about improving the team, not winning social media. Let us see if this one does that.'
    ],
    'transfer-out': [
      'I understand the sale, but replacing the role matters more than replacing the name.',
      'If the player was not going to get meaningful minutes, moving him is better than letting the squad get bloated.',
      'Every outgoing looks easy until injuries hit and suddenly everyone remembers the depth chart.',
      'The fee is one thing. The real question is whether Napoli sold at the right moment.',
      'Good luck to him, but this also clears a pathway for somebody else in the squad.',
      'I can live with the departure if the minutes were never going to be there.',
      'Selling is part of squad building too. Not every exit has to be treated like a crisis.',
      'Please tell me there is a succession plan and this is not just vibes plus a transfer fee.',
      'This one hurts more emotionally than tactically, which is probably a sign the timing makes sense.',
      'The squad gets judged after the window closes. Until then every departure is only half the story.'
    ],
    'transfer-rumour': [
      'Wake me up when there is an agreement. Transfer rumours can make a fanbase lose its mind over absolutely nothing.',
      'Interested is not the same thing as negotiating, and negotiating is not the same thing as signing.',
      'I like the player, but I am not building the XI around a rumour yet.',
      'The price decides this for me. A good target can still be a bad deal.',
      'If the club is really talking, figure out the role first and the fee second.',
      'This has all the ingredients of a week-long saga that ends with somebody staying exactly where they are.',
      'I am choosing to believe nothing until the shirt photo exists.',
      'Scout him, negotiate if the number is sensible, walk away if it is not. No need to force the story.',
      'Rumours are useful for one thing: finding out how irrational everyone becomes about squad depth.',
      'The funniest part of every transfer story is watching the fanbase spend money that is not theirs.'
    ]
  };

  const handles = [
    'MercatoNapoli','ContractDesk','ADLCalculator','VesuviusScout','CurvaAccountant','SquadPlanner','WindowWatcher',
    'NapoliSinceBirth','WageStructureFC','DepthChartDept','TransferReceipt','PartenopeiPulse','NoReleaseClause',
    'FiveYearDeal','AgentFeeHater','DeadlineDayNapoli','ScoutingReport','ProjectNapoli','BenchMath','BlueSideNaples'
  ];

  const esc = (v='') => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const hash = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const textOf = a => `${a?.category||''} ${a?.label||''} ${a?.date||''} ${a?.headline||''} ${a?.dek||''} ${(a?.body||[]).join(' ')}`.toLowerCase();

  function inferContext(a){
    const explicit = String(a?.commentContext||'').toLowerCase();
    if (Object.prototype.hasOwnProperty.call(banks, explicit)) return explicit;
    // Explicit match/competition contexts belong to comments-context.js. Do not
    // fall through to transfer keyword inference and relabel match stories.
    if (explicit) return '';
    if (a?.id === 'buongiorno-davies-extensions') return 'contract-renewal';
    const t = textOf(a);
    if (/contract renewal|contract extension|new deal|extends? (?:his|her|their)? ?contract|renewal|extension|agreed new terms|signs? new terms/.test(t)) return 'contract-renewal';
    if (/loaned out|sold to|sale to|depart(?:s|ed|ure)|leaves napoli|transfers? out|outgoing|exit/.test(t)) return 'transfer-out';
    if (/signs? for napoli|joins? napoli|napoli sign|new signing|arrival|transfers? in|incoming|completed the signing|deal completed/.test(t)) return 'transfer-in';
    if (/transfer rumou?r|linked with|interest in|target|negotiat|bid|offer|release clause|monitoring|scout(?:ed|ing)?/.test(t)) return 'transfer-rumour';
    return '';
  }

  function articleRows(a, context){
    const pool = [...(banks[context] || [])];
    const h = hash(`${a.id}:${context}`);
    const shifted = pool.slice(h % pool.length).concat(pool.slice(0, h % pool.length));
    const specific = [];
    const t = textOf(a);
    if (context === 'contract-renewal' && /davies/.test(t)) specific.push('Davies at $190K and still inside the existing wage structure? That is the exact kind of renewal I can live with.');
    if (context === 'contract-renewal' && /buongiorno/.test(t)) specific.push('Buongiorno staying through his prime is huge. Centre-back continuity is one less problem to solve next summer.');
    if (context === 'contract-renewal' && /davies/.test(t) && /buongiorno/.test(t)) specific.push('Getting both Buongiorno and Davies done together is excellent timing. Two major contract questions disappear at once.');
    const combined = specific.concat(shifted);
    const filler = [
      'This is exactly the kind of off-pitch decision that changes how the squad looks six months from now.',
      'I am judging this on fit, timing and value, not just whether the headline feels exciting.',
      'The sporting plan matters more than winning the news cycle.',
      'At least this is a football conversation instead of pretending every story needs match-day drama.'
    ];
    const target = Math.max(14, Math.min(22, 10 + Number(a.commentHeat || 3) * 3));
    let i = 0;
    while (combined.length < target) combined.push(filler[(h + i++) % filler.length]);
    return combined.slice(0,target).map((txt,idx)=>[handles[(h+idx*7)%handles.length],txt]);
  }

  function apply(a, context, rows){
    const reader = document.getElementById('readerContent');
    const section = reader?.querySelector('.fan-comments');
    if (!section) return;
    if (section.dataset.newsContextEngine === '1' && section.dataset.newsContext === context && section.dataset.commentsFor === a.id) return;

    const h = hash(`${a.id}:${context}`);
    section.dataset.commentsFor = a.id;
    section.dataset.newsContextEngine = '1';
    section.dataset.newsContext = context;
    section.innerHTML = `<div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${esc(labels[context])} · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,txt],i)=>`<article class="fan-comment"><div class="fan-avatar">${esc(user[0].toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><span>${i===0?'just now':`${2+((h+i*5)%48)}m`}</span></div><p>${esc(txt)}</p><div class="fan-actions"><span>▲ ${7+((h+i*29)%190)}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
  }

  let scheduled = false;
  function sync(){
    scheduled = false;
    const reader = document.getElementById('readerContent');
    if (!reader) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent?.trim();
    if (!headline) return;
    const a = (D.articles || []).find(x => String(x.headline || '').trim() === headline);
    if (!a) return;
    const context = inferContext(a);
    if (!context) return;
    apply(a,context,articleRows(a,context));
  }

  function schedule(){
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(sync);
  }

  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(schedule).observe(reader,{childList:true,subtree:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);});
  schedule();
})();