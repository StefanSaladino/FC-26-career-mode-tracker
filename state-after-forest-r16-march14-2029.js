(()=>{const D=window.NAPOLI_DATA;if(!D)return;
// Current match state: March 14 2029, after Nottingham Forest R16 second leg.
D.forestR16Leg2={date:'2029-03-14',score:'Nottingham Forest 0–1 Napoli',aggregate:'Nottingham Forest 1–3 Napoli',goal:'Maximilian Beier 30′',assist:'Pio Esposito',halfTimeChanges:['Nico Paz for Alphonso Davies','Anton Stach for Scott McTominay'],qualified:true};
D.latestResult=['NFO','0–1','NAP','UCL R16 · 14 MAR · FT · BEIER 30′ (PIO ASSIST) · NAPOLI THROUGH 3–1 AGG.'];
D.nextClubMatch={team:'Napoli',opponent:'Venezia',competition:'Serie A',date:'2029-03-18',venue:'Home',played:false};
D.upcoming=[
['Napoli vs Venezia','2029-03-18','Serie A · Home'],
['Italy vs Iraq','2029-03-21','International Friendly · Home'],
['Italy vs USA','2029-03-25','International Friendly · Home'],
['Bergamo vs Napoli','2029-03-31','Serie A · Away'],
['Barcelona vs Napoli','2029-04-03','Champions League · Quarterfinal leg 1 · Away'],
['Napoli vs Genoa','2029-04-08','Serie A · Home'],
['Napoli vs Barcelona','2029-04-11','Champions League · Quarterfinal leg 2 · Home'],
['Milano vs Napoli','2029-04-14','Serie A · Away'],
['Napoli vs Lazio','2029-04-18','Coppa Italia · Semifinal leg 2 · Home · Napoli lead 1–0'],
['Napoli vs Torino','2029-04-22','Serie A · Home'],
['Opponent TBC vs Napoli','2029-04-29','Serie A · Away']
];
D.ticker=['FOREST 0–1 NAPOLI · BEIER 30′ (PIO ASSIST) · NAPOLI WIN 3–1 ON AGGREGATE','NEXT: NAPOLI vs VENEZIA · MARCH 18 · SERIE A','UCL QUARTERFINAL: BARCELONA vs NAPOLI APRIL 3 · RETURN APRIL 11','NAPOLI 70 PTS · JUVENTUS 66 · NINE LEAGUE GAMES REMAIN'];
D.whispers=[['EUROPE · QUARTERFINAL BOUND','Beier finished a 30th-minute move from Pio’s backheel at Forest. Napoli won 1–0 away and progressed 3–1 on aggregate.'],['THE REUNION · ENDRICK','Barcelona await on April 3 and 11. Endrick faces the Napoli side that sold him for $310 million.'],['SCUDETTO · FOUR POINTS','Napoli have 70 points from 29 Serie A games, four ahead of Juventus. Venezia visit on March 18.'],['APRIL · THREE FRONTS','Barcelona twice, Milano away and the Coppa semifinal return against Lazio all fall within sixteen days.']];
const el=id=>document.getElementById(id);
const latest=el('latestResult');if(latest){const r=D.latestResult;latest.innerHTML='<div class="latest-score"><span>'+r[0]+'</span><strong>'+r[1]+'</strong><span>'+r[2]+'</span></div><p>'+r[3]+'</p>';}
const next=el('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+x[0]+'</strong><span>'+x[2]+' · '+x[1]+'</span></div>').join('');
const strip=el('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+x[1]+'</span><strong>'+x[0]+'</strong><small>'+x[2]+'</small></div>').join('');
const ticker=el('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+x+'</span>').join('');
const whispers=el('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+x[0]+'</span><p>'+x[1]+'</p></div>').join('');
const matches=el('matchesList');if(matches){const marker='forest-r16-second-leg-2029';if(!matches.querySelector('[data-match-id="'+marker+'"]')){const card=document.createElement('div');card.className='match-card';card.dataset.matchId=marker;card.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>Champions League · R16 second leg · 14 Mar 2029 · Away</span><strong>Nottingham Forest <b>0–1</b> Napoli</strong><p>Beier 30′ (Pio assist) · Napoli advance 3–1 on aggregate · Paz and Stach on at halftime</p></div>';matches.prepend(card);}}
})();