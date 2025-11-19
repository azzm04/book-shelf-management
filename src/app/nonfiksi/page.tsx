// app/nonfiksi/page.tsx
import { BukuAPI } from "@/lib/api/buku";
import NonFiksiClientPage from "./NonFiksiClientPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Koleksi Buku Non-Fiksi - MyApp Library",
  description: "Jelajahi koleksi buku non-fiksi untuk memperluas wawasan Anda",
};

export default async function NonFiksiPage() {
  try {
    const bukuNonFiksi = await BukuAPI.getBukuNonFiksi();

    return <NonFiksiClientPage initialBuku={bukuNonFiksi} />;
  } catch (error) {
    console.error("Error loading non-fiksi books:", error);
    return <NonFiksiClientPage initialBuku={[]} />;
  }
}
