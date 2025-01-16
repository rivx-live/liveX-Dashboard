"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

const OAuthRedirectHandler = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      try {
        // Get the current user session from Supabase
        const { data: session, error } = await supabase.auth.getSession();

        if (error || !session?.session) {
          throw new Error("Failed to establish session.");
        }

        const user = session.session.user;

        // Fetch user profile from the database
        const { data: profile, error: profileError } = await supabase
          .from("profiles") // Adjust table name if needed
          .select("role")
          .eq("user_id", user.id)
          .single();

        if (profileError || !profile) {
          throw new Error("User profile not found.");
        }

        const role = profile.role;

        // Redirect user based on role
        if (role === "admin") {
          router.push("/admin/dashboard");
        } else if (role === "influencer") {
          router.push("/influencer/dashboard");
        } else {
          throw new Error("Unknown user role.");
        }
      } catch (err) {
        setError((err as Error).message || "An unexpected error occurred.");
      }
    };

    handleOAuthRedirect();
  }, [router]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Loading...</div>;
};

export default OAuthRedirectHandler;
