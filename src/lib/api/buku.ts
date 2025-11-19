// lib/api/buku.ts
import type { Buku } from "@/types/buku";
import { supabase } from "@/lib/supabase";

export class BukuAPI {
  static async getAllBuku(): Promise<Buku[]> {
    try {
      const { data, error } = await supabase
        .from("books")
        .select(
          `id, judul, penulis, penerbit, tahun, deskripsi, cover, category_id, categories(id, name)`
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error getting all books:", error);
        return [];
      }

      // Map category key to `category` to match the `Buku` type
      return (data || []).map((row: any) => ({
        id: row.id,
        judul: row.judul,
        penulis: row.penulis,
        penerbit: row.penerbit,
        tahun: row.tahun,
        deskripsi: row.deskripsi,
        cover: row.cover,
        category_id: row.category_id,
        category:
          Array.isArray(row.categories) && row.categories.length
            ? { id: row.categories[0].id, name: row.categories[0].name }
            : undefined,
      }));
    } catch (err) {
      console.error("Error fetching all books from Supabase:", err);
      return [];
    }
  }

  static async getBukuFiksi(): Promise<Buku[]> {
    try {
      // Fetch all and filter by category name to avoid complex cross-table filters
      const all = await this.getAllBuku();
      return all.filter((b) => b.category?.name === "Fiksi");
    } catch (err) {
      console.error("Error fetching fiction books:", err);
      return [];
    }
  }

  static async getBukuNonFiksi(): Promise<Buku[]> {
    try {
      const all = await this.getAllBuku();
      return all.filter(
        (b) =>
          b.category?.name === "Non-Fiksi" ||
          b.category?.name === "Non Fiksi" ||
          b.category?.name === "Nonfiksi"
      );
    } catch (err) {
      console.error("Error fetching non-fiction books:", err);
      return [];
    }
  }

  static async getBukuById(id: string): Promise<Buku | null> {
    try {
      const { data, error } = await supabase
        .from("books")
        .select(
          `id, judul, penulis, penerbit, tahun, deskripsi, cover, category_id, categories(id, name)`
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Supabase error getting book by id:", error);
        return null;
      }

      if (!data) return null;

      return {
        id: data.id,
        judul: data.judul,
        penulis: data.penulis,
        penerbit: data.penerbit,
        tahun: data.tahun,
        deskripsi: data.deskripsi,
        cover: data.cover,
        category_id: data.category_id,
        category:
          Array.isArray(data.categories) && data.categories.length
            ? { id: data.categories[0].id, name: data.categories[0].name }
            : undefined,
      };
    } catch (err) {
      console.error("Error fetching book by id from Supabase:", err);
      return null;
    }
  }
}
