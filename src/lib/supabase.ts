import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (supabase) {
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials not configured");
    return null;
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  work_style: string;
  created_at?: string;
}
