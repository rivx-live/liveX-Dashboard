"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      className="not-found-container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        textAlign: "center",
        px: 4,
      }}
    >
      {/* Animated 404 Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            fontSize: "4rem",
            fontFamily: "heading",
            color: "primary.main",
          }}
        >
          404
        </Typography>
      </motion.div>

      {/* Error Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 4,
            fontFamily: "body",
          }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </Typography>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            mb: 2,
            "&:hover": { backgroundColor: "primary.dark" },
          }}
          onClick={() => router.push("/")}
        >
          Go Home
        </Button>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            borderColor: "primary.main",
            color: "primary.main",
            "&:hover": { borderColor: "primary.dark", color: "primary.dark" },
          }}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </motion.div>
    </Box>
  );
}
