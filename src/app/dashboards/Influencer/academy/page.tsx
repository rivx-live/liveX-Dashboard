"use client";

import { Box, Typography, Button, Card } from "@mui/material";

export default function AcademyPage() {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign={{ xs: "center", sm: "left" }}
      >
        RIVX Academy: Live Shopping Host Certification
      </Typography>

      {/* Iframe Section */}
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: "background.paper",
          padding: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://derek-nickerson-s-school1.teachable.com/p/rivx-live-shopping-host-certification"
          width="100%"
          height="600"
          style={{
            border: "none",
            borderRadius: "8px",
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          title="RIVX Academy Lessons"
        ></iframe>
      </Card>

      {/* Fallback Button */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" mb={2}>
          If the lessons do not load, click below to open RIVX Academy in a new tab.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://derek-nickerson-s-school1.teachable.com/p/rivx-live-shopping-host-certification"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open RIVX Academy
        </Button>
      </Box>
    </Box>
  );
}
