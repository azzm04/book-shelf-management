// src/components/splash/SplashWrapper.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { SplashScreen } from "./SplashScreen";

interface SplashWrapperProps {
  children: React.ReactNode;
}

export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Jika sudah pernah ditampilkan dalam lifecycle app ini, skip
    if (hasShownRef.current) {
      setIsChecking(false);
      return;
    }

    // Cek apakah ini adalah navigasi dalam session yang sama
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = navigationEntry?.type === 'reload';
    const isNavigate = navigationEntry?.type === 'navigate';

    // Tampilkan splash hanya jika:
    // 1. Pertama kali dibuka (navigate)
    // 2. Refresh (reload)
    if (isReload || isNavigate) {
      setShowSplash(true);
      hasShownRef.current = true;
    }

    setIsChecking(false);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (isChecking) {
    return null;
  }

  // Tampilkan splash jika belum pernah ditampilkan
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return <>{children}</>;
}