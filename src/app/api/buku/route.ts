    // app/api/buku/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('books')
      .select(`
        id,
        judul,
        penulis,
        penerbit,
        tahun,
        deskripsi,
        cover,
        category_id,
        categories (
          id,
          name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      total: data?.length || 0,
      data: data || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}