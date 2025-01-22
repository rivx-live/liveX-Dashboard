"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Step1WelcomePage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/step2"); // Adjust the path for the next step
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="background.default"
      px={4}
    >
      <Box
        sx={{
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "background.paper",
          boxShadow: 3,
          borderRadius: "8px",
          p: "2rem",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Welcome to LiveX!
        </Typography>
        <Typography variant="body1" mb={4}>
          We’re thrilled to have you onboard. Let’s set up your profile and
          get started on your journey.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext}
          sx={{ py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
