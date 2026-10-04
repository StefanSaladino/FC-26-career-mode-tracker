(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After Bologna 0–1 Napoli · 23 matches for Napoli',rows:[
  ['Napoli',23,17,6,0,33,12,21,57],
  ['Inter (Lombardia FC)',23,15,7,1,42,20,22,52],
  ['Milan',22,15,0,7,41,24,17,45],
  ['Roma',23,14,2,7,43,30,13,44],
  ['Atalanta (Bergamo Calcio)',22,13,3,6,39,27,12,42],
  ['Lazio (Latium)',23,12,5,6,39,21,18,41]
 ]};
 D.tableContext='Napoli lead Serie A by five points over Inter after 23 matches. Napoli remain unbeaten in league play at 17W–6D–0L. Inter are 15W–7D–1L after their 1–1 draw with Como.';
 D.ticker=['SERIE A · NAPOLI 57 PTS · INTER 52 · FIVE-POINT LEAD','NAPOLI · 23 PLAYED · 17W 6D 0L · UNBEATEN','INTER 1–1 COMO · GAP GROWS TO FIVE',...(D.ticker||[]).filter(x=>!String(x).includes('TITLE RIVALS DROP POINTS')&&!String(x).includes('INTER 1–1 COMO'))].slice(0,8);
})();