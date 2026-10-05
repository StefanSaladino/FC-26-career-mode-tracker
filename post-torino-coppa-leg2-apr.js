(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'torino-coppa-leg2-apr',category:'Match Report',label:'Coppa Italia',date:'Torino 0–0 Napoli · Apr 19',tone:'match',headline:'Job Done: Napoli Shut Out Torino and Book Coppa Italia Final',dek:'A heavily rotated Napoli protect their four-goal first-leg advantage with a controlled 0–0 second leg. Roma await in the final.',image:'assets/bastoni-napoli.jpg',body:[
  'Napoli are through to the Coppa Italia final after a deliberately uneventful 0–0 second leg against Torino.',
  'With a four-goal advantage already secured from the first leg and the Serie A title within touching distance, Napoli rotated heavily and treated the return fixture as an exercise in control rather than spectacle.',
  'Torino never found the early breakthrough required to put genuine pressure on the tie. The match reached halftime scoreless, stayed that way through the second half and Napoli closed out the semifinal without exposing key players to unnecessary minutes or risk.',
  'The reward is a place in the Coppa Italia final against Roma — another route to silverware in a season that remains alive on multiple fronts.',
  'Attention now turns immediately back to Serie A. Milan are next, and one league victory is enough to make Napoli champions.'
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 D.results=D.results||[];
 if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Torino'&&r[2]==='Coppa Italia'&&r[3]===0&&r[4]===0)) D.results.push(['Napoli','Torino','Coppa Italia',0,0,'D','Apr 19','Semifinal second leg · Napoli advance 4–0 on aggregate']);
 D.latestResult=['Napoli','0–0','Torino','Coppa Italia semifinal · Napoli advance 4–0 on aggregate · Roma await in the final'];
 D.ticker=['COPPA ITALIA · NAPOLI INTO THE FINAL','TORINO 0–0 NAPOLI · 4–0 AGGREGATE','FINAL · NAPOLI vs ROMA',...(D.ticker||[]).filter(x=>!String(x).includes('ROMA')&&!String(x).includes('SCUDETTO'))];
})();