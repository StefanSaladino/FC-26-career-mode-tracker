(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.upcoming=[
  ['Away league fixture','Serie A','May 7 · Away'],
  ['Roma','Coppa Italia','May 10 · Neutral · Final'],
  ['Sassuolo','Serie A','May 14 · Home'],
  ['Torino','Serie A','May 21 · Away'],
  ['Paris Saint-Germain','Champions League','May 27 · Neutral · FINAL']
 ];
 const el=document.getElementById('nextTwo');
 if(el) el.innerHTML='<div class="next-row"><strong>MAY 7 · SERIE A</strong><span>Away league fixture · protect the unbeaten run</span></div><div class="next-row"><strong>MAY 10 · COPPA ITALIA FINAL</strong><span>Napoli vs Roma · Neutral</span></div><div class="next-row"><strong>MAY 27 · CHAMPIONS LEAGUE FINAL</strong><span>Napoli vs Paris Saint-Germain · Neutral</span></div>';
 const strip=document.getElementById('upcomingStrip');
 if(strip) strip.innerHTML=D.upcoming.map(f=>`<div class="fixture"><span>${f[1]}</span><strong>${f[0]}</strong><small>${f[2]}</small></div>`).join('');
})();