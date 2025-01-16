"use client"; // Ensure this is treated as a Client Component in Next.js

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Drawer,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const theme = useTheme(); // Access Material-UI theme

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/admin/users" },
    { name: "Sessions", path: "/admin/sessions" },
    { name: "Sales", path: "/admin/sales" },
    { name: "Certifications", path: "/admin/certifications" },
    { name: "Reports", path: "/admin/reports" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default, // Sidebar background
        },
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: 2,
        }}
      >
        <Image
          src="/images/logos/livex-logo.svg" // Ensure the file exists at this path
          alt="LiveX Logo"
          width={120}
          height={40}
          priority // Optimize loading for the logo
        />
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
              paddingX: 2,
            }}
          >
            {/* Use Link correctly with ListItemText */}
            <Link
              href={item.path}
              passHref
              style={{
                textDecoration: "none",
                width: "100%", // Ensure full width clickable area
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  color: theme.palette.text.primary, // Theme-based text color
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
