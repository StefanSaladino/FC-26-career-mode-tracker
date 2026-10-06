(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',25,10,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Maximilian Beier',22,10,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Endrick',14,8,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Nico Paz',5,8,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Alphonso Davies',4,5,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Federico Chiesa',4,4,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · assisted McTominay vs Barcelona'],
 ['Scott McTominay',2,7,'FC26 canonical total · scored vs Barcelona'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Anton Stach',0,1,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Noa Lang',0,1,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Barcelona 1–1 Napoli'],
 ['Billy Gilmour',0,1,'FC26 canonical total · through Barcelona 1–1 Napoli']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Barcelona 1–1 Napoli, Champions League semifinal first leg';
})();