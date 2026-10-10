/* Exact manager-uploaded FC26 November 2028 Serie A standings AFTER Napoli 6–2 Atalanta.
 All top six have PLAYED 12. Aliases: Atalanta/Bergamo Calcio, Milan/Milano FC, Lazio/Latium.
 Napoli 31, ROMA UNBEATEN 30; Atalanta 24; Juventus 22, Milan 22, Lazio 20.
 DO NOT claim Roma lost or guess their recent opponents/goal scorers.
 This snapshot supersedes all October stale tables and establishes current 1pt gap. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const rows=[["Napoli",12,10,1,1,23,5,18,31],["Roma",12,9,3,0,28,10,18,30],["Atalanta",12,7,3,2,27,18,9,24],["Juventus",12,6,4,2,21,13,8,22],["AC Milan",12,6,4,2,21,13,8,22],["Lazio",12,5,5,2,22,18,4,20]];
D.serieAStandings={updated:'November 2028 · after Napoli 6–2 Atalanta · top six, 12 played each',source:'2028–29 manager-provided FC26 screenshot of Serie A standings immediately after Atalanta 6–2',rows};
D.titleRaceSnapshot2028={
 confirmed:true,date:'After Atalanta 6–2 · November 2028, exact match date unconfirmed',
 napolirank:1,napolipoints:31,romarank:2,romapoints:30,atarank:3,atapoints:24,
 juverank:4,juvepoints:22,acmilanrank:5,acmilanpoints:22,laziorank:6,laziopoints:20,
 table:rows,notes:'All six have completed TWELVE league games. Napoli lead Roma by ONE point, Roma UNBEATEN 9W 3D 0L; equal +18 goal difference. Atalanta seven points behind after their 6–2 loss. Remaining clubs/fixtures not pictured unknown.'
};
D.tableContext='CONFIRMED FC26 screenshot AFTER Napoli 6–2 Atalanta: top six all 12P. 1 Napoli 10W1D1L 23GF 5GA +18 31pts; 2 Roma 9W3D0L 28GF 10GA +18 30pts (UNBEATEN); 3 Atalanta / Bergamo Calcio 7W3D2L 27GF 18GA +9 24pts; 4 Juventus 6W4D2L 21GF 13GA +8 22pts; 5 AC Milan/Milano FC 6W4D2L 21GF 13GA +8 22pts; 6 Lazio/Latium 5W5D2L 22GF 18GA +4 20pts. Positions, points, GF/GA screenshot-verified; scores/opponents of unreported matches not known. Last Napoli game 6–2 Atalanta; PSG HOME UCL next on 21 Nov then away Monza 26 Nov.';
D.serieAStandingsSnapshot2028={verified:true,after:'Napoli 6–2 Atalanta',playedEach:12,rows,aliases:{'Atalanta':'Bergamo Calcio','AC Milan':'Milano FC','Lazio':'Latium'}};
D.ticker=[
 'SERIE A · NAPOLI 31 POINTS FROM TWELVE · FIRST PLACE',
 'ROMA SECOND · 30 POINTS FROM TWELVE · UNBEATEN 9W 3D',
 'ONLY ONE POINT BETWEEN NAPOLI AND ROMA · BOTH +18 GOAL DIFFERENCE',
 'ATALANTA THIRD · 24 PTS AFTER NAPOLI 6–2 ATALANTA',
 ...(D.ticker||[]).filter(s=>!s.startsWith('NAPOLI · 31PTS')&&!s.includes('RIVALS’ CURRENT TABLE')&&!s.includes('CURRENT GAP UNKNOWN')).slice(0,15)
];
// Do NOT touch results, fixtures, goals/assists, Champions League or hero article.
})();
