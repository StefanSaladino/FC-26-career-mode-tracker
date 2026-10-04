(() => {
  const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
  const players=[
    {keys:['Pio Esposito','Pio'],src:'assets/pio-napoli.webp',pos:'50% 24%',kind:'custom'},
    {keys:['Endrick'],src:'assets/endrick-napoli.jpg',pos:'50% 22%',kind:'custom'},
    {keys:['Bastoni'],src:'assets/bastoni-napoli.jpg',pos:'50% 24%',kind:'custom'},
    {keys:['Beier'],src:'assets/beier-napoli.jpg',pos:'50% 23%',kind:'custom'},
    {keys:['Chiesa'],src:'assets/chiesa-napoli.jpg',pos:'50% 22%',kind:'custom'},
    {keys:['Davies','Alphonso Davies'],src:'assets/davies-napoli.jpg',pos:'50% 23%',kind:'custom'},
    {keys:['Kayode'],src:'assets/kayode-napoli.jpg',pos:'50% 23%',kind:'custom'},
    {keys:['Alex Meret','Meret'],src:'https://cdn.sscnapoli.it/wp-content/uploads/2025/03/GC9_8950-1024x683.jpg',pos:'50% 30%',kind:'official'},
    {keys:['Giovanni Di Lorenzo','Di Lorenzo'],src:'https://cdn.sscnapoli.it/wp-content/uploads/2026/09/CS9_2543-2-1024x683.jpg',pos:'50% 30%',kind:'official'},
    {keys:['Kevin De Bruyne','De Bruyne'],src:'https://cdn.sscnapoli.it/wp-content/uploads/2025/07/IMG-20250719-WA0036-1024x682.jpg',pos:'50% 28%',kind:'official'}
  ];
  const esc=s=>String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const has=(s,k)=>new RegExp(`(^|[^A-Za-z])${esc(k)}([^A-Za-z]|$)`,'i').test(String(s));
  const allText=a=>[String(a.headline||''),String(a.dek||''),Array.isArray(a.body)?a.body.join(' '):String(a.body||'')];
  const candidates=a=>{const out=[];for(const field of allText(a))for(const p of players)if(p.keys.some(k=>has(field,k))&&!out.some(x=>x.src===p.src))out.push(p);return out};
  const approved=src=>players.some(p=>p.src===String(src||'').split('?')[0]||p.src===String(src||''));
  const generic=src=>!src||/stadium|generic|placeholder|default|unsplash|pexels/i.test(src)||approved(src);
  const authored=a=>{const cur=String(a.image||a.img||a.imageUrl||'');return cur&&!generic(cur)};
  const apply=(a,p)=>{if(!p)return;a.image=p.src;a.img=p.src;a.imageUrl=p.src;a.objectPosition=p.pos;a.objectFit='cover';a.imagePolicy=p.kind==='official'?'official-napoli-photo':'approved-player-feed-aware';};

  // Feed-aware assignment. Real-life Napoli players use official SSC Napoli photos;
  // custom composites remain available for save-only Napoli players.
  let previous='';
  D.articles.forEach((a,i)=>{
    if(authored(a)){previous=String(a.image||a.img||a.imageUrl||'').split('?')[0];return}
    const list=candidates(a);if(!list.length)return;
    let pick=list.find(p=>p.src!==previous);
    if(!pick)pick=list[i%list.length];
    if(pick.src===previous&&players.length>1){pick=players.find((p,n)=>p.src!==previous&&((i+n)%3===0))||players.find(p=>p.src!==previous)||pick}
    apply(a,pick);previous=pick.src;
  });

  window.NAPOLI_ASSIGN_ARTICLE_IMAGE=(a,index=0,previousSrc='')=>{
    if(!a||authored(a))return a;const list=candidates(a);if(!list.length)return a;
    const prev=String(previousSrc||'').split('?')[0];const pick=list.find(p=>p.src!==prev)||list[index%list.length];apply(a,pick);return a;
  };
})();