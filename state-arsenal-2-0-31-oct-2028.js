/* Arsenal 2-0 Napoli, 31 Oct 2028: Merino and Martinelli goals, minutes/order unknown.
Pio 4' wide and 11' shot saved by Raya; HT 0-0, Arsenal zero shots on goal in first half.
Paz and Calafiori BOTH subbed on early in second half; both playing for second conceded goal.
2027-28 Napoli 1-1 Arsenal archive stays separate. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const record=['Napoli','Arsenal','Champions League',0,2,'L','31 Oct 2028 · Away',
 'FT Arsenal 2–0 Napoli: Merino and Martinelli goals (minutes, order and assists unconfirmed). Pio wide 4′, Raya saves from Pio 11′. HT 0–0, Arsenal no first-half shot on target. Paz and Calafiori bench at kickoff; both entered early in second half and were on the pitch for second Arsenal goal. Exact sub minutes and players replaced unconfirmed.'];
for(const k of ['results','results2028']){D[k]=D[k]||[];const i=D[k].findIndex(r=>r[0]==='Napoli'&&r[1]==='Arsenal'&&r[2]==='Champions League'&&String(r[6]).includes('31 Oct 2028'));if(i<0)D[k].push(record);else D[k][i]=record;}
const f=D.fixtures2028?.find(x=>x.team==='Napoli'&&x.opponent==='Arsenal'&&x.date==='2028-10-31');
if(f){f.played=true;f.result='Arsenal 2–0 Napoli';}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Unconfirmed')]);
D.latestResult=['ARS','2–0','NAP','31 OCT · CHAMPIONS LEAGUE · FT · Merino, Martinelli'];
D.seasonState={...(D.seasonState||{}),ucl:{...(D.seasonState?.ucl||{}),played:4,w:2,d:1,l:1,points:7,gf:8,ga:8,stage:'League phase · 4 completed',status:'Napoli 2W 1D 1L after Arsenal 2–0 Napoli'}};
D.arsenalRematch={...(D.arsenalRematch||{}),played:true,upcoming:null,date:'2028-10-31',result:'Arsenal 2–0 Napoli',scorers:['Mikel Merino','Gabriel Martinelli'],goalMinutes:'unconfirmed',goalOrder:'unconfirmed',halfTime:'0–0',arsenalFirstHalfShotsOnTarget:0,selection:{benched:['Nico Paz','Riccardo Calafiori'],bothCameOnEarlySecondHalf:true,bothOnForSecondGoal:true,minutes:'unconfirmed',playersReplaced:'unconfirmed'}};
D.ticker=['FT · ARSENAL 2–0 NAPOLI · MERINO / MARTINELLI','PIO 4′ WIDE · RAYA SAVE 11′','HT 0–0 · ARSENAL NO SHOTS ON TARGET','PAZ AND CALAFIORI BOTH ENTERED EARLY SECOND HALF','BOTH SUBS ON PITCH FOR SECOND ARSENAL GOAL','NAPOLI UCL · 4P 2W 1D 1L · 7PTS · 8GF 8GA','SERIE A UNCHANGED · NAPOLI 25 POINTS FROM 10'];
D.whispers=[['RAYA AGAIN','Pio missed wide 4′, and David Raya saved from him 11′. Napoli lost 2–0.'],['HALFTIME STANDOFF','Arsenal went into halftime 0–0 without a shot on target.'],['BOTH DID COME ON','Paz and Calafiori started benched, both appeared early in second half, and both were on for second goal.'],['SELECTION SCRUTINY','Second goal details and precise substitution times are unknown; do not assign blame.'],['EIGHT CONCEDED','Eight goals against in four UCL games, only three allowed in ten Serie A matches.'],['LAST YEAR WAS DIFFERENT','Napoli drew Arsenal 1–1 in 2027–28, Pio 90+1 equalizer from Beier.']];
D.statsScope='Napoli club scoring numbers unchanged after 0–2 at Arsenal, 31 October 2028. Italy friendlies excluded; previous seasons preserved.';
D.tableContext=(D.tableContext||'')+' Arsenal result is UCL only and does not alter Napoli 25 league points. No post-Sampdoria updated full standings available.';
})();
