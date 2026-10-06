(()=>{
 const D=window.NAPOLI_DATA;
 const form=document.getElementById('formLine');
 if(!form)return;
 const state=D?.seasonState||{league:{w:25,d:9,l:0,points:84,played:34,remaining:4,status:'Serie A champions'}};
 const L=state.league;
 form.innerHTML=`<div><strong>${L.w}-${L.d}-${L.l}</strong><span>Serie A · ${L.points} pts · Champions</span></div><div><strong>Unbeaten</strong><span>${L.played} league matches · ${L.remaining} from an invincible season</span></div>`;
})();