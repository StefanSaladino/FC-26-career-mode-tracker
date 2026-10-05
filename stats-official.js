(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',23,10,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Maximilian Beier',21,10,'Running total · includes friendlies · scored vs Roma'],
 ['Endrick',14,8,'Running total · includes friendlies · scored vs Roma'],
 ['Nico Paz',5,8,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Federico Chiesa',4,4,'Running total · includes friendlies · two assists vs Roma'],
 ['Kevin De Bruyne',3,3,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Alphonso Davies',3,4,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Scott McTominay',1,6,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Alessandro Bastoni',1,0,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Anton Stach',1,1,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Sam Beukema',1,0,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Lutsharel Geertruida',0,1,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Billy Gilmour',0,1,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Mikey Moore',0,1,'Running total · includes friendlies · through Napoli 2–0 Roma'],
 ['Noa Lang',0,1,'Running total · includes friendlies · through Napoli 2–0 Roma']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · updated through Napoli 2–0 Roma, Serie A';
})();