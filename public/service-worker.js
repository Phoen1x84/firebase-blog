const cacheName = 'firebase-blog';
const cacheFiles = [
    './',
    './index.html'
];

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            // register the service worker successfull
            console.log(`Service worker registration successful: ${registration.scope}`);
        }), (error) => {
            // register failed
            console.log(`Service worker failed: ${error}`);
        };
    });
}

self.addEventListener('install', (event) => {
    // perform installation
    event.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            console.log('[ServiceWorker] caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', (event) => {      
    console.log('[ServiceWorker] Activated');          
    event.waitUntil(
        caches.keys().then((cacheNames) => {            
            return Promise.all(
                cacheNames.map((thisCacheName) => {
                    if (thisCacheName !== cacheName) {
                        console.log('[ServiceWorker] removing cached files from', thisCacheName);
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetching', event.request.url);
    event.respondWith(        
        caches.match(event.request)
        .then((response) => {            
            // cache hit return the response
            if (response && !navigator.onLine) {
                console.log('[ServiceWorker] found in cache', event.request.url);
                return response;
            }            
            const fetchRequest = event.request.clone();
            // cache first pattern 
            return fetch(fetchRequest).then((response) => {
                // check if we received a valid response 200
                if (!response || response.status !== 200 || response.text !== 'basic') {
                    return response;
                }

                var responseToCache = response.clone();
                caches.open(cacheName)
                .then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        })
        .catch(function(error) {            
            console.warn(error);
        })
    );
});