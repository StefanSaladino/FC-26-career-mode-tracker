(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After 33 matches · latest FC26 table',rows:[
  ['Napoli',33,24,9,0,50,16,34,81],
  ['Inter (Lombardia FC)',33,19,11,3,60,33,27,68],
  ['Milan',33,22,1,10,64,35,29,67],
  ['Atalanta (Bergamo Calcio)',33,19,8,6,60,36,24,65],
  ['Juventus',33,18,7,8,60,42,18,61],
  ['Roma',33,19,3,11,56,41,15,60]
 ]};
 D.tableContext='Napoli lead Serie A with 81 points from 33 matches and remain unbeaten at 24W–9D–0L. Inter are second on 68, 13 points back. Milan have 67, Atalanta 65, Juventus 61 and Roma 60. Five matches remain. Napoli are not yet champions: one more league win guarantees the Scudetto.';
 D.ticker=['SERIE A · NAPOLI 81 · INTER 68 · MILAN 67 · ATALANTA 65','NAPOLI · 33 PLAYED · 24W 9D 0L · UNBEATEN','ONE WIN FROM THE SCUDETTO · MILAN NEXT',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI 78')&&!String(x).includes('32 PLAYED')&&!String(x).includes('TWELVE CLEAR'))].slice(0,9);
})();