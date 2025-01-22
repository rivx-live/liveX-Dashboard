"use client";

import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import CustomTextField from "@/app/components/CustomTextField/page";
import { supabase } from "@/shared/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      router.push("/onboarding/step1-welcome"); // Redirect to onboarding
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
          Create Your Account
        </Typography>
        <Typography variant="h6" fontWeight="medium" mb={4}>
          Sign up to start your journey.
        </Typography>

        {error && (
          <Typography color="error" variant="body2" mb={2}>
            {error}
          </Typography>
        )}

        <CustomTextField
          label="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "1.5rem" }}
        />
        <CustomTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "1.5rem" }}
        />
        <CustomTextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "2rem" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          disabled={loading}
          sx={{ py: 1.5 }}
        >
          {loading ? <CircularProgress size={24} /> : "Sign Up"}
        </Button>
      </Box>
    </Box>
  );
}
