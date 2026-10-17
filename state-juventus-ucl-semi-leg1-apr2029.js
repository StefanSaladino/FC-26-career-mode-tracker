(()=>{const D=window.NAPOLI_DATA;if(!D)return;
D.juventusUclSemiLeg1={date:'2029-04-24',competition:'Champions League',stage:'Semifinal first leg',home:'Napoli',away:'Juventus',score:'0–1',halftime:'0–0',final:true,goals:[{minute:74,scorer:'Kenan Yıldız',team:'Juventus'}]};
D.latestResult=['NAP','0–1','JUV','CHAMPIONS LEAGUE · SEMIFINAL LEG 1 · FT · YILDIZ 74′'];
D.nextClubMatch={team:'Napoli',opponent:'Juventus',competition:'Champions League · Semifinal second leg',date:'2029-05-02',venue:'Away',played:false,aggregateLead:'Juventus 1–0'};
D.upcoming=(D.upcoming||[]).filter(x=>x[1]>'2029-04-24');
if(!D.upcoming.some(x=>x[0]==='Juventus'&&x[1]==='2029-05-02'))D.upcoming.push(['Juventus','2029-05-02','Champions League semifinal · Second leg · Away · Napoli trail 0–1']);
else D.upcoming=D.upcoming.map(x=>x[0]==='Juventus'&&x[1]==='2029-05-02'?['Juventus','2029-05-02','Champions League semifinal · Second leg · Away · Napoli trail 0–1']:x);
D.upcoming.sort((a,b)=>a[1].localeCompare(b[1]));
D.ticker=['JUVENTUS WIN 1–0 IN NAPLES · YILDIZ 74′','UCL SEMIFINAL RETURN · MAY 2 · JUVENTUS vs NAPOLI','SERIE A: NAPOLI 83 · ROMA 76 · JUVENTUS 75','COPPA ITALIA FINAL · MAY 9 · NAPOLI vs AC MILAN'];
D.whispers=[['EUROPE · JUVENTUS','Napoli trail 0–1 after the semifinal first leg. Return away on May 2.'],['THE DECISIVE GOAL','Kenan Yıldız scored in the 74th minute of a tense match in Naples.'],['SCUDETTO · SIX POINTS','Napoli lead Roma by seven points with four league matches remaining.'],['COPPA FINAL · MAY 9','AC Milan await Napoli in the Coppa Italia final.']];
const el=id=>document.getElementById(id);const latest=el('latestResult');if(latest){const r=D.latestResult;latest.innerHTML='<div class="latest-score"><span>'+r[0]+'</span><strong>'+r[1]+'</strong><span>'+r[2]+'</span></div><p>'+r[3]+'</p>';}
const next=el('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+x[0]+'</strong><span>'+x[2]+' · '+x[1]+'</span></div>').join('');
const strip=el('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+x[1]+'</span><strong>'+x[0]+'</strong><small>'+x[2]+'</small></div>').join('');
const ticker=el('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+x+'</span>').join('');
const whispers=el('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+x[0]+'</span><p>'+x[1]+'</p></div>').join('');
const m=el('matchesList');if(m&&!m.querySelector('[data-match-id="juventus-ucl-semi-leg1-apr24-2029"]')){const card=document.createElement('div');card.className='match-card';card.dataset.matchId='juventus-ucl-semi-leg1-apr24-2029';card.innerHTML='<div class="result-badge L">L</div><div class="match-main"><span>Champions League · Semifinal Leg 1 · 24 Apr 2029 · Home</span><strong>Napoli <b>0–1</b> Juventus</strong><p>Yıldız 74′ · Return leg May 2 in Turin</p></div>';m.prepend(card);}
})();