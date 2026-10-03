(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // User-verified totals as of the Empoli 2–1 win. Includes friendly matches.
  D.stats = [
    ['Pio Esposito',14,4,'Official total · includes friendlies'],
    ['Maximilian Beier',6,3,'Official total · includes friendlies'],
    ['Endrick',4,5,'Official total · includes friendlies'],
    ['Kevin De Bruyne',2,1,'Official total · includes friendlies'],
    ['Alphonso Davies',2,1,'Official total · includes friendlies'],
    ['Federico Chiesa',2,1,'Official total · includes friendlies'],
    ['Alessandro Bastoni',1,0,'Official total · includes friendlies'],
    ['Scott McTominay',1,1,'Official total · includes friendlies'],
    ['Nico Paz',1,6,'Official total · includes friendlies'],
    ['Anton Stach',1,1,'Official total · includes friendlies'],
    ['Billy Gilmour',0,1,'Official total · includes friendlies'],
    ['Mikey Moore',0,1,'Official total · includes friendlies'],
    ['Noa Lang',0,1,'Official total · includes friendlies']
  ];

  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included';
})();