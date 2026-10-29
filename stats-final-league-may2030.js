(()=>{'use strict';const d=window.NAPOLI_DATA;if(!d?.statsBySeason?.['2029–30'])return;
const rows=d.statsBySeason['2029–30'];const r=rows.find(x=>x[0]==='Giacomo Raspadori');
if(r){r[1]=7;r[2]=Number(r[2])||6;r[3]='Verified Napoli club total through Torino, 26 May 2030 · includes three league goals across Bergamo and Torino · Coppa final scorer remains unconfirmed';}
if(d.statsOfficial202930?.['Giacomo Raspadori']){d.statsOfficial202930['Giacomo Raspadori'].goals=7;}
d.stats=rows;
d.statsScope='Napoli club goals and assists updated through the final Serie A match on 26 May 2030 where individually confirmed. Raspadori scored all three Napoli goals across Bergamo and Torino. Coppa Italia final scorer/assist remain unconfirmed. Italy excluded.';
const names=[...new Set(Object.values(d.statsBySeason).flat().map(x=>x[0]))];
const career=names.map(name=>{let g=0,a=0,seasons=[];for(const [season,items] of Object.entries(d.statsBySeason)){const x=items.find(y=>y[0]===name);if(x){g+=Number(x[1])||0;a+=Number(x[2])||0;seasons.push(season)}}return[name,g,a,seasons.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(d.careerStats))d.careerStats.splice(0,d.careerStats.length,...career);else d.careerStats=career;
const btn=document.querySelector('[data-stats-view="2029–30"]');if(btn)btn.click();
const note=document.getElementById('statsVerificationNotice');if(note)note.textContent='Updated through 26 May 2030 where player contributions are manager-confirmed. Raspadori scored all three Napoli goals across Bergamo and Torino. The Coppa Italia final scorer/assist remain unconfirmed and are not assigned.';
})();