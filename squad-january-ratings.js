(()=>{const D=window.NAPOLI_DATA;if(!D)return;const info={
'Alex Meret':[31,86],'Lawton':[18,72],'Peacock':[19,73],'O. Burnett':[18,70],
'Alphonso Davies':[27,88],'Marc Cucurella':[30,88],
'Alessandro Bastoni':[29,91],'Lutsharel Geertruida':[28,82],'Alessandro Buongiorno':[29,87],'Sam Beukema':[29,80],'Rafa Marín':[26,80],'Marianucci':[23,75],'Valentini':[19,69],'G. Ricci':[18,67],'Reyna':[20,69],
'Giovanni Di Lorenzo':[34,78],'Zanoli':[27,77],'Michael Kayode':[24,86],
'Sanchez':[19,65],'Hasa':[24,77],'Kevin De Bruyne':[37,82],'Scott McTominay':[31,88],'Anton Stach':[29,81],'Nico Paz':[23,88],
'Federico Chiesa':[30,82],'C. Brun':[18,69],'Mancini':[19,74],'Mikey Moore':[20,84],'Rao':[22,73],'Vergara':[25,72],
'Giovane':[24,76],'Maximilian Beier':[25,88],'Endrick':[22,86],'Pio Esposito':[23,86],'João Neves':[23,93]
};
D.playerAges=Object.fromEntries(Object.entries(info).map(([n,[age]])=>[n,age]));
const rating=n=>info[n]?.[1];
if(Array.isArray(D.firstXI))D.firstXI=D.firstXI.map(r=>rating(r[1])?[r[0],r[1],rating(r[1])]:r);
if(D.squadPublic)Object.keys(D.squadPublic).forEach(g=>{D.squadPublic[g]=(D.squadPublic[g]||[]).map(r=>rating(r[0])?[r[0],r[1],rating(r[0]),r[3]]:r);});
D.arrivals={...(D.arrivals||{}),'João Neves':{age:23,overall:93,type:'Signed',fee:250000000,sellOn:'5%',role:'Crucial',contractYears:5,wage:470000,signingBonus:5000000,appearanceBonus:1400000,appearanceThreshold:5}};
D.departures={...(D.departures||{}),'Juan Jesus':{age:37,overall:61,type:'Released',cost:2000000},'Obaretin':{age:25,overall:72,type:'Sold',fee:3500000}};
D.squadSnapshot={updated:'Summer 2028 · post-EURO',players:Object.fromEntries(Object.entries(info).map(([n,[age,overall]])=>[n,{age,overall}]))};
})();