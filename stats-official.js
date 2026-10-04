(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,11,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Maximilian Beier',12,8,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Endrick',10,7,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Nico Paz',5,7,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Alphonso Davies',3,2,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Inter 1–1 Napoli'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Inter 1–1 Napoli']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Inter 1–1 Napoli, Serie A';
})();