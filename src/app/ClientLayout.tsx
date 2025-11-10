// app/ClientLayout.tsx
'use client';

import type { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar";
import { FavoritesProvider } from "@/app/context/FavoritesContext";
import PWAUpdateNotifier from "@/components/PWAUpdateNotifier";
import { useServiceWorker } from "@/hooks/useServiceWorker";

export default function ClientLayout({ children }: { children: ReactNode }) {
  // Register Service Worker
  useServiceWorker();

  return (
    <FavoritesProvider>
      <Navbar />
      {children}
      <PWAUpdateNotifier />
    </FavoritesProvider>
  );
}