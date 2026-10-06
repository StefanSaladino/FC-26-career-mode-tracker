(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:26,d:9,l:0,points:87,played:35,remaining:3,status:'Serie A champions · unbeaten'},ucl:{stage:'Semifinal',opponent:'Barcelona',firstLeg:'Barcelona 1–1 Napoli · Apr 26',secondLeg:'Home · May 2 · 1–1 aggregate'}};
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–0</strong><span>PISA</span></div><p>Serie A · Chiesa 11′ · assist Endrick · clean sheet · unbeaten run alive</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions · unbeaten</span></div><div><strong>UCL: 1–1</strong><span>Barcelona at the Maradona · semifinal second leg</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${w[0]}</span><p>${w[1]}</p></div>`).join('');
})();