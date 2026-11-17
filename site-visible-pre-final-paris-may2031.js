/* 25 May 2031 final league match + Paris pre-final press, player day and awards. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const E=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const leadId="saladino-paris-press-no-revenge-may2031";
const lead=(D.articles||[]).find(a=>a.id===leadId);
if(!lead)throw Error("Paris pre-final press lead missing");
const milan={date:"2031-05-25",team:"Napoli",opponent:"Milano FC",gameAlias:"AC Milan",venue:"Away",competition:"Serie A",round:"38",status:"completed",score:"0–1",resultText:"AC Milan 1–0 Napoli",goalsFor:0,goalsAgainst:1,winner:"AC Milan",events:[{minute:"58",team:"AC Milan",scorer:"Giménez",type:"penalty",assist:null,officialAssist:false}],notes:"Final Serie A match. Napoli heavily rotated after title was secured. Giménez penalty at 58 minutes. No Napoli goals, assists or further events reported."};
const psg={date:"2031-05-31",team:"Napoli",opponent:"Paris Saint-Germain",gameAlias:"PSG",venue:"Neutral",competition:"Champions League",round:"Final",stage:"Final",status:"scheduled",score:null,result:null};
D.milanLeagueFinalMay25_2031=milan;
for(const key of ["latestMatch","latestClubMatch","latestLeagueMatch","latestCompletedFixture","lastCompletedLeagueFixture","latestClubLeagueResult"])D[key]=milan;
D.currentCalendarDate2031="2031-05-25";
for(const key of ["aprilMay2031Schedule","may2031Schedule","april2031Schedule","schedule203031"])if(Array.isArray(D[key])){
 const i=D[key].findIndex(x=>x.date==="2031-05-25"&&x.team==="Napoli"&&x.competition==="Serie A");
 if(i>=0)D[key][i]={...D[key][i],...milan};else D[key].push({...milan});
 D[key].sort((a,b)=>String(a.date||"9999").localeCompare(String(b.date||"9999")));
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==="Napoli"&&/Milan|Milano/.test(String(r[1]))&&r[2]==="Serie A"&&String(r[6]).includes("25 May 2031")))
 D.results.push(["Napoli","Milano FC","Serie A",0,1,"L","25 May 2031 · Away · final league match","Giménez 58′ penalty. Napoli heavily rotated, already champions. Final Serie A: 87 pts / 38; 26W9D3L 78GF29GA +49."]);
D.seasonState=D.seasonState||{};
const L=D.seasonState.league=D.seasonState.league||{};
Object.assign(L,{played:38,wins:26,draws:9,losses:3,points:87,goalsFor:78,goalsAgainst:29,goalDifference:49,remaining:0,position:1,asOf:"2031-05-25",titleClinched:true,titleWon:true,won:true,champions:"Napoli",consecutiveScudetti:4,championshipSeason:"2030–31",status:"NAPOLI 2030–31 SERIE A CHAMPIONS. Milan 1–0 Napoli away May25 (Giménez penalty58); final Napoli league 87 pts/38, 26W9D3L GF78 GA29 GD+49. Final results for other clubs not reported.",leadPoints:null});
const napoliRow={name:"Napoli",gameName:"SSC Napoli",rank:1,played:38,points:87,won:26,drawn:9,lost:3,goalsFor:78,goalsAgainst:29,goalDifference:49};
const previousRows=Array.isArray(L.topFive)?L.topFive:[];
const rows=[napoliRow,...previousRows.filter(x=>x.name!=="Napoli")];
L.topFive=rows;L.topThree=rows.slice(0,3);D.latestSerieATopFive=rows;
D.serieAStandingsAfterMilanMay25_2031={date:"2031-05-25",partial:true,napoliFinal:true,rivalsFinalUnknown:true,rows:[napoliRow]};
D.season203031={...(D.season203031||{}),
 updated:"Milan 1–0 Napoli 25 May 2031. Champions finish Serie A 87 points/38, 26W9D3L 78GF29GA+49. PSG final May31 unplayed.",
 statsVerifiedThrough:"Napoli competitive club contributions unchanged after Milan, through Como18: Pio45G19A Beier41G35A Moore10G13A. Italy separate.",
 latestResult:"AC Milan 1–0 Napoli",latestResultDate:"2031-05-25",latestResultCompetition:"Serie A",
 latestLeagueResult:milan,lastCompletedLeagueFixture:milan,
 nextClubOpponent:"PSG",nextClubCompetition:"Champions League",nextClubDate:"2031-05-31",nextClubMatch:psg,nextClubFixture:psg,
 serieA:{...(D.season203031?.serieA||{}),played:38,points:87,won:true,titleClinched:true,champions:"Napoli",consecutiveTitles:4,wins:26,draws:9,losses:3,goalsFor:78,goalsAgainst:29,goalDifference:49,remaining:0,position:1,asOf:"2031-05-25"},
 titleRace:{...(D.season203031?.titleRace||{}),napoliPoints:87,napoliPlayed:38,won:true,clinched:true,leagueComplete:true,nextLeagueFixture:null},
 championsLeague:{...(D.season203031?.championsLeague||{}),finalOpponent:"Paris Saint-Germain",finalDate:"2031-05-31",finalStatus:"scheduled unplayed",finalResult:null}
};
D.upcoming=[psg];D.nextMatch=psg;D.nextFixture=psg;D.nextClubMatch=psg;D.nextClubFixture=psg;D.nextSerieAFixture=null;D.nextLeagueMatch=null;D.nextEuropeanFixture=psg;D.nextEuropeanOpponent="PSG";D.seasonState.nextFixture=psg;
D.latestResult=["Napoli","0–1","AC Milan","25 May 2031 Serie A · Giménez 58′ penalty"];
D.statsScope="Napoli competitive club through Milan May25 (no goals scored); last Napoli goal contributions vs Como May18: Pio45G19A Beier41G35A Moore10G13A. Italy excluded. Serie A champions, 87/38.";
D.awards203031={season:"2030–31",competition:"Serie A",playerOfSeason:"Leo Sauer",teamOfSeasonNapoli:["Maximilian Beier"],scoring:{"Rafael Leão":26,"Pio Esposito":25,"Maximilian Beier":22,"Leo Sauer":22},leagueAssists:{"Maximilian Beier":23,"Pio Esposito":12},note:"Known award announcements and league top-scoring/assist screenshots; other award criteria and players’ full totals not established."};
D.meta={...(D.meta||{}),season:"2030–31 · Serie A, Coppa Italia and Supercoppa champions · UCL finalists"};
D.hero={...(D.hero||{}),articleId:leadId,strap:"CHAMPIONS LEAGUE FINAL · PSG vs NAPOLI · 31 MAY · NO REVENGE"};
const editorial={"ticker":["PARIS AWAITS · NAPOLI vs PSG · CHAMPIONS LEAGUE FINAL 31 MAY","SALADINO: NO REVENGE · DEFEND THE TROPHY","MILAN 1–0 NAPOLI · GIMÉNEZ 58′ PENALTY · FINAL LEAGUE MATCH","NAPOLI SERIE A CHAMPIONS · 87 POINTS / 38 · 26W 9D 3L","BEIER 22 LEAGUE GOALS + 23 ASSISTS · PIO 25 LEAGUE GOALS","LEO SAUER PLAYER OF THE SEASON · BEIER IN SERIE A XI","BASTONI, PIO, BEIER, MOORE SPEAK BEFORE PSG","FOUR SCUDETTI · TWO STRAIGHT EUROPEAN CUPS · THIRD AT STAKE"],"whispers":[["THE PARIS FINAL","Napoli meet PSG on 31 May at a neutral venue. Fourth consecutive final, with a third successive European title at stake."],["SALADINO SETS THE TERMS","The manager rejects revenge and promises a disciplined approach. Selection remains unrevealed."],["LEAGUE COMPLETE","Milan beat rotated Napoli 1–0 on 25 May, Giménez scoring a 58-minute penalty. Napoli finish champions with 87 points."],["AWARDS DEBATE","Leo Sauer named Serie A Player of the Season; Beier the only Napoli player in the league XI. Pio scored 25 league goals."],["MADRID QUESTION","Saladino declined to discuss Madrid interest at the pre-final press conference. No decision about his future was announced publicly."]]};
D.ticker=editorial.ticker;D.whispers=editorial.whispers;
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
if($("heroStory"))$("heroStory").innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="'+E(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read the story →</span></div>';
if($("topStories"))$("topStories").innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,"0")+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join("");
if($("latestNews"))$("latestNews").innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?"compact":"wide")).join("");
if($("newsGrid"))$("newsGrid").innerHTML=D.articles.map((a,i)=>card(a,i?"standard":"lead-grid")).join("");
if($("articleFilters"))$("articleFilters").innerHTML=["All",...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?"":"active")+'" data-category="'+E(a)+'">'+E(a)+'</button>').join("");
if($("tickerTrack"))$("tickerTrack").innerHTML=[...D.ticker,...D.ticker].map(x=>"<span>"+E(x)+"</span>").join("");
if($("whisperList"))$("whisperList").innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join("");
if($("latestResult"))$("latestResult").innerHTML='<div class="latest-score"><span>MIL</span><strong>1–0</strong><span>NAP</span></div><p>SERIE A · 25 MAY · GIMÉNEZ 58′ PEN · LEAGUE COMPLETE</p>';
if($("formLine"))$("formLine").innerHTML='<div><strong>NAPOLI · SERIE A CHAMPIONS · 87 / 38</strong><span>26W · 9D · 3L · 78 GF · 29 GA · +49</span></div><div><strong>MILAN 1–0 NAPOLI · FINAL LEAGUE MATCH</strong><span>Giménez 58′ pen · rotated side · title secured</span></div><div><strong>PSG · CHAMPIONS LEAGUE FINAL · 31 MAY</strong><span>Fourth straight final · third consecutive European crown at stake</span></div>';
if($("upcomingStrip"))$("upcomingStrip").innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+E(x.competition)+' · 31 May</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join("");
if($("nextTwo"))$("nextTwo").innerHTML=D.upcoming.map(x=>'<div class="next-row"><strong>'+E(x.gameAlias||x.opponent)+'</strong><span>'+E(x.competition)+' · 31 May 2031 · '+E(x.venue)+'</span></div>').join("");
const status=document.querySelector(".header-status span:last-child");if(status)status.textContent="FOUR STRAIGHT SCUDETTI · NAPOLI 87 / 38 · PARIS FINAL";
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content="Napoli face PSG in the Champions League final on 31 May 2031. Stefan Saladino rejects revenge after the 2028 defeat; Milan won the final Serie A game 1–0, Napoli champions on 87 points.";
if($("matchesList")&&!$("matchesList").querySelector("[data-milan-finale-may25]"))$("matchesList").innerHTML='<div class="match-card" data-milan-finale-may25="true"><div class="result-badge L">L</div><div class="match-main"><span>Serie A · 25 May 2031 · Final league match</span><strong>AC Milan <b>1–0</b> Napoli</strong><p>Giménez 58′ penalty · Napoli champions · 87 points / 38 played</p></div></div>'+$("matchesList").innerHTML;
})();
