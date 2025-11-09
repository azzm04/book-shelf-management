import type React from "react";
// BARU: Impor 'Viewport' dari 'next'
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyApp-Library",
  description: "Collection of favorite books",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MyApp-Library",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {" "}
      <body className={`font-sans antialiased`}>
      {" "}
        <FavoritesProvider>
      <Navbar /> {children}{" "}
        </FavoritesProvider>
        <Analytics />{" "}
      </body>
      {" "}
    </html>
  );
}
