"use client";

import React from "react";
import { motion } from "framer-motion";
import { Checkbox, Typography, Box } from "@mui/material";

type ChecklistItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
};

export default function ChecklistItem({
  id,
  title,
  completed,
  onToggle,
}: ChecklistItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="checklist-item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        marginBottom: "0.75rem",
        borderRadius: "var(--card-border-radius, 1rem)",
        background: "var(--card-background-color)",
        boxShadow: "var(--card-shadow)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Checkbox */}
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
        sx={{
          "&.Mui-checked": {
            color: "var(--primary-color)",
          },
        }}
      />

      {/* Task Title */}
      <Box flexGrow={1} ml={2}>
        <Typography
          variant="body1"
          sx={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "var(--muted)" : "var(--text-color)",
            fontWeight: completed ? "400" : "600",
          }}
        >
          {title}
        </Typography>
      </Box>
    </motion.div>
  );
}
