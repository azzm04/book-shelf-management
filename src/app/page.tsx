// app/page.tsx
import { BookOpen, Sparkles, Library, ArrowRight } from "lucide-react";
import BookCard from "@/components/buku/BookCard";
import { BukuAPI } from "@/lib/api/buku";
import ClientHomePage from "./ClientHomePage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allBuku = await BukuAPI.getAllBuku();

  // Ambil 4 buku pertama untuk featured
  const bukuTerpilih = allBuku.slice(0, 4);

  // Hitung total per kategori
  const bukuFiksi = allBuku.filter((b) => b.category?.name === "Fiksi");
  const bukuNonFiksi = allBuku.filter((b) => b.category?.name === "Non-Fiksi");

  return (
    <ClientHomePage
      bukuTerpilih={bukuTerpilih}
      totalBuku={allBuku.length}
      totalFiksi={bukuFiksi.length}
      totalNonFiksi={bukuNonFiksi.length}
    />
  );
}
