(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const extras = {
    'opinion-fortress-needs-goals': [
      ['QuartieriAzzurri', 'Uagliù, otto gol subiti è roba seria. Però facimm nu gol in più ogni tanto, ca accussì me vene nu colpo ogni domenica.', 'Guys, eight goals conceded is serious stuff. But score one more every now and then, because like this I’m going to have a heart attack every Sunday.'],
      ['NonnoDelVomero', 'Chesta difesa è na cosa seria. Bastoni e Buongiorno nun fanno passà manco ll’aria.', 'This defence is the real deal. Bastoni and Buongiorno do not even let the air through.']
    ],
    'opinion-two-points-conversation': [
      ['ForzaNapuleSempre', 'Jammo guagliù, prima vincimma sta partita in meno e PO’ facimmo ’e conti cu ll’Inter. Nun me facite jastemmà prima d’’o tiempo.', 'Come on lads, first let’s win this game in hand and THEN we can do the maths with Inter. Do not make me start cursing ahead of time.'],
      ['CurvaB', 'Cinque punti e na partita in meno. Statte quieto? Ma comme cazzo faccio a sta quieto 😂', 'Five points and a game in hand. Stay calm? How the fuck am I supposed to stay calm? 😂']
    ],
    'opinion-pio-dependence': [
      ['PioDArezzo', 'Chist guaglione tene ’o gol dint’ ’o sanghe. Quanno serve, isso sta sempe llà. Maronn mia.', 'This kid has goals in his blood. When he is needed, he is always there. My God.'],
      ['Spaccanapoli1906', 'Uagliù però nun putimmo mettere tutt’ ’e guaie ncopp’ ’e spalle ’e Pio. È nu guaglione, mica San Gennaro.', 'Guys, we cannot put every problem on Pio’s shoulders. He is a kid, not San Gennaro.']
    ],
    'opinion-beier-case': [
      ['TribunaPosillipo', 'Beier corre, apre spazi, fa tutto. Bello. Mo però vottala dint’, fratè. Duecentoquattro milioni, porca puttana.', 'Beier runs, opens space, does everything. Great. Now put the damn ball in the net, brother. Two hundred and four million, for fuck’s sake.'],
      ['NapuleNunMolla', 'Ogni vota stessa storia: “nun segna”. Guardate ’a partita, uagliù. Senza ’e movimenti suoi metà d’’e occasioni nun esistono.', 'Same story every time: “he does not score.” Watch the match, lads. Without his movement half the chances do not exist.']
    ],
    'opinion-defensive-identity': [
      ['MergellinaWall', 'Chest’è Napoli. Prima nun pigliamm gol, po’ vedimmo. ’O centravanti avversario torna a casa e manco sape si ha giocato.', 'This is Napoli. First we do not concede, then we figure out the rest. The opposing striker goes home not even knowing whether he played.'],
      ['AzzurroNapoletano', 'Bastoni e Buongiorno? Mamma mia. Chille stanno facenno ’e guardie ’o caveau.', 'Bastoni and Buongiorno? My God. Those two are guarding the vault.']
    ],
    'curva-right-to-be-irritated': [
      ['UaglioTira', 'UAGLIÙ TIRATE! Nun se po’ trasì cu ’a palla dint’ ’a porta ogni vota. M’avite rutto ’o cazzo cu sti passaggi.', 'LADS, SHOOT! You cannot walk the ball into the net every time. I am fucking sick of all these passes.'],
      ['NapoliTherapySud', 'Aggio capito, simmo forti. Ma ’o manager certe vote me fa ascì pazzo. Tira ’na vota prima d’’o sessantesimo, mannaggia.', 'I get it, we are good. But sometimes the manager drives me insane. Take a shot before the 60th minute for once, damn it.'],
      ['CurvaA189', 'Amo sta squadra, ma ogni partita è na sofferenza. Nun putimmo campà accussì, cazzo 😂', 'I love this team, but every match is suffering. We cannot live like this, fuck 😂']
    ]
  };

  const esc = (v='') => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  function article(){
    const h=document.querySelector('#readerHeadline')?.textContent?.trim();
    return (D.articles||[]).find(a=>String(a.headline||'').trim()===h||String(a.translation?.headline||'').trim()===h);
  }
  function render(){
    const a=article(); if(!a) return;
    const section=document.querySelector('#readerContent .fan-comments');
    const list=section?.querySelector('.fan-comments-list');
    const rows=extras[a.id];
    if(!list||!rows?.length||section.dataset.napoletano===a.id) return;
    rows.slice().reverse().forEach(([user,text,en])=>{
      const n=document.createElement('article');
      n.className='fan-comment napoletano-comment';
      n.innerHTML=`<div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><em class="visitor-badge">NA</em><span>mo</span></div><p lang="nap">${esc(text)}</p><button type="button" class="text-btn napoletano-translate" data-original="${esc(text)}" data-english="${esc(en)}">Translate</button><div class="fan-actions"><span>▲ ${57+user.length*9}</span><span>Rispondi</span></div></div>`;
      list.prepend(n);
    });
    section.dataset.napoletano=a.id;
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest?.('.napoletano-translate');
    if(b){
      e.preventDefault(); e.stopImmediatePropagation();
      const p=b.parentElement.querySelector('p');
      const translated=b.dataset.translated==='1';
      p.textContent=translated?b.dataset.original:b.dataset.english;
      p.lang=translated?'nap':'en';
      b.dataset.translated=translated?'0':'1';
      b.textContent=translated?'Translate':'Original';
      return;
    }
    if(e.target.closest?.('[data-article]')) requestAnimationFrame(()=>requestAnimationFrame(render));
  },true);
  const reader=document.getElementById('readerContent');
  if(reader)new MutationObserver(()=>requestAnimationFrame(render)).observe(reader,{childList:true,subtree:true});
  render();
})();
