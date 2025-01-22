"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar alt="User" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link href="/profile">Profile</Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => console.log("Logout")}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
