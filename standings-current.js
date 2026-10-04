(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After Udinese 0–0 Napoli and Inter 2–0 win · 25 matches',rows:[
  ['Napoli',25,18,7,0,36,14,22,61],
  ['Inter (Lombardia FC)',25,16,8,1,46,22,24,56],
  ['Atalanta (Bergamo Calcio)',24,15,3,6,44,29,15,48],
  ['Milan',24,16,0,8,45,28,17,48],
  ['Lazio (Latium)',24,13,5,6,40,21,19,44],
  ['Roma',24,14,2,8,43,31,12,44]
 ]};
 D.tableContext='Napoli remain first and unbeaten at 18W–7D–0L with 61 points from 25 matches. Inter won 2–0 to move to 56 points from 25, cutting Napoli’s lead from seven points to five. Other rows remain at their last manager-supplied totals until updated.';
 D.ticker=['SERIE A · NAPOLI 61 PTS · INTER 56 · FIVE-POINT LEAD','NAPOLI · 25 PLAYED · 18W 7D 0L · UNBEATEN','INTER WIN 2–0 · GAP CUT FROM SEVEN TO FIVE',...(D.ticker||[]).filter(x=>!String(x).includes('SEVEN-POINT')&&!String(x).includes('60 PTS')&&!String(x).includes('18W 6D'))].slice(0,9);
})();