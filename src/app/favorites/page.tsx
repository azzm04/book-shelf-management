"use client"

import { Heart, ArrowRight } from "lucide-react"
import { useFavorites } from "@/app/context/FavoritesContext"
import BookCard from "@/components/buku/BookCard"
import Link from "next/link"

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Icon badge */}
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                <div className="relative bg-accent/10 border border-accent/20 backdrop-blur-sm p-5 rounded-2xl hover:bg-accent/15 transition-colors duration-300 group cursor-pointer">
                  <Heart className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4 max-w-2xl px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight text-foreground tracking-tight">
                Koleksi Favorit Saya
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Buku-buku pilihan Anda yang tersimpan dalam koleksi pribadi untuk dibaca kapan saja.
              </p>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-card border border-border/60 shadow-sm text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="font-semibold text-foreground">{favorites.length}</span>
              </div>
              <div className="w-px h-4 sm:h-6 bg-border" />
              <span className="text-muted-foreground">Buku Favorit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {favorites.length > 0 ? (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-1 w-8 sm:w-10 rounded-full bg-accent" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Buku Pilihan Anda
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground ml-10 sm:ml-13">
                Total {favorites.length} buku yang sudah Anda tambahkan ke koleksi favorit
              </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {favorites.map((buku) => (
                <div key={buku.id} className="h-full">
                  <BookCard buku={buku} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="relative overflow-hidden bg-gradient-to-br from-muted via-muted/50 to-muted rounded-2xl px-8 md:px-16 py-20 md:py-28 text-center border border-border/60">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted border border-border/60">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
                  Belum Ada Favorit
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Mulai jelajahi koleksi buku kami dan tambahkan buku favorit Anda dengan mengklik tombol love di setiap
                  kartu buku.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                Jelajahi Koleksi Buku
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
