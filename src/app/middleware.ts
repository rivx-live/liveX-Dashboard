import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

// Middleware
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("sb-access-token")?.value;

  // Redirect to splash page if no token is present
  if (!token) {
    return redirectToSplash(req);
  }

  // Validate the token and fetch the authenticated user
  const { data: { user }, error: userError } = await supabase.auth.getUser(token);

  if (userError || !user) {
    return redirectToSplash(req);
  }

  // Fetch user role
  const { data: role, error: roleError } = await supabase
    .from("user_roles")
    .select("role_name")
    .eq("user_id", user.id)
    .single();

  if (roleError || !role) {
    return redirectToSplash(req);
  }

  const roleName = role.role_name;

  // Role-based access logic
  if (roleName === "influencer") {
    const { data: profile, error: profileError } = await supabase
      .from("influencer_profiles")
      .select("onboarding_complete")
      .eq("user_id", user.id)
      .single();

    if (profileError || !profile) {
      return redirectToSplash(req);
    }

    if (!profile.onboarding_complete) {
      return NextResponse.redirect(new URL("/onboarding/step1-welcome", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/onboarding") && profile.onboarding_complete) {
      return NextResponse.redirect(new URL("/dashboards/influencer", req.url));
    }
  }

  if (roleName === "brand" && req.nextUrl.pathname.startsWith("/dashboards/influencer")) {
    return redirectToSplash(req);
  }

  if (roleName === "admin" && !req.nextUrl.pathname.startsWith("/dashboards/admin")) {
    return redirectToSplash(req);
  }

  // Proceed to the requested page if access is valid
  return NextResponse.next();
}

// Utility: Redirect to splash page
const redirectToSplash = (req: NextRequest) => {
  return NextResponse.redirect(new URL("/", req.url));
};

// Middleware matcher
export const config = {
  matcher: [
    "/dashboards/:path*",
    "/auth/:path*",
    "/onboarding/:path*",
  ],
};
