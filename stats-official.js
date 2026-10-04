(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,8,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Maximilian Beier',11,8,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Endrick',8,6,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Nico Paz',4,7,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Alphonso Davies',2,2,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Inter UCL leg 1'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Inter UCL leg 1']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 1–2 Inter, UCL playoff leg 1';
})();