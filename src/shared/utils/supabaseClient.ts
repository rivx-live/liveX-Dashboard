import { createClient, User } from "@supabase/supabase-js";

// Supabase environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file."
  );
}

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Define the return type for the user helper function
interface CurrentUser {
  user: User | null;
  error: Error | null;
}

// Helper function to get the current user
export async function getCurrentUser(): Promise<CurrentUser> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
      return { user: null, error };
    }
    return { user, error: null };
  } catch (err) {
    console.error("Unexpected error fetching user:", err);
    return { user: null, error: err as Error };
  }
}
