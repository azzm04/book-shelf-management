// app/buku/[id]/page.tsx
import { notFound } from "next/navigation";
import { BukuAPI } from "@/lib/api/buku";
import BookDetailClient from "./BookDetailClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface BookDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = params;

  // Fetch detail buku dari Supabase
  const buku = await BukuAPI.getBukuById(id);

  // Jika buku tidak ditemukan, tampilkan halaman 404
  if (!buku) {
    notFound();
  }

  // Fetch buku terkait (buku dari penulis yang sama)
  const allBuku = await BukuAPI.getAllBuku();
  const relatedBooks = allBuku
    .filter(
      (b) => b.id !== buku.id && b.penulis.toLowerCase() === buku.penulis.toLowerCase()
    )
    .slice(0, 4);

  return <BookDetailClient buku={buku} relatedBooks={relatedBooks} />;
}