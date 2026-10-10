/* Serie A MD7, 13 Oct 2028: Roma 1–0 Napoli. Pisilli from a first-half corner scramble; minute unconfirmed. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Roma','Serie A',0,1,'L','13 Oct 2028 · Away','Roma 1–0 Napoli. Niccolò Pisilli scored in first half following scramble from whipped-in corner; exact goal minute not confirmed. HT 1–0. Full time 1–0. 44-match unbeaten Serie A run ended.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const index=D[key].findIndex(x=>x[0]==='Napoli'&&x[1]==='Roma'&&x[2]==='Serie A'&&String(x[6]).includes('13 Oct 2028'));
 if(index>=0)D[key][index]=row;else D[key].push(row);
}
const f=D.fixtures2028?.find(x=>x.team==='Napoli'&&x.opponent==='Roma'&&x.date==='2028-10-13');
if(f){f.venue='Away';f.played=true;f.result='Roma 1–0 Napoli';}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(x=>x.team==='Napoli'&&!x.played).map(x=>[x.opponent,x.competition,x.date+' · '+x.venue+(x.verified?'':' · Opponent unconfirmed')]);
D.latestResult=['ROM','1–0','NAP','13 OCT · SERIE A · FT · Pisilli first half · 44-MATCH UNBEATEN STREAK ENDS'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),w:5,d:1,l:1,points:16,played:7,remaining:31,gf:9,ga:3,status:'2028–29 · defending champions · 44-game Serie A undefeated sequence ended at Roma after seven matches'}};
D.serieAStandings={updated:'2028–29 · after Roma · Napoli-only record',rows:[['Napoli',7,5,1,1,9,3,6,16]]};
D.tableContext='2028–29 Napoli-only league record: Lecce 0–2 Napoli; Napoli 2–0 Inter; Venezia 1–1 Napoli; Como 0–1 Napoli; Torino 0–1 Napoli; Milan 1–2 Napoli; Roma 1–0 Napoli. Napoli 5W 1D 1L, 16 points, 9 GF, 3 GA, +6 GD, four clean sheets. Roma ended a 44-match league unbeaten run (38 games in 2027–28 and six in 2028–29). Other clubs’ standings have not been established; no overall rank asserted.';
D.ticker=['FT · ROMA 1–0 NAPOLI · FIRST SERIE A DEFEAT','PISILLI · FIRST-HALF CORNER SCRAMBLE','44 LEAGUE MATCHES UNBEATEN · RUN ENDS IN ROME','SERIE A · 5W 1D 1L · 16 PTS','9 GF · 3 GA · +6 GOAL DIFFERENCE','NO STOPPAGE-TIME RESCUE THIS TIME','NEXT · SLAVIA PRAGUE HOME · 17 OCT · UCL'];
D.whispers=[
 ['THE RUN ENDS IN ROME','After 38 unbeaten Serie A matches last season and six to start this season, Roma defeat Napoli 1–0.'],
 ['PISILLI MAKES IT COUNT','A first-half corner scramble gives Pisilli the winner; the exact minute is unconfirmed.'],
 ['THE FIRST DEFEAT','Napoli stand at 5 wins, 1 draw and 1 loss, with 16 points from seven games.'],
 ['A EUROPEAN RESPONSE','Slavia Prague visit on 17 October as the champions look to respond to their first league loss.'],
 ['FORTY-FOUR NOT FORGOTTEN','The invincible league-winning 2027–28 season and six unbeaten openers are still part of the club’s history.']
];
// National-team friendlies and club contribution totals remain in their separate canonical files.
})();