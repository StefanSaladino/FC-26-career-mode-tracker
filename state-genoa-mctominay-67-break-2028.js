/* Genoa 1–0 Napoli? Correction: Napoli 1–0 Genoa FT, after Arsenal away.
   Exact date and venue not manager-confirmed; never invent. Genoa keeper Jankowski multiple saves.
   36′ Beier offside goal DISALLOWED. HT 0–0. De Bruyne effort saved around halftime whistle.
   Jankowski also saved from Davies and other unspecified Napoli players.
   67′ Scott McTominay goal, Alphonso Davies officially confirmed assist. FT 1–0.
   Next is international break for friendlies, opponents/dates unknown. Italy NT and club stats must remain separate. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Genoa','Serie A',1,0,'W','After 31 Oct 2028 · November 2028 · exact date and venue unconfirmed',
 'Napoli 1–0 Genoa FT. Genoa goalkeeper Jankowski repeatedly saved shots; Beier 36′ goal ruled out offside (NO goal). HT 0–0, De Bruyne attempt denied near halftime whistle. Second half Jankowski saves from Davies and others, exact details unconfirmed. 67′ SCOTT McTOMINAY scores from ALPHONSO DAVIES assist. Eighth Serie A clean sheet. Exact match date, venue, other scorers, individual saves and other events unconfirmed.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const i=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Genoa'&&r[2]==='Serie A'&&String(r[6]).includes('2028'));
 if(i>=0)D[key][i]=row;else D[key].push(row);
}
// No fixture date or venue is known. Register as completed match in an undated-event record
// instead of fabricating an ISO calendar date that could appear in the fixture cards.
D.genoaMatch={competition:'Serie A',opponent:'Genoa',result:'Napoli 1–0 Genoa',played:true,year:2028,month:'November',exactDate:null,venue:null,halftime:'0–0',goal:{scorer:'Scott McTominay',minute:67,assist:'Alphonso Davies'},disallowed:[{player:'Maximilian Beier',minute:36,reason:'offside'}],notable:['Multiple Jankowski saves','De Bruyne denied at halftime','Davies effort saved by Jankowski','Other Napoli efforts saved but details unspecified'],cleanSheetNumber:8};
D.latestResult=['NAP','1–0','GEN','SERIE A · FT · McTOMINAY 67′ (DAVIES) · JANKOWSKI REPEATED SAVES'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),played:11,w:9,d:1,l:1,remaining:27,points:28,gf:17,ga:3,status:'2028–29 defending champions · 28 points after eleven league games · eight clean sheets · rivals latest photographed after Juventus 25 Oct'}};
if(D.serieAStandings?.rows){
 const n=D.serieAStandings.rows.find(r=>r[0]==='Napoli');
 if(n){n[1]=11;n[2]=9;n[3]=1;n[4]=1;n[5]=17;n[6]=3;n[7]=14;n[8]=28;}
 D.serieAStandings.updated='Napoli 28 points after Genoa 1–0; rivals from last screenshot 25 Oct, NOT current';
 D.serieAStandings.source='Napoli manager-confirmed Genoa FT; rivals from 25 Oct photograph, unrefreshed';
}
D.tableContext='Napoli verified 2028–29 after Genoa 1–0: 11 played, 9W 1D 1L, 28 pts, 17GF 3GA +14, eight clean sheets. Genoa date and venue unconfirmed. Other clubs NOT updated after Juventus 25 Oct screenshot (Roma 21 in nine, Atalanta 20 in nine, Juventus 17 in nine, Milan 16 in nine, Lazio 15 in nine); do not claim current point gap or standings rank as independently verified. International break now next, Italy friendlies opponents and dates unknown.';
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),confirmed:false,date:'Napoli after Genoa 1–0; other teams remain dated 25 Oct snapshot',napolipoints:28,napolirank:null,notes:'No refreshed Roma or other team results or current rank available. Napoli alone is updated to 28 pts. Avoid calculating an alleged seven-point current lead over Roma from old 21 points.'};
// Confirmed manager context indicates FRIENDLIES next, but no opponents, calendar dates, venues or call-ups.
D.nextInternationalWindow={stage:'Upcoming',type:'International Friendlies',team:'Italy',manager:'Saladino',opponentsVerified:false,datesVerified:false,details:'National-team friendly window immediately after Napoli 1–0 Genoa; wait for verified fixtures and lineups; no invented opponents or outcomes.'};
D.upcoming=[['Italy friendlies','International Friendlies','Next · November 2028 · specific opponents and dates unconfirmed']];
D.ticker=[
 'FULL TIME · NAPOLI 1–0 GENOA · SCOTT McTOMINAY 67′',
 'DAVIES PROVIDES WINNING ASSIST · HIS FIRST CLUB ASSIST OF SEASON',
 'JANKOWSKI HEROICS · BEIER 36′ OFFSIDE GOAL DISALLOWED',
 'NAPOLI · 28 POINTS FROM ELEVEN SERIE A MATCHES',
 'EIGHT LEAGUE CLEAN SHEETS · JUST THREE GOALS CONCEDED',
 'McTOMINAY · 1G 6A · DAVIES · 2G 1A',
 'NEXT · INTERNATIONAL BREAK · ITALY FRIENDLIES · OPPONENTS UNCONFIRMED',
 'ARSENAL REMAINS FIRST UCL DEFEAT · 7 POINTS FROM FOUR EUROPEAN GAMES'];
D.whispers=[
 ['SCOTT FINDS A WAY','Jankowski stopped shots from Beier, De Bruyne, Davies and others; McTominay scores from Davies 67′ for a 1–0 Napoli win.'],
 ['BEIER GOAL DISALLOWED','At 36′, Beier finished but was offside. It is not a credited goal and Napoli went in 0–0 at halftime.'],
 ['28 POINTS, EIGHT SHUTOUTS','Napoli have 9W 1D 1L from 11 Serie A matches and just three goals conceded, with their eighth clean sheet against Genoa.'],
 ['CREATOR TURNS SCORER','Scott McTominay now has one club goal and six assists. Alphonso Davies has two goals and one assist.'],
 ['TITLE TABLE NOT YET REFRESHED','Roma had 21 and Atalanta 20 after the 25 October screenshot, but their newer results have not been supplied. Do not invent a current gap.'],
 ['ITALY FRIENDLIES NEXT','Saladino switches to international management. Opponents, exact dates and call-ups for the next friendlies are awaiting confirmation.'],
 ['AFTER THE ARSENAL HURT','Napoli respond to a 2–0 defeat in London with a hard-earned 1–0 league win. UCL stats remain 2W 1D 1L, seven points.']];
const s=D.statsBySeason?.['2028–29'];
if(Array.isArray(s)){
 const upd=[
  ['Scott McTominay',1,6,'2028–29 Napoli club: first confirmed goal of season against Genoa 67′, Davies assist; previous six club assists remain unchanged.'],
  ['Alphonso Davies',2,1,'2028–29 Napoli club: 2 goals, first confirmed assist to McTominay 67′ vs Genoa; own saved attempt not a goal.']
 ];
 for(const v of upd){const i=s.findIndex(r=>r[0]===v[0]);if(i>=0)s[i]=v;else s.push(v);}
 D.stats=s;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,season] of Object.entries(D.statsBySeason)){const r=season.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year)}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='Verified 2028–29 Napoli club goals and assists through Napoli 1–0 Genoa, 67′ McTominay from Davies. Beier 36′ offside DISALLOWED. National-team goals and assists tracked separately; 2027–28 historical seasons unchanged.';
}
// Keep Champions League 4P 2W 1D 1L 7pts 8GF 8GA; this is domestic Serie A only.
})();
