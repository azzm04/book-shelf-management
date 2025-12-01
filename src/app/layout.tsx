// app/layout.tsx (Server Component - tanpa 'use client')
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { SplashWrapper } from "@/components/splash/SplashWrapper"; // ← Import ini
import { Toaster } from "sonner";
import { FavoritesProvider } from "./context/FavoritesContext";

export const metadata: Metadata = {
  title: "Book Shelf Management",
  description: "Collection of favorite books",
  manifest: "/manifest.json",
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Book Shelf Management",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="font-sans antialiased">
        <SplashWrapper> 
            <FavoritesProvider>
            <ClientLayout>{children}</ClientLayout>
            <Toaster />
            </FavoritesProvider>
          <Analytics />
        </SplashWrapper>
      </body>
    </html>
  );
}