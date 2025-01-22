"use client";

import React from "react";
import { Box } from "@mui/material";
import ProgressIndicator from "@/app/onboarding/components/ProgressIndicator";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

export default function OnboardingLayout({
  children,
  currentStep,
  totalSteps,
}: OnboardingLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        padding: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "600px", mb: 4 }}>
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
          padding: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
