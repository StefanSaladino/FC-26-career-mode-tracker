(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 const stories=[
  {id:'roma-apr-title-countdown',category:'Title Race',label:'Serie A',date:'After Napoli 2–0 Roma',tone:'feature',headline:'One More Win: Napoli Move to the Brink of the Scudetto',dek:'Napoli are 13 points clear with five matches left. They are not champions yet — but one more league victory will make it official.',image:'assets/pio-napoli.webp',body:[
   'Napoli have reached the edge of the finish line. The 2–0 victory over Roma moved the leaders to 81 points from 33 matches: 24 wins, nine draws and still no defeats.',
   'Inter, represented in FC26 as Lombardia FC, sit second on 68 points, with Milan on 67. Fifteen points remain available, so the title is not mathematically secured yet. One more Napoli league win, however, guarantees the Scudetto regardless of what happens elsewhere.',
   'That makes the next league fixture delicious: Milan come to Naples on April 22. Napoli do not need to treat it like a desperate title decider — even a defeat would leave four further opportunities — but victory would allow them to finish the race against one of their major domestic rivals.',
   'The unbeaten campaign is becoming a story of its own. Five league matches separate Napoli from an Invincible Serie A season, although Europe and the Coppa Italia remain live priorities.'
  ]},
  {id:'roma-apr-2-0-report',category:'Match Report',label:'Serie A',date:'Napoli 2–0 Roma · Apr 15',tone:'match',headline:'Chiesa Creates Both as Napoli Beat Roma 2–0',dek:'Maximilian Beier and Endrick score, Federico Chiesa supplies both assists, and Napoli move to 24–9–0 in Serie A.',image:'assets/beier-napoli.jpg',body:[
   'Napoli handled Roma with the control of a side that understands exactly where it stands in the season. Maximilian Beier opened the scoring from Federico Chiesa’s pass, giving Napoli the lead they carried into halftime.',
   'Roma had moments — including a Paulo Dybala chance that Alex Meret turned away and a narrow Mancini miss from a corner — but Napoli resisted without needing to overextend.',
   'With the schedule in mind, Nico Paz and Beier were protected after the interval. Endrick then killed the match on the break, racing behind the defence and finishing for 2–0. Chiesa supplied the pass again for his second assist of the night.',
   'Chiesa remains transfer-listed and is expected to leave after the season, not before it. Performances like this are exactly how he can make the remaining weeks count: contribute to a trophy push and leave on the strongest possible terms.',
   'Napoli finish the night on 81 points, 13 clear of second place and unbeaten through 33 league matches.'
  ]}
 ];
 const ids=new Set(stories.map(s=>s.id));
 D.articles=[...stories,...(D.articles||[]).filter(a=>!ids.has(a.id))];
 D.hero={...(D.hero||{}),articleId:'roma-apr-title-countdown',strap:'ONE WIN FROM THE SCUDETTO'};
 D.matches=(D.matches||[]).filter(m=>!(m.team==='Napoli'&&m.opponent==='Roma'&&String(m.date||'').includes('Apr')));
 D.matches.unshift({team:'Napoli',competition:'Serie A',date:'Apr 15',opponent:'Roma',venue:'Home',status:'FT',score:'2–0',note:'Beier (Chiesa), Endrick (Chiesa) · Clean sheet'});
})();