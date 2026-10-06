(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:27,d:9,l:0,points:90,played:36,remaining:2,status:'Serie A champions · unbeaten'},ucl:{stage:'FINAL',status:'First Champions League final in club history',semifinal:'Napoli 2–0 Barcelona · 3–1 aggregate'}};
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>ATA</span><strong>0–3</strong><span>NAP</span></div><p>Serie A · Chiesa 13′, 20′, 45′ · first-half hat-trick · Endrick assisted first two · heavily rotated XI</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions · unbeaten</span></div><div><strong>36 UNBEATEN</strong><span>Two league matches from an invincible season</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${w[0]}</span><p>${w[1]}</p></div>`).join('');
})();