(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After 29 matches · latest manager-supplied table',rows:[
  ['Napoli',29,20,9,0,42,15,27,69],
  ['Milan',29,20,0,9,55,31,24,60],
  ['Inter (Lombardia FC)',29,16,11,2,49,27,22,59],
  ['Atalanta (Bergamo Calcio)',29,18,5,6,55,32,23,59],
  ['Roma',29,18,2,9,53,37,16,56],
  ['Lazio (Latium)',29,16,6,7,47,24,23,54]
 ]};
 D.tableContext='Napoli lead Serie A with 69 points from 29 matches and remain unbeaten at 20W–9D–0L. Milan are second on 60, nine points back. Inter and Atalanta are level on 59, ten points behind Napoli. Roma have 56 and Lazio 54.';
 D.ticker=['SERIE A · NAPOLI 69 · MILAN 60 · INTER 59 · ATALANTA 59','NAPOLI · 29 PLAYED · 20W 9D 0L · UNBEATEN','NINE CLEAR OF MILAN · TEN CLEAR OF INTER AND ATALANTA',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI 66')&&!String(x).includes('28 PLAYED'))].slice(0,9);
})();