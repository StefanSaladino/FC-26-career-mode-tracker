(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',21,11,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Maximilian Beier',16,9,'Running total · includes friendlies · scored 89th-minute winner vs Real Madrid'],
 ['Endrick',11,7,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Nico Paz',5,7,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Kevin De Bruyne',3,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Federico Chiesa',3,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Alphonso Davies',3,2,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · assisted Beier winner vs Real Madrid'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Napoli 1–0 Real Madrid']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 1–0 Real Madrid, Champions League';
})();