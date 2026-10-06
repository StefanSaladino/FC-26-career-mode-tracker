(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.upcoming=[['Torino','Serie A','May 21 · Away · FINAL LEAGUE MATCH'],['Paris Saint-Germain','Champions League','May 27 · Neutral · FINAL']];
 const el=document.getElementById('nextTwo');
 if(el) el.innerHTML='<div class="next-row"><strong>MAY 21 · SERIE A · MATCH 38</strong><span>Torino vs Napoli · 37 unbeaten · 90 minutes from Invincibles</span></div><div class="next-row"><strong>MAY 27 · CHAMPIONS LEAGUE FINAL</strong><span>Napoli vs Paris Saint-Germain · the treble is on the line</span></div>';
 const strip=document.getElementById('upcomingStrip');
 if(strip) strip.innerHTML=D.upcoming.map(f=>`<div class="fixture"><span>${f[1]}</span><strong>${f[0]}</strong><small>${f[2]}</small></div>`).join('');
})();