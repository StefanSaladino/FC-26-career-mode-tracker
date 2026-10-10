/* VERIFIED LIVE MANAGER REPORT · PSG 0–2 NAPOLI? Correction: HOME NAPOLI 0–2 PSG FT,
 21 November 2028 Champions League league phase.
 PSG 23′ Ousmane Dembélé, 84′ Khvicha Kvaratskhelia. Halftime 0–1. Napoli had better
 first-half chances according to manager. PSG goal assists not provided, no confirmed XI,
 substitutions, goalkeeper errors or shot statistics. November FINAL is not May 2028 FINAL:
 historic May PSG 3–2 Napoli AET preserved as distinct record.
 After PSG: Napoli UCL 5P 2W1D2L, 7 points, 8GF 10GA -2.
 Serie A still 12P 31pts, Rome unbeaten 30 in most recent screenshot.
 Manager criticizes Meret lack of key saves relative to opposition. Peacock suggested
 for Monza 26 November, but manager has NOT confirmed actual lineup. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Paris Saint-Germain','Champions League',0,2,'L','21 Nov 2028 · Home',
 'NAPOLI 0–2 PARIS SAINT-GERMAIN FT · 23′ Ousmane Dembélé (PSG, assist unconfirmed), 84′ Khvicha Kvaratskhelia (PSG, assist unconfirmed) · HT 0–1 · Manager says Napoli created better first-half chances, but did not convert · No verified Napoli player lineup, substitutions, GK error attribution, xG or saves.'];
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
 napoliGoals:0,managerAssessment:'Napoli created the better early chances but did not finish; PSG goalkeepers have been making saves Napoli feel they are not getting at their end.',
 exactShotCountsConfirmed:false,individualSavedAttemptsConfirmed:false,startingXIConfirmed:false,substitutionsConfirmed:false,
 meretResponsibleForIndividualGoalsConfirmed:false,
 history:'In 27 May 2028 final PSG beat Napoli 3–2 after extra time (Pio 17 pen and 90; Neves PSG 38; Kvaratskhelia 54 and 110). This Nov fixture is a separate league-phase match.'};
D.latestResult=['NAP','0–2','PSG','CHAMPIONS LEAGUE · 21 NOV 2028 · FT · DEMBÉLÉ 23′ · KVARATSKHELIA 84′ · HT 0–1'];
D.seasonState={...(D.seasonState||{}),ucl:{...(D.seasonState?.ucl||{}),played:5,w:2,d:1,l:2,points:7,gf:8,ga:10,gd:-2,status:'2028–29 Champions League league phase · Napoli 0–2 PSG 21 November; after Arsenal 2–0 Napoli on 31 October, TWO consecutive UCL scoring blanks.'}};
D.goalkeeperReview2028={reportedAfter:'Napoli 0–2 PSG, 21 Nov 2028',subject:'Alex Meret',
 managerAssessment:'Meret has been shocking in Europe so far. We are not getting the saves other teams are getting. It may be time to try Peacock.',
 teamUcl:{played:5,goalsConceded:10,goalsScored:8,points:7},teamSerieA:{played:12,goalsConceded:5,cleanSheets:8},
 specificPsgSavesOrMistakesVerified:false,errorsConfirmedInOtherMatches:['Leverkusen opener · manager-reported Meret mistake'],
 alternative:'Peacock',proposedNextStart:{opponent:'Monza',date:'2028-11-26',venue:'Away',competition:'Serie A',status:'Assistant manager recommendation; not yet manager-confirmed'},
 meretDroppedConfirmed:false,peacockSelectedConfirmed:false,permanentChangeConfirmed:false};
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
 'MERET UNDER SCRUTINY · PEACOCK PROPOSED FOR MONZA · XI UNCONFIRMED',
 'NEXT · 26 NOV · MONZA AWAY · SERIE A',
 'SERIE A REMAINS · NAPOLI 31 PTS · UNBEATEN ROMA 30 PTS',
 'NEXT UCL · 05 DEC · BORUSSIA DORTMUND AWAY',
 ...(D.ticker||[]).filter(s=>!s.includes('NEXT · 21 NOV')&&!s.includes('PSG HOME')&&!s.includes('RIVALS’ CURRENT TABLE')&&!s.includes('MERET')).slice(0,9)
];
D.whispers=[
 ['PARIS TAKES THE REMATCH','Ousmane Dembélé 23′ and Kvaratskhelia 84′ win PSG a 2–0 league-phase fixture at Napoli. HT 0–1. Goal assists unverified.'],
 ['KVARATSKHELIA AGAIN','Kvara scored PSG’s winner at 110′ in 2028 final and earlier at 54′, then adds another PSG goal at Napoli in November 2028, his third confirmed PSG goal vs Napoli across the two meetings.'],
 ['NAPOLI EUROPEAN DRY SPELL','After Arsenal 2–0 Napoli and Napoli 0–2 PSG, two straight goalless UCL matches; 5 played, 7 points, 8GF 10GA.'],
 ['MERET PLACE QUESTIONED','Manager Saladino says Napoli are not getting decisive saves opponents seem to be making. No specific PSG Meret errors established from supplied events.'],
 ['PEACOCK IN CONTENTION','The assistant manager recommended starting Peacock away to Monza on 26 Nov; Saladino says it may be time. Actual selection still UNCONFIRMED.'],
 ['MONZA NEXT · LEAGUE LEAD AT STAKE','Napoli 31 pts after twelve Serie A games, unbeaten Roma 30 in latest manager screenshot. PSG defeat does not alter domestic totals.'],
 ['DORTMUND AWAITS','Napoli travel to Dortmund in UCL on 5 Dec. No result, starting XI or kickoff time verified.']
];
// Preserve 2028-29 club G/A (Pio 10G/8A, Beier 12G/5A, Paz 2G/3A), Italy NT and 2027-28 PSG final.
})();
