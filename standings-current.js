(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After Lecce 0–2 Napoli and Juventus 2–0 Inter · 26 matches',rows:[
  ['Napoli',26,19,7,0,38,14,24,64],
  ['Inter (Lombardia FC)',26,16,8,2,46,24,22,56],
  ['Atalanta (Bergamo Calcio)',24,15,3,6,44,29,15,48],
  ['Milan',24,16,0,8,45,28,17,48],
  ['Lazio (Latium)',24,13,5,6,40,21,19,44],
  ['Roma',24,14,2,8,43,31,12,44]
 ]};
 D.tableContext='Napoli are unbeaten at 19W–7D–0L with 64 points from 26 matches. Inter lost 2–0 to Juventus and remain on 56 from 26, expanding Napoli’s lead from five points to eight. Other rows remain at their last manager-supplied totals until updated.';
 D.ticker=['SERIE A · NAPOLI 64 PTS · INTER 56 · EIGHT-POINT LEAD','NAPOLI · 26 PLAYED · 19W 7D 0L · UNBEATEN','JUVENTUS 2–0 INTER · TITLE GAP BACK TO EIGHT',...(D.ticker||[]).filter(x=>!String(x).includes('FIVE-POINT')&&!String(x).includes('61 PTS'))].slice(0,9);
})();