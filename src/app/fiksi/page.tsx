// app/fiksi/page.tsx
import { BukuAPI } from "@/lib/api/buku";
import FiksiClientPage from "./FiksiClientPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Koleksi Buku Fiksi - MyApp Library",
  description: "Jelajahi koleksi buku fiksi terbaik dari berbagai penulis",
};

export default async function FiksiPage() {
  try {
    const bukuFiksi = await BukuAPI.getBukuFiksi();

    return <FiksiClientPage initialBuku={bukuFiksi} />;
  } catch (error) {
    console.error("Error loading fiksi books:", error);
    return <FiksiClientPage initialBuku={[]} />;
  }
}
