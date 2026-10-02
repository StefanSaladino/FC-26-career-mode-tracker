(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const threads = {
    'italy-saladino-turnaround': [
      ['AzzurriArchivio','Top of the group is where Italy should be. I am encouraged, not impressed yet. Three World Cups changes the standard.'],
      ['CalcioNonno','The clean sheets are the first thing I trust. Before beautiful football, make Italy horrible to play against again.'],
      ['NapoliItalia','People will call it bias, but if Bastoni, Buongiorno, Kayode and Pio are performing, pick them. The passport does not list their club.'],
      ['QualifyFirst','I refuse to believe in anything until I physically see ITALIA on a major-tournament fixture graphic. I have been hurt enough.'],
      ['FrenchVisitor','You beat us in a friendly and suddenly the Renaissance has begun? Calm down.','FRANCE']
    ],
    'italy-france-approval': [
      ['AzzurriPulse','This is the first result where I thought: okay, maybe there is actually something here.'],
      ['NoMorePlayoffs','France is nice. Finish first in the qualifying group and keep us away from another nightmare playoff.'],
      ['TacticalTricolore','The defensive spacing is miles better than the panic-ball Italy have served up in previous cycles.'],
      ['BleuInTheComments','Friendly. One-nil. Enjoy it, but nobody in France is losing sleep over December 2027.','FRANCE']
    ],
    'italy-wales-warning': [
      ['AzzurriSkeptic','THIS is why some of us are not celebrating yet. Wales cannot be another ninety-minute crossword puzzle.'],
      ['CleanSheetCult','Three straight clean sheets and somehow we are complaining. Italian football truly is back.'],
      ['PioNationItalia','If the attack stalls, I know a very large young striker who enjoys scoring important goals. Just saying.'],
      ['CymruGuest','You can call it a warning. We call it keeping Italy scoreless.','WALES']
    ],
    'italy-napotalia-question': [
      ['ClubCountryDebate','The conflict-of-interest discourse is inevitable, but the answer is simple: are the selections defensible on form? Right now, mostly yes.'],
      ['MilanistaAzzurro','My concern is not Napoli players getting picked. My concern is whether non-Napoli players have to be twice as good to displace them.'],
      ['PartenopeiPulse','Napotalia is hilarious until you remember half these guys are genuinely among the best Italians available.'],
      ['NeutralCalcio','If Italy qualify comfortably, nobody cares where the players came from. If they stumble, every Napoli call-up becomes evidence in a trial.']
    ],
    'opinion-fortress-needs-goals': [
      ['OneNilEnjoyer','Eight conceded in fifteen. I am not apologizing for enjoying defensive terrorism when it is this effective.'],
      ['ExpectedGoalsHater','The defence is doing title-winning work. Asking the attack for a second goal before minute 85 is not greed.'],
      ['BastoniAgenda','Every week the forwards get the poster and every week Bastoni and Buongiorno quietly delete somebody.'],
      ['SaladinoOutNow','If we draw 0-0 again I have a 1,700-word post ready. If we win 1-0 I will pretend I never wrote it.']
    ],
    'opinion-two-points-conversation': [
      ['CurvaCalculator','Five back with a game in hand. Win it and I am immediately becoming unbearable.'],
      ['TitleRaceInsomnia','The table says calm down. The performances say chew your fingernails. Both are correct.'],
      ['NerazzurriLurker','You lot have already spent the game in hand. Points are not awarded for having fewer matches played.','INTER'],
      ['ScudettoOrBust','Nobody crown us. Nobody bury us. Just win the damn game in hand.']
    ],
    'opinion-pio-dependence': [
      ['PioNation','Counterpoint: simply let the giant child score every important goal forever.'],
      ['BeierDefenseLeague','This is why Beier matters even when he does not score. Pio is not creating all these situations alone.'],
      ['ItalyNo9Watch','The scary part is this conversation is happening for club AND country now.'],
      ['DevelopmentDept','He is 83 overall and people already talk about him like a 28-year-old finished product. Protect the development curve.']
    ],
    'opinion-beier-case': [
      ['BeierDefenseLeague','FINALLY somebody watches the movement instead of opening the goals tab and closing the case.'],
      ['ReceiptKeeper','We rejected 204 million. I am allowed to ask for goals without being called a hater.'],
      ['PioNation','Beier dragging centre-backs around while Pio attacks the gap is part of why this partnership works.'],
      ['CuleLurker','Two hundred and four million rejected and now you are publishing essays explaining his movement. Incredible.','BARCELONA']
    ],
    'opinion-defensive-identity': [
      ['BastoniAgenda','There it is. The actual story of the season.'],
      ['BuongiornoWall','Buongiorno does not need highlights. The highlight is the striker disappearing for ninety minutes.'],
      ['CleanSheetCult','Eight in fifteen. Put the number on a banner.'],
      ['TacticalNonno','The fullbacks can be aggressive because those two defend space like they own the deed. That is the system.']
    ],
    'curva-right-to-be-irritated': [
      ['VesuvioVoice','THANK YOU. Supporting the team does not require pretending a 0-0 is performance art.'],
      ['OneNilEnjoyer','You people complain when we concede and complain when we do not score three. I am taking the points and going home.'],
      ['SaladinoOutNow','I have been specifically invited to this article.'],
      ['ActuallyWatchTheGame','The frustration is fair. The apocalypse posting after every misplaced pass is not. There is a difference.']
    ]
  };

  const generic = [
    ['PressBoxLurker','This column is going to age either brilliantly or catastrophically and I will absolutely return with receipts.'],
    ['PartenopeiProfessor','There is a real argument here even if half the comments are going to reduce it to one player.'],
    ['TouchlineLawyer','The result of the next match will somehow be used as definitive proof for both sides of this debate.'],
    ['VesuviusPress','This is the kind of piece that starts an argument at breakfast and survives until kickoff.'],
    ['NoTacticsJustVibes','I disagree with at least thirty percent of this, which means it is a proper football column.'],
    ['SouthStandAnalyst','The interesting part is not whether the take is right today. It is whether the trend is still there in a month.']
  ];

  const esc = (v='') => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const hash = v => String(v||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);

  function render(){
    const host = document.getElementById('readerContent');
    if (!host) return;
    const headline = host.querySelector('#readerHeadline')?.textContent?.trim();
    if (!headline) return;
    const article = (D.articles || []).find(a => String(a.headline||'').trim() === headline);
    if (!article || !threads[article.id]) return;
    let section = host.querySelector('.fan-comments');
    if (!section) {
      section = document.createElement('section');
      section.className = 'fan-comments';
      host.appendChild(section);
    }
    if (section.dataset.editorialComments === article.id) return;

    const seed = threads[article.id];
    const h = hash(article.id);
    const rotated = generic.slice(h % generic.length).concat(generic.slice(0,h % generic.length));
    const target = Math.max(10, Math.min(16, 7 + Number(article.commentHeat || 3) * 2));
    const rows = seed.concat(rotated).slice(0,target);
    section.dataset.commentsFor = article.id;
    section.dataset.commentContext = 'editorial';
    section.dataset.editorialComments = article.id;
    section.className = `fan-comments heat-${article.commentHeat || 3}`;
    section.innerHTML = `<div class="fan-comments-head"><div><span>COMMENTS</span><h3>The debate</h3></div><small>Fictional comments · ${esc(article.category || 'Opinion')} · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,text,visitor],i)=>`<article class="fan-comment${visitor?' visitor-comment':''}"><div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong>${visitor?`<em class="visitor-badge">${esc(visitor)} FAN</em>`:''}<span>${i===0?'just now':`${3+i*5}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${17+((h+i*23)%173)}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
  }

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => { scheduled = false; render(); });
  };

  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(schedule).observe(reader,{childList:true,subtree:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);});
  schedule();
})();
