"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Switch,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function AccountSettingsPage() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Changes saved successfully!");
    // Add API calls or other logic here
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        padding: { xs: 2, sm: 4 },
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Account Settings
      </Typography>

      {/* Email Section */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Email Address
        </Typography>
        <TextField
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Password Section */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Change Password
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Notifications Section */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Notifications
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
          }
          label="Enable Email Notifications"
        />
      </Box>

      {/* Save Changes Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
