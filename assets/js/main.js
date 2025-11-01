(function(){function eligible(){var p=location.pathname;return p.endsWith('/donate.html')||p.endsWith('/impact.html')}function build(){if(!eligible())return;var b=document.createElement('div');b.id='ctaSticky';b.innerHTML='<div class="wrap"><span>Ready to help accelerate impact?</span><a href="/donate.html">Contribute</a><a href="/impact.html">Explore Impact</a></div>';document.body.appendChild(b);function onScroll(){var show=window.scrollY>200;if(show)b.classList.add('show');else b.classList.remove('show')}window.addEventListener('scroll',onScroll,{passive:true});onScroll()}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',build)}else{build()}})();
(function(){var ls='havva_theme';function apply(t){document.body.classList.remove('theme-light','theme-dark');document.body.classList.add(t);}var stored=localStorage.getItem(ls);if(!stored){stored=window.matchMedia('(prefers-color-scheme: dark)').matches?'theme-dark':'theme-light';}apply(stored);window.addEventListener('DOMContentLoaded',function(){var b=document.querySelector('#themeToggle');if(!b)return;b.addEventListener('click',function(){var t=document.body.classList.contains('theme-dark')?'theme-light':'theme-dark';apply(t);localStorage.setItem(ls,t);});});})();
(function(){function loadScript(src,attrs){var s=document.createElement('script');s.src=src;s.defer=true;if(attrs){for(const k in attrs){s.setAttribute(k,attrs[k]);}}document.head.appendChild(s);}var s=document.createElement('script');s.src='/assets/js/config.js';s.defer=true;s.onerror=function(){};s.onload=function(){bootstrap(window.__CFG||{});};document.head.appendChild(s);function bootstrap(cfg){if(cfg.CF_WEB_ANALYTICS_TOKEN&&cfg.CF_WEB_ANALYTICS_TOKEN!=='REPLACE_WITH_YOUR_TOKEN'){loadScript('https://static.cloudflareinsights.com/beacon.min.js',{'data-cf-beacon':JSON.stringify({token:cfg.CF_WEB_ANALYTICS_TOKEN})});}if(cfg.CF_TURNSTILE_SITE_KEY&&cfg.CF_TURNSTILE_SITE_KEY!=='REPLACE_WITH_YOUR_TURNSTILE_SITE_KEY'){loadScript('https://challenges.cloudflare.com/turnstile/v0/api.js');var t=window.setInterval(function(){if(window.turnstile){clearInterval(t);document.querySelectorAll('.turnstile-auto').forEach(function(el){window.turnstile.render(el,{sitekey:cfg.CF_TURNSTILE_SITE_KEY});});}},300);}}})();

// v01.1: resilient theme toggle
(function(){
  var KEY='havva_theme';
  function apply(t){ document.body.classList.remove('theme-light','theme-dark'); document.body.classList.add(t); }
  function current(){ return document.body.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light'; }
  function next(){ return current()==='theme-dark' ? 'theme-light' : 'theme-dark'; }
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){
    var btn=document.querySelector('#themeToggle');
    if(!btn){ console.warn('themeToggle button missing'); return; }
    btn.addEventListener('click', function(){ var t = next(); apply(t); try{ localStorage.setItem(KEY,t); }catch(e){}; });
    if(!document.body.classList.contains('theme-dark') && !document.body.classList.contains('theme-light')){
      var t = (localStorage.getItem(KEY)) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light');
      apply(t);
    }
  });
})();