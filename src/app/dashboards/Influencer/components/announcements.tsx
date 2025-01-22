"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define the Announcement type
interface Announcement {
  id: number;
  title: string;
  content: string;
}

// Define the props for the Announcements component
interface AnnouncementsProps {
  announcements: Announcement[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <Box
      className="announcements-section"
      sx={{
        background: "var(--gradient-dark)",
        boxShadow: "var(--elevated)",
        borderRadius: "var(--card-border-radius)",
        overflow: "hidden",
        padding: 3,
      }}
    >
      <Typography
        variant="h5"
        className="text-accent font-heading"
        sx={{ textAlign: "center", marginBottom: 3 }}
      >
        Announcements
      </Typography>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows={false}
      >
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "1.5rem",
              textAlign: "center",
              color: "var(--text-color)",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "var(--card-border-radius)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              className="text-primary"
              sx={{ marginBottom: 1 }}
            >
              {announcement.title}
            </Typography>
            <Typography variant="body1">{announcement.content}</Typography>
          </motion.div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Announcements;
