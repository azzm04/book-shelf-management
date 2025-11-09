import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

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

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
  runtimeCaching
})(nextConfig);