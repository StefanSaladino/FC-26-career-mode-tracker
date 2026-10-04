(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // Running totals through Bodø/Glimt 2–1 Napoli. Includes friendlies.
  // Since the last verified baseline: Como added KDB goal, McTominay assist,
  // Endrick 1G/1A, Pio 1G/1A; Bodø added Pio goal and Beier assist.
  D.stats = [
    ['Pio Esposito',19,8,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Maximilian Beier',10,5,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Endrick',7,6,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Nico Paz',2,7,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Alphonso Davies',2,2,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Federico Chiesa',2,1,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Scott McTominay',1,4,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Anton Stach',1,1,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Billy Gilmour',0,1,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Mikey Moore',0,1,'Running total · includes friendlies · through Bodø/Glimt'],
    ['Noa Lang',0,1,'Running total · includes friendlies · through Bodø/Glimt']
  ];
  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included · updated through Bodø/Glimt 2–1 Napoli';
})();