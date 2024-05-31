import { createClient } from "@supabase/supabase-js";

const url = "https://easrljsiylayuubgsbiy.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhc3JsanNpeWxheXV1YmdzYml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MTgwNTgsImV4cCI6MjAzMTQ5NDA1OH0.niNr8HRylucoDpvRxr1Qnb7nt0ZxcZMBuc3_JeYZaI4";

export const supabase = createClient(url, anonKey);
