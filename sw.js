self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('restaurant').then(function (cache) {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'css/map.css',
        'css/responsive.css',
        'css/styles.css',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'js/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});