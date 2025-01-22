"use client";

import { Box, Typography } from "@mui/material";

export default function SessionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Section Header */}
      <Box
        sx={{
          padding: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.default",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          sx={{ margin: 0 }}
        >
          Sessions
        </Typography>
      </Box>

      {/* Main Content */}
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
