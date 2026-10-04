(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,11,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Maximilian Beier',15,9,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Endrick',11,7,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Nico Paz',5,7,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Alphonso Davies',3,2,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Scott McTominay',1,5,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Torino 0–4 Napoli'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Torino 0–4 Napoli']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Torino 0–4 Napoli, Coppa Italia';
})();