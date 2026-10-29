(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const rows=d.statsBySeason?.['2029–30'];
if(rows){
 const changes={'Francesco Pio Esposito':{g:1,a:0},'Warren Zaïre-Emery':{g:0,a:1}};
 for(const [name,v] of Object.entries(changes)){
  let row=rows.find(r=>r[0]===name);
  if(row){row[1]=(Number(row[1])||0)+v.g;row[2]=(Number(row[2])||0)+v.a;row[3]='Verified Napoli club contributions through Porto Champions League final, 1 June 2030 · Italy excluded';}
  else rows.push([name,v.g,v.a,'Confirmed Porto final contribution only; previously recorded season data unavailable']);
  const official=d.statsOfficial202930?.[name];
  if(official){official.goals=(Number(official.goals)||0)+v.g;official.assists=(Number(official.assists)||0)+v.a;}
 }
 d.stats=rows;d.statsScope='Napoli club statistics through UEFA Champions League final on 1 June 2030. Pio Esposito winner +1 goal; Warren Zaïre-Emery +1 assist. Italy international totals excluded.';
 const names=[...new Set(Object.values(d.statsBySeason).flat().map(r=>r[0]))];
 const career=names.map(name=>{let g=0,a=0,seasons=[];for(const [season,items] of Object.entries(d.statsBySeason)){const r=items.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;seasons.push(season)}}return[name,g,a,seasons.join(', ')]}).sort((x,y)=>y[1]-x[1]||y[2]-x[2]);
 if(Array.isArray(d.careerStats))d.careerStats.splice(0,d.careerStats.length,...career);else d.careerStats=career;
 rows.sort((x,y)=>(Number(y[1])||0)-(Number(x[1])||0)||(Number(y[2])||0)-(Number(x[2])||0));
 const current=document.querySelector('[data-stats-view="2029–30"]');if(current)current.click();
 const notice=document.getElementById('statsVerificationNotice');
 if(notice)notice.textContent='Updated through 1 June 2030 for manager-confirmed Napoli club contributions, including Pio Esposito\'s final winner and Warren Zaïre-Emery\'s assist. International statistics excluded.';
}
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Napoli'&&r[1]==='Porto'&&r[2]==='Champions League'&&Number(r[3])===1&&Number(r[4])===0)){d.results.push(['Napoli','Porto','Champions League',1,0,'W','Pio Esposito 51\'','Zaïre-Emery assist · 1 June 2030 · Bernabéu · UCL Final']);}
})();