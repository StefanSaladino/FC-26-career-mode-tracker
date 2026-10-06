(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 D.stats=[
 ['Pio Esposito',25,10,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Maximilian Beier',22,11,'FC26 canonical total · assisted Paz vs Barcelona'],
 ['Endrick',14,9,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Nico Paz',6,8,'FC26 canonical total · scored 7′ vs Barcelona'],
 ['Federico Chiesa',6,4,'FC26 canonical total · scored 75′ vs Barcelona'],
 ['Alphonso Davies',4,5,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Kevin De Bruyne',3,4,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Scott McTominay',2,7,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Alessandro Bastoni',1,0,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Sam Beukema',1,0,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Anton Stach',0,1,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Lutsharel Geertruida',0,1,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Noa Lang',0,1,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Mikey Moore',0,1,'FC26 canonical total · through Napoli 2–0 Barcelona'],
 ['Michael Kayode',0,1,'FC26 canonical total · assisted Chiesa 75′ vs Barcelona'],
 ['Billy Gilmour',0,1,'Season contribution · sold']
 ];
 D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='All Napoli matches · friendlies included · FC26 source of truth · updated through Napoli 2–0 Barcelona (3–1 agg)';
})();