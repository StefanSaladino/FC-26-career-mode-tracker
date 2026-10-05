(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',23,10,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Maximilian Beier',20,10,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Endrick',13,8,'Running total · includes friendlies · penalty goal and assist vs Monza'],
 ['Nico Paz',5,8,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Federico Chiesa',4,2,'Running total · includes friendlies · scored vs Monza'],
 ['Kevin De Bruyne',3,3,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Alphonso Davies',3,4,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Sam Beukema',1,0,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Napoli 2–0 Monza'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Napoli 2–0 Monza']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 2–0 Monza, Serie A';
})();