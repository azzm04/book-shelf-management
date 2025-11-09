import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { FavoritesProvider } from "@/app/context/FavoritesContext";


export const metadata: Metadata = {
  title: "MyApp-Library",
  description: "Collection of favorite books",
  manifest: "/manifest.json",
  icons: {
    icon: "/android-chrome-512x512.png",
    apple: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
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
