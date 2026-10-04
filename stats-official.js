(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,10,'Running total · includes friendlies · through Lecce'],
 ['Maximilian Beier',11,8,'Running total · includes friendlies · through Lecce'],
 ['Endrick',10,6,'Running total · includes friendlies · through Lecce'],
 ['Nico Paz',4,7,'Running total · includes friendlies · through Lecce'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Lecce'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Lecce'],
 ['Alphonso Davies',2,2,'Running total · includes friendlies · through Lecce'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Lecce'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Lecce'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Lecce'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Lecce'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Lecce'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Lecce']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Lecce 0–2 Napoli';
})();