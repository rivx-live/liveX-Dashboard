"use client"; // Ensure this is treated as a Client Component

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
  const theme = useTheme(); // Access the Material-UI theme

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Brands", path: "/admin/brands" },
    { name: "Products", path: "/admin/products" },
    { name: "Transactions", path: "/admin/transactions" },
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
          backgroundColor: theme.palette.background.paper, // Dynamically use the theme's background
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
          borderBottom: `1px solid ${theme.palette.divider}`, // Use the theme's divider color
          padding: 2,
        }}
      >
        <Image
          src="/images/logos/livex-logo.svg" // Ensure this matches the actual file location
          alt="LiveX Logo"
          width={160}
          height={60}
        />
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            href={item.path}
            key={item.name}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.action.hover, // Use hover color from theme
              },
              "&.Mui-selected": {
                backgroundColor: theme.palette.action.selected, // Selected state styling
                color: theme.palette.primary.main,
              },
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                color: theme.palette.text.primary, // Use theme's text color
                fontWeight: 500, // Optional font weight for consistency
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
