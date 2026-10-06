(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.upcoming=[];
 const el=document.getElementById('nextTwo');
 if(el) el.innerHTML='<div class="next-row"><strong>CHAMPIONS LEAGUE FINAL</strong><span>Opponent / date pending canonical FC26 fixture confirmation</span></div>';
 const strip=document.getElementById('upcomingStrip');
 if(strip) strip.innerHTML='<div class="fixture"><span>Champions League</span><strong>FINALIST</strong><small>Opponent / date pending FC26 confirmation</small></div>';
})();