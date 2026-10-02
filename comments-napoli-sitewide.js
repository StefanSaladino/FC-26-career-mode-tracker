(() => {
  const D=window.NAPOLI_DATA;if(!D)return;
  const rows=[
    ['CurvaForcella','Uagliù, sta squadra me fa ascì pazzo ogni settimana. Però nun ’a cagnasse cu nisciuno.','Lads, this team drives me insane every week. But I would not trade it for anyone.'],
    ['NapoliCentro','Tre punti e jammo annanz. Nun me ne fotte niente si è bello o brutto.','Three points and we move forward. I do not give a damn whether it is pretty or ugly.'],
    ['VomeroTattico','Il manager certe volte mi sta rompendo le palle con tutta sta pazienza. Verticalizza, cazzo.','Sometimes the manager is pissing me off with all this patience. Play forward, fuck.'],
    ['QuartieriSpagnoli','Chesta squadra tene carattere. Quanno pare fernuta, trova sempe cocche cosa.','This team has character. When it looks finished, it always finds something.'],
    ['PartenopeoDOC','Porca puttana però facimm nu secondo gol ogni tanto? ’O core mio nun regge.','For fuck’s sake, can we score a second goal once in a while? My heart cannot take it.'],
    ['Fuorigrotta1906','Nun voglio sentì chiacchiere: maglia azzurra, tre punti, e fanculo ’o resto.','I do not want to hear any bullshit: blue shirt, three points, and fuck the rest.'],
    ['NonnoSanPaolo','Ai miei tempi si diceva prima nun piglià gol. Almeno questi l’hanno capito, cazzo.','In my day we said first do not concede. At least these guys fucking understand that.'],
    ['NapuleMia','Ogni thread tutto inglese pare ’na conferenza stampa della Premier. Simme ’e Napule, uagliù 😂','Every all-English thread looks like a Premier League press conference. We are Napoli, lads 😂']
  ];
  const esc=(s='')=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const isItaly=a=>a&&(String(a.id||'').startsWith('italy-')||/italy|azzurr/i.test(`${a.category||''} ${a.label||''}`));
  const current=()=>{const h=document.querySelector('#readerHeadline')?.textContent?.trim();return (D.articles||[]).find(a=>String(a.headline||'').trim()===h||String(a.translation?.headline||'').trim()===h);};
  function render(){
    const a=current();if(!a||isItaly(a))return;
    const section=document.querySelector('#readerContent .fan-comments'),list=section?.querySelector('.fan-comments-list');if(!list||section.dataset.napoliSitewide===a.id)return;
    const existing=list.querySelectorAll('.fan-comment').length;
    const count=existing>=20?3:existing>=10?2:1;
    let seed=[...String(a.id||a.headline||'')].reduce((n,c)=>n+c.charCodeAt(0),0);
    for(let i=0;i<count;i++){
      const [user,text,en]=rows[(seed+i*3)%rows.length];
      if(list.querySelector(`[data-napoli-user="${user}"]`))continue;
      const n=document.createElement('article');n.className='fan-comment napoletano-comment';n.dataset.napoliUser=user;
      n.innerHTML=`<div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><em class="visitor-badge">NAP</em><span>${i?`${3+i*5}m`:'mo'}</span></div><p lang="nap">${esc(text)}</p><button type="button" class="text-btn napoli-site-translate" data-original="${esc(text)}" data-english="${esc(en)}">Translate</button><div class="fan-actions"><span>▲ ${43+(seed%70)+i*17}</span><span>Rispondi</span></div></div>`;
      const children=[...list.children];const pos=Math.min(children.length,Math.max(1,Math.floor((i+1)*children.length/(count+1))));if(children[pos])list.insertBefore(n,children[pos]);else list.appendChild(n);
    }
    section.dataset.napoliSitewide=a.id;
  }
  document.addEventListener('click',e=>{const b=e.target.closest?.('.napoli-site-translate');if(b){e.preventDefault();e.stopImmediatePropagation();const p=b.parentElement.querySelector('p'),on=b.dataset.translated==='1';p.textContent=on?b.dataset.original:b.dataset.english;p.lang=on?'nap':'en';b.dataset.translated=on?'0':'1';b.textContent=on?'Translate':'Original';return;}if(e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(render));},true);
  const r=document.getElementById('readerContent');if(r)new MutationObserver(()=>requestAnimationFrame(render)).observe(r,{childList:true,subtree:true});render();
})();