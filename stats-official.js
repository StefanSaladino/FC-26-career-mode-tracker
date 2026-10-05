(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 // Authoritative cumulative production totals. Match/story scripts may describe
 // individual games, but this file owns the season totals so script order can
 // never double-count or wipe out a later result.
 D.stats=[
 ['Pio Esposito',22,10,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Maximilian Beier',20,9,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Endrick',12,7,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Nico Paz',5,8,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Kevin De Bruyne',3,3,'Running total · includes friendlies · assisted Beier vs Genoa'],
 ['Alphonso Davies',3,4,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Federico Chiesa',3,2,'Running total · includes friendlies · assisted Pio vs Genoa'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Sam Beukema',1,0,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Napoli 3–1 Genoa'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Napoli 3–1 Genoa']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 3–1 Genoa, Serie A';
})();