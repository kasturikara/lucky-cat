import { supabase } from "src/services/supabase/SupabaseClient";

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
