(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.serieAStandings={updated:'After 28 matches · latest manager-supplied table',rows:[
  ['Napoli',28,19,9,0,39,15,24,66],
  ['Milan',28,null,null,null,null,null,null,60],
  ['Inter (Lombardia FC)',28,null,null,null,null,null,null,58]
 ]};
 D.tableContext='Napoli remain unbeaten at 19W–9D–0L with 66 points from 28 matches after the 0–0 draw with Cagliari. Milan hold sole possession of second on 60 points from 28. Inter are third on 58 from 28 after drawing their latest match. Other table details remain at their last manager-supplied totals until updated.';
 D.ticker=['SERIE A · NAPOLI 66 · MILAN 60 · INTER 58','NAPOLI · 28 PLAYED · 19W 9D 0L · UNBEATEN','MILAN · SOLE POSSESSION OF SECOND',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI 65')&&!String(x).includes('27 PLAYED'))].slice(0,9);
})();