(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const e=id=>document.getElementById(id);
if(e('tickerTrack'))e('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(s=>'<span>'+s+'</span>').join('');
if(e('latestResult')&&Array.isArray(D.latestResult)){const r=D.latestResult;e('latestResult').innerHTML='<div class="latest-score"><span>'+r[0]+'</span><strong>'+r[1]+'</strong><span>'+r[2]+'</span></div><p>'+r[3]+'</p>';}
if(e('formLine')){const l=D.seasonState?.league||{};const u=D.seasonState?.ucl||{};e('formLine').innerHTML='<div><strong>'+[l.w,l.d,l.l].join('-')+'</strong><span>2028–29 Serie A · '+l.points+' pts · '+(l.gf??D.serieAStandings?.rows?.[0]?.[4]??'?')+' GF · '+(l.ga??D.serieAStandings?.rows?.[0]?.[5]??'?')+' GA</span></div><div><strong>'+[u.w,u.d,u.l].join('-')+'</strong><span>2028–29 UCL · '+u.points+' pts · Most recent UCL: Arsenal 2–0 Napoli</span></div>';}
if(e('nextTwo'))e('nextTwo').innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+x[0]+'</strong><span>'+x[2]+' · '+x[1]+'</span></div>').join('');
if(e('upcomingStrip'))e('upcomingStrip').innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+x[1]+'</span><strong>'+x[0]+'</strong><small>'+x[2]+'</small></div>').join('');
const row=x=>'<div class="formation-row"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><b>'+x[2]+'</b></div>';
if(e('formation'))e('formation').innerHTML=D.firstXI.map(row).join('');
if(e('eliteFormation'))e('eliteFormation').innerHTML=D.eliteXI.map(row).join('');
if(e('whisperList'))e('whisperList').innerHTML=D.whispers.map(w=>'<div class="whisper"><span>'+w[0]+'</span><p>'+w[1]+'</p></div>').join('');
if(e('matchesList')){const el=e('matchesList');const card=document.createElement('div');card.className='match-card';card.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 19 Aug</span><strong>Lecce <b>0–2</b> Napoli</strong><p>Beier 31′, 87′ · McTominay and De Bruyne assists · Meret clean sheet</p></div>';el.prepend(card);const inter=document.createElement('div');inter.className='match-card';inter.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · Date TBC</span><strong>Napoli <b>2–0</b> Inter</strong><p>Davies 8′ (Pio), Pio 18′ (Beier) · Calafiori and Paz on at halftime</p></div>';el.prepend(inter);const ven=document.createElement('div');ven.className='match-card';ven.innerHTML='<div class="result-badge D">D</div><div class="match-main"><span>2028–29 · Serie A · 8 Sep</span><strong>Venezia <b>1–1</b> Napoli</strong><p>De Bruyne 40′ (Moore assist), Busio 67′ · Peacock two major early saves</p></div>';el.prepend(ven);const gala=[...el.children].find(x=>x.textContent.includes('Galatasaray')&&x.textContent.includes('2–1'));if(gala)el.prepend(gala);const existingComo=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Como')&&x.textContent.includes('16 Sep 2028'));existingComo.forEach(x=>x.remove());const como=document.createElement('div');como.className='match-card';como.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 16 Sep · Away</span><strong>Como <b>0–1</b> Napoli</strong><p>Beier 88′ (McTominay assist) · 0–0 at halftime</p></div>';el.prepend(como);
const torinoCards=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Torino')&&x.textContent.includes('23 Sep 2028'));torinoCards.forEach(x=>x.remove());
const torino=document.createElement('div');torino.className='match-card';
torino.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 23 Sep · Away</span><strong>Torino <b>0–1</b> Napoli</strong><p>Pio Esposito 17′ · Bastoni key block · assist unconfirmed</p></div>';
el.prepend(torino);
const existingLeverkusen=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Bayer Leverkusen')&&x.textContent.includes('26 Sep'));
existingLeverkusen.forEach(x=>x.remove());
const lev=document.createElement('div');lev.className='match-card';
lev.innerHTML='<div class="result-badge D">D</div><div class="match-main"><span>2028–29 · Champions League · 26 Sep · Home</span><strong>Napoli <b>3–3</b> Bayer Leverkusen</strong><p>Beier 39′ (Paz), Pio 86′ (Beier), Beier 90+2′ (McTominay) · 1–1 HT</p></div>';
el.prepend(lev);
const milanCards=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Milan')&&x.textContent.includes('1 Oct 2028'));
milanCards.forEach(x=>x.remove());
const milan=document.createElement('div');milan.className='match-card';
milan.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 1 Oct 2028 · Away · San Siro</span><strong>AC Milan <b>1–2</b> Napoli</strong><p>Rabiot 55′ · Pio 68′ (McTominay) · Beier 90+1′ (McTominay) · 0–0 HT</p></div>';
el.prepend(milan);
const romaCards=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Roma')&&x.textContent.includes('13 Oct 2028'));
romaCards.forEach(x=>x.remove());
const roma=document.createElement('div');roma.className='match-card';
roma.innerHTML='<div class="result-badge L">L</div><div class="match-main"><span>2028–29 · Serie A · 13 Oct 2028 · Away</span><strong>Roma <b>1–0</b> Napoli</strong><p>Pisilli first half · corner scramble · exact minute unconfirmed · 44-match league unbeaten run ends</p></div>';
el.prepend(roma);
const oldSlavia=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Slavia Prague')&&x.textContent.includes('17 Oct 2028'));
oldSlavia.forEach(x=>x.remove());
const slavia=document.createElement('div');slavia.className='match-card';
slavia.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Champions League · 17 Oct 2028 · Home</span><strong>Napoli <b>3–2</b> Slavia Prague</strong><p>Slavia: Chytil 17′, Moses 22′ · Napoli: Beier 36′, 64′, 71′ (Pio Esposito assists on all three) · Slavia hit post late</p></div>';
el.prepend(slavia);
const oldEmpoli=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Empoli')&&x.textContent.includes('21 Oct 2028'));
oldEmpoli.forEach(x=>x.remove());
const empoli=document.createElement('div');empoli.className='match-card';
empoli.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 21 Oct 2028 · Home</span><strong>Napoli <b>2–0</b> Empoli</strong><p>Davies 12′ (Olise cross), Nico Paz 80′ (McTominay) · Olise 23′ disallowed for offside · Paz hit post 90+3′ · clean sheet</p></div>';
el.prepend(empoli);
const oldJuve=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Juventus')&&x.textContent.includes('25 Oct 2028'));
oldJuve.forEach(x=>x.remove());
const juve=document.createElement('div');juve.className='match-card';
juve.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 25 Oct 2028 · Away</span><strong>Juventus <b>0–2</b> Napoli</strong><p>Pio Esposito 37′ (rebound from saved Davies shot), 89′ (Paz officially credited assist after saved attempt/rebound) · Di Gregorio denies Beier 20′, Pio 43′ · HT 0–1 · sixth Serie A clean sheet</p></div>';
el.prepend(juve);
const oldSamp=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Sampdoria')&&x.textContent.includes('28 Oct 2028'));
oldSamp.forEach(x=>x.remove());
const samp=document.createElement('div');samp.className='match-card';
samp.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · 28 Oct 2028 · Home</span><strong>Napoli <b>3–0</b> Sampdoria</strong><p>De Bruyne 27′ (Paz), Beier 52′ (Pio), Pio 70′ (Beier) · Beier on at halftime · heavy rotation before Arsenal · seventh Serie A clean sheet</p></div>';
el.prepend(samp);
const oldArsenal=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Arsenal')&&x.textContent.includes('31 Oct 2028'));
oldArsenal.forEach(x=>x.remove());
const arsenal=document.createElement('div');arsenal.className='match-card';
arsenal.innerHTML='<div class="result-badge L">L</div><div class="match-main"><span>2028–29 · Champions League · 31 Oct 2028 · Away</span><strong>Arsenal <b>2–0</b> Napoli</strong><p>Merino and Martinelli scored (goal minutes and order unconfirmed) · Pio wide 4′, Raya save 11′ · HT 0–0, Arsenal zero shots on target first half · Paz and Calafiori both entered early second half, both on for second Arsenal goal</p></div>';
el.prepend(arsenal);
const oldGenoa=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Genoa')&&x.textContent.includes('Nov 2028'));
oldGenoa.forEach(x=>x.remove());
const genoa=document.createElement('div');genoa.className='match-card';
genoa.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · Nov 2028 · exact date and venue unconfirmed</span><strong>Napoli <b>1–0</b> Genoa</strong><p>McTominay 67′ (Davies assist) · Beier 36′ ruled offside, NO GOAL · Jankowski saves from De Bruyne, Davies and others · HT 0–0 · EIGHTH league clean sheet</p></div>';
el.prepend(genoa);
if(D.italyNovember2028?.played===2){
const senegal=document.createElement('div');senegal.className='match-card';
senegal.innerHTML='<div class="result-badge D">D</div><div class="match-main"><span>Italy · International Friendly · Nov 2028 · exact date/venue unconfirmed</span><strong>Italy <b>1–1</b> Senegal</strong><p>Pio Esposito goal (Kean assist) · Donnarumma saves penalty</p></div>';el.prepend(senegal);
const turkey=document.createElement('div');turkey.className='match-card';
turkey.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>Italy · International Friendly · Nov 2028 · exact date/venue unconfirmed</span><strong>Italy <b>2–1</b> Turkey</strong><p>Pio Esposito scores twice · First from Kean assist · Second rebound UNASSISTED</p></div>';el.prepend(turkey);
}}
if(e('matchesList')&&D.atalantaMatch?.played){
const el=e('matchesList');
const prior=[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('Atalanta')&&x.textContent.includes('6–2'));prior.forEach(x=>x.remove());
const at=document.createElement('div');at.className='match-card';
at.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>2028–29 · Serie A · Nov 2028 · exact date and venue unconfirmed · FT</span><strong>Napoli <b>6–2</b> Atalanta</strong><p>PIO 18′ (Neves), 44′ (Beier), 61′ (Beier) · PAZ 27′ (Pio) · BEIER 36′, 55′ (both Pio) · Pašalić 33′, 89′ · HT 4–1 · Pio 3 GOALS + 3 ASSISTS · Beier 2G + 2A · 31pts/12 league · substitutions unconfirmed</p></div>';
el.prepend(at);
}
if(e('matchesList')&&D.psgNovember2028?.played){
const el=e('matchesList');
[...el.children].filter(x=>x.classList.contains('match-card')&&x.textContent.includes('PSG')&&x.textContent.includes('21 Nov 2028')&&x.textContent.includes('0–2')).forEach(x=>x.remove());
const psg=document.createElement('div');psg.className='match-card';
psg.innerHTML='<div class="result-badge L">L</div><div class="match-main"><span>2028–29 · Champions League · 21 Nov 2028 · Home · FT</span><strong>Napoli <b>0–2</b> Paris Saint-Germain</strong><p>Dembélé 23′ · Kvaratskhelia 84′ · HT 0–1 · Manager reports better early Napoli chances · PSG goal assists and actual XI unconfirmed · UCL after 5: 2W 1D 2L, 7pts, 8GF 10GA</p></div>';
el.prepend(psg);
}
if(e('matchesList')){const section=document.createElement('section');section.className='season-2028-fixtures';section.innerHTML='<h3>2028–29 · Upcoming fixtures</h3><div class="match-list"></div>';const list=section.querySelector('.match-list');(D.verifiedUpcoming2028?.length?D.verifiedUpcoming2028:D.fixtures2028.filter(f=>!f.played)).forEach(f=>{const item=document.createElement('div');item.className='match-card';const date=document.createElement('div');date.className='result-badge';date.textContent=f.date.slice(5).replace('-','/');const body=document.createElement('div');body.className='match-main';const type=document.createElement('span');type.textContent=f.competition;const title=document.createElement('strong');title.textContent=f.venue==='Home'?f.team+' vs '+f.opponent:f.opponent+' vs '+f.team;const detail=document.createElement('p');detail.textContent=f.date+' · '+f.venue+(f.verified?'':' · Opponent awaiting confirmation');body.append(type,title,detail);item.append(date,body);list.appendChild(item)});if(!D.verifiedUpcoming2028?.length&&!D.fixtures2028.some(f=>!f.played)&&D.nextInternationalWindow?.stage==='Upcoming'){
const international=document.createElement('div');international.className='match-card';
international.innerHTML='<div class="result-badge">INT</div><div class="match-main"><span>International break · Italy national team</span><strong>Friendlies upcoming — opponents to be confirmed</strong><p>Exact dates, venues and call-ups have not been verified. Manager Saladino returns to national team duty.</p></div>';
list.appendChild(international);}
if(!D.verifiedUpcoming2028?.length&&!D.fixtures2028.some(f=>!f.played)&&D.nextClubMatch?.confirmedNext&&!D.nextClubMatch.played){
const fixture=document.createElement('div');fixture.className='match-card';
fixture.innerHTML='<div class="result-badge">NEXT</div><div class="match-main"><span>Serie A · Next Napoli game</span><strong>Atalanta (Bergamo Calcio)</strong><p>Date, venue and starting XI not yet confirmed · Major Scudetto matchup after Italy friendlies</p></div>';
list.appendChild(fixture);}
if(!D.verifiedUpcoming2028?.length&&!D.fixtures2028.some(f=>!f.played)&&D.atalantaMatch?.played){
const unknown=document.createElement('div');unknown.className='match-card';unknown.innerHTML='<div class="result-badge">TBC</div><div class="match-main"><span>Next Napoli fixture</span><strong>Opponent awaiting manager confirmation</strong><p>Date, venue and competition have not been provided. Napoli 6–2 Atalanta is already completed.</p></div>';list.appendChild(unknown);
}
e('matchesList').parentNode.insertBefore(section,e('matchesList'));}
})();