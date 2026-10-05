(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After 32 matches · latest FC26 table',rows:[
  ['Napoli',32,23,9,0,48,16,32,78],
  ['Milan',32,22,0,10,63,34,29,66],
  ['Inter (Lombardia FC)',32,18,11,3,56,32,24,65],
  ['Atalanta (Bergamo Calcio)',32,19,7,6,59,35,24,64],
  ['Roma',32,19,3,10,56,39,17,60],
  ['Juventus',32,17,7,8,57,40,17,58]
 ]};
 D.tableContext='Napoli lead Serie A with 78 points from 32 matches and remain unbeaten at 23W–9D–0L. Milan are second on 66, 12 points back. Inter have 65, Atalanta 64, Roma 60 and Juventus 58. Six matches remain.';
 D.ticker=['SERIE A · NAPOLI 78 · MILAN 66 · INTER 65 · ATALANTA 64','NAPOLI · 32 PLAYED · 23W 9D 0L · UNBEATEN','TWELVE CLEAR OF MILAN · SIX TO PLAY',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI 69')&&!String(x).includes('29 PLAYED'))].slice(0,9);
})();