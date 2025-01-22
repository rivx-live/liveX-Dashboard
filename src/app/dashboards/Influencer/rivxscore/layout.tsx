"use client";

import { Box } from "@mui/material";
import Sidebar from "@/app/dashboards/influencer/components/sidebar";
import { Header } from "@/app/dashboards/influencer/components/header";
import { useState } from "react";

export default function RivxScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sectionTitle, setSectionTitle] = useState("RIVX Score"); // Default title

  const handleSectionChange = (title: string) => {
    setSectionTitle(title); // Update the section title dynamically
  };

  return (
    <Box display="flex" minHeight="100vh" flexDirection={{ xs: "column", sm: "row" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: 240 },
          flexShrink: 0,
          bgcolor: "background.paper",
          boxShadow: 3,
        }}
      >
        <Sidebar onSectionChange={handleSectionChange} />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Dynamic Header */}
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
    </Box>
  );
}
