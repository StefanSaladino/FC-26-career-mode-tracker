(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After 34 matches · Napoli are 2027–28 Serie A champions',rows:[
  ['Napoli',34,25,9,0,null,null,null,84],
  ['Inter (Lombardia FC)',33,19,11,3,60,33,27,68],
  ['Milan',33,22,1,10,64,35,29,67],
  ['Atalanta (Bergamo Calcio)',33,19,8,6,60,36,24,65],
  ['Juventus',33,18,7,8,60,42,18,61],
  ['Roma',33,19,3,11,56,41,15,60]
 ]};
 D.tableContext='Napoli are 2027–28 Serie A champions: 84 points from 34 matches, 25 wins, 9 draws and 0 defeats. The unbeaten league season remains alive with four matches left. Rival rows remain at their last verified 33-match checkpoint until the next FC26 table screen is supplied.';
 D.ticker=['CAMPIONI D’ITALIA · NAPOLI 84 POINTS','NAPOLI · 34 PLAYED · 25W 9D 0L · UNBEATEN','SCUDETTO SECURED · FOUR LEAGUE MATCHES REMAIN',...(D.ticker||[]).filter(x=>!/ONE WIN FROM THE SCUDETTO|33 PLAYED|NAPOLI 81/.test(String(x)))].slice(0,9);
})();