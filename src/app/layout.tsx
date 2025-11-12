// app/layout.tsx (Server Component - tanpa 'use client')
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Toaster } from "sonner";
import { FavoritesProvider } from "./context/FavoritesContext";

export const metadata: Metadata = {
  title: "MyApp-Library",
  description: "Collection of favorite books",
  manifest: "/manifest.json",
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png", // ← Penting!
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MyApp-Library",
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
        <FavoritesProvider>
        <ClientLayout>{children}</ClientLayout>
        <Toaster />
        </FavoritesProvider>
        <Analytics />
      </body>
    </html>
  );
}