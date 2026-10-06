(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',25,10,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Maximilian Beier',22,10,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Endrick',14,9,'FC26 canonical total · assisted Chiesa vs Pisa'],
 ['Nico Paz',5,8,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Federico Chiesa',5,4,'FC26 canonical total · scored vs Pisa'],
 ['Alphonso Davies',4,5,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Scott McTominay',2,7,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Anton Stach',0,1,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Noa Lang',0,1,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Napoli 1–0 Pisa'],
 ['Billy Gilmour',0,1,'Season contribution · sold']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Napoli 1–0 Pisa';
})();