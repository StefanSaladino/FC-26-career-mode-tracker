(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:26,d:9,l:0,points:87,played:35,remaining:3,status:'Serie A champions · unbeaten'},ucl:{stage:'FINAL',status:'First Champions League final in club history',semifinal:'Napoli 2–0 Barcelona · 3–1 aggregate'}};
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>BAR</span></div><p>UCL semifinal · Paz 7′ (Beier) · Chiesa 75′ (Kayode) · Napoli advance 3–1 aggregate</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions · unbeaten</span></div><div><strong>UCL FINAL</strong><span>First Champions League final in Napoli history</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${w[0]}</span><p>${w[1]}</p></div>`).join('');
})();