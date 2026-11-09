// Kids Learning service worker: saves the app on the device so it works offline.
// IMPORTANT: when you change any file, bump this version (v1 -> v2) so devices get the update.
const CACHE = "kids-learning-v1";

// Every file the app needs, relative to this file
const FILES = ["./", "./index.html", "./math.html", "./writing.html", "./manifest.json", "./icon.svg"];

// First visit: save all files
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();                        // start using this version right away
});

// New version: delete old saved copies
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Every request: use the saved copy if there is one, otherwise the network
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
