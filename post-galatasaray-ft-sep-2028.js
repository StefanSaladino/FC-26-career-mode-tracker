(()=>{
const D=window.NAPOLI_DATA;if(!D)return;
const stories=[
  {
    "id": "galatasaray-comeback-sep-2028",
    "category": "Match Report",
    "label": "FULL TIME · CHAMPIONS LEAGUE",
    "date": "12 September 2028",
    "byline": "Napoli Season Room · European Football Desk",
    "tone": "breaking",
    "longform": true,
    "imageLocked": true,
    "image": "assets/bastoni-napoli.jpg",
    "objectPosition": "50% 24%",
    "objectFit": "cover",
    "imageCredit": "Alessandro Bastoni in Napoli colours · Season Room file image (not a photograph of this match)",
    "headline": "NAPOLI FIGHT BACK! BASTONI AND NEVES TURN GALATASARAY NIGHT INTO EUROPEAN VICTORY.",
    "dek": "Behind after 25 minutes, ahead by 41. Bastoni's captain's response and João Neves's first Napoli goal secure a 2–1 Champions League opener, with Meret protecting the lead.",
    "body": [
      "FULL TIME — Napoli 2–1 Galatasaray. Four days after a frustrating 1–1 draw at Venezia brought scrutiny of Stefan Saladino's rotation policy, Napoli began their Champions League campaign by coming from behind to take three points at home.",
      "The early scoreline invited an uncomfortable comparison with the previous weekend. Gabriel Sara put Galatasaray ahead in the 25th minute. The visitors had struck first; Napoli needed an answer rather than another evening of chasing control.",
      "The captain supplied it. In the 32nd minute, Alessandro Bastoni made it 1–1 with an unassisted goal, his first of the season. The equaliser came seven minutes after Sara's opener and transformed the mood of a European night that had started badly.",
      "Nine minutes later, Napoli were in front. Michael Olise supplied the assist and João Neves scored in the 41st minute. It was Neves's first goal for Napoli — and the winning goal on his Champions League debut for the club. The midfielder signed from PSG for $250 million, and his first major scoring contribution arrived on precisely the stage Napoli signed him to help conquer.",
      "Napoli carried the 2–1 advantage into halftime, but victory was not guaranteed. Alex Meret produced a significant close-range save in the second half when Galatasaray threatened to equalise. The final whistle, not the interval score, secured the points.",
      "Saladino used a notable attacking variation: Maximilian Beier operated in the advanced central role usually occupied by Nico Paz, with Pio Esposito leading the line. Beier's movement and passing impressed the manager even without a goal; Pio remained a threat but was repeatedly denied by a well-performing visiting goalkeeper. A narrow Pio free kick also went close.",
      "At halftime Alphonso Davies made way for Nico Paz. Later, Kevin De Bruyne, Mikey Moore and Rafa Marín entered the match, with the tiring Alessandro Buongiorno replaced by Marín. The complete substitution pairings and exact minutes have not been confirmed and are not assigned here.",
      "It is an early statement, not a claim of European supremacy. Napoli began their 2028–29 Champions League league phase with one win and three points. Bastoni provided the leadership, Olise the final pass, Neves the decisive finish and Meret the save that mattered. After Venezia, Saladino wanted a response. He got one before halftime and held it until full time.",
      "Next for Napoli is Como at home on 16 September. The deeper test of the new European ambitions continues against Bayer Leverkusen on 26 September. For tonight, the result is simple: Napoli came from behind, Napoli won, and the European campaign is underway."
    ]
  },
  {
    "id": "neves-beier-galatasaray-tactical-sep-2028",
    "category": "Analysis",
    "label": "THE TACTICAL DESK",
    "date": "13 September 2028 · After Galatasaray",
    "byline": "Napoli Season Room · Tactical Desk",
    "tone": "analysis",
    "longform": true,
    "imageLocked": true,
    "image": "assets/beier-napoli.jpg",
    "objectPosition": "50% 24%",
    "objectFit": "cover",
    "imageCredit": "Maximilian Beier in Napoli colours · Season Room file image (not a photograph of this match)",
    "headline": "NEVES GETS THE WINNER. BEIER AT TEN GIVES SALADINO ANOTHER QUESTION TO ANSWER.",
    "dek": "The 2–1 comeback over Galatasaray brought the first Napoli goal for João Neves and an encouraging experiment with Beier behind Pio Esposito.",
    "body": [
      "João Neves will own the morning's headlines. His 41st-minute goal from Michael Olise's assist turned a 1–0 deficit into a 2–1 lead and ultimately three Champions League points. For a record-signing midfielder bought from the team that beat Napoli in May's final, that is an extraordinary first goal.",
      "But the selection detail deserves almost as much attention. Saladino deployed Maximilian Beier in the advanced position normally occupied by Nico Paz, leaving Pio Esposito as the central striker. The manager's immediate assessment of Beier's movement and passing was encouraging, even though he did not score.",
      "One match does not settle the shape for the season. Paz entered at halftime in place of Alphonso Davies, and Napoli retain a separate manager-confirmed elite 4-2-3-1 built around Neves alongside Scott McTominay with Paz at number ten. The Beier experiment adds an option; it does not erase the existing plan.",
      "Nor should Pio's failure to score be mistaken for a poor attacking night. He forced work from the Galatasaray goalkeeper and narrowly missed a free kick. The opposition goalkeeper's strong performance was part of the reason the score stayed close.",
      "At the other end, Bastoni equalised unassisted in the 32nd minute and Meret preserved the 2–1 lead with an important close-range save after halftime. Those moments matter when judging whether a comeback was controlled or merely exciting.",
      "The wider lesson after Venezia is that purposeful rotation and tactical flexibility can coexist with a winning European performance. Napoli have a promising alternative between the lines, a marquee midfielder with his first goal, and three points. The manager now decides how often to revisit the experiment."
    ]
  }
];
for(let i=stories.length-1;i>=0;i--)if(!D.articles.some(a=>a.id===stories[i].id))D.articles.unshift(stories[i]);
D.hero={articleId:'galatasaray-comeback-sep-2028',strap:'FT · NAPOLI 2–1 GALATASARAY · EUROPEAN COMEBACK'};
const result=['Napoli','Galatasaray','Champions League',2,1,'W','12 Sep 2028 · Home','Gabriel Sara 25′; Bastoni 32′ unassisted; João Neves 41′ (Olise assist) · Meret decisive second-half save'];
D.results=D.results||[];
const prior=D.results.findIndex(r=>r[0]==='Napoli'&&r[1]==='Galatasaray'&&String(r[6]).includes('2028'));
if(prior>=0)D.results[prior]=result;else D.results.push(result);
D.results2028=D.results2028||[];
for(const row of [['Napoli','Venezia','Serie A',1,1,'D','8 Sep 2028 · Away','De Bruyne 40′ (Moore); Busio 67′'],result]){
const i=D.results2028.findIndex(r=>r[1]===row[1]&&r[2]===row[2]);if(i>=0)D.results2028[i]=row;else D.results2028.push(row);
}
if(Array.isArray(D.fixtures2028)){const match=D.fixtures2028.find(f=>f.team==='Napoli'&&f.opponent==='Galatasaray'&&f.date==='2028-09-12');if(match){match.played=true;match.result='Napoli 2–1 Galatasaray';}D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);}
D.latestResult=['NAP','2–1','GAL','12 SEP · CHAMPIONS LEAGUE · Bastoni 32′, Neves 41′ (Olise)'];
D.seasonState={...(D.seasonState||{}),ucl:{stage:'League phase',played:1,w:1,d:0,l:0,points:3,status:'2028–29 · Champions League opener won 2–1 vs Galatasaray'}};
D.ticker=['FT · NAPOLI 2–1 GALATASARAY','BASTONI 32′ · CAPTAIN EQUALISES','JOÃO NEVES 41′ · FIRST NAPOLI GOAL · OLISE ASSIST','UCL · 1 WIN · 3 POINTS','MERET · DECISIVE SECOND-HALF SAVE','NEXT · COMO HOME · 16 SEP','SERIE A · 2W 1D 0L · 7 PTS'];
D.whispers=[['THE RECORD SIGNING DELIVERS','Neves scores his first Napoli goal — a Champions League winner against Galatasaray.'],['CAPTAIN LEADS THE RESPONSE','Bastoni equalises unassisted in the 32nd minute, seven minutes after Sara put Galatasaray ahead.'],['BEIER AT TEN','Saladino liked Beier’s movement and passing as the advanced creator with Pio ahead. The experiment remains under review.'],['MERET HOLDS FIRM','A close-range second-half stop keeps Napoli ahead in the Champions League opener.'],['BACK TO SERIE A','Como visit on 16 September after Napoli’s first European win.']];
const season=D.statsBySeason?.['2028–29'];
if(Array.isArray(season)){for(const [name,goals,assists,note] of [['Alessandro Bastoni',1,0,'Goal 32′ vs Galatasaray · unassisted'],['João Neves',1,0,'First Napoli goal · winner 41′ vs Galatasaray'],['Michael Olise',0,1,'Assist for Neves winner 41′ vs Galatasaray']]){const i=season.findIndex(r=>r[0]===name);if(i>=0)season[i]=[name,goals,assists,note];else season.push([name,goals,assists,note]);}D.stats=season;const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];Object.entries(D.statsBySeason).forEach(([year,rows])=>{const r=rows.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year);}});return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));D.statsScope='2028–29 official contributions through Napoli 2–1 Galatasaray · 2027–28 archived; 2025–27 unavailable';}
})();