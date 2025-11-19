// lib/api/buku.ts - FIXED VERSION
import type { Buku } from "@/types/buku";
import { supabase } from "@/lib/supabase";

export class BukuAPI {
  /**
   * Fetch semua buku dengan manual join categories
   */
  static async getAllBuku(): Promise<Buku[]> {
    try {
      // Step 1: Fetch semua books
      const { data: booksData, error: booksError } = await supabase
        .from("books")
        .select("*")
        .order("created_at", { ascending: false });

      if (booksError) {
        console.error("Supabase error getting books:", booksError);
        return [];
      }

      if (!booksData || booksData.length === 0) {
        console.log("No books found");
        return [];
      }

      // Step 2: Fetch semua categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from("categories")
        .select("*");

      if (categoriesError) {
        console.error("Supabase error getting categories:", categoriesError);
      }

      // Create a map of categories for quick lookup
      const categoriesMap = new Map(
        (categoriesData || []).map((cat) => [cat.id, cat])
      );

      console.log("=== DEBUG getAllBuku ===");
      console.log("Total books:", booksData.length);
      console.log("Total categories:", categoriesData?.length || 0);
      console.log("Categories Map:", Array.from(categoriesMap.entries()));

      // Step 3: Map books dengan category
      const books: Buku[] = booksData.map((book) => {
        const category = book.category_id
          ? categoriesMap.get(book.category_id)
          : undefined;

        console.log(
          `Book: ${book.judul}, category_id: ${book.category_id}, category found: ${category?.name || "NONE"}`
        );

        return {
          id: book.id,
          judul: book.judul,
          penulis: book.penulis,
          penerbit: book.penerbit,
          tahun: book.tahun,
          deskripsi: book.deskripsi,
          cover: book.cover,
          category_id: book.category_id,
          category: category
            ? {
                id: category.id,
                name: category.name,
              }
            : undefined,
        };
      });


      return books;
    } catch (err) {
      console.error("Error fetching all books from Supabase:", err);
      return [];
    }
  }

  /**
   * Fetch buku fiksi
   */
  static async getBukuFiksi(): Promise<Buku[]> {
    try {
      const all = await this.getAllBuku();

      console.log("=== DEBUG getBukuFiksi ===");
      console.log("Total books before filter:", all.length);

      const fiksi = all.filter((b) => {
        if (!b.category?.name) {
          console.log(`Book "${b.judul}" has no category`);
          return false;
        }

        const categoryName = b.category.name.toLowerCase().trim();
        const isFiksi = categoryName === "fiksi";

        console.log(
          `Book: "${b.judul}", Category: "${b.category.name}", Normalized: "${categoryName}", Is Fiksi: ${isFiksi}`
        );

        return isFiksi;
      });

      console.log("Fiksi books found:", fiksi.length);
      console.log("Fiksi books titles:", fiksi.map((b) => b.judul));
      console.log("=========================");

      return fiksi;
    } catch (err) {
      console.error("Error fetching fiction books:", err);
      return [];
    }
  }

  /**
   * Fetch buku non-fiksi
   */
  static async getBukuNonFiksi(): Promise<Buku[]> {
    try {
      const all = await this.getAllBuku();

      console.log("=== DEBUG getBukuNonFiksi ===");
      console.log("Total books before filter:", all.length);

      const nonFiksi = all.filter((b) => {
        if (!b.category?.name) {
          console.log(`Book "${b.judul}" has no category`);
          return false;
        }

        const categoryName = b.category.name.toLowerCase().trim();
        const isNonFiksi =
          categoryName === "non-fiksi" ||
          categoryName === "non fiksi" ||
          categoryName === "nonfiksi" ||
          categoryName === "nonfiksi";

        console.log(
          `Book: "${b.judul}", Category: "${b.category.name}", Normalized: "${categoryName}", Is Non-Fiksi: ${isNonFiksi}`
        );

        return isNonFiksi;
      });

      console.log("Non-Fiksi books found:", nonFiksi.length);
      console.log("Non-Fiksi books titles:", nonFiksi.map((b) => b.judul));
      console.log("=============================");

      return nonFiksi;
    } catch (err) {
      console.error("Error fetching non-fiction books:", err);
      return [];
    }
  }

  /**
   * Fetch buku by ID
   */
  static async getBukuById(id: string): Promise<Buku | null> {
    try {
      const allBuku = await this.getAllBuku();
      return allBuku.find((book) => book.id === id) || null;
    } catch (err) {
      console.error("Error fetching book by id from Supabase:", err);
      return null;
    }
  }

  /**
   * Fetch buku terkait berdasarkan penulis yang sama
   */
  static async getRelatedBuku(
    bukuId: string,
    penulis: string
  ): Promise<Buku[]> {
    try {
      const allBuku = await this.getAllBuku();
      return allBuku
        .filter(
          (buku) =>
            buku.id !== bukuId &&
            buku.penulis.toLowerCase() === penulis.toLowerCase()
        )
        .slice(0, 4);
    } catch (error) {
      console.error("Error fetching related buku:", error);
      return [];
    }
  }

  /**
   * Search buku berdasarkan query
   */
  static async searchBuku(query: string): Promise<Buku[]> {
    try {
      const allBuku = await this.getAllBuku();
      const lowercaseQuery = query.toLowerCase();

      return allBuku.filter(
        (buku) =>
          buku.judul.toLowerCase().includes(lowercaseQuery) ||
          buku.penulis.toLowerCase().includes(lowercaseQuery) ||
          buku.penerbit.toLowerCase().includes(lowercaseQuery) ||
          buku.deskripsi?.toLowerCase().includes(lowercaseQuery)
      );
    } catch (error) {
      console.error("Error searching buku:", error);
      return [];
    }
  }
}