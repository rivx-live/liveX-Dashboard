"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

interface RegisterFormProps {
  role: "admin" | "brand" | "influencer";
}

const RegisterForm: React.FC<RegisterFormProps> = ({ role }): React.ReactElement => {
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
      // Register user in Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError || !authData.user) {
        console.error("Auth Error:", authError);
        throw new Error(authError?.message || "Failed to register user.");
      }

      // Add user to the role-specific table
      const tableMap = {
        admin: "admin_profiles",
        brand: "brand_profiles",
        influencer: "influencer_profiles",
      };

      const { error: roleError } = await supabase
        .from(tableMap[role])
        .insert({ user_id: authData.user.id });

      if (roleError) {
        console.error("Role Assignment Error:", roleError);
        throw new Error(roleError?.message || `Failed to assign ${role} profile.`);
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
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        {role.charAt(0).toUpperCase() + role.slice(1)} Registration
      </h1>
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

export default RegisterForm;
