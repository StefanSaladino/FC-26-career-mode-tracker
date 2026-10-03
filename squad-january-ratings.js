(()=>{const D=window.NAPOLI_DATA;if(!D)return;const info={
'Pio Esposito':[22,85],'Maximilian Beier':[25,87],'Alphonso Davies':[27,88],'Kevin De Bruyne':[36,83],'Nico Paz':[23,87],'Scott McTominay':[31,88],'Marc Cucurella':[29,87],'Alessandro Bastoni':[28,90],'Alessandro Buongiorno':[28,87],'Michael Kayode':[23,85],'Alex Meret':[30,85],'Giovanni Di Lorenzo':[34,80],'Mikey Moore':[20,82],'Anton Stach':[29,80],'Endrick':[21,84],'Noa Lang':[28,81],'Lutsharel Geertruida':[27,81],'Peacock':[19,72],'Rafa Marín':[25,80],'Federico Chiesa':[30,82],'Juan Jesus':[36,64],'Billy Gilmour':[26,78],'Sam Beukema':[29,80]};
D.playerAges=Object.fromEntries(Object.entries(info).map(([n,[age]])=>[n,age]));
const rating=n=>info[n]?.[1];
if(Array.isArray(D.firstXI))D.firstXI=D.firstXI.map(r=>rating(r[1])?[r[0],r[1],rating(r[1])]:r);
if(D.squadPublic)Object.keys(D.squadPublic).forEach(g=>{D.squadPublic[g]=(D.squadPublic[g]||[]).map(r=>rating(r[0])?[r[0],r[1],rating(r[0]),r[3]]:r);});
D.squadSnapshot={updated:'January 2028',players:Object.fromEntries(Object.entries(info).map(([n,[age,overall]])=>[n,{age,overall}]))};
})();