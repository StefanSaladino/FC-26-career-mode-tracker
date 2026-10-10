/* VERIFIED 2028-29 FUTURE NAPOLI SCHEDULE AFTER 6–2 ATALANTA.
 User supplied PSG at home 21 Nov UCL, Monza away 26 Nov Serie A.
 User photograph of DEC 2028 in-game calendar verifies Dec 2 Udinese home LEAGUE, 5 Borussia Dortmund away UCL, 
 9 Latium/Lazio away LEAGUE (blue L crest), 13 Como home CUP (stage unknown),
 17 Palermo away LEAGUE, 24 Bologna home LEAGUE, 29 Milano FC/AC Milan home-designation SUPERCUP.
 NO results, kickoff times, lineups, or venues beyond in-game HOME/AWAY designation confirmed.
 Do not displace Atalanta 6–2 lead story until later editorial publication. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const fixtures=[{"date":"2028-11-21","team":"Napoli","opponent":"Paris Saint-Germain","shortName":"PSG","venue":"Home","competition":"Champions League","verified":true,"played":false,"source":"Manager explicitly confirmed 21 November PSG at home in UCL"},{"date":"2028-11-26","team":"Napoli","opponent":"Monza","venue":"Away","competition":"Serie A","verified":true,"played":false,"source":"Manager explicitly confirmed 26 November away Monza in league"},{"date":"2028-12-02","team":"Napoli","opponent":"Udinese","venue":"Home","competition":"Serie A","verified":true,"played":false,"source":"December 2028 in-game calendar image: Udinese badge, Home LEAGUE"},{"date":"2028-12-05","team":"Napoli","opponent":"Borussia Dortmund","shortName":"Dortmund","venue":"Away","competition":"Champions League","verified":true,"played":false,"source":"December 2028 screenshot: BVB 09, Away UCL"},{"date":"2028-12-09","team":"Napoli","opponent":"Lazio","gameAlias":"Latium","venue":"Away","competition":"Serie A","verified":true,"played":false,"source":"December calendar screenshot: blue shield with L game alias Latium, Away LEAGUE"},{"date":"2028-12-13","team":"Napoli","opponent":"Como","venue":"Home","competition":"Domestic Cup","verified":true,"played":false,"cupStage":null,"source":"December calendar screenshot: Como crest, Home CUP. Round unconfirmed"},{"date":"2028-12-17","team":"Napoli","opponent":"Palermo","venue":"Away","competition":"Serie A","verified":true,"played":false,"source":"December calendar screenshot: Palermo crest, Away LEAGUE"},{"date":"2028-12-24","team":"Napoli","opponent":"Bologna","venue":"Home","competition":"Serie A","verified":true,"played":false,"source":"December calendar screenshot: Bologna crest, Home LEAGUE"},{"date":"2028-12-29","team":"Napoli","opponent":"AC Milan","gameAlias":"Milano FC","venue":"Home","competition":"Supercoppa","verified":true,"played":false,"source":"December screenshot: Milano FC red cross crest, Home SUPERCUP. In-game Home designation; physical stadium unconfirmed"}];
D.verifiedUpcoming2028=fixtures;
D.fixtures2028=D.fixtures2028||[];
for(const f of fixtures){const i=D.fixtures2028.findIndex(x=>x.team==='Napoli'&&x.date===f.date&&x.competition===f.competition);if(i>=0){D.fixtures2028[i]={...D.fixtures2028[i],...f};}else{D.fixtures2028.push({...f});}}
D.fixtures2028.sort((a,b)=>(a.date||'').localeCompare(b.date||''));
D.nextClubMatch={opponent:'Paris Saint-Germain',shortName:'PSG',competition:'Champions League',played:false,confirmedNext:true,date:'2028-11-21',venue:'Home',kickoffTime:null,details:'Manager-confirmed: home UCL against PSG 21 November 2028. Afterward 26 November away to Monza. The December 2028 in-game calendar is verified from screenshot.'};
D.upcoming=fixtures.map(f=>[f.shortName||f.gameAlias||f.opponent,f.competition,f.date+' · '+f.venue+(f.competition==='Supercoppa'?' designation':'')]);
D.scheduleSnapshot={year:2028,month:'December',source:'Manager-provided in-game FC26 screenshot of December 2028, plus manager-written November PSG/Monza dates',novemberVerified:true,decemberVerified:true,fixtures:fixtures.map(f=>({date:f.date,opponent:f.opponent,gameAlias:f.gameAlias||null,competition:f.competition,venue:f.venue,played:false})),kickoffTimesVerified:false,actualStadiumsVerified:false,domesticCupRoundVerified:false};
D.ticker=[
 'NEXT · 21 NOV · NAPOLI HOME vs PSG · CHAMPIONS LEAGUE',
 '26 NOV · MONZA AWAY · SERIE A',
 '02 DEC · UDINESE HOME · SERIE A',
 '05 DEC · BORUSSIA DORTMUND AWAY · CHAMPIONS LEAGUE',
 '09 DEC · LATIUM/LAZIO AWAY · SERIE A',
 '13 DEC · COMO HOME · DOMESTIC CUP',
 '17 DEC · PALERMO AWAY · SERIE A',
 '24 DEC · BOLOGNA HOME · SERIE A',
 '29 DEC · MILANO FC / AC MILAN · HOME-DESIGNATED SUPERCOPPA',
 ...(D.ticker||[]).filter(s=>!s.includes('NEXT OPPONENT')&&!s.includes('NEXT DATE')&&!s.includes('NEXT ·')).slice(0,9)
];
D.whispers=[
 ['PSG NEXT · 21 NOV','Home Champions League fixture with Paris Saint-Germain, manager-confirmed. Napoli take 7 points from 4 UCL games; PSG result has NOT been played or reported.'],
 ['MONZA AWAY · 26 NOV','League trip to Monza three days after PSG; no scoreline or kickoff time confirmed.'],
 ['DORTMUND AWAY · 5 DEC','Borussia Dortmund (BVB) visit in Champions League follows Udinese at home 2 December.'],
 ['TWO CUP FIXTURES IN DECEMBER','Como home on 13 December in domestic CUP; Milano FC / AC Milan home-designated on 29 December in SUPERCUP. Exact cup round and physical Supercoppa venue are unknown.'],
 ['DECEMBER RUN','Udinese H 2 Dec; Dortmund A 5 Dec; Latium/Lazio A 9 Dec; Como H cup 13 Dec; Palermo A 17 Dec; Bologna H 24 Dec; Milano FC H-designated Supercoppa 29 Dec.'],
 ...(D.whispers||[]).filter(x=>!x[0].includes('NEXT DATE')&&!x[0].includes('NEXT OPPONENT')).slice(0,6)
];
// Preserve Napoli 6–2 Atalanta result, all club statistics, all Italy friendlies, and the Atalanta hero.
})();
