/* Keep an up-to-date first-paint preview while historical match scripts replay. */
(()=>{'use strict';
 const frame=document.getElementById('leadFrame'),live=document.getElementById('heroStory');
 if(!frame||!live)return;
 const snapshot=live.cloneNode(true);
 snapshot.id='heroStoryBoot';
 snapshot.setAttribute('data-boot-preview','');
 live.setAttribute('aria-hidden','true');
 frame.appendChild(snapshot);
 const tickerLive=document.getElementById('tickerTrack');
 const tickerSnapshot=tickerLive?.cloneNode(true);
 if(tickerSnapshot){tickerSnapshot.id='tickerTrackBoot';tickerLive.after(tickerSnapshot);}
 const statusLive=document.querySelector('.header-status span:last-child');
 const statusSnapshot=statusLive?.cloneNode(true);
 if(statusSnapshot){statusSnapshot.id='seasonroomStatusBoot';statusLive.classList.add('seasonroom-live-status');statusLive.before(statusSnapshot);}
 frame.classList.add('is-booting');
 document.body.classList.add('seasonroom-hydrating');
 let finished=false;
 window.SEASONROOM_BOOT={
  finish(){
   if(finished)return;
   finished=true;
   frame.classList.remove('is-booting');
   live.removeAttribute('aria-hidden');
   snapshot.remove();
   tickerSnapshot?.remove();
   statusSnapshot?.remove();
   statusLive?.classList.remove('seasonroom-live-status');
   document.body.classList.remove('seasonroom-hydrating');
  }
 };
})();
