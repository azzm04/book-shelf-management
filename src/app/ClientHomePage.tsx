// app/ClientHomePage.tsx
"use client";

import { useState, useEffect } from "react";
import { BookOpen, Sparkles, Library, ArrowRight } from "lucide-react";
import BookCard from "@/components/buku/BookCard";
import { SplashScreen } from "@/components/splash/splash-screen.tsx";
import type { Buku } from "@/types/buku";

interface ClientHomePageProps {
  bukuTerpilih: Buku[];
  totalBuku: number;
  totalFiksi: number;
  totalNonFiksi: number;
}


export default function ClientHomePage({
  bukuTerpilih,
  totalBuku,
  totalFiksi,
  totalNonFiksi,
}: ClientHomePageProps) {
  const [hydrated, setHydrated] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Only run on client — AFTER hydration
  useEffect(() => {
    setHydrated(true);

    const alreadyShown = localStorage.getItem("splash-shown");
    if (alreadyShown) {
      setShowSplash(false);
    } else {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    localStorage.setItem("splash-shown", "true");
  };

  if (!hydrated) return null;

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const handleLihatDetail = () => {
    window.location.href = "/fiksi";
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section - sama seperti sebelumnya */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                <div className="relative bg-primary/10 border border-primary/20 backdrop-blur-sm p-3 sm:p-5 rounded-2xl hover:bg-primary/15 transition-colors duration-300 group cursor-pointer">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight text-foreground tracking-tight">
                Book Shelf Management
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Jelajahi koleksi buku pilihan dari berbagai genre. Temukan
                inspirasi dan pengetahuan baru untuk memperkaya wawasan Anda.
              </p>
            </div>

            <button
              onClick={handleLihatDetail}
              className="group px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Mulai Jelajahi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 -mt-6 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="group bg-card border border-border/60 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                <Library className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {totalBuku}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Total Koleksi Buku
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-card border border-border/60 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {totalFiksi}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Koleksi Fiksi
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-card border border-border/60 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {totalNonFiksi}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Koleksi Non-Fiksi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-16 sm:mt-24 md:mt-32 pb-20">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-1 w-8 sm:w-10 rounded-full bg-accent" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Buku Pilihan
              </h2>
            </div>
            <h1 className="text-xs sm:text-sm md:text-base text-muted-foreground ml-10 sm:ml-13 max-w-xl">
              Koleksi buku terbaik yang kami rekomendasikan untuk memperluas
              wawasan Anda
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bukuTerpilih.map((buku) => (
              <div key={buku.id} className="h-full">
                <BookCard buku={buku} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl px-6 sm:px-8 md:px-16 py-12 sm:py-20 md:py-28 text-center shadow-2xl border border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
                Jelajahi Koleksi Lengkap
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Temukan lebih dari {totalBuku} buku menarik dari berbagai
                kategori. Pilih kategori di menu untuk melihat koleksi lengkap
                kami dan temukan bacaan terbaik Anda.
              </p>
            </div>

            <button
              onClick={handleLihatDetail}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              Lihat Semua Buku
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
