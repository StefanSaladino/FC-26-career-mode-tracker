/* Authoritative FC26 photographed February / March 2031 fixture calendar. Updates schedule and Serie A classification only; no new articles, manager quotes or match results. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
D.currentCalendarDate2031='2031-02-09';
const fixtures=[
{date:'2031-02-01',team:'Napoli',opponent:'Fiorentina',venue:'Away',competition:'Serie A',status:'completed',score:'3–0',resultText:'Fiorentina 0–3 Napoli',notes:'Estêvão 49′ (Pio), Beier 55′ (Olise) and 70′ (Pio); 0–0 halftime.'},
{date:'2031-02-05',team:'Napoli',opponent:'Torino',venue:null,competition:'Coppa Italia',status:'completed',score:'5–2',afterExtraTime:true,resultText:'Torino 2–5 Napoli AET',notes:'2–2 after 90. Beier hat-trick and official assist Nico Paz 120′; Pio 101′ from Olise.'},
{date:'2031-02-09',team:'Napoli',opponent:'Parma',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-02-15',team:'Napoli',opponent:'Sampdoria',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-02-22',team:'Napoli',opponent:'Bergamo Calcio',gameAlias:'Atalanta',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-03-02',team:'Napoli',opponent:'Pescara',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-03-05',team:'Napoli',opponent:'Milano FC',gameAlias:'AC Milan',venue:'Away',competition:'Coppa Italia',status:'scheduled',round:null},
{date:'2031-03-08',team:'Napoli',opponent:'Venezia',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-03-16',team:'Napoli',opponent:'Roma',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-03-23',team:'Napoli',opponent:'Latium',gameAlias:'Lazio',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-03-26',team:'Italy',opponent:'Hungary',venue:'Away',competition:'International',status:'scheduled',internationalCompetitionType:null},
{date:'2031-03-29',team:'Italy',opponent:'Ukraine',venue:'Home',competition:'International',status:'scheduled',internationalCompetitionType:null}
];
D.fixturesFebMar2031=fixtures.map(x=>({...x}));
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
for(const item of fixtures.filter(f=>f.team==='Napoli')){
 const existing=schedule.find(x=>x.team==='Napoli'&&x.opponent===item.opponent&&x.competition===item.competition&&(x.date===item.date||(x.date==null&&x.opponent==='Torino')));
 if(existing)Object.assign(existing,item);else schedule.push({...item});
}
schedule.sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
D.italyMarch2031=fixtures.filter(x=>x.team==='Italy').map(x=>({...x}));
if(D.fiorentina2031)Object.assign(D.fiorentina2031,{date:'2031-02-01',competition:'Serie A',venue:'Away',score:'Fiorentina 0–3 Napoli'});
if(D.torinoCoppa2031)Object.assign(D.torinoCoppa2031,{date:'2031-02-05',score:'Torino 2–5 Napoli'});
const fiorentina=D.results?.find(x=>x[0]==='Napoli'&&x[1]==='Fiorentina'&&x[3]===3&&x[4]===0&&String(x[6]).includes('2031'));
if(fiorentina){fiorentina[2]='Serie A';fiorentina[6]='01 Feb 2031 · Away';}
const torino=D.results?.find(x=>x[0]==='Napoli'&&x[1]==='Torino'&&x[2]==='Coppa Italia'&&x[3]===5&&x[4]===2&&String(x[6]).includes('2031'));
if(torino)torino[6]='05 Feb 2031 · After extra time';
const league={played:23,wins:19,draws:3,losses:1,points:60,goalsFor:52,goalsAgainst:16,goalDifference:36,position:null,positionReason:'Napoli 0–3 away at Fiorentina on 1 February 2031; other clubs’ contemporary standings not supplied.'};
const season=D.season203031=D.season203031||{};
Object.assign(season,{updated:'9 Feb 2031 calendar · Napoli 60pts/23 Serie A after Fiorentina · next Parma home',statsVerifiedThrough:'Torino 2–5 Napoli after extra time 5 Feb 2031, Coppa Italia; Fiorentina 0–3 Napoli away 1 Feb 2031 Serie A',serieA:league,nextClubOpponent:'Parma',nextClubCompetition:'Serie A',nextClubDate:'2031-02-09',nextClubFixture:{date:'2031-02-09',opponent:'Parma',competition:'Serie A',venue:'Home',status:'scheduled'},reportedClubGamesThroughTorino:36,calendarFebMarConfirmed:true,calendarMarchIntl:'Italy at Hungary on 26 March, home against Ukraine on 29 March; international competition category unconfirmed.'});
D.seasonState={...(D.seasonState||{}),league:{played:23,w:19,d:3,l:1,points:60,goalsFor:52,goalsAgainst:16,goalDifference:36,remaining:15,position:null,status:'Serie A through Fiorentina away 1 Feb 2031: 60 points from 23; other clubs’ league placements unknown'},coppa:{stage:'Round unconfirmed',status:'Napoli defeated Torino 5–2 after extra time on 5 Feb; next scheduled away Coppa tie at Milano FC 5 March',latestResult:'Torino 2–5 Napoli AET',nextFixture:{opponent:'Milano FC',date:'2031-03-05',venue:'Away'}}};
D.serieAStandingsLastConfirmed={verifiedNapoli:['SSC Napoli',23,19,3,1,52,16,36,60],tablePositionUnknown:true,otherClubsNotRefreshed:true};
D.serieAStandingsAfterFiorentinaNapoliOnly={updated:'01 February 2031',verifiedNapoli:['SSC Napoli',23,19,3,1,52,16,36,60],fullTablePositionUnknown:true,priorRivalSnapshotStale:true};
D.nextClubFixture={date:'2031-02-09',team:'Napoli',opponent:'Parma',competition:'Serie A',venue:'Home',status:'scheduled'};
D.nextClubMatch={...D.nextClubFixture,played:false};
D.nextMatch={...D.nextClubFixture,played:false,confirmedNext:true,kickoffTime:null};
D.nextSerieAFixture={home:'Napoli',away:'Parma',date:'2031-02-09',matchday:null};
D.upcoming=fixtures.filter(x=>x.team==='Napoli'&&x.status==='scheduled').map(x=>[x.opponent,x.competition,x.date.replace('2031-','').replace('-','/')+' · '+x.venue]);
D.nextInternationalWindow={year:2031,month:'March',team:'Italy',fixtures:D.italyMarch2031,competition:'International — precise type not established'};
D.statsScope='Napoli competitive club totals through Torino Feb 5: 36P30W5D1L, GF89 GA27. Serie A through away Fiorentina Feb 1: 23P19W3D1L, 60pts, 52GF16GA, +36; UCL 8P20pts, second unbeaten. Club player totals unchanged: Beier 27G26A, Pio 33G14A, Nico Paz 2G4A, Olise 1G8A, Moore 6G7A, Estêvão 1G1A; Italy international scope separate.';
const showVenue=x=>x.venue==='Home'?'Home':x.venue==='Away'?'Away':'Venue TBC';
const shown=x=>{const [y,m,d]=x.date.split('-');return Number(d)+' '+({'02':'Feb','03':'Mar'}[m]||m)};
const upcoming=fixtures.filter(x=>x.team==='Napoli'&&x.status==='scheduled');
const nextTwo=$('nextTwo');if(nextTwo)nextTwo.innerHTML=upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x.opponent)+'</strong><span>'+esc(x.competition)+' · '+esc(shown(x))+' · '+esc(showVenue(x))+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=upcoming.slice(0,6).map(x=>'<div class="fixture"><span>'+esc(x.competition)+' · '+esc(shown(x))+'</span><strong>'+esc(x.opponent)+'</strong><small>'+esc(showVenue(x))+'</small></div>').join('');
D.ticker=['NEXT: PARMA HOME · 9 FEB · SERIE A','FIORENTINA 0–3 NAPOLI · 1 FEB SERIE A · 60 POINTS FROM 23','TORINO 2–5 NAPOLI AET · 5 FEB COPPA ITALIA','OLISE TO SPURS · $197.9M AGREED · SUMMER WINDOW','MILANO FC AWAY · COPPA ITALIA · 5 MARCH','ITALY: HUNGARY AWAY 26 MARCH · UKRAINE HOME 29 MARCH'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['NEXT UP: PARMA','Napoli host Parma in Serie A on 9 February, after a 3–0 away league win at Fiorentina and 5–2 cup win over Torino.'],['THE FEBRUARY RUN','Sampdoria away 15 February, Bergamo Calcio home 22 February.'],['THREE IN SEVEN DAYS','Pescara away 2 March, Milano FC away in Coppa Italia 5 March, Venezia home 8 March.'],['SPRING FOCUS','Roma away 16 March and Latium home 23 March; Italy then face Hungary away and Ukraine at home.'],['OLISE STAYS FOR NOW','The $197.9m Tottenham agreement is confirmed for summer. Olise remains at Napoli for the current campaign.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>SERIE A · NAPOLI 60 POINTS / 23</strong><span>19 W · 3 D · 1 L · 52 GF · 16 GA · +36 · Position not confirmed</span></div><div><strong>NEXT: PARMA HOME · 9 FEB</strong><span>After Torino 2–5 Napoli AET in Coppa Italia, 5 February</span></div>';
const stats=$('stats');if(stats){const notice=$('statsVerificationNotice');if(notice)notice.textContent='Napoli club stats through Torino, 5 February 2031; Serie A through Fiorentina 1 February: 23 played, 60 points. Italy matches excluded.';}
})();
