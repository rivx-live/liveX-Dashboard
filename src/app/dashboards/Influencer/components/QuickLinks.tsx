"use client";

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Define QuickLink type
interface QuickLink {
  id: number;
  title: string;
  description: string;
  link: string;
  color: string;
}

const quickLinks: QuickLink[] = [
  {
    id: 1,
    title: "Golden Ticket Offer",
    description: "Secure your spot in the Top 100 for exclusive perks.",
    link: "/offers/golden-ticket",
    color: "primary",
  },
  {
    id: 2,
    title: "Live Sessions",
    description: "Browse and sign up for upcoming live shopping sessions.",
    link: "/sessions",
    color: "secondary",
  },
  {
    id: 3,
    title: "RIVX Academy",
    description: "Access training materials and certifications.",
    link: "/academy",
    color: "goldHover",
  },
  {
    id: 4,
    title: "Your Profile",
    description: "Complete or update your profile for more opportunities.",
    link: "/profile",
    color: "muted",
  },
];

export default function QuickLinks() {
  return (
    <Box
      className="quick-links-section"
      sx={{
        background: "var(--background-color)",
        boxShadow: "var(--elevated)",
        borderRadius: "var(--card-border-radius)",
        padding: 4,
      }}
    >
      {/* Header */}
      <Typography
        variant="h5"
        className="text-primary font-heading"
        sx={{ textAlign: "center", marginBottom: 3 }}
      >
        Quick Links
      </Typography>

      {/* Links Grid */}
      <Grid container spacing={4}>
        {quickLinks.map((link) => (
          <Grid item xs={12} sm={6} md={3} key={link.id}>
            {/* Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: link.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "var(--card-background-color)",
                boxShadow: "var(--card-shadow)",
                borderRadius: "var(--card-border-radius)",
                padding: "1.5rem",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                className="text-accent"
                sx={{ marginBottom: 1 }}
              >
                {link.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {link.description}
              </Typography>
              <Link href={link.link} passHref>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `var(--${link.color}-color)`,
                    color: "var(--text-color)",
                    "&:hover": { backgroundColor: "var(--goldHover)" },
                  }}
                >
                  Explore
                </Button>
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
