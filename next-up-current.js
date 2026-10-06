(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.upcoming=[['Sassuolo','Serie A','May 14 · Home'],['Torino','Serie A','May 21 · Away'],['Paris Saint-Germain','Champions League','May 27 · Neutral · FINAL']];
 const el=document.getElementById('nextTwo');
 if(el) el.innerHTML='<div class="next-row"><strong>MAY 14 · SERIE A</strong><span>Napoli vs Sassuolo · 36 unbeaten · two matches from Invincibles</span></div><div class="next-row"><strong>MAY 21 · SERIE A</strong><span>Torino vs Napoli · final league match</span></div><div class="next-row"><strong>MAY 27 · CHAMPIONS LEAGUE FINAL</strong><span>Napoli vs Paris Saint-Germain · the treble is on the line</span></div>';
 const strip=document.getElementById('upcomingStrip');
 if(strip) strip.innerHTML=D.upcoming.map(f=>`<div class="fixture"><span>${f[1]}</span><strong>${f[0]}</strong><small>${f[2]}</small></div>`).join('');
})();