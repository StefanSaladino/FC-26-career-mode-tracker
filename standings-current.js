(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'Final · Napoli are 2027–28 Serie A champions · INVINCIBLES',rows:[
  ['Napoli',38,28,10,0,null,null,null,94],
  ['Inter (Lombardia FC)',33,19,11,3,60,33,27,68],
  ['Milan',33,22,1,10,64,35,29,67],
  ['Atalanta (Bergamo Calcio)',33,19,8,6,60,36,24,65],
  ['Juventus',33,18,7,8,60,42,18,61],
  ['Roma',33,19,3,11,56,41,15,60]
 ]};
 D.tableContext='Napoli are 2027–28 Serie A champions and Invincibles: 94 points from 38 matches, 28 wins, 10 draws and 0 defeats. Rival rows remain at their last verified checkpoint until a final FC26 table screen is supplied.';
 D.ticker=['INVINCIBILI · NAPOLI 94 POINTS','NAPOLI · 38 PLAYED · 28W 10D 0L','SERIE A SEASON COMPLETE · ZERO DEFEATS',...(D.ticker||[]).filter(x=>!/ONE WIN FROM THE SCUDETTO|33 PLAYED|34 PLAYED|NAPOLI 81|NAPOLI 84|FOUR LEAGUE MATCHES/.test(String(x)))].slice(0,9);
})();