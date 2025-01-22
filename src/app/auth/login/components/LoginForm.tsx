"use client";

import { useState } from "react";
import { Box, Button, TextField, Alert } from "@mui/material";
import { supabase } from "../../../../shared/utils/supabaseClient"; 

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Redirect user after successful login
      window.location.href = "/dashboards/influencer"; // Adjust based on the role
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      maxWidth={400}
      width="100%"
      textAlign="center"
    >
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        Sign In
      </Button>
    </Box>
  );
}
