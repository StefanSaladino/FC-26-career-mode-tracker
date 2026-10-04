(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After Napoli 3–2 Fiorentina · 24 matches',rows:[
  ['Napoli',24,18,6,0,36,14,22,60],
  ['Inter (Lombardia FC)',24,15,8,1,44,22,22,53],
  ['Atalanta (Bergamo Calcio)',24,15,3,6,44,29,15,48],
  ['Milan',24,16,0,8,45,28,17,48],
  ['Lazio (Latium)',24,13,5,6,40,21,19,44],
  ['Roma',24,14,2,8,43,31,12,44]
 ]};
 D.tableContext='Napoli lead Serie A by seven points over Inter after 24 matches. Napoli remain unbeaten at 18W–6D–0L with 60 points. Inter are 15W–8D–1L on 53. Atalanta and Milan sit on 48, with Lazio and Roma on 44.';
 D.ticker=['SERIE A · NAPOLI 60 PTS · INTER 53 · SEVEN-POINT LEAD','NAPOLI · 24 PLAYED · 18W 6D 0L · UNBEATEN',...(D.ticker||[]).filter(x=>!String(x).includes('57 PTS')&&!String(x).includes('17W 6D 0L')&&!String(x).includes('FIVE-POINT LEAD'))].slice(0,9);
})();