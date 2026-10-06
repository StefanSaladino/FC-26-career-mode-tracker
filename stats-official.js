(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',25,10,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Maximilian Beier',22,11,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Endrick',14,11,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Federico Chiesa',9,4,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Nico Paz',6,8,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Alphonso Davies',5,5,'FC26 canonical total · unassisted Coppa Italia final winner vs Roma'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Scott McTominay',2,7,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Anton Stach',0,1,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Noa Lang',0,1,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Michael Kayode',0,1,'FC26 canonical total · through Coppa Italia final vs Roma'],
 ['Billy Gilmour',0,1,'Season contribution · sold']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Napoli 1–0 Roma, Coppa Italia Final';
})();