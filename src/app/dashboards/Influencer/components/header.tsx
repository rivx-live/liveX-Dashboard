"use client";

import { Box, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export function Header({ title }: { title: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 2,
        paddingY: 1,
        backgroundColor: "background.default",
        borderBottom: "1px solid",
        borderColor: "divider",
        width: "100%", // Ensure it spans the container width
        boxSizing: "border-box", // Prevent padding from affecting width
      }}
    >
      {/* Dynamic Title */}
      <Typography variant="h6" fontWeight="bold" color="text.primary">
        {title}
      </Typography>

      {/* User Profile Section */}
      <Box display="flex" alignItems="center">
        <Avatar
          alt="User Avatar"
          src="/images/dashboard/profile/default_user_avatar.png"
          sx={{ width: 40, height: 40, cursor: "pointer" }}
          onClick={handleMenuOpen}
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
