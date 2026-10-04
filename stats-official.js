(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;
  // Running totals through Bologna 0–1 Napoli. Includes friendlies.
  // Bologna added one goal for Maximilian Beier; no assist was recorded.
  D.stats = [
    ['Pio Esposito',19,8,'Running total · includes friendlies · through Bologna'],
    ['Maximilian Beier',11,5,'Running total · includes friendlies · through Bologna'],
    ['Endrick',7,6,'Running total · includes friendlies · through Bologna'],
    ['Nico Paz',2,7,'Running total · includes friendlies · through Bologna'],
    ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Bologna'],
    ['Alphonso Davies',2,2,'Running total · includes friendlies · through Bologna'],
    ['Federico Chiesa',2,1,'Running total · includes friendlies · through Bologna'],
    ['Scott McTominay',1,4,'Running total · includes friendlies · through Bologna'],
    ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Bologna'],
    ['Anton Stach',1,1,'Running total · includes friendlies · through Bologna'],
    ['Billy Gilmour',0,1,'Running total · includes friendlies · through Bologna'],
    ['Mikey Moore',0,1,'Running total · includes friendlies · through Bologna'],
    ['Noa Lang',0,1,'Running total · includes friendlies · through Bologna']
  ];
  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included · updated through Bologna 0–1 Napoli';
})();