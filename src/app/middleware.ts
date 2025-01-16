import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

// Define the type for user role
interface UserRole {
  roles: {
    role_name: string;
  };
}

export async function middleware(req: NextRequest) {
  try {
    // Retrieve the user's access token from cookies
    const token = req.cookies.get("sb-access-token")?.value;

    if (!token) {
      console.warn("Access token not found. Redirecting to login.");
      return NextResponse.redirect(new URL("/authentication/login", req.url));
    }

    // Validate the user token and fetch the user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError || !user) {
      console.error("Authentication Error:", authError);
      return NextResponse.redirect(new URL("/authentication/login", req.url));
    }

    // Fetch user role from user_roles table with explicit typing
    const { data: userRole, error: roleError } = await supabase
      .from("user_roles")
      .select("roles(role_name)")
      .eq("user_id", user.id)
      .single<UserRole>();

    if (roleError || !userRole) {
      console.error("Role Fetch Error:", roleError);
      return NextResponse.redirect(new URL("/authentication/login", req.url));
    }

    const roleName = userRole.roles.role_name;

    // Redirect based on role
    switch (roleName) {
      case "influencer":
        console.info("Redirecting to influencer dashboard.");
        return NextResponse.redirect(new URL("/influencer/dashboard", req.url));
      case "brand":
        console.info("Redirecting to brand dashboard.");
        return NextResponse.redirect(new URL("/brand/dashboard", req.url));
      case "admin":
        console.info("Redirecting to admin dashboard.");
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      default:
        console.error("Unknown Role:", roleName);
        return NextResponse.redirect(new URL("/authentication/login", req.url));
    }
  } catch (err) {
    console.error("Middleware Error:", err);
    return NextResponse.redirect(new URL("/authentication/login", req.url));
  }
}
