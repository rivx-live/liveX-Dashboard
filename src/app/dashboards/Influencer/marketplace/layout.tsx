"use client";

import { useState, ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "@/app/dashboards/influencer/components/sidebar";
import { Header } from "@/app/dashboards/influencer/components/header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sectionTitle, setSectionTitle] = useState("Home");

  const handleSectionChange = (title: string) => {
    setSectionTitle(title);
  };

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          flexShrink: 0,
          backgroundColor: "background.paper",
          boxShadow: 3,
        }}
      >
        <Sidebar onSectionChange={handleSectionChange} />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Global Header with Section Title */}
        <Box
          sx={{
            padding: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.default",
          }}
        >
          <Header title={sectionTitle} />
        </Box>

        {/* Page-Specific Content */}
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
    </Box>
  );
}
