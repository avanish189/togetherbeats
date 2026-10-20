/* =========================================================
   TogetherBeats PWA Service Worker
   Enables Native App Installation & Fast Performance
   ========================================================= */

const CACHE_NAME = 'togetherbeats-v2.5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css?v=2.5',
  '/app.js?v=2.5',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Network-First strategy to ensure live syncing and real-time audio streams are always fresh
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass service worker for socket.io, YouTube, external APIs, and streaming
  if (
    url.pathname.startsWith('/socket.io/') ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('youtube.com') ||
    url.hostname.includes('googlevideo.com') ||
    url.hostname.includes('ytimg.com')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
