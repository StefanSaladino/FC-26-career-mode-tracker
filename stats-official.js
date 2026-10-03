(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // User-verified running totals through the 2–0 Monza win. Includes friendlies.
  D.stats = [
    ['Pio Esposito',16,6,'Official running total · includes friendlies'],
    ['Maximilian Beier',9,4,'Official running total · includes friendlies'],
    ['Endrick',6,5,'Official running total · includes friendlies'],
    ['Nico Paz',2,7,'Official running total · includes friendlies'],
    ['Kevin De Bruyne',2,1,'Official running total · includes friendlies'],
    ['Alphonso Davies',2,2,'Official running total · includes friendlies'],
    ['Federico Chiesa',2,1,'Official running total · includes friendlies'],
    ['Scott McTominay',1,3,'Official running total · includes friendlies'],
    ['Alessandro Bastoni',1,0,'Official running total · includes friendlies'],
    ['Anton Stach',1,1,'Official running total · includes friendlies'],
    ['Billy Gilmour',0,1,'Official running total · includes friendlies'],
    ['Mikey Moore',0,1,'Official running total · includes friendlies'],
    ['Noa Lang',0,1,'Official running total · includes friendlies']
  ];

  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included · updated through Monza 2–0';
})();