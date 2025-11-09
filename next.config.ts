import type { NextConfig } from "next";


const runtimeCaching = [
  {
    urlPattern: /\/$/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'html-cache',
      expiration: { maxEntries: 10 }
    }
  },
  {
    urlPattern: /^https?:.*\.(?:png|jpg|jpeg|svg|gif|js|css)$/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'asset-cache',
      expiration: { maxEntries: 200 }
    }
  }
];

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
  fallbacks: {
    document: "/offline.html", // halaman fallback saat offline
  },
  runtimeCaching
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);




