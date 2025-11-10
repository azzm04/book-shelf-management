// hooks/useServiceWorker.ts
'use client';

import { useEffect } from 'react';

export function useServiceWorker() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.ready.then((registration) => {
          console.log('✅ Service Worker is ready:', registration);
        });
      });
    }
  }, []);
}