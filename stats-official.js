(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,8,'Running total · includes friendlies · through Fiorentina'],
 ['Maximilian Beier',11,7,'Running total · includes friendlies · through Fiorentina'],
 ['Endrick',7,6,'Running total · includes friendlies · through Fiorentina'],
 ['Nico Paz',4,7,'Running total · includes friendlies · through Fiorentina'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Fiorentina'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Fiorentina'],
 ['Alphonso Davies',2,2,'Running total · includes friendlies · through Fiorentina'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Fiorentina'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Fiorentina'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Fiorentina'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Fiorentina'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Fiorentina'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Fiorentina']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 3–2 Fiorentina';
})();