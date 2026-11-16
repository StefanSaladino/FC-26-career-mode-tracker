/* Manager-provided 2031 APR/MAY calendar screenshots. Fixtures only; no outcomes implied. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const E=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const april=[
{date:'2031-04-19',team:'Napoli',opponent:'Cagliari',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-04-23',team:'Napoli',opponent:'Milano FC',gameAlias:'AC Milan',venue:'Home',competition:'Coppa Italia',round:'Semifinal',leg:2,status:'scheduled',aggregateBeforeMatch:'Napoli lead AC Milan 2–0 from away first leg'},
{date:'2031-04-26',team:'Napoli',opponent:'Torino',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-04-29',team:'Napoli',opponent:'RB Leipzig',gameAlias:'RB Leipzig',venue:'Away',competition:'Champions League',round:'Semifinal',leg:1,status:'scheduled'}
];
const may=[
{date:'2031-05-04',team:'Napoli',opponent:'Sassuolo',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-05-07',team:'Napoli',opponent:'RB Leipzig',gameAlias:'RB Leipzig',venue:'Home',competition:'Champions League',round:'Semifinal',leg:2,status:'scheduled'},
{date:'2031-05-10',team:'Napoli',opponent:'Udinese',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-05-18',team:'Napoli',opponent:'Como',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-05-25',team:'Napoli',opponent:'Milano FC',gameAlias:'AC Milan',venue:'Away',competition:'Serie A',status:'scheduled'}
];
const fixtures=[...april,...may], key=x=>[x.date,x.team,x.opponent,x.competition,x.leg||''].join('|');
const merge=(current,adds)=>{
 const arr=(Array.isArray(current)?current:[]).filter(x=>!(x.team==='Napoli'&&x.opponent==='Torino'&&x.date==='2031-04-27'&&x.competition==='Serie A'));
 const m=new Map(arr.map(x=>[key(x),x]));
 for(const x of adds){const k=key(x);m.set(k,{...(m.get(k)||{}),...x})}
 return [...m.values()].sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
};
D.april2031Schedule=merge(D.april2031Schedule,april);
D.may2031Schedule=merge(D.may2031Schedule,may);
D.aprilMay2031Schedule=merge([...D.april2031Schedule,...D.may2031Schedule],fixtures);
if(Array.isArray(D.schedule203031))D.schedule203031=merge(D.schedule203031,fixtures);
if(Array.isArray(D.fixturesFebMar2031))D.fixturesFebMar2031=merge(D.fixturesFebMar2031,fixtures);
D.upcoming=fixtures.map(x=>({...x}));
D.nextMatch=D.upcoming[0];D.nextFixture=D.nextMatch;D.nextClubMatch=D.nextMatch;D.nextClubFixture=D.nextMatch;
D.calendarAprilMay2031Verification={source:'Manager screenshots of April and May 2031 calendar, provided after Napoli 3–1 Arsenal April16',status:'Fixtures confirmed, remaining matches unplayed',correctedTorinoDate:'2031-04-26',semifinalOpponent:'RB Leipzig',semifinalFirstLeg:'2031-04-29 Away',semifinalSecondLeg:'2031-05-07 Home',lastConfirmedResultDate:'2031-04-16',fixtures:fixtures.map(x=>({...x}))};
const c=D.seasonState||(D.seasonState={});c.nextFixture=D.nextMatch;
const cl=c.championsLeague||(c.championsLeague={});
cl.stage='Semifinals';cl.status='Napoli qualified; RB Leipzig semifinal fixture confirmed, both legs unplayed';
cl.nextStage='Semifinals';cl.semifinalOpponent='RB Leipzig';
cl.semifinal={opponent:'RB Leipzig',round:'Semifinal',status:'scheduled',legs:[{...april[3]},{...may[1]}],firstLeg:{...april[3]},secondLeg:{...may[1]},aggregate:null,winner:null};
const seasonCl=D.season203031?.championsLeague;
if(D.season203031){D.season203031={...D.season203031,championsLeague:{...(seasonCl||{}),stage:'Semifinals',status:'RB Leipzig semifinal scheduled: away 29 Apr 2031, home 7 May 2031, no result yet',semifinalOpponent:'RB Leipzig',semifinal:{opponent:'RB Leipzig',firstLeg:{...april[3]},secondLeg:{...may[1]},status:'scheduled',aggregate:null}},updated:'16 Apr 2031 latest completed match Napoli 3–1 Arsenal, 4–3 aggregate; calendar now confirms RB Leipzig Champions League semifinal away Apr29 and home May7. Next Napoli fixture Cagliari home Apr19. No future results supplied.',nextClubOpponent:'Cagliari',nextClubCompetition:'Serie A',nextClubDate:'2031-04-19'};}
D.nextEuropeanFixture={...april[3]};D.nextEuropeanOpponent='RB Leipzig';
D.ticker=[
'NAPOLI 3–1 ARSENAL · 4–3 AGG · CHAMPIONS LEAGUE SEMIFINALISTS',
'UCL SEMIFINAL · RB LEIPZIG AWAY APR 29 · HOME MAY 7',
'CAGLIARI HOME APR 19 · AC MILAN COPPA SEMIFINAL HOME APR 23',
'TORINO AWAY APR 26 · SASSUOLO AWAY MAY 4',
'NAPOLI 77 POINTS / 32 GAMES · ROMA 70 / 32 · SIX LEAGUE GAMES LEFT',
'BEIER 35 CLUB GOALS / 32 ASSISTS · ESTÊVÃO 90+1′ ARSENAL WINNER'
];
D.whispers=[
['RB LEIPZIG IN THE SEMIFINALS','Napoli visit Leipzig April29; the Champions League semifinal return is home May7. Both legs are unplayed.'],
['TWO EUROPEAN CROWNS','Napoli have won two Champions Leagues in succession; the third consecutive title remains a possibility.'],
['THE NEXT TWO','Cagliari at home April19, then AC Milan home April23 with Napoli 2–0 ahead in the Coppa Italia semifinal tie.'],
['TORINO MOVED TO APR 26','Torino away is April26, the corrected date from the in-game calendar.'],
['SCUDETTO RUN-IN','Napoli lead Roma 77–70 after 32 matches each. Six Serie A games remain, ending away at AC Milan May25.']
];
const strip=$('upcomingStrip');
if(strip)strip.innerHTML=D.upcoming.map(x=>{const d=x.date.slice(8),mon=x.date.slice(5,7)==='04'?'Apr':'May';return '<div class="fixture"><span>'+E(x.competition)+(x.round?' · '+E(x.round)+' '+E(x.leg===1?'1st leg':'2nd leg'):'')+' · '+d+' '+mon+'</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>'}).join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 3–1 ARSENAL · 4–3 AGGREGATE</strong><span>Champions League semifinal: RB Leipzig away Apr 29 · home May 7</span></div><div><strong>NAPOLI 77/32 · ROMA 70/32</strong><span>Seven points clear · Six Serie A matches remain</span></div><div><strong>CAGLIARI HOME · 19 APRIL</strong><span>Then AC Milan Coppa semifinal Apr 23 · Torino away Apr 26</span></div>';
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
const wh=$('whisperList');if(wh)wh.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
})();