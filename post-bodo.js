(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  const story={id:'bodo-away-ucl-2028',category:'Match Report',label:'Champions League',date:'Bodø/Glimt 2–1 Napoli · FT',tone:'loss',headline:'Defeat in Bodø, but Napoli Secure Knockout Playoff Place',dek:'Evjen scores twice as Bodø/Glimt beat Napoli 2–1, but the night still ends with confirmation that Napoli have qualified for a place in the Champions League knockout playoffs.',body:['Napoli left Bodø with a 2–1 defeat, but also with their European season guaranteed to continue after securing a place in the Champions League knockout playoffs.','Bodø/Glimt struck first in the 15th minute through Evjen. Napoli nearly produced an immediate response three minutes later when Pio Esposito was denied by the goalkeeper.','The equaliser arrived in the 38th minute. Maximilian Beier supplied Pio, who finished to make it 1–1 and continue his run of important contributions for Napoli. Beier then had a chance to turn the match completely before halftime, breaking through on the counter in the 44th minute only to be denied from close range.','Napoli went into the interval level and with reason to believe the match had shifted in their direction, but Evjen struck again in the 57th minute to restore Bodø/Glimt’s lead. Napoli could not find another reply and the match finished 2–1.','The performance and result will frustrate a Napoli side that created enough opportunities to take more from the night. It also follows the difficult defeat in Marseille, leaving questions about Napoli’s recent European form even as their domestic campaign remains strong.','There was, however, one significant piece of good news: Napoli have officially secured a place in the Champions League knockout playoffs. The route through Europe has become harder than the club would have wanted, but it remains open.','For Napoli, that distinction matters. This was a defeat, not an elimination. The next European assignment will carry knockout consequences.'],commentHeat:7,reaction:'loss',visitorClub:'Bodø/Glimt'};
  D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
  if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(r[2]==='Champions League'&&((r[0]==='Napoli'&&r[1]==='Bodø/Glimt')||(r[0]==='Bodø/Glimt'&&r[1]==='Napoli'))));D.results.push(['Napoli','Bodø/Glimt','Champions League',1,2,'L',"Pio Esposito 38'",'Assist: Maximilian Beier · Bodø/Glimt: Evjen 15\', 57\' · Napoli qualified for knockout playoffs']);}
  D.upcoming=[
    ['Bologna FC','Serie A','Jan 29'],
    ['Sassuolo','Coppa Italia','Feb 2'],
    ['Fiorentina','Serie A','Feb 6'],
    ['Udinese','Serie A','Feb 12'],
    ['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],
    ['Lecce','Serie A','Feb 20'],
    ['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],
    ['Inter','Serie A','Feb 27 · Away']
  ];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'CHAMPIONS LEAGUE · PLAYOFF PLACE SECURED'};
  D.ticker=['UCL · NAPOLI SECURE KNOCKOUT PLAYOFF PLACE','UCL PLAYOFF · INTER AWAIT OVER TWO LEGS','FEB 23 · INTER AWAY IN EUROPE','FEB 27 · INTER AWAY IN SERIE A','FT · BODØ/GLIMT 2–1 NAPOLI',"PIO 38' · ASSIST BEIER",...(D.ticker||[]).filter(x=>!String(x).includes('BODØ')&&!String(x).includes('PLAYOFF')&&!String(x).includes('INTER'))].slice(0,8);
})();