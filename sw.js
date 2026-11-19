/* Larissa Assis — Service Worker sem cache de dados sensíveis.
   Agendamentos sempre precisam da internet/Firebase; não interceptar fetch. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
