import { supabase } from "src/services/supabase/SupabaseClient";

// peserta
export async function getPeserta(tingkat) {
  const { data, error } = await supabase
    .from("peserta")
    .select("*")
    .eq("tingkat", tingkat)
    .order("no", { ascending: true });
  if (!data || error) {
    console.error(error);
    return;
  }

  return data;
}

// juri
export async function getJuri() {
  const { data, error } = await supabase
    .from("juri")
    .select("*")
    .order("role", { ascending: true });
  if (!data || error) {
    console.error(error);
    return;
  }

  return data;
}

// kategori
export async function getKategori() {
  const { data, error } = await supabase
    .from("kategori")
    .select("*")
    .order("id", { ascending: true });
  if (!data || error) {
    console.error(error);
    return;
  }
  return data;
}

// subs pbb
export async function getSubsByJenis(jenis) {
  const { data, error } = await supabase
    .from("subs")
    .select("*")
    .eq("jenis", jenis)
    .order("kode", { ascending: true });
  if (!data || error) {
    console.error(error);
    return;
  }
  return data;
}
