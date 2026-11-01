/* Calendar images, September/October 2030: upcoming Inter, Dortmund, Denmark, Norway, Celtic, Roma and other fixtures. No new match result. */
(()=>{'use strict';const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const s=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const matches=[
 {date:'2030-09-28',team:'Napoli',opponent:'Inter',venue:'Home',competition:'Serie A',status:'scheduled'},
 {date:'2030-10-01',team:'Napoli',opponent:'Borussia Dortmund',venue:'Away',competition:'Champions League',status:'scheduled'},
 {date:'2030-10-05',team:'Napoli',opponent:'Opponent to confirm',venue:'Away',competition:'Serie A',status:'scheduled',verification:'Unclear black-on-white badge in manager calendar image'},
 {date:'2030-10-11',team:'Italy',opponent:'Denmark',venue:'Away',competition:'International',status:'scheduled'},
 {date:'2030-10-15',team:'Italy',opponent:'Norway',venue:'Home',competition:'International',status:'scheduled'},
 {date:'2030-10-18',team:'Napoli',opponent:'Hellas Verona',venue:'Home',competition:'Serie A',status:'scheduled'},
 {date:'2030-10-22',team:'Napoli',opponent:'Celtic',venue:'Home',competition:'Champions League',status:'scheduled'},
 {date:'2030-10-26',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',status:'scheduled'},
 {date:'2030-10-30',team:'Napoli',opponent:'Roma',venue:'Home',competition:'Serie A',status:'scheduled'}
];
const old=s.findIndex(x=>x.team==='Napoli'&&x.date==='2030-09-29'&&x.status==='scheduled');
if(old!==-1)s.splice(old,1);
for(const m of matches){const x=s.find(x=>x.date===m.date&&x.team===m.team&&x.status==='scheduled');if(x)Object.assign(x,m);else s.push(m)}
const fio=s.find(x=>x.team==='Napoli'&&x.opponent==='Fiorentina'&&x.status==='completed');if(fio)fio.date='2030-09-13';
if(Array.isArray(D.results)){for(const r of D.results)if(r[0]==='Napoli'&&r[1]==='Fiorentina'&&String(r[6]||'').includes('15 Sep 2030'))r[6]=String(r[6]).replace('15 Sep 2030','13 Sep 2030')}
D.season203031={...(D.season203031||{}),nextClubOpponent:'Inter',nextClubCompetition:'Serie A',nextClubDate:'2030-09-28'};
D.nextClubFixture={date:'2030-09-28',opponent:'Inter',competition:'Serie A',venue:'Home'};
D.upcoming=s.filter(x=>x.status==='scheduled').sort((a,b)=>a.date.localeCompare(b.date)).map(x=>[x.opponent,x.team==='Italy'?'Italy · International':x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const lines=['NEXT · INTER AT NAPOLI · 28 SEPTEMBER · SERIE A','CHAMPIONS LEAGUE · BORUSSIA DORTMUND AWAY · 1 OCTOBER','NAPOLI 0–2 WIN AT BOLOGNA · PIO BRACE · BURNETT FIRST CLEAN SHEET','NAPOLI SERIE A UNBEATEN · TEN POINTS FROM FOUR MATCHES','ITALY · DENMARK AWAY 11 OCT · NORWAY HOME 15 OCT','EUROPE · CELTIC AT NAPOLI · 22 OCTOBER','SERIE A · VERONA 18 OCT · LECCE 26 OCT · ROMA 30 OCT'];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['INTER NEXT','Napoli host Inter on 28 September. The champions have ten points through four Serie A fixtures.'],['DORTMUND AWAY','Three days after Inter, Napoli visit Borussia Dortmund on 1 October in the Champions League.'],['BURNETT FIRST ZERO','O. Burnett collected his first professional clean sheet in the 2–0 victory at Bologna.'],['ITALY CALLS','Denmark away on 11 October and Norway at home on 15 October appear on the international calendar.'],['CELTIC AND ROMA','Celtic visit in Europe on 22 October; Roma visit in Serie A on 30 October.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>LAST · BOLOGNA 0–2 NAPOLI</strong><span>Pio brace · Burnett first professional clean sheet · 10 Serie A points</span></div><div><strong>NEXT · INTER HOME · 28 SEPTEMBER</strong><span>Serie A · Borussia Dortmund away in UCL on 1 October</span></div>';
})();