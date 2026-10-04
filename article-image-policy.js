(() => {
  const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
  const players=[
    {keys:['Pio Esposito','Pio'],src:'assets/pio-napoli.webp'},
    {keys:['Endrick'],src:'assets/endrick-napoli.jpg'},
    {keys:['Bastoni'],src:'assets/bastoni-napoli.jpg'},
    {keys:['Beier'],src:'assets/beier-napoli.jpg'},
    {keys:['Chiesa'],src:'assets/chiesa-napoli.jpg'},
    {keys:['Davies','Alphonso Davies'],src:'assets/davies-napoli.jpg'},
    {keys:['Kayode'],src:'assets/kayode-napoli.jpg'}
  ];
  const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const has=(s,k)=>new RegExp(`(^|[^A-Za-z])${esc(k)}([^A-Za-z]|$)`,'i').test(s);
  const candidates=a=>{const fields=[String(a.headline||''),String(a.dek||''),Array.isArray(a.body)?a.body.join(' '):String(a.body||'')],out=[];for(const field of fields)for(const p of players)if(p.keys.some(k=>has(field,k))&&!out.includes(p))out.push(p);return out};
  const hash=s=>{let h=0;for(const c of String(s))h=((h<<5)-h+c.charCodeAt(0))|0;return Math.abs(h)};
  const authored=a=>{const cur=String(a.image||a.img||a.imageUrl||'');return cur&&!/stadium|generic|placeholder|default|unsplash|pexels|assets\/(pio|endrick|bastoni|beier|chiesa|davies|kayode)-napoli/i.test(cur)};
  function assign(a,index=0){if(!a||authored(a))return a;const list=candidates(a);if(!list.length)return a;const p=list[(hash(`${a.id}:${index}`)+index)%list.length];a.image=p.src;a.img=p.src;a.imageUrl=p.src;a.imagePolicy='approved-player-asset-alternating';return a}
  D.articles.forEach((a,i)=>assign(a,i));
  window.NAPOLI_ASSIGN_ARTICLE_IMAGE=(a,index=0)=>assign(a,index);
})();