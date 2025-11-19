// app/buku/[id]/page.tsx
import { notFound } from "next/navigation";
import { BukuAPI } from "@/lib/api/buku";
import BookDetailClient from "./BookDetailClient";

export const dynamic = "force-dynamic";

// Generate metadata untuk SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const buku = await BukuAPI.getBukuById(params.id);

  if (!buku) {
    return {
      title: "Buku Tidak Ditemukan",
    };
  }

  return {
    title: `${buku.judul} - ${buku.penulis}`,
    description: buku.deskripsi || `Buku ${buku.judul} oleh ${buku.penulis}`,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const buku = await BukuAPI.getBukuById(params.id);

  if (!buku) {
    notFound();
  }

  // Fetch buku lain dari penulis yang sama
  const allBuku = await BukuAPI.getAllBuku();
  const relatedBooks = allBuku
    .filter((b) => b.penulis === buku.penulis && b.id !== buku.id)
    .slice(0, 4);

  return <BookDetailClient buku={buku} relatedBooks={relatedBooks} />;
}
