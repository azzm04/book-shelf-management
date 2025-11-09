"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import { useFavorites } from "./../../app/context/FavoritesContext"

interface Buku {
  id: number
  judul: string
  penulis: string
  penerbit: string
  tahun: number
  deskripsi: string
  cover: string
}

interface BookCardProps {
  buku: Buku
}

export default function BookCard({ buku }: BookCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const router = useRouter()
  const isFav = isFavorite(buku.id)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isFav) {
      removeFavorite(buku.id)
    } else {
      addFavorite(buku)
    }
  }

  const handleLihatDetail = () => {
    router.push(`/buku/${buku.id}`)
  }

  return (
    <div className="group relative h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40">
      {/* Book Cover Image */}
      <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-muted">
        <img
          src={buku.cover || "/placeholder.svg"}
          alt={buku.judul}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 backdrop-blur-sm"
          aria-label="Add to favorites"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
              isFav ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      {/* Book Info */}
      <div className="flex flex-col flex-grow p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-foreground line-clamp-2 text-xs sm:text-sm hover:text-primary transition-colors">
            {buku.judul}
          </h3>
          <p className="text-xs text-muted-foreground">{buku.penulis}</p>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 flex-grow">{buku.deskripsi}</p>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">{buku.penerbit}</span>
          <span className="text-xs font-semibold text-primary">{buku.tahun}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-4 border-t border-border bg-muted/50">
        <button
          onClick={handleLihatDetail}
          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  )
}
