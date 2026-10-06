(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',25,10,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Maximilian Beier',22,11,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Endrick',14,11,'FC26 canonical total · two assists for Chiesa vs Atalanta'],
 ['Federico Chiesa',9,4,'FC26 canonical total · hat-trick vs Atalanta'],
 ['Nico Paz',6,8,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Alphonso Davies',4,5,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Scott McTominay',2,7,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Anton Stach',0,1,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Noa Lang',0,1,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Atalanta 0–3 Napoli'],
 ['Michael Kayode',0,1,'FC26 canonical total · assisted Chiesa 75′ vs Barcelona'],
 ['Billy Gilmour',0,1,'Season contribution · sold']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Atalanta 0–3 Napoli';
})();