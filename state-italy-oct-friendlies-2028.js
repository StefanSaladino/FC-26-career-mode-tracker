/* Confirmed Italy October 2028 international friendlies. Napoli club G/A remains unchanged. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
 const games=[
  ['Italy','Côte d’Ivoire','International Friendly',2,0,'W','6 Oct 2028 · Home','Italy 2–0 Côte d’Ivoire · Pio Esposito 2 goals · goal minutes and assists unconfirmed'],
  ['Italy','Tunisia','International Friendly',2,0,'W','10 Oct 2028 · Away','Tunisia 0–2 Italy · Moise Kean 2 goals · both assisted by Pio Esposito · goal minutes unconfirmed']
 ];
 for(const key of ['results','results2028']){
  D[key]=D[key]||[];
  for(const game of games){
   const i=D[key].findIndex(r=>r[0]==='Italy'&&r[1]===game[1]&&r[2]==='International Friendly'&&String(r[6]).includes(game[6].slice(0,11)));
   if(i>=0)D[key][i]=game;else D[key].push(game);
  }
 }
 for(const f of D.fixtures2028||[]){
  if(f.team==='Italy'&&f.date==='2028-10-06'&&f.opponent==='Côte d’Ivoire'){f.played=true;f.venue='Home';f.result='Italy 2–0 Côte d’Ivoire';}
  if(f.team==='Italy'&&f.date==='2028-10-10'&&f.opponent==='Tunisia'){f.played=true;f.venue='Away';f.result='Tunisia 0–2 Italy';}
 }
 D.italyOctober2028={competition:'International Friendlies',played:2,wins:2,draws:0,losses:0,gf:4,ga:0,players:[
  {name:'Pio Esposito',goals:2,assists:2},{name:'Moise Kean',goals:2,assists:0}
 ],note:'International friendly statistics only; not included in Napoli club records.'};
 // Do not alter the Milan hero, Napoli latest result, league table, ticker, club stats or next Napoli fixture.
})();