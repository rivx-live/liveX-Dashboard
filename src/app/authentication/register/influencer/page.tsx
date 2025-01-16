"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

const InfluencerRegister: React.FC = (): React.ReactElement => {
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
      // Register user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError || !authData.user) {
        throw new Error(authError?.message || "Failed to register user.");
      }

      const userId = authData.user.id;

      // Assign role to user
      const { data: roleData, error: roleFetchError } = await supabase
        .from("roles")
        .select("id")
        .eq("role_name", "influencer")
        .single();

      if (roleFetchError || !roleData) {
        throw new Error("Failed to fetch influencer role.");
      }

      const roleId = roleData.id;

      // Add user to user_roles
      const { error: userRoleError } = await supabase.from("user_roles").insert({
        user_id: userId,
        role_id: roleId,
      });

      if (userRoleError) {
        throw new Error("Failed to assign user role.");
      }

      // Create influencer profile
      const { error: profileError } = await supabase
        .from("influencer_profiles")
        .insert({
          user_id: userId,
          role_id: roleId,
        });

      if (profileError) {
        throw new Error("Failed to create influencer profile.");
      }

      // Create influencer analytics
      const { error: analyticsError } = await supabase
        .from("influencer_analytics")
        .insert({
          influencer_id: userId,
        });

      if (analyticsError) {
        throw new Error("Failed to create influencer analytics.");
      }

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => router.push("/admin/dashboard"), 2000);
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
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Influencer Registration</h1>
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

export default InfluencerRegister;
