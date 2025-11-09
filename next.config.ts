// next.config.ts

import type { NextConfig } from "next";
const pwaConfig= require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Nonaktifkan PWA saat development
});

const nextConfig: NextConfig = {
  reactStrictMode: true, 
};

export default pwaConfig(nextConfig);