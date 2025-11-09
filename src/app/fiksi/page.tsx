"use client"

import { useState, useEffect } from "react"
import { BookOpen, Search } from "lucide-react"
import { BukuFiksi } from "@/data/buku"
import BookCard from "@/components/buku/BookCard"

export default function FiksiPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBuku, setFilteredBuku] = useState<typeof allBuku>([])

  const allBuku = BukuFiksi.buku

  useEffect(() => {
    const filter = () => {
      if (searchQuery.trim() === "") {
        setFilteredBuku(allBuku)
      } else {
        const lowercasedQuery = searchQuery.toLowerCase()
        const filtered = allBuku.filter(
          (buku) =>
            buku.judul.toLowerCase().includes(lowercasedQuery) ||
            buku.penulis.toLowerCase().includes(lowercasedQuery) ||
            buku.penerbit.toLowerCase().includes(lowercasedQuery),
        )
        setFilteredBuku(filtered)
      }
    }
    filter()
  }, [searchQuery, allBuku])

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-linear-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="space-y-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                <div className="relative bg-primary/10 border border-primary/20 backdrop-blur-sm p-4 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Koleksi Buku Fiksi</h1>
                <p className="text-muted-foreground mt-2">
                  {filteredBuku.length} dari {allBuku.length} buku tersedia
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari judul, penulis, atau genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-muted-foreground text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
        {filteredBuku.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBuku.map((buku) => (
              <div key={buku.id} className="h-full">
                <BookCard buku={buku} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <p className="text-foreground text-lg font-semibold mt-4">Tidak ada buku yang ditemukan</p>
            <p className="text-muted-foreground mt-2">Coba kata kunci pencarian yang berbeda</p>
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl px-8 md:px-16 py-16 md:py-24 text-center shadow-2xl border border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />

          <div className="relative z-10 bg-linear-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
              Temukan Cerita Terbaik Anda
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Jelajahi dunia imajinasi melalui koleksi buku fiksi terbaik kami
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
