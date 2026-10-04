(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After Inter 1–1 Napoli · 27 matches for Napoli and Inter',rows:[
  ['Napoli',27,19,8,0,39,15,24,65],
  ['Inter (Lombardia FC)',27,16,9,2,47,25,22,57],
  ['Atalanta (Bergamo Calcio)',24,15,3,6,44,29,15,48],
  ['Milan',24,16,0,8,45,28,17,48],
  ['Lazio (Latium)',24,13,5,6,40,21,19,44],
  ['Roma',24,14,2,8,43,31,12,44]
 ]};
 D.tableContext='Napoli remain unbeaten at 19W–8D–0L with 65 points from 27 matches. Inter are on 57 from 27 after the 1–1 draw at San Siro, so Napoli preserve the eight-point lead. Other rows remain at their last manager-supplied totals until updated.';
 D.ticker=['SERIE A · NAPOLI 65 PTS · INTER 57 · EIGHT-POINT LEAD','NAPOLI · 27 PLAYED · 19W 8D 0L · UNBEATEN','INTER 1–1 NAPOLI · GAP UNCHANGED',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI 64')&&!String(x).includes('26 PLAYED'))].slice(0,9);
})();