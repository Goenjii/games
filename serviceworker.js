// Cache the app shell
const CACHE_NAME = 'pwa-game-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'styles.css',
    'script.js',
    'icon-192.png',
    'icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Serve from cache if possible, fetch from network if not
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request);
            })
    );
});
