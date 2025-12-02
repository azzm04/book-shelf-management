import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        // 1. Cek session user saat ini
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        // 2. Cek role di tabel profiles berdasarkan ID user
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
          setIsAdmin(false);
        } else {
          // 3. Set true jika role adalah 'admin'
          setIsAdmin(profile?.role === "admin");
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  return { isAdmin, loading };
}
