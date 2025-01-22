"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Store as StoreIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Schedule as ScheduleIcon,
  School as SchoolIcon,
  Stars as StarsIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar({
  onSectionChange,
}: {
  onSectionChange: (title: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const router = useRouter();

  const navigate = (path: string, title: string) => {
    router.push(path);
    setActiveSection(title);
    onSectionChange(title);
    setOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1300,
          color: "var(--primary-color)",
          display: { sm: "none" },
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Persistent Sidebar */}
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "background.default",
            boxShadow: "var(--card-shadow)",
          },
        }}
      >
        <SidebarContent
          navigate={navigate}
          toggleDropdown={toggleDropdown}
          dropdownOpen={dropdownOpen}
          activeSection={activeSection}
        />
      </Drawer>

      {/* Temporary Sidebar for Mobile */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "background.default",
            boxShadow: "var(--card-shadow)",
          },
        }}
      >
        <SidebarContent
          navigate={navigate}
          toggleDropdown={toggleDropdown}
          dropdownOpen={dropdownOpen}
          activeSection={activeSection}
        />
      </Drawer>
    </>
  );
}

function SidebarContent({
  navigate,
  toggleDropdown,
  dropdownOpen,
  activeSection,
}: {
  navigate: (path: string, title: string) => void;
  toggleDropdown: () => void;
  dropdownOpen: boolean;
  activeSection: string;
}) {
  return (
    <Box>
      {/* Logo Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          background: "var(--gradient-dark)",
        }}
      >
        <Image
          src="/images/branding/logos/livex-logo.svg"
          alt="LiveX Logo"
          width={150}
          height={50}
          priority
        />
      </Box>

      {/* User Profile Section */}
      <Box textAlign="center" py={3}>
        <Image
          src="/images/dashboard/profile/avatar/test-profile.png"
          alt="User Avatar"
          width={90}
          height={90}
          style={{
            borderRadius: "50%",
            border: "3px solid var(--primary-color)",
            boxShadow: "0 4px 15px rgba(188, 154, 45, 0.5)",
          }}
        />
        <Typography variant="h6" fontWeight="bold" mt={2} className="text-accent">
          User Name
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Future Star
        </Typography>
        <ListItem button onClick={toggleDropdown}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile Options" />
          {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              onClick={() =>
                navigate("/dashboards/influencer/profile", "Your Profile")
              }
            >
              <ListItemText primary="Your Profile" />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                navigate("/dashboards/influencer/settings", "Account Settings")
              }
            >
              <ListItemText primary="Account Settings" />
            </ListItem>
          </List>
        </Collapse>
      </Box>
      <Divider />

      {/* Navigation Items */}
      <List>
        {[
          { label: "Home", icon: <HomeIcon />, path: "/dashboards/influencer" },
          { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboards/influencer/dashboard" },
          { label: "Sessions", icon: <ScheduleIcon />, path: "/dashboards/influencer/sessions" },
          { label: "Marketplace", icon: <StoreIcon />, path: "/dashboards/influencer/marketplace" },
          { label: "Community", icon: <GroupIcon />, path: "/dashboards/influencer/community" },
          { label: "Academy", icon: <SchoolIcon />, path: "/dashboards/influencer/academy" },
          { label: "RIVX Score", icon: <StarsIcon />, path: "/dashboards/influencer/rivxscore" },
        ].map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(item.path, item.label)}
            selected={activeSection === item.label}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
