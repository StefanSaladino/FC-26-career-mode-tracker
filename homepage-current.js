(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:25,d:9,l:0,points:84,played:34,remaining:4,status:'Serie A champions'},ucl:{stage:'Semifinal',opponent:'Barcelona',firstLeg:'Barcelona 1–1 Napoli · Apr 26',secondLeg:'Home · May 2 · 1–1 aggregate'}};
 // Canonical homepage snapshot. Update Result / Next Up / Form / Noise together after every played match.
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>BAR</span><strong>1–1</strong><span>NAP</span></div><p>Champions League · Semifinal first leg · McTominay 22′ · assist De Bruyne</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions</span></div><div><strong>UCL: 1–1</strong><span>Semifinal level · Barcelona return at the Maradona</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>{const row=Array.isArray(w)?w:['UPDATE',String(w)];return `<div class="whisper"><span>${row[0]}</span><p>${row[1]}</p></div>`}).join('');
})();