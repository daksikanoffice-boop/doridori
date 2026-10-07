/* DORI offline cache. A new version is fetched in the background and used from the next start on. */
const CACHE='dori-aa5a1cc128';
const SHELL=["./", "index.html", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "fredoka-500.woff2", "fredoka-600.woff2", "fredoka-700.woff2", "figtree-400.woff2", "figtree-500.woff2", "figtree-600.woff2", "figtree-700.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('dori-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  if(req.mode==='navigate'){
    e.respondWith(caches.open(CACHE).then(async c=>{
      const hit=await c.match('index.html');
      const net=fetch(req).then(r=>{if(r.ok)c.put('index.html',r.clone());return r}).catch(()=>hit);
      return hit||net;
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(req,{ignoreSearch:true});
    if(hit)return hit;
    const r=await fetch(req);if(r.ok&&!url.pathname.includes('splash-'))c.put(req,r.clone());return r;
  }));
});
