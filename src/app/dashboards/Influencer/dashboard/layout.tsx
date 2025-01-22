"use client";

import { Box, CssBaseline } from "@mui/material";

export default function Layout({
  children,
  defaultTitle,
}: {
  children: React.ReactNode;
  defaultTitle: string;
}) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: { xs: 2, sm: 4 },
        overflowY: "auto",
        bgcolor: "background.default",
      }}
    >
      <CssBaseline />

      {/* Header */}
      <header
        style={{
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "var(--text-primary)",
        }}
      >
        {defaultTitle}
      </header>

      {/* Main Content */}
      {children}
    </Box>
  );
}
