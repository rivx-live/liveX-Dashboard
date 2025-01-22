"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import { supabase } from "@/shared/utils/supabaseClient";

export default function UpdateProfilePage() {
  const [selectedPersona, setSelectedPersona] = useState("");
  const [primaryNiche, setPrimaryNiche] = useState("");
  const [secondaryNiche, setSecondaryNiche] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const personas = [
    "The Charismatic Entertainer",
    "The Expert/Authority",
    "The Relatable Friend",
    "The Trendsetter",
    "The Inspirational Motivator",
    "The Glamorous Influencer",
    "The Comedian",
    "The DIY Specialist",
    "The Fitness Guru",
    "The Quiet, Cool Enthusiast",
    "The Family-Friendly Host",
    "The Eco-Conscious Activist",
    "The Luxe Aesthetician",
    "The Social Media Maven",
    "The Storyteller",
    "The Gamified Seller",
  ];

  const niches = [
    "Fashion & Apparel",
    "Beauty & Skincare",
    "Health & Wellness",
    "Tech & Gadgets",
    "Home & Lifestyle",
    "Food & Beverage",
    "Toys & Kids' Products",
    "Fitness & Activewear",
    "Art & Craft",
    "Travel & Outdoor Gear",
    "Luxury Goods & Premium Brands",
    "Eco-Friendly & Sustainable Products",
    "Gaming & Entertainment",
    "Books & Stationery",
    "Automotive & Gadgets",
  ];

  const handleSubmit = async () => {
    setError(null);
    setSuccessMessage(null);

    if (!selectedPersona || !primaryNiche || !secondaryNiche) {
      setError("Please complete all fields.");
      return;
    }

    if (primaryNiche === secondaryNiche) {
      setError("Primary and secondary niches must be different.");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError("User not logged in.");
      return;
    }

    const { error } = await supabase
      .from("influencer_profiles")
      .update({
        persona: selectedPersona,
        primary_niche: primaryNiche,
        secondary_niche: secondaryNiche,
      })
      .eq("user_id", user?.id);

    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Profile updated successfully!");
    }
  };

  return (
    <Box
      maxWidth={800}
      mx="auto"
      p={{ xs: 2, md: 4 }}
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Update Your Profile
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

      <Typography variant="h6" fontWeight="bold" mb={2}>
        Select Your Persona
      </Typography>
      <RadioGroup
        value={selectedPersona}
        onChange={(e) => setSelectedPersona(e.target.value)}
      >
        <Grid container spacing={2}>
          {personas.map((persona) => (
            <Grid item xs={12} sm={6} key={persona}>
              <Card
                variant="outlined"
                sx={{
                  border:
                    selectedPersona === persona ? "2px solid #BC9A2D" : "none",
                  transition: "border 0.2s",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <FormControlLabel
                    value={persona}
                    control={<Radio />}
                    label={persona}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>

      <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
        Select Your Niches
      </Typography>
      <Box display="flex" gap={2} mb={4} flexDirection={{ xs: "column", sm: "row" }}>
        <Select
          value={primaryNiche}
          onChange={(e) => setPrimaryNiche(e.target.value)}
          fullWidth
          displayEmpty
          sx={{ minWidth: "200px" }}
        >
          <MenuItem value="" disabled>
            Select Primary Niche
          </MenuItem>
          {niches.map((niche) => (
            <MenuItem key={niche} value={niche}>
              {niche}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={secondaryNiche}
          onChange={(e) => setSecondaryNiche(e.target.value)}
          fullWidth
          displayEmpty
          sx={{ minWidth: "200px" }}
        >
          <MenuItem value="" disabled>
            Select Secondary Niche
          </MenuItem>
          {niches
            .filter((niche) => niche !== primaryNiche)
            .map((niche) => (
              <MenuItem key={niche} value={niche}>
                {niche}
              </MenuItem>
            ))}
        </Select>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{
          padding: "0.75rem",
          fontSize: "1rem",
          backgroundColor: "#BC9A2D",
        }}
        onClick={handleSubmit}
        disabled={!selectedPersona || !primaryNiche || !secondaryNiche}
      >
        Save Profile
      </Button>
    </Box>
  );
}
