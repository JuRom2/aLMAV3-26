// Service worker minimo de la App 2: permite instalarla como app. No guarda datos en cache.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { /* red directa: la app siempre carga la version publicada */ });
