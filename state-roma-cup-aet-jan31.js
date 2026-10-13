(()=>{const D=window.NAPOLI_DATA;if(!D)return;
D.romaCupJanuary2029={date:'2029-01-31',competition:'Coppa Italia',venue:'Away',score:'Roma 1-2 Napoli AET',fullTime:true,afterExtraTime:true,napoliAdvanced:true,xg:{napoli:4.9,roma:1.8},napoliShotsOnTarget:10,svilarCloseRangeSavesReported:6,goals:[{minute:29,scorer:'Pio Esposito',assist:'Maximilian Beier'},{minute:51,scorer:'Manu Koné',assist:null},{minute:95,scorer:'Pio Esposito',assist:'Maximilian Beier'}]};
const row=['Napoli','Roma','Coppa Italia',2,1,'W','31 Jan 2029 - Away - AET','Roma 1-2 Napoli AET: Pio 29,95 (both Beier); Manu Kone 51; xG Napoli 4.9 Roma 1.8; Napoli 10 shots on target; Napoli advance'];
for(const k of ['results','results2028']){D[k]=D[k]||[];const i=D[k].findIndex(x=>x[0]==='Napoli'&&x[1]==='Roma'&&String(x[6]).includes('31 Jan 2029'));if(i>=0)D[k][i]=row;else D[k].push([...row]);}
for(const k of ['fixtures2028','verifiedUpcoming2028','verifiedUpcoming2029'])if(Array.isArray(D[k]))for(const f of D[k])if(f.date==='2029-01-31'&&f.opponent==='Roma')Object.assign(f,{played:true,fullTime:true,result:'Roma 1-2 Napoli AET',score:'1-2'});
if(D.scheduleJanuary2029)Object.assign(D.scheduleJanuary2029,{completedMatches:10,upcomingMatches:0});
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(x=>x.date>'2029-01-31');D.verifiedUpcoming2029=(D.verifiedUpcoming2029||[]).filter(x=>x.date>'2029-01-31');
const stats=D.statsBySeason?.['2028–29'];if(Array.isArray(stats))for(const x of stats){if(x[0]==='Pio Esposito'){x[1]=23;x[2]=15;}if(x[0]==='Maximilian Beier'){x[1]=20;x[2]=13;}}
D.ticker=['ROMA 1-2 NAPOLI AET - NAPOLI ADVANCE','PIO 29 AND 95 - BOTH ASSISTED BY BEIER','KONE EQUALISER 51 - PIO EXTRA TIME WINNER','NAPOLI 10 SHOTS ON TARGET - XG 4.9 TO ROMA 1.8','SERIE A - NAPOLI 56 ROMA 53 - 23 PLAYED'];
D.latestResult=['ROM','1-2','NAP','COPPA ITALIA - AET - PIO 29,95 - KONE 51'];
})();