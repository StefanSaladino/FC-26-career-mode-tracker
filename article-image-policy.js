(() => {
  const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
  const players=[
    {keys:['Pio Esposito','Pio'],src:'assets/pio-napoli.webp',pos:'50% 24%'},
    {keys:['Endrick'],src:'assets/endrick-napoli.jpg',pos:'50% 22%'},
    {keys:['Bastoni'],src:'assets/bastoni-napoli.jpg',pos:'50% 24%'},
    {keys:['Beier'],src:'assets/beier-napoli.jpg',pos:'50% 23%'},
    {keys:['Chiesa'],src:'assets/chiesa-napoli.jpg',pos:'50% 22%'},
    {keys:['Davies','Alphonso Davies'],src:'assets/davies-napoli.jpg',pos:'50% 23%'},
    {keys:['Kayode'],src:'assets/kayode-napoli.jpg',pos:'50% 23%'}
  ];
  const esc=s=>String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const has=(s,k)=>new RegExp(`(^|[^A-Za-z])${esc(k)}([^A-Za-z]|$)`,'i').test(String(s));
  const allText=a=>[String(a.headline||''),String(a.dek||''),Array.isArray(a.body)?a.body.join(' '):String(a.body||'')];
  const candidates=a=>{const out=[];for(const field of allText(a))for(const p of players)if(p.keys.some(k=>has(field,k))&&!out.some(x=>x.src===p.src))out.push(p);return out};
  const approved=src=>players.some(p=>p.src===String(src||'').split('?')[0]);
  const generic=src=>!src||/stadium|generic|placeholder|default|unsplash|pexels/i.test(src)||approved(src);
  const authored=a=>{const cur=String(a.image||a.img||a.imageUrl||'');return cur&&!generic(cur)};
  const apply=(a,p)=>{if(!p)return;a.image=p.src;a.img=p.src;a.imageUrl=p.src;a.objectPosition=p.pos;a.objectFit='cover';a.imagePolicy='approved-player-feed-aware'};

  // Assign as a feed, not as isolated stories: relevant player first, but never repeat
  // the immediately previous card when another approved relevant player is available.
  let previous='';
  D.articles.forEach((a,i)=>{
    if(authored(a)){previous=String(a.image||a.img||a.imageUrl||'').split('?')[0];return}
    const list=candidates(a);
    if(!list.length)return;
    let pick=list.find(p=>p.src!==previous);
    if(!pick) pick=list[i%list.length];
    // If a story only names the same player as the preceding story, rotate through
    // approved Napoli imagery rather than showing an obvious duplicate card.
    if(pick.src===previous&&players.length>1){pick=players.find((p,n)=>p.src!==previous&&((i+n)%3===0))||players.find(p=>p.src!==previous)||pick}
    apply(a,pick);previous=pick.src;
  });

  window.NAPOLI_ASSIGN_ARTICLE_IMAGE=(a,index=0,previousSrc='')=>{
    if(!a||authored(a))return a;const list=candidates(a);if(!list.length)return a;
    const prev=String(previousSrc||'').split('?')[0];let pick=list.find(p=>p.src!==prev)||list[index%list.length];apply(a,pick);return a;
  };
})();