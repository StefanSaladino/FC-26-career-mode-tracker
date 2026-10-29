(()=>{'use strict';
const d=window.NAPOLI_DATA;if(!d?.statsBySeason?.['2029–30'])return;
const verified={
  'Maximilian Beier':[36,26],
  'Francesco Pio Esposito':[33,21],
  'Mikey Moore':[7,12],
  'João Neves':[4,3],
  'Nico Paz':[6,6],
  'Scott McTominay':[6,8],
  'Giacomo Raspadori':[4,6],
  'Alphonso Davies':[2,0],
  'Warren Zaïre-Emery':[2,6],
  'Michael Olise':[3,6],
  'Anton Stach':[2,1],
  'Lirim Hasa':[1,2]
};
const rows=d.statsBySeason['2029–30'];
for(const row of rows){
  const v=verified[row[0]];
  if(v){row[1]=v[0];row[2]=v[1];row[3]='Verified Napoli club totals through Manchester City, 8 May 2030 · Coppa final scorer not confirmed';}
}
for(const [name,v] of Object.entries(verified)){
  if(!rows.some(r=>r[0]===name))rows.push([name,v[0],v[1],'Verified Napoli club totals through Manchester City, 8 May 2030 · Coppa final scorer not confirmed']);
  if(d.statsOfficial202930?.[name]){d.statsOfficial202930[name].goals=v[0];d.statsOfficial202930[name].assists=v[1];}
}
rows.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0));
d.stats=rows;
d.statsScope='Napoli club goals and assists reconciled through Manchester City on 8 May 2030. Coppa Italia final ended 1–1, but Napoli scorer/assist were not manager-confirmed, so that goal is intentionally not assigned. Italy excluded.';
const names=[...new Set(Object.values(d.statsBySeason).flat().map(r=>r[0]))];
const career=names.map(name=>{let g=0,a=0,seasons=[];for(const [season,items] of Object.entries(d.statsBySeason)){const r=items.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;seasons.push(season)}}return[name,g,a,seasons.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(d.careerStats))d.careerStats.splice(0,d.careerStats.length,...career);else d.careerStats=career;
const btn=document.querySelector('[data-stats-view="2029–30"]');if(btn)btn.click();
const feature=document.getElementById('statsTable')?.closest('.stats-feature');
if(feature&&!document.getElementById('statsVerificationNotice')){const note=document.createElement('p');note.id='statsVerificationNotice';note.setAttribute('role','note');note.style.cssText='margin:12px 0;padding:12px 14px;border-left:3px solid currentColor;font-size:.9rem;line-height:1.5';note.textContent='Updated through 8 May 2030. The Coppa Italia final finished 1–1, but the Napoli goalscorer and assist were not confirmed, so that goal is not assigned in player totals.';feature.insertBefore(note,feature.firstChild);}
})();