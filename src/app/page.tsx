// app/page.tsx
import { BukuAPI } from "@/lib/api/buku";
import ClientHomePage from "./ClientHomePage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  // Fetch semua buku dari Supabase
  const allBuku = await BukuAPI.getAllBuku();

  // Ambil 4 buku pertama untuk featured section
  const bukuTerpilih = allBuku.slice(0, 4);

  // Filter buku berdasarkan kategori
  const bukuFiksi = allBuku.filter((b) => b.category?.name === "Fiksi");
  const bukuNonFiksi = allBuku.filter(
    (b) =>
      b.category?.name === "Non-Fiksi" ||
      b.category?.name === "Non Fiksi" ||
      b.category?.name === "Nonfiksi"
  );

  return (
    <ClientHomePage
      bukuTerpilih={bukuTerpilih}
      totalBuku={allBuku.length}
      totalFiksi={bukuFiksi.length}
      totalNonFiksi={bukuNonFiksi.length}
    />
  );
}
