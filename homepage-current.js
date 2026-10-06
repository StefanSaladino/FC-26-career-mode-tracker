(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:25,d:9,l:0,points:84,played:34,remaining:4,status:'Serie A champions'},ucl:{stage:'Semifinal',opponent:'Barcelona',firstLeg:'Away · Apr 26',secondLeg:'Home · May 2'}};
 // Canonical homepage snapshot. Update this file after every played match so Result / Next Up / Form / Noise move together.
 const latest=document.getElementById('latestResult');
 if(latest) latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>CHAMPIONS</strong><span>MIL</span></div><p>Serie A · Scudetto clinched · 25–9–0 · 84 points</p>';
 const form=document.getElementById('formLine');
 if(form){const L=D.seasonState.league;form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions</span></div><div><strong>Unbeaten</strong><span>${L.played} league matches · ${L.remaining} from an invincible season</span></div>`;}
 const whispers=document.getElementById('whisperList');
 if(whispers&&Array.isArray(D.whispers)) whispers.innerHTML=D.whispers.map(w=>{const row=Array.isArray(w)?w:['UPDATE',String(w)];return `<div class="whisper"><span>${row[0]}</span><p>${row[1]}</p></div>`}).join('');
})();