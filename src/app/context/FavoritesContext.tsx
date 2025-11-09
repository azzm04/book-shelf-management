"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface Buku {
  id: number
  judul: string
  penulis: string
  penerbit: string
  tahun: number
  deskripsi: string
  cover: string
}

interface FavoritesContextType {
  favorites: Buku[]
  addFavorite: (buku: Buku) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Buku[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch {
        console.error("Failed to parse favorites from localStorage")
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const addFavorite = (buku: Buku) => {
    setFavorites((prev) => {
      if (!prev.find((b) => b.id === buku.id)) {
        return [...prev, buku]
      }
      return prev
    })
  }

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((b) => b.id !== id))
  }

  const isFavorite = (id: number) => {
    return favorites.some((b) => b.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
