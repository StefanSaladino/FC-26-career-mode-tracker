(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:28,d:9,l:0,points:93,played:37,remaining:1,status:'Serie A champions · 37 unbeaten · one from Invincibles'},coppa:{stage:'CHAMPIONS',status:'Coppa Italia champions · beat Roma 1–0 in final'},ucl:{stage:'FINAL',status:'First Champions League final in club history',semifinal:'Napoli 2–0 Barcelona · 3–1 aggregate'}};
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>SAS</span></div><p>SERIE A · Beier 3′ · Pio Esposito 34′ (pen.) · 37 MATCHES UNBEATEN</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>37 UNBEATEN</strong><span>One match from Invincibles</span></div><div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Torino remains</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${w[0]}</span><p>${w[1]}</p></div>`).join('');
})();