
(function(){
  async function boot(){
    const list = document.querySelector('#autoBlogList'); if(!list) return;
    try{
      const res = await fetch('/sitemap.xml', {cache:'no-cache'});
      const xml = await res.text();
      const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map(m=>m[1]);
      const posts = urls.filter(u=>u.includes('/blog/posts/'));
      posts.sort().reverse();
      list.innerHTML = posts.map(u=>{
        const slug = u.split('/').pop().replace('.html','');
        const title = slug.replace(/^\d{4}-/,'').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
        return `<li><a href="${u}">${title}</a></li>`;
      }).join('');
    }catch(e){
      list.innerHTML = '<li>Unable to load posts at this time.</li>';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
