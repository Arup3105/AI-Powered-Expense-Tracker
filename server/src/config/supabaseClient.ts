import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
console.log("Supabase URL:", supabaseUrl);
const supabaseKey = process.env.SUPABASE_KEY!; // service_role key (not anon)
export const supabase = createClient(supabaseUrl, supabaseKey);
