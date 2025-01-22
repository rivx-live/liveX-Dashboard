"use client";

import { Box } from "@mui/material";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: 2, sm: 4 },
        backgroundColor: "background.default",
        overflowY: "auto",
      }}
    >
      {children}
    </Box>
  );
}
