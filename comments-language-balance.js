(() => {
  const D=window.NAPOLI_DATA; if(!D) return;
  const italyIds=new Set(['italy-pipeline','italy-saladino-turnaround','italy-france-approval','italy-wales-warning','italy-napotalia-question','italy-scotland-statement','italy-south-africa-pio','italy-esposito-nine-debate','italy-state-of-azzurri']);
  const napoliPool=[
    ['QuartieriSpagnoli','Uagliù, io ve voglio bene, ma ogni partita me levate dieci anni ’e vita.','Lads, I love you, but every match takes ten years off my life.','nap'],
    ['NapuleSempre','Jammo, cazzo. Chesta squadra tene carattere, pure quanno ce fa jastemmà.','Come on, fuck. This team has character, even when it makes us curse.','nap'],
    ['VomeroTattico','Nun voglio ’o calcio perfetto. Voglio tre punti e meno strunzate vicino ’a porta.','I do not want perfect football. I want three points and less bullshit near goal.','nap'],
    ['CurvaB1906','Maronn mia, facimm ’o secondo gol e faciteme vedé na partita senza soffrì fino ’o novantacinquesimo.','My God, score the second goal and let me watch one match without suffering until the 95th.','nap'],
    ['ForcellaAzzurra','Chist Napoli è forte assaje, ma certe vote pare ca se vo’ complicà ’a vita apposta.','This Napoli side is very strong, but sometimes it looks like it wants to make life difficult on purpose.','nap'],
    ['PartenopeoDOC','Guagliù, basta chiacchiere. Si gioca, si lotta e si porta ’a partita a casa. Fanculo ’o resto.','Lads, enough talk. Play, fight, bring the result home. Fuck the rest.','nap'],
    ['NapoliNelSangue','Porca puttana, ma una domenica tranquilla la possiamo avere oppure è vietato dal regolamento?','For fuck’s sake, can we have one peaceful Sunday or is it against the rules?','it'],
    ['AzzurroDelSud','Il manager a volte mi rompe le palle, poi guardo la classifica e devo stare zitto. Che sport di merda 😂','The manager pisses me off sometimes, then I look at the table and have to shut up. What a shitty sport 😂','it']
  ];
  const italyPool=[
    ['AzzurroVero','Prima la qualificazione, poi facciamo festa. Dopo tre Mondiali saltati non mi fido più di un cazzo.','Qualification first, then we celebrate. After missing three World Cups I do not trust a fucking thing anymore.','it'],
    ['BarSportItalia','La squadra finalmente ha una faccia. Porca puttana, era ora.','The team finally has an identity. For fuck’s sake, it was about time.','it'],
    ['NazionalePrima','Del club non me ne frega un cazzo: chi merita gioca, chi non merita sta fuori.','I do not give a fuck about the club: whoever deserves it plays, whoever does not stays out.','it'],
    ['TraumaAzzurro','Ogni vittoria mi fa credere di nuovo e questa cosa mi terrorizza 😂','Every win makes me believe again and that terrifies me 😂','it'],
    ['TatticoDaBar','Meno seghe mentali e più gol, cazzo. La struttura c’è, adesso bisogna ammazzare le partite.','Less overthinking and more goals, fuck. The structure is there; now we need to kill games off.','it']
  ];
  const esc=(v='')=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const hash=s=>String(s||'').split('').reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
  function current(){const h=document.querySelector('#readerHeadline')?.textContent?.trim();return (D.articles||[]).find(a=>String(a.headline||'').trim()===h||String(a.translation?.headline||'').trim()===h);}
  function add(){
    const a=current(); if(!a)return;
    const section=document.querySelector('#readerContent .fan-comments'),list=section?.querySelector('.fan-comments-list'); if(!list||section.dataset.languageBalanced===a.id)return;
    const isItaly=italyIds.has(a.id)||/italy|azzurr|nazionale/i.test(`${a.id} ${a.category||''} ${a.label||''}`);
    const pool=isItaly?italyPool:napoliPool, count=isItaly?3:3, start=hash(a.id)%pool.length;
    for(let j=count-1;j>=0;j--){const [user,text,en,lang]=pool[(start+j)%pool.length];const n=document.createElement('article');n.className=`fan-comment local-language-comment ${lang==='nap'?'napoletano-comment':'italian-comment'}`;n.innerHTML=`<div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><em class="visitor-badge">${lang==='nap'?'NA':'IT'}</em><span>${j?`${4+j*6}m`:'mo'}</span></div><p lang="${lang}">${esc(text)}</p><button type="button" class="text-btn local-language-translate" data-original="${esc(text)}" data-english="${esc(en)}" data-lang="${lang}">Translate</button><div class="fan-actions"><span>▲ ${43+((hash(user+a.id)+j*19)%151)}</span><span>Rispondi</span></div></div>`;list.prepend(n);}
    section.dataset.languageBalanced=a.id;
  }
  document.addEventListener('click',e=>{const b=e.target.closest?.('.local-language-translate');if(b){e.preventDefault();e.stopImmediatePropagation();const p=b.parentElement.querySelector('p'),on=b.dataset.translated==='1';p.textContent=on?b.dataset.original:b.dataset.english;p.lang=on?b.dataset.lang:'en';b.dataset.translated=on?'0':'1';b.textContent=on?'Translate':'Original';return;}if(e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(add));},true);
  const r=document.getElementById('readerContent');if(r)new MutationObserver(()=>requestAnimationFrame(add)).observe(r,{childList:true,subtree:true});add();
})();
