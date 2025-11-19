// components/buku/BookCard.tsx
"use client";

import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useFavorites } from "@/app/context/FavoritesContext";
import type { Buku } from "@/types/buku";

interface BookCardProps {
  buku: Buku;
}

export default function BookCard({ buku }: BookCardProps) {
  const router = useRouter();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const bookIsFavorited = isFavorite(buku.id);

  const handleClick = () => {
    router.push(`/buku/${buku.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookIsFavorited) {
      removeFavorite(buku.id);
    } else {
      addFavorite(buku);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-card border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <img
          src={buku.cover || "/placeholder.svg"}
          alt={buku.judul}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />

        {/* Favorite Button Overlay */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            bookIsFavorited
              ? "bg-red-500 text-white"
              : "bg-white/90 text-gray-700 hover:bg-white"
          }`}
          aria-label={
            bookIsFavorited ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Heart
            className={`w-4 h-4 ${bookIsFavorited ? "fill-current" : ""}`}
          />
        </button>

        {/* Category Badge */}
        {buku.category && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
            <span className="text-xs font-semibold text-primary-foreground">
              {buku.category.name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-sm sm:text-base text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {buku.judul}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3">
          {buku.penulis}
        </p>

        <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
          <span>{buku.penerbit}</span>
          <span>{buku.tahun}</span>
        </div>
      </div>
    </div>
  );
}
