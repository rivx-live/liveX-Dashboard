"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "@/app/dashboards/influencer/components/sidebar";
import { Header } from "@/app/dashboards/influencer/components/header";

export default function InfluencerDashboardLayout({
  children,
  defaultTitle = "Influencer Dashboard",
}: {
  children: React.ReactNode;
  defaultTitle?: string;
}) {
  const [sectionTitle, setSectionTitle] = useState(defaultTitle);

  const handleSectionChange = (title: string) => {
    setSectionTitle(title); // Update the title dynamically
  };

  const sidebarWidth = 240; // Sidebar fixed width

  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection="row"
      sx={{
        backgroundImage: "linear-gradient(to bottom, #272727, #121212)",
        color: "accent",
        fontFamily: "sans",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: `${sidebarWidth}px` },
          flexShrink: 0,
          bgcolor: "rgba(39, 39, 39, 0.8)", // Semi-transparent dark background
          boxShadow: "goldGlow",
          backdropFilter: "blur(10px)", // Frosted glass effect
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Sidebar onSectionChange={handleSectionChange} />
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            padding: { xs: 2, sm: 3 },
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black
            backdropFilter: "blur(5px)", // Frosted glass effect
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: "platinum",
          }}
        >
          <Typography
            variant="h4"
            fontFamily="heading"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {sectionTitle}
          </Typography>
        </Box>

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: { xs: 2, sm: 4 },
            overflowY: "auto",
            backgroundImage: "linear-gradient(to top, #272727, #000000)",
            borderRadius: "xl",
          }}
        >
          <Box
            sx={{
              padding: { xs: 3, sm: 5 },
              borderRadius: "xl",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Light frosted glass
              backdropFilter: "blur(10px)", // Frosted glass effect
              boxShadow: "elevated",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
