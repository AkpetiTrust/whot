const cacheName = "v1";

// Call Activate event
self.addEventListener("activate", (e) => {
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (e) => {
  // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(e.request.url.indexOf("http" || "https") === 0)) return; // skip the request. if request is not made with http protocol

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //Make clone of response
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          //   Add response to cache
          if (e.request.method !== "POST") {
            cache.put(e.request, resClone);
          }
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
