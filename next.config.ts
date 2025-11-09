// next.config.ts

import type { NextConfig } from "next";
const pwaConfig= require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Nonaktifkan PWA saat development
});

// 3. Konfigurasi Next.js Anda
const nextConfig: NextConfig = {
  /* ...config options Anda yang sudah ada... */
  reactStrictMode: true, // (Misalnya, Anda bisa tambahkan ini jika belum ada)
};

// 4. Ekspor gabungan konfigurasi
export default pwaConfig(nextConfig);
//npm i --save-dev @types/next-pwa