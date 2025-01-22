"use client";

import { Box, Typography, Card } from "@mui/material";

export default function CommunityPage() {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        fontSize={{ xs: "1.8rem", sm: "2.2rem" }}
      >
        Community
      </Typography>

      {/* Discord Embed */}
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: "background.paper",
          padding: 2,
        }}
      >
        <iframe
          src="https://discord.com/widget?id=1324387639310159903&theme=dark"
          width="100%"
          height="500"
          style={{ border: "none" }}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </Card>
    </Box>
  );
}
