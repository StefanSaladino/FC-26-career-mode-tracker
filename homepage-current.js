(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:27,d:9,l:0,points:90,played:36,remaining:2,status:'Serie A champions · unbeaten'},coppa:{stage:'CHAMPIONS',status:'Coppa Italia champions · beat Roma 1–0 in final'},ucl:{stage:'FINAL',status:'First Champions League final in club history',semifinal:'Napoli 2–0 Barcelona · 3–1 aggregate'}};
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–0</strong><span>ROM</span></div><p>COPPA ITALIA FINAL · Davies 19′ (unassisted) · Meret immense · NAPOLI ARE CHAMPIONS</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>🏆🏆 DOUBLE</strong><span>Serie A + Coppa Italia champions</span></div><div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · 36 unbeaten · two remain</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${w[0]}</span><p>${w[1]}</p></div>`).join('');
})();