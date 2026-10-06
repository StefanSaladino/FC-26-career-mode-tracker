(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',26,11,'FC26 canonical total · goal + assist vs Sassuolo'],
 ['Maximilian Beier',23,11,'FC26 canonical total · scored vs Sassuolo'],
 ['Endrick',14,11,'FC26 canonical total · through Sassuolo'],
 ['Federico Chiesa',9,4,'FC26 canonical total · through Sassuolo'],
 ['Nico Paz',6,8,'FC26 canonical total · through Sassuolo'],
 ['Alphonso Davies',5,5,'FC26 canonical total · through Sassuolo'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · through Sassuolo'],
 ['Scott McTominay',2,7,'FC26 canonical total · through Sassuolo'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Sassuolo'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Sassuolo'],
 ['Anton Stach',0,1,'FC26 canonical total · through Sassuolo'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Sassuolo'],
 ['Noa Lang',0,1,'FC26 canonical total · through Sassuolo'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Sassuolo'],
 ['Michael Kayode',0,1,'FC26 canonical total · through Sassuolo'],
 ['Billy Gilmour',0,1,'Season contribution · sold']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Napoli 2–0 Sassuolo';
})();