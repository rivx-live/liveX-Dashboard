"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

const GeneralRegister: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("influencer"); // Default to 'influencer'
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    setError(null);
    setSuccess(null);

    if (!email || !password || !role) {
      setError("All fields are required.");
      return;
    }

    try {
      // Step 1: Register the user in Supabase auth.users
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError || !authData.user) {
        console.error("Authentication Error:", authError);
        throw new Error(authError?.message || "Failed to register user.");
      }

      const userId = authData.user.id;

      // Step 2: Fetch the role ID from the roles table
      const { data: roleData, error: roleFetchError } = await supabase
        .from("roles")
        .select("id")
        .eq("role_name", role)
        .single();

      if (roleFetchError || !roleData) {
        console.error("Role Fetch Error:", roleFetchError);
        throw new Error(roleFetchError?.message || "Failed to fetch role.");
      }

      const roleId = roleData.id;

      // Step 3: Insert into user_roles table
      const { error: userRoleError } = await supabase.from("user_roles").insert({
        user_id: userId,
        role_id: roleId,
      });

      if (userRoleError) {
        console.error("User Role Error:", userRoleError);
        throw new Error(userRoleError?.message || "Failed to assign user role.");
      }

      // Step 4: Create corresponding records based on the role
      if (role === "brand") {
        const { error: brandProfileError } = await supabase
          .from("brand_profiles")
          .insert({
            user_id: userId,
          });

        if (brandProfileError) {
          console.error("Brand Profile Error:", brandProfileError);
          throw new Error(
            brandProfileError?.message || "Failed to create brand profile."
          );
        }
      } else if (role === "influencer") {
        const { error: influencerProfileError } = await supabase
          .from("influencer_profiles")
          .insert({
            user_id: userId,
          });

        if (influencerProfileError) {
          console.error("Influencer Profile Error:", influencerProfileError);
          throw new Error(
            influencerProfileError?.message ||
              "Failed to create influencer profile."
          );
        }

        const { error: influencerAnalyticsError } = await supabase
          .from("influencer_analytics")
          .insert({
            influencer_id: userId,
          });

        if (influencerAnalyticsError) {
          console.error(
            "Influencer Analytics Error:",
            influencerAnalyticsError
          );
          throw new Error(
            influencerAnalyticsError?.message ||
              "Failed to create influencer analytics."
          );
        }
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
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Register</h1>
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
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <option value="influencer">Influencer</option>
        <option value="brand">Brand</option>
        <option value="admin">Admin</option>
      </select>
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

export default GeneralRegister;
