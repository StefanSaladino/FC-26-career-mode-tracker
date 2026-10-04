(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'udinese-away-feb-2028',category:'Match Report',label:'Serie A · FT',date:'Udinese 0–0 Napoli · February 2028',tone:'draw',headline:'Rotation Stalls in Udine — Now All Eyes Turn to Inter',dek:'A deliberately rotated Napoli side creates little in a goalless draw. Inter win 2–0 elsewhere, cutting the Serie A lead to five points before the Champions League showdown.',body:[
 'Napoli’s planned rotation produced exactly the kind of quiet afternoon that was always possible: a 0–0 draw away to Udinese, preserving the unbeaten Serie A record but surrendering two points in the title race.',
 'With the Champions League knockout playoff first leg against Inter only three days away, Napoli prioritized freshness. The match never really opened up. Federico Chiesa produced the clearest Napoli opportunity of the first half, but halftime arrived scoreless.',
 'Mikey Moore had Napoli’s best late opening, getting a chance from close range only to be denied by the Udinese goalkeeper. There was no breakthrough and the match finished 0–0.',
 'The wider consequence arrived elsewhere. Inter won 2–0, moving to 56 points and reducing Napoli’s lead from seven points to five. Napoli remain unbeaten at 18W–7D–0L and move to 61 points from 25 league matches.',
 'The trade-off was intentional: Napoli sacrificed some attacking sharpness in Udine to protect the core for Europe. Now that decision gets judged immediately. Inter come to the Maradona on February 15 for the first leg of the Champions League knockout playoff.',
 'Napoli have been outstanding domestically but vulnerable in Europe after defeats to Marseille and Bodø/Glimt. The rested first-choice side now has the stage it was preserved for.'
 ],commentHeat:10,reaction:'draw',visitorClub:'Udinese',comments:[
 ['PartenopeiProfessor','Not pretty, but this was the planned rotation. The problem is Inter did their job and the gap is back to five.'],
 ['CurvaNordNapoli','Sessantuno punti, ancora imbattuti. Adesso però basta calcoli: contro l’Inter voglio il Napoli vero.'],
 ['NoTacticsJustVibes','We rested everybody for Inter so those boys better come out of the tunnel breathing fire 😭'],
 ['AzzurroSempre','Moore nearly stole it late. Take the point, take the fresh legs, move on.'],
 ['ScudettoWatch','The cost is real: seven-point lead becomes five. That makes the three Inter matches even more enormous.'],
 ['VesuvioVoice','If Napoli eliminate Inter in Europe nobody remembers this 0-0. If not, people will absolutely revisit the rotation decision.'],
 ['PartenopeoCanada','18-7-0. Still no league loss. Now give me the full-strength XI at the Maradona.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Udinese')&&String(r[1]).includes('Napoli')&&String(r[2]).includes('Serie A')));D.results.push(['Udinese','Napoli','Serie A',0,0,'D','No goals','Rotated XI · Chiesa first-half chance · Moore denied late']);}
 D.upcoming=[['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20 · Away'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'NEXT · INTER · CHAMPIONS LEAGUE'};
 D.ticker=['FT · UDINESE 0–0 NAPOLI','SERIE A · NAPOLI 61 · INTER 56 · FIVE-POINT LEAD','NAPOLI · 18W 7D 0L · STILL UNBEATEN','NEXT · INTER AT THE MARADONA · UCL PLAYOFF LEG 1',...(D.ticker||[]).filter(x=>!String(x).includes('SEVEN-POINT')&&!String(x).includes('60 PTS')&&!String(x).includes('18W 6D'))].slice(0,9);
})();