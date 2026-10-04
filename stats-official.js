(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',19,8,'Running total · includes friendlies · through Sassuolo'],
 ['Maximilian Beier',11,7,'Running total · includes friendlies · through Sassuolo'],
 ['Endrick',7,6,'Running total · includes friendlies · through Sassuolo'],
 ['Nico Paz',3,7,'Running total · includes friendlies · through Sassuolo'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Sassuolo'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Sassuolo'],
 ['Alphonso Davies',2,2,'Running total · includes friendlies · through Sassuolo'],
 ['Scott McTominay',1,4,'Running total · includes friendlies · through Sassuolo'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Sassuolo'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Sassuolo'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Sassuolo'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Sassuolo'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Sassuolo']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 2–0 Sassuolo';
})();