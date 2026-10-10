/* VERIFIED LIVE MANAGER REPORT · PSG 0–2 NAPOLI? Correction: HOME NAPOLI 0–2 PSG FT,
 21 November 2028 Champions League league phase.
 PSG 23′ Ousmane Dembélé, 84′ Khvicha Kvaratskhelia. Halftime 0–1. Napoli had better
 first-half chances according to manager. PSG goal assists not provided, no confirmed XI,
 substitutions, goalkeeper errors or shot statistics. November FINAL is not May 2028 FINAL:
 historic May PSG 3–2 Napoli AET preserved as distinct record.
 After PSG: Napoli UCL 5P 2W1D2L, 7 points, 8GF 10GA -2.
 Serie A still 12P 31pts, Rome unbeaten 30 in most recent screenshot.
 Public match data has no private coach-player assessments or unannounced team-sheet plans. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Paris Saint-Germain','Champions League',0,2,'L','21 Nov 2028 · Home',
 'NAPOLI 0–2 PARIS SAINT-GERMAIN FT · 23′ Ousmane Dembélé (PSG, assist unconfirmed), 84′ Khvicha Kvaratskhelia (PSG, assist unconfirmed) · HT 0–1 · Napoli fashioned more promising early openings, but did not convert · No verified Napoli player lineup, substitutions, GK error attribution, xG or saves.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 // IMPORTANT! Keep 27 May 2028 PSG FINAL 3–2 AET separate; never match on opponent alone.
 const i=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Paris Saint-Germain'&&r[2]==='Champions League'&&String(r[6]).includes('21 Nov 2028'));
 if(i>=0)D[key][i]=row;else D[key].push(row);
}
D.psgNovember2028={played:true,date:'2028-11-21',venue:'Home',competition:'Champions League',phase:'League phase',
 opponent:'Paris Saint-Germain',score:'Napoli 0–2 Paris Saint-Germain',
 halftime:'Napoli 0–1 Paris Saint-Germain',goals:[
 {minute:23,team:'Paris Saint-Germain',scorer:'Ousmane Dembélé',assist:null,assistStatus:'not supplied'},
 {minute:84,team:'Paris Saint-Germain',scorer:'Khvicha Kvaratskhelia',assist:null,assistStatus:'not supplied'}],
 napoliGoals:0,matchAssessment:'Napoli created promising early openings, but PSG scored at 23 and 84 minutes.',
 exactShotCountsConfirmed:false,individualSavedAttemptsConfirmed:false,startingXIConfirmed:false,substitutionsConfirmed:false,
 meretResponsibleForIndividualGoalsConfirmed:false,
 history:'In 27 May 2028 final PSG beat Napoli 3–2 after extra time (Pio 17 pen and 90; Neves PSG 38; Kvaratskhelia 54 and 110). This Nov fixture is a separate league-phase match.'};
D.latestResult=['NAP','0–2','PSG','CHAMPIONS LEAGUE · 21 NOV 2028 · FT · DEMBÉLÉ 23′ · KVARATSKHELIA 84′ · HT 0–1'];
D.seasonState={...(D.seasonState||{}),ucl:{...(D.seasonState?.ucl||{}),played:5,w:2,d:1,l:2,points:7,gf:8,ga:10,gd:-2,status:'2028–29 Champions League league phase · Napoli 0–2 PSG 21 November; after Arsenal 2–0 Napoli on 31 October, TWO consecutive UCL scoring blanks.'}};
// Public match-state contains no private coaching-room criticism, advice or player assessments.
D.goalkeeperReview2028={publicFactsOnly:true,subject:'Goalkeeper selection',alternative:'Peacock',
 lastCompletedKeeperPerformance:'Monza away · 26 Nov 2028 · 3–0 clean sheet · breakaway stop · Serie A Team of the Week',
 specificPsgSavesOrMistakesVerified:false};
D.fixtures2028=D.fixtures2028||[];
const psg=D.fixtures2028.find(f=>f.team==='Napoli'&&f.date==='2028-11-21'&&f.competition==='Champions League');
if(psg){psg.played=true;psg.result='Napoli 0–2 Paris Saint-Germain';psg.homeGoals=0;psg.awayGoals=2;}
const existing=D.verifiedUpcoming2028||[];
D.verifiedUpcoming2028=existing.filter(f=>!(f.date==='2028-11-21'&&f.competition==='Champions League'));
if(D.scheduleSnapshot?.fixtures){const item=D.scheduleSnapshot.fixtures.find(f=>f.date==='2028-11-21'&&f.competition==='Champions League');if(item){item.played=true;item.result='Napoli 0–2 Paris Saint-Germain';}}
D.nextClubMatch={opponent:'Monza',competition:'Serie A',date:'2028-11-26',venue:'Away',played:false,confirmedNext:true,kickoffTime:null,
 details:'Next after Napoli 0–2 PSG: 26 November away at Monza in Serie A. Peacock starting option under review, manager has not yet named actual XI.'};
D.upcoming=D.verifiedUpcoming2028.map(f=>[f.shortName||f.gameAlias||f.opponent,f.competition,f.date+' · '+f.venue+(f.competition==='Supercoppa'?' designation':'')]);
D.ticker=[
 'FULL TIME · NAPOLI 0–2 PSG · 21 NOV · CHAMPIONS LEAGUE',
 'OUSMANE DEMBÉLÉ 23′ · KHVICHA KVARATSKHELIA 84′',
 'TWO CONSECUTIVE EUROPEAN 2–0 LOSSES · ARSENAL THEN PSG',
 'NAPOLI CHAMPIONS LEAGUE · FIVE PLAYED · SEVEN POINTS · 8GF 10GA',
 'NAPOLI EUROPEAN DEFENSIVE RECORD · TEN CONCEDED FROM FIVE',
 'NEXT · 26 NOV · MONZA AWAY · SERIE A',
 'SERIE A REMAINS · NAPOLI 31 PTS · UNBEATEN ROMA 30 PTS',
 'NEXT UCL · 05 DEC · BORUSSIA DORTMUND AWAY',
 ...(D.ticker||[]).filter(s=>!s.includes('NEXT · 21 NOV')&&!s.includes('PSG HOME')&&!s.includes('RIVALS’ CURRENT TABLE')&&!s.includes('MERET')).slice(0,9)
];
D.whispers=[
 ['PARIS TAKES THE REMATCH','Ousmane Dembélé 23′ and Kvaratskhelia 84′ win PSG a 2–0 league-phase fixture at Napoli. HT 0–1. Goal assists unverified.'],
 ['KVARATSKHELIA AGAIN','Kvara scored PSG’s winner at 110′ in 2028 final and earlier at 54′, then adds another PSG goal at Napoli in November 2028, his third confirmed PSG goal vs Napoli across the two meetings.'],
 ['NAPOLI EUROPEAN DRY SPELL','After Arsenal 2–0 Napoli and Napoli 0–2 PSG, two straight goalless UCL matches; 5 played, 7 points, 8GF 10GA.'],
 ['EUROPEAN CHALLENGE','Napoli have conceded ten in five UCL matches; the entire defensive unit faces a major test away in Dortmund.'],
 ['MONZA NEXT','Monza away on 26 November is the next Serie A fixture after the PSG defeat.'],
 ['MONZA NEXT · LEAGUE LEAD AT STAKE','Napoli 31 pts after twelve Serie A games, unbeaten Roma 30 in latest manager screenshot. PSG defeat does not alter domestic totals.'],
 ['DORTMUND AWAITS','Napoli travel to Dortmund in UCL on 5 Dec. No result, starting XI or kickoff time verified.']
];
// Preserve 2028-29 club G/A (Pio 10G/8A, Beier 12G/5A, Paz 2G/3A), Italy NT and 2027-28 PSG final.
})();
