"use client";

import { Box } from "@mui/material";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection="column"
      bgcolor="background.default"
    >
      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4,
          overflowY: "auto",
          backgroundColor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
