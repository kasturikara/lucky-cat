import { supabase } from "src/services/supabase/SupabaseClient";

export async function matchUser(data) {
  const { username, password } = data;
  const { data: user, error } = await supabase
    .from("juri")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();
  if (!user || error) {
    console.error(error);
    return;
  }

  return user;
}
