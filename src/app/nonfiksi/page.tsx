// app/nonfiksi/page.tsx
import { BukuAPI } from "@/lib/api/buku";
import NonFiksiClientPage from "./NonFiksiClientPage";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function NonFiksiPage() {
  console.log("=== RENDERING NON-FIKSI PAGE ===");
  
  // Fetch buku non-fiksi dari Supabase
  const bukuNonFiksi = await BukuAPI.getBukuNonFiksi();
  
  console.log("Non-Fiksi page - Books received:", bukuNonFiksi.length);
  console.log("Non-Fiksi page - Books:", bukuNonFiksi.map(b => ({ judul: b.judul, category: b.category?.name })));

  return <NonFiksiClientPage initialBuku={bukuNonFiksi} />;
}
