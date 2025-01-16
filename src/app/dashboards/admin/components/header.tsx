import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@mui/material";
import { IconBellRinging } from "@tabler/icons-react";
import Profile from "../dashboard/layout/header/Profile"; // Your user profile dropdown component

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fff", boxShadow: "none", zIndex: 1100 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <Box />

        {/* Right Side */}
        <Box display="flex" alignItems="center">
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <IconBellRinging />
            </Badge>
          </IconButton>
          <Profile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
