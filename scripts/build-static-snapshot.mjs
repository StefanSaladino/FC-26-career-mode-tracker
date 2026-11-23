#!/usr/bin/env node
// Compile legacy historical overlays once at publish time, not on visitors' devices.
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';
import { normalizeSeasonRoomPublication } from './season-room-publication-voice.mjs';

const root=process.cwd();
const revision=(process.env.GITHUB_SHA||'local').slice(0,12);
const authorHTML=await fs.readFile(path.join(root,'legacy-index.html'),'utf8');
const heroSource=authorHTML.slice(authorHTML.indexOf('id="heroStory"'));
const expectedLead=heroSource.match(/data-article="([^"]+)"/)?.[1];
if(!expectedLead)throw Error('Authoring home page has no static lead article ID');
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.mp4':'video/mp4'};
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost'),dest=path.resolve(root,'.'+decodeURIComponent(url.pathname));
  if(dest!==root&&!dest.startsWith(root+path.sep))throw Error('Forbidden path');
  const stat=await fs.stat(dest),file=stat.isDirectory()?path.join(dest,'index.html'):dest;
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
  res.end(await fs.readFile(file));
 }catch{res.writeHead(404);res.end('Not found')}
});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const port=server.address().port;
let browser;
try{
 browser=await chromium.launch({args:['--no-sandbox']});
 const old=await browser.newPage({viewport:{width:1360,height:900},serviceWorkers:'block'});
 const legacyErrors=[];
 old.on('pageerror',e=>legacyErrors.push(e.stack||e.message));
 await old.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
 await old.goto('http://127.0.0.1:'+port+'/legacy-index.html',{waitUntil:'domcontentloaded',timeout:120000});
 await old.waitForFunction(id=>{
  const frame=document.getElementById('leadFrame');
  return frame&&!frame.classList.contains('is-booting')&&document.querySelector('#heroStory [data-article="'+id+'"]')&&window.NAPOLI_DATA?.articles?.some(x=>x.id===id);
 },expectedLead,{timeout:180000});
 await old.waitForTimeout(250);
 await old.addScriptTag({url:'http://127.0.0.1:'+port+'/stats-room.js'});
 const result=await old.evaluate(()=>{
  const data=JSON.parse(JSON.stringify(window.NAPOLI_DATA));
  if(!data.articles?.length||!data.results?.length)throw Error('Incomplete historical state');
  const pio2030=data.statsBySeason?.['2029–30']?.filter(r=>r[0]==='Pio Esposito')||[];
  const pioNow=data.statsBySeason?.['2030–31']?.find(r=>r[0]==='Pio Esposito');
  const pioCareer=data.careerStats?.find(r=>r[0]==='Pio Esposito');
  if(pio2030.length!==1||pio2030[0][1]!==34||pio2030[0][2]!==21)throw Error('Duplicate or stale 2029–30 Pio season');
  if(!pioNow||pioNow[1]!==45||pioNow[2]!==20)throw Error('Latest Pio club-season stats missing');
   if(!pioCareer||pioCareer[1]!==152||pioCareer[2]!==74)throw Error('Pio career reconciliation after PSG failed');
   const expectedSeason=[['Pio Esposito',8,0],['Sebastiano Esposito',1,1],['Mikey Moore',0,4],['Estêvão',1,2],['Warren Zaïre-Emery',0,3],['João Neves',2,0],['Nico Paz',1,1],['Maximilian Beier',2,2],['Anton Stach',0,1],['Scott McTominay',0,1],['Alessandro Bastoni',1,0],['Edoardo Rossetti',0,1]];if(data.statsCurrentSeason!=='2031–32'||data.statsBySeason?.['2031–32']?.length!==expectedSeason.length||!expectedSeason.every(([n,g,a])=>data.statsBySeason['2031–32'].some(r=>r[0]===n&&r[1]===g&&r[2]===a)))throw Error('2031–32 post-PSG season stats incomplete');
  if(!document.querySelector('.stats-filters [data-stats-view="2031–32"].active'))throw Error('2031–32 season tab missing or inactive');
  if(!document.querySelector('#statsTable')?.textContent?.includes('Pio Esposito'))throw Error('2031–32 first-paint empty state missing');
  if(!document.querySelector('#stats .section-head p')?.textContent?.includes('2031–32'))throw Error('Outdated active-season summary');
  if(!document.getElementById('statsVerificationNotice')?.textContent?.includes('2031–32'))throw Error('Outdated active-season verification note');
  if(!document.getElementById('keeperStats203031')?.hidden)throw Error('Historical keeper panel incorrectly displayed in new season');
  if(data.squadSnapshot?.playerCount!==38||data.squadSnapshot?.loanCount!==16||data.squadSnapshot?.knownNotLoanedCount!==22||document.querySelectorAll('#squadGroups .player-row').length!==47)throw Error('Summer 2031 squad, loans or departures incomplete');
  if(['T. Sánchez','L. Jetten','A. Reyna','A. Vergara'].some(name=>data.squadSnapshot?.players?.[name])||["F. Lawton","Y. Tran","S. Vitale","M. Valentini","G. Ricci","L. Resende","D. Parisis","C. Brun","V. Mancini","M. Hooper","J. Pagano","O. Ly","F. Freitas","G. D\'Angelo","Lirim Hasa","M. Cancio"].some(name=>!data.squadSnapshot?.players?.[name]?.onLoan))throw Error('Sales or loans not reflected in current squad');
  if(!data.squadSnapshot.departures?.some(x=>x.name==='T. Sánchez'&&x.fee===3300000)||!data.squadSnapshot.departures?.some(x=>x.name==='L. Jetten'&&x.destination==='Torino'&&x.fee===17600000)||!data.squadSnapshot.departures?.some(x=>x.name==='A. Reyna'&&x.fee===7250000)||!data.squadSnapshot.departures?.some(x=>x.name==='A. Vergara'&&x.fee===8100000))throw Error('Confirmed sales and fees missing');
  if(!data.squadSnapshot.loans?.some(x=>x.name==='M. Valentini'&&x.duration==='One year'))throw Error('Valentini one-year loan missing');
  const squadNames=Object.keys(data.squadSnapshot.players||{});
  if(['Michael Olise','Giacomo Raspadori','Kevin De Bruyne','T. Sánchez','L. Jetten','A. Reyna','A. Vergara'].some(n=>squadNames.includes(n)))throw Error('Departed player remains in current squad');
  if(data.squadSnapshot.players['Sebastiano Esposito']?.overall!==82||data.squadSnapshot.players['Sebastiano Esposito']?.age!==29||!data.squadSnapshot.arrivals?.some(x=>x.name==='Sebastiano Esposito'&&x.fee===36000000))throw Error('Completed Esposito signing missing from roster');
  if(data.squadSnapshot.players['S. Vitale']?.overall!==76||!data.squadSnapshot.players['S. Vitale']?.onLoan||data.squadSnapshot.players['V. Mancini']?.overall!==78||!data.squadSnapshot.players['V. Mancini']?.onLoan)throw Error('Vitale/Mancini ratings and loans mismatch');
  if(data.squadSnapshot.players['M. Cancio']?.overall!==61||data.squadSnapshot.players["G. D'Angelo"]?.overall!==64)throw Error('Newly pictured youth missing');
  if(data.squadSnapshot.players['O. Ly']?.overall!==67||data.squadSnapshot.players['J. Pagano']?.overall!==67||data.squadSnapshot.players['O. Burnett']?.overall!==78)throw Error('Latest pictured ratings missing');
  if(!data.squadSnapshot.loans?.some(x=>x.name==='S. Vitale'&&x.duration==='One year'))throw Error('Vitale one-year loan missing');
  if(['G. D\'Angelo','Lirim Hasa','M. Cancio'].some(n=>!data.squadSnapshot.loans.some(x=>x.name===n&&x.destination===null&&!x.duration)))throw Error('New confirmed loans missing or terms invented');
  if(!document.getElementById('youthTable')?.textContent?.includes('M. Cancio')||!document.getElementById('youthTable')?.textContent?.includes("G. D'Angelo"))throw Error('Academy table not refreshed');
  const youth=data.currentAcademySnapshot?.players||[];
  if(youth.length!==14||data.academySnapshot2031?.playerCount!==14||data.youth?.length!==14)throw Error('Latest 14-player Youth Squad snapshot missing');
  for(const [name,position,age,overall,low,high] of [['D. Castiello','CM',16,58,92,94],['D. Sagna','RM',16,60,88,94],['C. Baldé','CAM',17,64,87,93],['V. Gatti','GK',17,61,84,90],['M. Cissé','LW',15,58,84,90]]){
   const player=youth.find(p=>p.name===name);
   if(!player||player.position!==position||player.age!==age||player.overall!==overall||player.potentialMin!==low||player.potentialMax!==high||player.plan!=='Dynamic')throw Error('Academy prospect rating mismatch '+name);
  }
  if(document.querySelectorAll('#academyYouth2031 tbody tr').length!==14||!document.getElementById('academyYouth2031')?.textContent?.includes('D. Castiello'))throw Error('Youth Academy table not rendered in site');
  if(!document.querySelector('[data-senior-development]')||!document.getElementById('youthTable')?.textContent?.includes('M. Cancio'))throw Error('Separate senior-loan development table lost');
  if(document.getElementById('academy')?.textContent?.match(/nationality|nationalities|citizenship/i))throw Error('Academy UI unexpectedly exposes nationality');
  const beierNow=data.statsBySeason?.['2030–31']?.find(r=>r[0]==='Maximilian Beier');
  const estevaoNow=data.statsBySeason?.['2030–31']?.find(r=>r[0]==='Estêvão');
  const beierCareer=data.careerStats?.find(r=>r[0]==='Maximilian Beier');
   if(!beierNow||beierNow[1]!==43||beierNow[2]!==35||!beierCareer||beierCareer[1]!==135||beierCareer[2]!==92)throw Error('Beier historic season/post-PSG career mismatch');
  if(!estevaoNow||estevaoNow[1]!==3||estevaoNow[2]!==7)throw Error('Estêvão final assist not in Stats Room');
  const finalResult=data.results?.find(r=>r[0]==='Napoli'&&r[2]==='Champions League'&&r[3]===2&&r[4]===0&&String(r[6]).includes('31 May 2031'));
  if(!finalResult)throw Error('Napoli 2–0 PSG final result missing');
  if(data.uclFinal2031?.status!=='completed'||data.uclFinal2031?.winner!=='Napoli'||data.secondConsecutiveTreble2031!==true)throw Error('Championship state incomplete');
   if(data.nextClubFixture?.date!=='2031-10-05'||data.nextClubFixture?.opponent!=='Udinese'||data.nextEuropeanFixture?.opponent!=='Benfica'||data.nextEuropeanFixture?.date!=='2031-10-21')throw Error('October PSG/Benfica and Udinese schedule not reconciled');
  if(!data.articles?.some(a=>a.id==='beier-munich-champions-final-interview-may31-2031'))throw Error('Munich final mixed-zone Q&As missing');
  if(!data.results?.some(r=>r[1]==='Inter'&&r[2]==='Supercoppa Italiana'&&r[3]===1&&r[4]===1&&r[5]==='W'))throw Error('Supercoppa final result missing');
  if(!data.articles?.some(a=>a.id==='napoli-inter-supercoppa-rossetti-penalties-2031'&&a.comments?.length>=30))throw Error('Supercoppa story lost from archive');
  if(!data.articles?.some(a=>a.id==='palermo-napoli-two-two-diakite-pio-aug24-2031')||!data.articles?.some(a=>a.id==='pio-esposito-two-equalisers-palermo-aug24-2031')||!data.articles?.some(a=>a.id==='napoli-august-september-roma-arsenal-calendar-2031'))throw Error('Palermo opening edition lost from archive');
  if(!['italy-norway-2-1-pio-kean-gigio-sep9-2031','gigio-donnarumma-norway-italy-sep9-2031','italy-euro-qualifying-group-unbeaten-20-points-2031','napoli-sampdoria-two-nil-neves-pio-aug30-2031','napoli-nijstad-manchester-united-arrival-2031'].every(id=>data.articles?.some(a=>a.id===id)))throw Error('Norway/Sampdoria edition lost from archive');
   if(data.articles[0]?.id!=='napoli-psg-3-0-zaire-emery-motm-beier-bastoni-oct1-2031'||data.articles[0]?.comments?.length<18||!["beier-two-assists-paris-attack-evolution-oct1-2031","zaire-emery-motm-return-psg-oct1-2031","rossetti-bastoni-paris-corner-future-oct1-2031","bellandi-paris-napoli-arsenal-response-oct1-2031","sassuolo-napoli-1-3-burnett-reprieve-sep27-2031","napoli-inter-3-2-beier-bonny-epolo-sep2031","arsenal-napoli-1-0-ansah-epolo-raya-sep16-2031"].every(id=>data.articles?.some(a=>a.id===id)))throw Error('PSG edition and prior stories missing');
  if(!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Arsenal'&&r[2]==='Champions League'&&r[3]===0&&r[4]===1&&r[5]==='L'&&String(r[6]).includes('16 Sep 2031'))||!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Roma'&&r[2]==='Serie A'&&r[3]===2&&r[4]===0&&r[5]==='W'&&String(r[6]).includes('12 Sep 2031')))throw Error('Roma/Arsenal recent results missing');
   if(data.seasonState.league203132?.points!==13||data.seasonState.league203132?.played!==5||data.seasonState.league203132?.won!==4||data.seasonState.championsLeague203132?.lost!==1)throw Error('Five-game league record or European opener incorrect');
   if(data.careerStats.find(r=>r[0]==='Sebastiano Esposito')?.[1]!==1||data.careerStats.find(r=>r[0]==='Sebastiano Esposito')?.[2]!==1||data.careerStats.find(r=>r[0]==='Mikey Moore')?.[2]!==32)throw Error('Esposito and Moore club career totals missing');
  const qualifier=data.italyQualifyingFinal2031;if(qualifier?.italy?.points!==20||qualifier?.italy?.wins!==6||qualifier?.italy?.draws!==2||qualifier?.italy?.losses!==0||qualifier.groupTable?.length!==5||qualifier.groupTable[0]?.goalDifference!==10||qualifier.groupTable[1]?.team!=='Denmark'||qualifier.groupTable[1]?.points!==13)throw Error('Italy final qualifying table missing');
  if(!data.results?.some(r=>r[0]==='Napoli'&&r[1]==='Sampdoria'&&r[2]==='Serie A'&&r[3]===2&&r[4]===0&&String(r[6]).includes('30 Aug 2031'))||!data.results?.some(r=>r[0]==='Italy'&&r[1]==='Norway'&&r[2]==='EC Qualifier'&&r[3]===2&&r[4]===1&&String(r[6]).includes('9 Sep 2031')))throw Error('Recent match results missing');
  if(data.squadSnapshot.players['Ruud Nijstad']?.overall!==78||data.squadSnapshot.players['Ruud Nijstad']?.potential!==88||!data.squadSnapshot.arrivals?.some(x=>x.name==='Ruud Nijstad'&&x.fee===27500000))throw Error('Nijstad transfer missing from squad');
   if(data.careerStats.find(r=>r[0]==='Mikey Moore')?.[2]!==32||data.careerStats.find(r=>r[0]==='João Neves')?.[1]!==9||data.careerStats.find(r=>r[0]==='Nico Paz')?.[1]!==21||data.careerStats.find(r=>r[0]==='Estêvão')?.[1]!==4||data.careerStats.find(r=>r[0]==='Alessandro Bastoni')?.[1]!==3||data.careerStats.find(r=>r[0]==='Edoardo Rossetti')?.[2]!==1)throw Error('PSG career contributions missing');
  if(!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Palermo'&&r[2]==='Serie A'&&r[3]===2&&r[4]===2&&r[5]==='D'&&String(r[6]).includes('24 Aug 2031')))throw Error('Palermo 2–2 opening result missing');
   if(!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Inter'&&r[2]==='Serie A'&&r[3]===3&&r[4]===2)||!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Sassuolo'&&r[2]==='Serie A'&&r[3]===3&&r[4]===1&&String(r[6]).includes('27 Sep 2031')))throw Error('Inter/Sassuolo results missing');
   if(!data.results.some(r=>r[0]==='Napoli'&&r[1]==='Paris Saint-Germain'&&r[2]==='Champions League'&&r[3]===3&&r[4]===0&&String(r[6]).includes('1 Oct 2031'))||data.psgNapoliOct1_2031?.manOfTheMatch!=='Warren Zaïre-Emery'||data.seasonState.championsLeague203132?.points!==3||data.seasonState.championsLeague203132?.played!==2||data.seasonState.championsLeague203132?.goalsAgainst!==1)throw Error('Napoli 3–0 PSG/MOTM/league phase standings missing');
   const statsAudit={seasonPio:[pioNow[1],pioNow[2]],careerPio:[pioCareer[1],pioCareer[2]],historicalPio:[pio2030[0][1],pio2030[0][2]],firstPaint:true,italyGroupTop:qualifier.groupTable[0],nextClub:data.nextClubFixture.opponent,latestEurope:data.psgNapoliOct1_2031?.resultText,latestSerieA:data.sassuoloNapoliSep27_2031?.resultText};
  const current={...data,articles:data.articles.slice(0,24)};
  const archive={articles:data.articles,comments:{
   commentOverride:window.NAPOLI_COMMENT_OVERRIDE||{},
   curatedArchive:window.NAPOLI_CURATED_ARCHIVE||{},
   legacyAuthoredComments:window.NAPOLI_LEGACY_AUTHORED_COMMENTS||{}
  }};
  const hero=document.querySelector('#heroStory [data-article]')?.getAttribute('data-article');
  document.querySelectorAll('script,[data-boot-preview]').forEach(el=>el.remove());
  for(const id of ['newsGrid','articleFilters','readerContent'])document.getElementById(id)?.replaceChildren();
  document.body.classList.remove('seasonroom-hydrating');
  document.getElementById('leadFrame')?.classList.remove('is-booting');
  document.getElementById('heroStory')?.removeAttribute('aria-hidden');
  return {hero,current,archive,html:'<!doctype html>\n'+document.documentElement.outerHTML,count:{articles:data.articles.length,results:data.results.length,seasons:Object.keys(data.statsBySeason||{}).length},statsAudit};
 });
 const publicationVoice=normalizeSeasonRoomPublication(result.archive,result.archive.comments);
 result.current.articles=result.archive.articles.slice(0,24);
 if(result.current.meta)delete result.current.meta.fictionalNotice;
 if(legacyErrors.length)throw Error('Legacy script execution failures: '+legacyErrors.join('; '));
 if(result.hero!==expectedLead)throw Error('Wrong lead: '+result.hero+' expected '+expectedLead);
 if(result.count.articles<40||result.count.results<10)throw Error('Incomplete archive: '+JSON.stringify(result.count));
 await fs.writeFile('snapshot-data.js','window.NAPOLI_DATA='+JSON.stringify(result.current)+';\nwindow.NAPOLI_SNAPSHOT={archiveUrl:"news-archive.json?v='+revision+'",totalArticles:'+result.count.articles+',version:"'+revision+'"};\n');
 await fs.writeFile('news-archive.json',JSON.stringify(result.archive));
 const scripts=['snapshot-data.js','snapshot-runtime.js','stats-room.js','comments-engine-v2.js','language-controller.js','image-fixes.js'].map(s=>'<script src="'+s+'?v='+revision+'"></script>').join('');
 // Some earlier historical overlays still repaint the static masthead and media
 // captions during source replay. Keep generated first-paint copy in-world too.
 result.html=result.html
  .replaceAll('FC 26 CAREER MODE · NAPOLI 2030–31','NAPOLI & ITALIA · SEASON 2030–31')
  .replace(/>Gameplay · /g,'>Match footage · ')
  .replace(/Season Room generated composite[^<]*FC 26 save\./g,'Season Room · Editorial illustration');
 if(result.html.includes('FC 26 CAREER MODE')||result.html.includes('>Gameplay · ')||/Season Room generated composite[^<]*FC 26 save/.test(result.html))
  throw Error('Historical overlay restored out-of-world first-paint copy');
 await fs.writeFile('index.html',result.html.replace('</body>',scripts+'</body>'));
 await fs.writeFile('snapshot-build-report.json',JSON.stringify({revision,...result.count,statsAudit:result.statsAudit,publicationVoice,legacyErrors:legacyErrors.slice(0,30)},null,2));
 console.log('Build state:',JSON.stringify({revision,...result.count,legacyErrors:legacyErrors.slice(0,6)}));
 const fresh=await browser.newPage({viewport:{width:390,height:844},serviceWorkers:'block'});
 const requests=[],errors=[];
 fresh.on('request',r=>{if(/\.js(?:\?|$)/.test(r.url()))requests.push(new URL(r.url()).pathname)});
 fresh.on('pageerror',e=>errors.push(e.message));
 await fresh.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
 await fresh.goto('http://127.0.0.1:'+port+'/',{waitUntil:'domcontentloaded',timeout:60000});
 console.log('Compact diagnostics:',JSON.stringify(await fresh.evaluate(()=>({scripts:[...document.querySelectorAll('script[src]')].map(s=>s.getAttribute('src')),dataPresent:typeof window.NAPOLI_DATA,snapshot:typeof window.NAPOLI_SNAPSHOT,heading:document.querySelector('#heroStory h2')?.textContent,bodyEnd:document.body.outerHTML.slice(-400)}))), 'requests', JSON.stringify(requests), 'errors', JSON.stringify(errors));
 await fresh.waitForFunction(()=>!!window.NAPOLI_SNAPSHOT,null,{timeout:15000});
 const rendered=await fresh.locator('#heroStory [data-article]').getAttribute('data-article');
 if(rendered!==result.hero)throw Error('Production lead mismatch: '+rendered);
 if(requests.length>7||requests.some(s=>/(?:^|\/)(?:post-|site-visible-|stories-|data\.js$)/.test(s)))throw Error('Historical scripts fetched on production '+JSON.stringify(requests));
 await fresh.locator('#heroStory [data-article]').click();
 await fresh.locator('#readerHeadline').waitFor();
 await fresh.locator('.fan-comments').waitFor({timeout:15000});
 await fresh.locator('#articleModal [data-close-article]').last().click({force:true});
 await fresh.locator('.section-nav [data-target="news"]').click();
 await fresh.waitForFunction(()=>window.NAPOLI_SNAPSHOT?.archiveLoaded===true,null,{timeout:30000});
 const found=await fresh.locator('#newsGrid [data-article]').count();
 if(found!==result.count.articles)throw Error('Missing archived articles '+found+'/'+result.count.articles);
 const lastArticle=await fresh.locator('#newsGrid [data-article]').last().getAttribute('data-article');
 await fresh.locator('#newsGrid [data-article]').last().click();
 await fresh.waitForFunction(id=>document.getElementById('readerContent')?.dataset.articleId===id,lastArticle,{timeout:12000});
 const archiveTitle=await fresh.locator('#readerHeadline').innerText();
 if(!archiveTitle)throw Error('Archived article failed to open');
 await fresh.locator('#articleModal [data-close-article]').last().click({force:true});
 await fresh.locator('.section-nav [data-target="stats"]').click();
 await fresh.locator('.stats-filters [data-stats-view="2031–32"]').click();
 if(!(await fresh.locator('#statsTable').innerText()).includes('Pio Esposito'))throw Error('New 2031–32 statistics tab did not render');
 await fresh.locator('.stats-filters [data-stats-view="2030–31"]').click();
 if(!(await fresh.locator('#statsTable').innerText()).includes('Maximilian Beier'))throw Error('Historical 2030–31 statistics lost');
 let first=await fresh.locator('#statsTable tbody tr').first().locator('td').allTextContents();
 if(first[0]!=='Pio Esposito'||first[1]!=='45'||first[2]!=='20')throw Error('2030–31 final numbers changed: '+JSON.stringify(first));
 await fresh.locator('[data-stats-view="career"]').click();
 first=await fresh.locator('#statsTable tbody tr').first().locator('td').allTextContents();
 if(first[0]!=='Pio Esposito'||first[1]!=='152'||first[2]!=='74')throw Error('Stats Room career duplicate: '+JSON.stringify(first));
 await fresh.locator('[data-stats-view="2029–30"]').click();
 const pioCount=await fresh.locator('#statsTable tbody tr').filter({hasText:'Pio Esposito'}).count();
 if(pioCount!==1)throw Error('Stats Room duplicate Pio 2029–30 row: '+pioCount);
 await fresh.locator('[data-stats-view="2031–32"]').click();
 await fresh.locator('.section-nav [data-target="squad"]').click();
 if(await fresh.locator('#squadGroups .squad-group .player-row').count()!==47)throw Error('Current 38-player squad, 16 loans, arrivals or departures not visible');
 const loans=await fresh.locator('#squadGroups .squad-group').filter({hasText:'Players on loan'}).innerText();
 if(['F. Lawton','Y. Tran','S. Vitale','M. Valentini','G. Ricci','L. Resende','D. Parisis','C. Brun','V. Mancini','M. Hooper','J. Pagano','O. Ly','F. Freitas','G. D\'Angelo','Lirim Hasa','M. Cancio'].some(name=>!loans.includes(name)))throw Error('A confirmed loanee is missing from the squad');
 const squadView=await fresh.locator('#squadGroups').innerText();
 if(['T. Sánchez','L. Jetten','A. Reyna','A. Vergara'].some(name=>!squadView.includes(name)))throw Error('A completed sale is missing from departures');
 if(!(await fresh.locator('#squadGroups').innerText()).includes('Sebastiano Esposito'))throw Error('Completed Sebastiano signing missing from squad');
 if(!(await fresh.locator('#squadGroups').innerText()).includes('Ruud Nijstad'))throw Error('Ruud Nijstad not visible in current squad');
 await fresh.locator('.section-nav [data-target="academy"]').click();
 if(await fresh.locator('#academyYouth2031 tbody tr').count()!==14)throw Error('Compiled academy prospect table incomplete');
 if(!(await fresh.locator('#academyYouth2031').innerText()).includes('D. Castiello'))throw Error('Castiello missing from compiled academy');
 if(!(await fresh.locator('#youthTable').innerText()).includes('M. Cancio'))throw Error('Senior/loan development table lost during academy refresh');
 await fresh.locator('.section-nav [data-target="matches"]').click();
 await fresh.locator('#teamFilter').selectOption('Italy');
 const italyCards=await fresh.locator('#matchesList .match-card').count();
 if(!italyCards)throw Error('Italy match filter returned no results');
 if(errors.length)throw Error('Production errors: '+errors.join('; '));
 console.log('Production test passed',JSON.stringify({lead:rendered,articles:found,archived:lastArticle,italyMatches:italyCards,jsRequests:requests}));
 await fresh.close();await old.close();
}finally{
 await browser?.close();
 await new Promise(ok=>server.close(ok));
}
