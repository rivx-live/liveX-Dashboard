import React from "react";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./sidebar/page"; // Your sidebar component
import Header from "./header/Header"; // Your header component

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        isMobileSidebarOpen={false}
        onSidebarClose={() => {}}
        isSidebarOpen={true}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Header
          toggleMobileSidebar={(event: React.MouseEvent<HTMLElement>) => {
            /* implement the function here */
          }}
        />
        <Toolbar />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
