(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,11,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Maximilian Beier',11,8,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Endrick',10,7,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Nico Paz',5,7,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Alphonso Davies',3,2,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Inter UCL leg 2'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Inter UCL leg 2']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Inter 0–2 Napoli, UCL playoff leg 2';
})();