/* 31 May 2031, Munich: Napoli 2–0 Paris Saint-Germain, third consecutive Champions League win, second consecutive treble. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ids=["napoli-psg-2-0-munich-threepeat-treble-may31-2031","two-consecutive-trebles-napoli-era-may31-2031","beier-munich-germany-final-brace-may31-2031","beier-munich-champions-final-interview-may31-2031","pio-esposito-final-assist-interview-may31-2031","epolo-chevalier-munich-goalkeeper-final-may31-2031","epolo-munich-clean-sheet-interview-may31-2031","bastoni-line-dembele-kvara-vitinha-final-may31-2031","bastoni-captain-munich-interview-may31-2031","estevao-beier-assist-munich-interview-may31-2031","nico-paz-quiet-touch-second-goal-interview-may31-2031","neves-psg-2028-to-napoli-2031-may31","munich-2031-napoli-supporters-celebration-may31","bellandi-munich-napoli-two-trebles-verdict-may31"];
const source=D.articles||[],front=ids.map(id=>source.find(a=>a.id===id));
if(front.some(x=>!x))throw Error("Munich championship article missing: "+ids.filter(x=>!source.some(a=>a.id===x)).join(","));
const chosen=new Set(ids);
D.articles=[...front,...source.filter(x=>!chosen.has(x.id))];
const final={date:"2031-05-31",team:"Napoli",opponent:"Paris Saint-Germain",gameAlias:"PSG",venue:"Neutral · Munich",competition:"Champions League",round:"Final",stage:"Final",status:"completed",score:"2–0",resultText:"Napoli 2–0 Paris Saint-Germain",halftime:"0–0",goalsFor:2,goalsAgainst:0,winner:"Napoli",trophy:"Champions League 2030–31",events:[
{minute:"61",team:"Napoli",scorer:"Maximilian Beier",assist:"Estêvão",officialAssist:true,notes:"Estêvão spots Beier's run, finds him behind the PSG line; Beier is through against Chevalier and finishes."},
{minute:"71",team:"Napoli",scorer:"Maximilian Beier",assist:"Pio Esposito",officialAssist:true,notes:"Nico Paz builds from the wing, finds Pio in the box; Pio lays the ball off for Beier to score his second."},
{minute:"88",team:"PSG",type:"offside",notes:"PSG offside flagged. No other details of this attack confirmed."}
],notes:"31 May Munich UEFA Champions League final. HT0–0: Chevalier one huge save, Epolo one huge save (not their total save counts). 61 Beier from Estêvão; 71 Beier from Pio after Nico Paz buildup. PSG offside 88. FT Napoli2–0 PSG; Epolo clean sheet. Third consecutive Champions League trophy, second consecutive Serie A+Coppa Italia+UCL treble. Extra match events, xG, cards, lineups and save totals not reported."};
D.napoliPsgUclFinalMay31_2031=final;
for(const key of ["latestMatch","latestClubMatch","latestCompletedFixture","lastCompletedFixture","lastCompletedEuropeanFixture","latestEuropeanMatch","latestClubResult"])D[key]=final;
D.currentCalendarDate2031="2031-05-31";
for(const key of ["aprilMay2031Schedule","may2031Schedule","april2031Schedule","schedule203031","fixtures"])if(Array.isArray(D[key])){
 const i=D[key].findIndex(x=>x.date==="2031-05-31"&&x.team==="Napoli"&&x.competition==="Champions League");
 if(i>=0)D[key][i]={...D[key][i],...final};else D[key].push({...final});
 D[key].sort((a,b)=>String(a.date||"9999").localeCompare(String(b.date||"9999")));
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==="Napoli"&&/Paris Saint-Germain|PSG/.test(String(r[1]))&&r[2]==="Champions League"&&String(r[6]).includes("31 May 2031")))
 D.results.push(["Napoli","Paris Saint-Germain","Champions League",2,0,"W","31 May 2031 · Neutral · Munich · FINAL","CHAMPIONS LEAGUE WINNERS. HT0–0, Epolo and Chevalier one huge save each. 61 Beier (Estêvão), 71 Beier (Pio after Nico Paz buildup). PSG offside88. FT2–0. Third consecutive UCL; second consecutive TREBLE."]);
const steps=[
{n:"Maximilian Beier",from:[41,35],to:[43,35],careerFrom:[131,90],careerTo:[133,90],note:"Munich PSG final May31: 61 goal from Estêvão; 71 goal from Pio assist; decisive brace."},
{n:"Pio Esposito",from:[45,19],to:[45,20],careerFrom:[144,73],careerTo:[144,74],note:"Munich PSG final May31: 71 official assist to Beier after Nico Paz buildup."},
{n:"Estêvão",from:[3,6],to:[3,7],careerFrom:[3,6],careerTo:[3,7],note:"Munich PSG final May31: 61 official assist Beier one-on-one."}
];
for(const p of steps){
 for(const arr of [D.stats,D.statsBySeason?.["2030–31"]]){
  if(!Array.isArray(arr))throw Error("Season stats missing");
  const row=arr.find(r=>r[0]===p.n);
  if(!row)throw Error("Player missing from season stats: "+p.n);
  if(Number(row[1])===p.from[0]&&Number(row[2])===p.from[1]){row[1]=p.to[0];row[2]=p.to[1];}
  else if(Number(row[1])!==p.to[0]||Number(row[2])!==p.to[1])throw Error("Unexpected season total: "+p.n+" "+row[1]+"/"+row[2]);
  if(!String(row[3]||"").includes("Munich PSG final May31"))row[3]=(row[3]||"")+" | "+p.note;
 }
 const r=(D.careerStats||[]).find(x=>x[0]===p.n);
 if(!r)throw Error("Career stats missing "+p.n);
 if(Number(r[1])===p.careerFrom[0]&&Number(r[2])===p.careerFrom[1]){r[1]=p.careerTo[0];r[2]=p.careerTo[1];}
 else if(Number(r[1])!==p.careerTo[0]||Number(r[2])!==p.careerTo[1])throw Error("Unexpected career total "+p.n+" "+r[1]+"/"+r[2]);
}
for(const arr of [D.stats,D.statsBySeason["2030–31"],D.careerStats])if(Array.isArray(arr))arr.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0));
D.clubStatAppliedMunichPsgFinalMay31_2031=true;
D.statsRoomAsOf="31 May 2031";
D.statsRoomAudit={...(D.statsRoomAudit||{}),pioCareerGoals:144,pioCareerAssists:74,pio202930:[34,21],clubOnly:true,historical202829Partial:true,munichFinal:{Beier:[43,35],Pio:[45,20],Estevao:[3,7]}};
D.statsScope="Napoli competitive club goals/assists through PSG Champions League final in Munich 31 May 2031: Pio 45G20A, Beier43G35A, Estêvão3G7A. Italy excluded; historic records are recorded minima.";
D.seasonState=D.seasonState||{};
D.seasonState.championsLeague={...(D.seasonState.championsLeague||{}),stage:"Completed · Winners",status:"CHAMPIONS LEAGUE WINNERS: Napoli 2–0 PSG, Munich 31 May 2031. Beier61 (Estêvão), 71 (Pio). Third successive title; fourth consecutive final.",winner:"Napoli",titleWon:true,finalOpponent:"Paris Saint-Germain",finalDate:"2031-05-31",finalStatus:"completed",finalResult:"Napoli 2–0 PSG",final};
D.seasonState.ucl={...(D.seasonState.ucl||{}),stage:"Champions",titleWon:true,latestResult:"Napoli 2–0 PSG, Champions League final May31",finalResult:"Napoli 2–0 PSG",champions:"Napoli",note:"League phase played/w/d/l statistics remain league-phase only, not full knockout totals."};
D.seasonState.treble={season:"2030–31",won:true,consecutive:2,competitions:["Serie A","Coppa Italia","Champions League"],finalVictory:"Napoli 2–0 PSG · Munich 31 May 2031"};
D.season203031={...(D.season203031||{}),
 updated:"Napoli 2–0 PSG Champions League FINAL May31 Munich, HT0–0, Beier61 (Estêvão) and 71 (Pio after Paz buildup). 3rd straight UCL and second successive Serie A-Coppa Italia-Champions League treble. Four consecutive Scudetti. Serie A finished 87/38. No subsequent fixture yet established.",
 statsVerifiedThrough:"Competitive Napoli 2030–31 final through PSG May31: Pio45G20A Beier43G35A Estêvão3G7A Moore10G13A; Italy separate.",
 latestResult:"Napoli 2–0 Paris Saint-Germain",latestResultDate:"2031-05-31",latestResultCompetition:"Champions League",
 nextClubOpponent:null,nextClubCompetition:null,nextClubDate:null,nextClubMatch:null,nextClubFixture:null,
 championsLeague:{...(D.season203031?.championsLeague||{}),stage:"Champions",status:"CHAMPIONS 31 May 2031",titleWon:true,champions:"Napoli",winner:"Napoli",finalOpponent:"Paris Saint-Germain",finalDate:"2031-05-31",finalStatus:"completed",finalResult:"Napoli 2–0 PSG",final,threeConsecutiveTitles:true,fourConsecutiveFinals:true},
 treble:{won:true,consecutive:2,components:["Serie A","Coppa Italia","Champions League"]}};
D.championsLeague203031={...(D.championsLeague203031||{}),stage:"Champions",status:"Napoli Champions League winners, 31 May 2031; final PSG 2–0 in Munich.",titleWon:true,finalDate:"2031-05-31",finalResult:"Napoli 2–0 PSG",winner:"Napoli"};
D.uclFinal2031={...(D.uclFinal2031||{}),...final,history:(D.uclFinal2031?.history||[]).map(x=>x.season==="2030–31"?{...x,score:"Napoli 2–0 PSG",status:"completed",winner:"Napoli"}:x),consecutiveNapoliTitles:3};
D.upcoming=[];for(const key of ["nextMatch","nextFixture","nextClubMatch","nextClubFixture","nextSerieAFixture","nextLeagueMatch","nextEuropeanFixture","nextEuropeanOpponent"])D[key]=null;
D.seasonState.nextFixture=null;
D.latestResult=["Napoli","2–0","PSG","31 May 2031 · Champions League FINAL · Munich · Beier61 (Estêvão), 71 (Pio)"];
D.latestTrophy={competition:"Champions League",status:"Won",winner:"Napoli",season:"2030–31",date:"2031-05-31",opponent:"Paris Saint-Germain",result:"Napoli 2–0 PSG",consecutiveEuropeanTitles:3,secondConsecutiveTreble:true};
D.trophies=Array.isArray(D.trophies)?D.trophies:[];
if(!D.trophies.includes("Champions League 2030–31"))D.trophies.push("Champions League 2030–31");
D.latestChampionsLeagueChampion="Napoli";D.thirdConsecutiveChampionsLeague2031=true;D.secondConsecutiveTreble2031=true;
D.keeperStats203031=D.keeperStats203031||{};
const k=D.keeperStats203031.Epolo=D.keeperStats203031.Epolo||{};
if(k.played===1&&k.saves===6&&k.goalsConceded===1){
 k.knownMilanAug25_2030={saves:6,goalsConceded:1,match:"Napoli 1–1 AC Milan · 25 August 2030"};
 delete k.played;delete k.saves;delete k.goalsConceded;delete k.cleanSheets;
}
Object.assign(k,{lastMatch:"Napoli 2–0 PSG · 31 May 2031 UEFA Champions League final",lastConfirmedCleanSheet:"Napoli 2–0 PSG · Munich · 31 May 2031",lastKnownPerformance:"Made an enormous first-half save and completed a clean sheet against PSG in the Champions League final. Total saves and complete season appearances unknown.",finalMay31:{started:true,oneHugeFirstHalfSave:true,cleanSheet:true,fullMatchSaves:null,conceded:0}});
D.meta={...(D.meta||{}),season:"2030–31 · SERIE A + COPPA ITALIA + CHAMPIONS LEAGUE TREBLE WINNERS · THREE STRAIGHT EUROPEAN TITLES"};
D.hero={...(D.hero||{}),articleId:ids[0],strap:"THREE IN A ROW · NAPOLI 2–0 PSG · SECOND CONSECUTIVE TREBLE"};
const editorial={"ticker":["NAPOLI ARE EUROPEAN CHAMPIONS · THREE STRAIGHT CHAMPIONS LEAGUE TITLES","NAPOLI 2–0 PARIS SAINT-GERMAIN · MUNICH · 31 MAY 2031","BEIER 61′ FROM ESTÊVÃO · 71′ FROM PIO ESPOSITO","SECOND CONSECUTIVE TREBLE · SERIE A + COPPA ITALIA + CHAMPIONS LEAGUE","BEIER 43 GOALS + 35 ASSISTS · PIO 45 GOALS + 20 ASSISTS","EPOLO FIRST-HALF SAVE · CHAMPIONS LEAGUE FINAL CLEAN SHEET","FOUR CONSECUTIVE SCUDETTI · THREE CONSECUTIVE EUROPEAN CUPS","MUNICH IS AZZURRO · SIAMO NOI, I CAMPIONI D'EUROPA SIAMO NOI"],"whispers":[["THREE IN A ROW","Napoli beat PSG 2–0 in Munich on 31 May. Three successive Champions League titles, following 2029 against Real Madrid and 2030 against Porto."],["BEIER'S GERMAN NIGHT","61′ from Estêvão's pass, 71′ from Pio's layoff after Paz's buildup. Beier's brace makes 43 goals in the club season."],["DOUBLE TREBLE","Napoli completed the Serie A, Coppa Italia and Champions League treble for the second straight campaign. Fourth consecutive Scudetto."],["KEEPER AND LINE","Epolo kept PSG out with a massive first-half save. The defence preserved the 2–0 clean sheet, with PSG offside at 88′."],["THE PEOPLE OF NAPLES","Players, staff and supporters celebrate in Munich. Six mixed-zone interviews and a full newsroom edition follow the final."],["SEASON COMPLETE","No post-final fixture has been confirmed. Napoli's Serie A record remains 87 points in 38 matches. Italy fixtures remain separate."]]};
D.ticker=editorial.ticker;D.whispers=editorial.whispers;
const card=(a,variant)=>'<article class="article-card '+E(variant)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':"")+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const lead=front[0];
if($("heroStory"))$("heroStory").innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="'+E(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story →</span></div>';
if($("topStories"))$("topStories").innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,"0")+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join("");
if($("latestNews"))$("latestNews").innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?"compact":"wide")).join("");
if($("newsGrid"))$("newsGrid").innerHTML=D.articles.map((a,i)=>card(a,i?"standard":"lead-grid")).join("");
if($("articleFilters"))$("articleFilters").innerHTML=["All",...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?"":"active")+'" data-category="'+E(a)+'">'+E(a)+'</button>').join("");
if($("tickerTrack"))$("tickerTrack").innerHTML=[...D.ticker,...D.ticker].map(x=>"<span>"+E(x)+"</span>").join("");
if($("whisperList"))$("whisperList").innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join("");
if($("latestResult"))$("latestResult").innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>PSG</span></div><p>CHAMPIONS LEAGUE FINAL · 31 MAY · BEIER 61′, 71′ · TREBLE WINNERS</p>';
if($("formLine"))$("formLine").innerHTML='<div><strong>UEFA CHAMPIONS LEAGUE WINNERS · THREE STRAIGHT</strong><span>Napoli 2–0 PSG · Munich · Beier61 (Estêvão), 71 (Pio)</span></div><div><strong>SECOND CONSECUTIVE TREBLE</strong><span>Serie A · Coppa Italia · Champions League · 2030–31</span></div><div><strong>FOUR STRAIGHT SCUDETTI · LEAGUE COMPLETE</strong><span>87 points / 38 · 26W9D3L · 78 GF · 29 GA · +49</span></div>';
if($("upcomingStrip"))$("upcomingStrip").innerHTML='<div class="fixture"><span>SEASON 2030–31 COMPLETE</span><strong>NAPOLI · EUROPEAN CHAMPIONS</strong><small>Next club fixtures not yet announced</small></div>';
if($("nextTwo"))$("nextTwo").innerHTML='<div class="next-row"><strong>SEASON COMPLETE · TREBLE WINNERS</strong><span>No subsequent Napoli fixture has been confirmed</span></div>';
const status=document.querySelector(".header-status span:last-child");if(status)status.textContent="THREE STRAIGHT EUROPEAN CUPS · SECOND STRAIGHT TREBLE";
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content="Napoli 2–0 PSG in Munich on 31 May 2031. Beier scores twice to deliver a third consecutive Champions League title and a second consecutive Serie A, Coppa Italia and Champions League treble.";
if($("matchesList")&&!$("matchesList").querySelector("[data-munich-psg-final-may31]"))$("matchesList").innerHTML='<div class="match-card" data-munich-psg-final-may31="true"><div class="result-badge W">W</div><div class="match-main"><span>Champions League · FINAL · Munich · 31 May 2031 · CHAMPIONS</span><strong>Napoli <b>2–0</b> Paris Saint-Germain</strong><p>Beier 61′ (Estêvão), Beier 71′ (Pio) · EPOLO CLEAN SHEET · THIRD STRAIGHT EUROPEAN TITLE · SECOND STRAIGHT TREBLE</p></div></div>'+$("matchesList").innerHTML;
})();