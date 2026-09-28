// Guarda só a "casca" do app. Os dados (peças e reservas) vêm sempre da internet.
const CACHE = 'kay-v1';
const CASCA = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CASCA)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return; // Supabase, fontes e QR passam direto
  // Rede primeiro (sempre a versão nova); se estiver sem internet, usa o que foi guardado
  e.respondWith(fetch(req).then(res => {
    const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); return res;
  }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
});
