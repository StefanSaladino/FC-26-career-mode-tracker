(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.upcoming=[
  ['Atlético Madrid','Champions League · Quarter-final second leg','Home · Aggregate 0–0'],
  ['Roma','Serie A','Away']
 ];
 const el=document.getElementById('nextTwo');
 if(el) el.innerHTML=D.upcoming.map(x=>`<div class="next-row"><strong>${x[0]}</strong><span>${x[1]} · ${x[2]}</span></div>`).join('');
 const strip=document.getElementById('upcomingStrip');
 if(strip) strip.innerHTML=D.upcoming.map(x=>`<div class="fixture"><span>${x[1]}</span><strong>${x[0]}</strong><small>${x[2]}</small></div>`).join('');
})();