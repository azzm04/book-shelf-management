// app/fiksi/page.tsx
import { BukuAPI } from "@/lib/api/buku";
import FiksiClientPage from "./FiksiClientPage";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function FiksiPage() {
  console.log("=== RENDERING FIKSI PAGE ===");
  
  // Fetch buku fiksi dari Supabase
  const bukuFiksi = await BukuAPI.getBukuFiksi();
  
  console.log("Fiksi page - Books received:", bukuFiksi.length);
  console.log("Fiksi page - Books:", bukuFiksi.map(b => ({ judul: b.judul, category: b.category?.name })));

  return <FiksiClientPage initialBuku={bukuFiksi} />;
}