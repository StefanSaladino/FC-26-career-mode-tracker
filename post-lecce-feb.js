(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const match={id:'lecce-away-feb-2028',category:'Match Report',label:'Serie A · FT',date:'Lecce 0–2 Napoli · February 20, 2028',tone:'win',headline:'Endrick Double Punishes Lecce as Napoli Restore Eight-Point Lead',dek:'A rotated Napoli side handles its business while Juventus stun Inter 2–0. Endrick scores twice from Pio Esposito assists and Napoli remain unbeaten.',body:[
  'Napoli could hardly have scripted a better response between the two Inter ties. A rotated side beat Lecce 2–0 away, Endrick scored both goals, Pio Esposito created both, and news from elsewhere made the result even more valuable: Juventus beat Inter 2–0.',
  'The breakthrough arrived in the 55th minute on the counter. Pio released Endrick and the Brazilian finished for 1–0. Twenty minutes later the same partnership struck again, Pio supplying Endrick for his second of the afternoon and Napoli’s insurance goal.',
  'The brace takes Endrick to 10 goals in Napoli’s running season totals. Pio remains on 21 goals but jumps to 10 assists, another reminder that Napoli’s leading scorer has become a major creator as well.',
  'Napoli move to 64 points from 26 Serie A matches with a 19W–7D–0L record. Inter remain on 56 after losing 2–0 to Juventus, meaning the gap expands from five points to eight.',
  'Most importantly, the rotation worked this time. Napoli collected all three points without needing a desperate late rescue and can now turn completely toward the Champions League return leg. Inter lead the tie 2–1, but arrive after a domestic defeat while Napoli arrive with Endrick and Pio combining for both goals in a clean-sheet victory.'
 ],commentHeat:14,reaction:'win',visitorClub:'Lecce',comments:[
  ['CurvaNordNapoli','JUVE 2 INTER 0. NAPOLI +8. Grazie per il favore, adesso pensiamo a Milano.'],
  ['NoTacticsJustVibes','Juventus accidentally helping our Scudetto charge after trying to buy half our attack 😭'],
  ['EndrickEra','Three goals in two matches. Ten on the season. Maybe rejecting those insane bids was a decent idea.'],
  ['PioEra','21 goals AND 10 assists. Two assists today. Pio is becoming a complete monster.'],
  ['PartenopeiProfessor','This is what the Udinese rotation was supposed to look like: manage minutes, win anyway, move on.'],
  ['ScudettoWatch','Napoli 64, Inter 56. Eight clear and still unbeaten after 26. The title picture changed significantly today.'],
  ['AzzurroSempre','Adesso Milano. Un gol pareggia la qualificazione. Andiamo.']
 ]};
 const feature={id:'endrick-answer-feb-2028',category:'Feature',label:'Player Focus',date:'After Lecce 0–2 Napoli',tone:'win',headline:'$193 Million? Napoli Said No. Endrick Is Starting to Explain Why.',dek:'Three goals in two matches have transformed Endrick from prized project into Napoli’s hottest attacker on the eve of the biggest match of the season.',body:[
  'Deadline day brought absurd numbers. Juventus offered around $188 million. RB Leipzig followed with the same neighborhood of money. Bergamo pushed to $193.4 million. Napoli rejected every approach for Endrick.',
  'Now the timing looks prophetic. Endrick scored Napoli’s only goal in the 2–1 Champions League first-leg defeat to Inter, blasting Beier’s pass into the top-left corner under enormous pressure. Five days later, he scored twice at Lecce.',
  'That is three goals across two matches and 10 goals in the running season totals. More importantly, the performances are arriving precisely as Napoli’s season reaches its sharpest pressure point.',
  'Pio Esposito remains the attacking reference point, but Lecce showed why the partnership can be more than a competition for goals. Pio assisted both Endrick finishes, moving to 21 goals and 10 assists himself.',
  'Napoli now travel to Inter one goal down on aggregate with its two young forwards arriving in form. The transfer window is closed. The bids are history. The question is no longer what Endrick might be worth. It is what he can do in Milan.'
 ],commentHeat:13,reaction:'win',visitorClub:'Inter',comments:[
  ['EndrickEra','KEEP THE RECEIPTS. $193.4M rejected and now he is cooking right before Milan.'],
  ['VesuvioVoice','This is why you do not sell elite young talent when you are trying to build something.'],
  ['NoTacticsJustVibes','Juventus: 188m for Endrick. Napoli: no. Juventus five minutes later: fine we will just beat Inter for you 😂'],
  ['PioEra','Do not miss the other half of this story. Pio assisted BOTH. 21 and 10 is ridiculous.'],
  ['PartenopeoCanada','Endrick scored in Leg 1. Give him the stage again in Leg 2.']
 ]};
 D.articles=[match,feature,...(D.articles||[]).filter(a=>a.id!==match.id&&a.id!==feature.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Lecce')&&String(r[1]).includes('Napoli')&&String(r[2]).includes('Serie A')));D.results.push(['Lecce','Napoli','Serie A',0,2,'W',"Endrick 55', 75'",'Pio Esposito assists ×2 · Rotated XI · Clean sheet']);}
 D.upcoming=[['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away · Inter lead 2–1 agg.'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:match.id,strap:'SERIE A · NAPOLI 64 · INTER 56 · EIGHT CLEAR'};
 D.ticker=['FT · LECCE 0–2 NAPOLI','ENDRICK 55’ 75’ · PIO ASSISTS BOTH','NAPOLI · 19W 7D 0L · 64 PTS','JUVENTUS 2–0 INTER · NAPOLI EIGHT CLEAR','NEXT · INTER AWAY · UCL LEG 2 · INTER LEAD 2–1',...(D.ticker||[]).filter(x=>!String(x).includes('FIVE-POINT')&&!String(x).includes('NEXT · LECCE'))].slice(0,10);
})();