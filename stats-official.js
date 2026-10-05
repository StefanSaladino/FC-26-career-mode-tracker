(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',23,10,'Running total · includes friendlies · scored winner vs Lazio'],
 ['Maximilian Beier',20,10,'Running total · includes friendlies · assisted Pio vs Lazio'],
 ['Endrick',12,7,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Nico Paz',5,8,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Kevin De Bruyne',3,3,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Alphonso Davies',3,4,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Federico Chiesa',3,2,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Sam Beukema',1,0,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Napoli 1–0 Lazio'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Napoli 1–0 Lazio']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 1–0 Lazio, Serie A';
})();