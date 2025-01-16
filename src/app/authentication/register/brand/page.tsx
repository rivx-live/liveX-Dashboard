"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

const BrandRegister: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    setError(null);
    setSuccess(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      // Register the user via Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError || !authData.user) {
        console.error("Auth Error:", authError);
        throw new Error(authError?.message || "Failed to register user.");
      }

      // Fetch the role ID for "brand"
      const { data: roleData, error: roleFetchError } = await supabase
        .from("roles")
        .select("id")
        .eq("role_name", "brand")
        .single();

      if (roleFetchError || !roleData) {
        console.error("Role Fetch Error:", roleFetchError);
        throw new Error("Failed to fetch the role for brand.");
      }

      // Insert the role for the user in user_roles table
      const { error: userRoleError } = await supabase.from("user_roles").insert({
        user_id: authData.user.id,
        role_id: roleData.id,
      });

      if (userRoleError) {
        console.error("User Role Assignment Error:", userRoleError);
        throw new Error("Failed to assign user role.");
      }

      // Create a new record in brand_profiles
      const { error: profileError } = await supabase
        .from("brand_profiles")
        .insert({
          user_id: authData.user.id,
        });

      if (profileError) {
        console.error("Brand Profile Creation Error:", profileError);
        throw new Error("Failed to create brand profile.");
      }

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => router.push("/authentication/login"), 2000);
    } catch (err) {
      console.error("Registration Error:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Brand Registration</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleRegister}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#5D87FF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Register
      </button>
      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}
      {success && (
        <p
          style={{
            color: "green",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          {success}
        </p>
      )}
    </div>
  );
};

export default BrandRegister;
