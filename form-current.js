(()=>{
 const D=window.NAPOLI_DATA;
 const form=document.getElementById('formLine');
 if(!form)return;
 const state=D?.seasonState||{league:{w:27,d:9,l:0,points:90,played:36,remaining:2,status:'Serie A champions · unbeaten'}};
 const L=state.league;
 form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions · unbeaten</span></div><div><strong>${L.played} UNBEATEN</strong><span>${L.remaining} league matches from an invincible season</span></div>`;
})();