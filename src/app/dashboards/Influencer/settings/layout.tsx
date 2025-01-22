"use client";

import { Box } from "@mui/material";

export default function AccountSettingsLayout({
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
          padding: { xs: 2, sm: 4 },
          backgroundColor: "background.default",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
