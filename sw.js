
const BUILD = "20260913-080607";
const CACHE = "navigans-" + BUILD;
const IMGS  = ["pages/1957-01-1.jpg", "pages/1957-02-1.jpg", "pages/1957-02-2.jpg", "pages/1957-02-3.jpg", "pages/1957-03-1.jpg", "pages/1957-03-2.jpg", "pages/1957-04-1.jpg", "pages/1957-04-2.jpg", "pages/1957-04-3.jpg", "pages/1957-04-4.jpg", "pages/1957-05-1.jpg", "pages/1957-05-2.jpg", "pages/1957-05-3.jpg", "pages/1957-06-1.jpg", "pages/1957-06-2.jpg", "pages/1957-06-3.jpg", "pages/1957-06-4.jpg", "pages/1957-06-5.jpg", "pages/1957-07-1.jpg", "pages/1957-07-2.jpg", "pages/1957-07-3.jpg", "pages/1957-07-4.jpg", "pages/1957-08-1.jpg", "pages/1957-08-2.jpg", "pages/1957-08-3.jpg", "pages/1957-09-1.jpg", "pages/1957-09-2.jpg", "pages/1957-09-3.jpg", "pages/1957-09-4.jpg", "pages/1957-09-5.jpg", "pages/1957-09-6.jpg", "pages/1957-10-1.jpg", "pages/1957-10-2.jpg", "pages/1957-10-3.jpg", "pages/1957-11-1.jpg", "pages/1957-11-2.jpg", "pages/1957-12-1.jpg", "pages/1957-12-2.jpg", "pages/1957-12-3.jpg", "pages/1957-12-4.jpg", "pages/1958-01-1.jpg", "pages/1958-01-2.jpg", "pages/1958-02-1.jpg", "pages/1958-02-2.jpg", "pages/1958-02-3.jpg", "pages/1958-02-4.jpg", "pages/1958-02-5.jpg", "pages/1958-02-6.jpg", "pages/1958-03-1.jpg", "pages/1958-03-2.jpg", "pages/1958-03-3.jpg", "pages/1958-03-4.jpg", "pages/1958-04-1.jpg", "pages/1958-04-2.jpg", "pages/1958-05-1.jpg", "pages/1958-05-2.jpg", "pages/1958-05-3.jpg", "pages/1958-05-4.jpg", "pages/1958-06-1.jpg", "pages/1958-06-2.jpg", "pages/1958-07-1.jpg", "pages/1958-07-2.jpg", "pages/1958-08-1.jpg", "pages/1958-08-2.jpg", "pages/1958-08-3.jpg", "pages/1958-08-4.jpg", "pages/1958-09-1.jpg", "pages/1958-09-2.jpg", "pages/1958-10-1.jpg", "pages/1958-10-2.jpg", "pages/1958-10-3.jpg", "pages/1958-10-4.jpg", "pages/1958-11-1.jpg", "pages/1958-11-2.jpg", "pages/1958-12-1.jpg", "pages/1958-12-2.jpg", "pages/1958-12-3.jpg", "pages/1958-12-4.jpg", "pages/1959-01-1.jpg", "pages/1959-01-2.jpg", "pages/1959-02-1.jpg", "pages/1959-02-2.jpg", "pages/1959-02-3.jpg", "pages/1959-02-4.jpg", "pages/1959-03-1.jpg", "pages/1959-03-2.jpg", "pages/1959-04-1.jpg", "pages/1959-04-2.jpg", "pages/1959-04-3.jpg", "pages/1959-04-4.jpg", "pages/1959-05-1.jpg", "pages/1959-05-2.jpg", "pages/1959-06-1.jpg", "pages/1959-06-2.jpg", "pages/1959-07-1.jpg", "pages/1959-07-2.jpg", "pages/1959-08-1.jpg", "pages/1959-08-2.jpg", "pages/1959-08-3.jpg", "pages/1959-08-4.jpg", "pages/1959-09-1.jpg", "pages/1959-09-2.jpg", "pages/1959-09-3.jpg", "pages/1959-09-4.jpg", "pages/1959-10-1.jpg", "pages/1959-10-2.jpg", "pages/1959-10-3.jpg", "pages/1959-10-4.jpg", "pages/1959-11-1.jpg", "pages/1959-11-2.jpg", "pages/1959-12-1.jpg", "pages/1959-12-2.jpg", "pages/1959-12-3.jpg", "pages/1959-12-4.jpg", "pages/1960-01-1.jpg", "pages/1960-01-2.jpg", "pages/1960-01-3.jpg", "pages/1960-01-4.jpg", "pages/1960-02-1.jpg", "pages/1960-02-2.jpg", "pages/1960-02-3.jpg", "pages/1960-02-4.jpg", "pages/1960-02-5.jpg", "pages/1960-02-6.jpg", "pages/1960-03-1.jpg", "pages/1960-03-2.jpg", "pages/1960-03-3.jpg", "pages/1960-03-4.jpg", "pages/1960-04-1.jpg", "pages/1960-04-2.jpg", "pages/1960-04-3.jpg", "pages/1960-04-4.jpg", "pages/1960-05-1.jpg", "pages/1960-05-2.jpg", "pages/1960-05-3.jpg", "pages/1960-05-4.jpg", "pages/1960-05-5.jpg", "pages/1960-05-6.jpg", "pages/1960-06-1.jpg", "pages/1960-06-2.jpg", "pages/1960-06-3.jpg", "pages/1960-06-4.jpg", "pages/1960-07-1.jpg", "pages/1960-07-2.jpg", "pages/1960-07-3.jpg", "pages/1960-07-4.jpg", "pages/1960-08-1.jpg", "pages/1960-08-2.jpg", "pages/1960-08-3.jpg", "pages/1960-08-4.jpg", "pages/1960-09-1.jpg", "pages/1960-09-2.jpg", "pages/1960-09-3.jpg", "pages/1960-09-4.jpg", "pages/1960-10-1.jpg", "pages/1960-10-2.jpg", "pages/1960-11-1.jpg", "pages/1960-11-2.jpg", "pages/1960-11-3.jpg", "pages/1960-11-4.jpg", "pages/1960-12-1.jpg", "pages/1960-12-2.jpg", "pages/1960-12-3.jpg", "pages/1960-12-4.jpg", "pages/1961-01-1.jpg", "pages/1961-01-2.jpg", "pages/1961-02-1.jpg", "pages/1961-02-2.jpg", "pages/1961-02-3.jpg", "pages/1961-02-4.jpg", "pages/1961-02-5.jpg", "pages/1961-02-6.jpg", "pages/1961-04-1.jpg", "pages/1961-04-2.jpg", "pages/1961-04-3.jpg", "pages/1961-04-4.jpg", "pages/1961-05-1.jpg", "pages/1961-05-2.jpg", "pages/1961-05-3.jpg", "pages/1961-05-4.jpg", "pages/1961-05-5.jpg", "pages/1961-05-6.jpg", "pages/1961-06-1.jpg", "pages/1961-06-2.jpg", "pages/1961-06-3.jpg", "pages/1961-06-4.jpg", "pages/1961-06-5.jpg", "pages/1961-06-6.jpg", "pages/1961-06-7.jpg", "pages/1961-07-01.jpg", "pages/1961-07-02.jpg", "pages/1961-07-03.jpg", "pages/1961-07-04.jpg", "pages/1961-07-05.jpg", "pages/1961-07-06.jpg", "pages/1961-07-07.jpg", "pages/1961-07-08.jpg", "pages/1961-07-09.jpg", "pages/1961-07-10.jpg", "pages/1961-09-1.jpg", "pages/1961-09-2.jpg", "pages/1961-09-3.jpg", "pages/1961-09-4.jpg", "pages/1961-09-5.jpg", "pages/1961-09-6.jpg", "pages/1961-09-7.jpg", "pages/1961-09-8.jpg", "pages/1961-10-1.jpg", "pages/1961-10-2.jpg", "pages/1961-10-3.jpg", "pages/1961-10-4.jpg", "pages/1961-11-01.jpg", "pages/1961-11-02.jpg", "pages/1961-11-03.jpg", "pages/1961-11-04.jpg", "pages/1961-11-05.jpg", "pages/1961-11-06.jpg", "pages/1961-11-07.jpg", "pages/1961-11-08.jpg", "pages/1961-11-09.jpg", "pages/1961-11-10.jpg", "pages/1961-12-1.jpg", "pages/1961-12-2.jpg", "pages/1961-12-3.jpg", "pages/1961-12-4.jpg", "pages/1961-12-5.jpg", "pages/1961-12-6.jpg", "pages/1961-12-7.jpg", "pages/1961-12-8.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./index.html"]))
                    .then(() => self.skipWaiting()));
});

// drop caches from previous builds so a rebuild is picked up
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// cache first: these pages never change within a build
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone();
                    caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }))
  );
});

// "save everything" from the page
self.addEventListener("message", async e => {
  if (e.data !== "cache-all") return;
  const c = await caches.open(CACHE);
  let done = 0;
  for (const url of IMGS) {
    try { if (!(await c.match(url))) await c.add(url); } catch (err) {}
    done++;
    if (done % 5 === 0 || done === IMGS.length) {
      (await self.clients.matchAll()).forEach(cl =>
        cl.postMessage({ done, total: IMGS.length }));
    }
  }
});
