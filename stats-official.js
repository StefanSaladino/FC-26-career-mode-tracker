(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,11,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Maximilian Beier',17,9,'Running total · includes friendlies · penalty goal vs Parma'],
 ['Endrick',12,7,'Running total · includes friendlies · penalty goal vs Parma'],
 ['Nico Paz',5,7,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Kevin De Bruyne',3,2,'Running total · includes friendlies · assisted Beukema from corner vs Parma'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Alphonso Davies',3,2,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · rested vs Parma'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Sam Beukema',1,0,'Running total · includes friendlies · scored vs Parma'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Parma 0–3 Napoli'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Parma 0–3 Napoli']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Parma 0–3 Napoli, Serie A';
})();