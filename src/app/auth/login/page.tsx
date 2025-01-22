"use client";

import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import CustomTextField from "src/app/components/CustomTextField/page";
import { supabase } from "src/shared/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirect to the dashboard after successful login
        router.push("/dashboards/influencer");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        px: 4,
      }}
    >
      {/* Detached Logo Section */}
      <Box
        sx={{
          mb: 4,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          src="/images/branding/logos/Golden-X.png"
          alt="Golden X Logo"
          width={100}
          height={100}
          style={{
            maxWidth: "25%",
            height: "auto",
          }}
        />
      </Box>

      {/* Login Form */}
      <Box
        sx={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "background.paper",
          boxShadow: 3,
          borderRadius: "8px",
          p: "2rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Welcome Back
        </Typography>
        <Typography variant="h6" fontWeight="medium" mb={4}>
          Sign in to your account
        </Typography>

        {error && (
          <Typography color="error" variant="body2" mb={2}>
            {error}
          </Typography>
        )}

        {/* Email Field */}
        <CustomTextField
          placeholder="Enter your email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "1.5rem", // Adjust spacing
            "& .MuiInputBase-input": {
              fontSize: "1rem",
            },
          }}
        />

        {/* Password Field */}
        <CustomTextField
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "2rem", // Adjust spacing
            "& .MuiInputBase-input": {
              fontSize: "1rem",
            },
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
        </Button>

        {/* Registration Redirect */}
        <Typography variant="body2" mt={2}>
          Don&apos;t have an account?{" "}
          <a
            href="/auth/register"
            style={{ color: "#BC9A2D", fontWeight: "bold", textDecoration: "none" }}
          >
            Sign up here.
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
