"use client";

import React from "react";
import { motion } from "framer-motion";
import "./welcome-banner.module.css";

export default function WelcomeBanner({ name }: { name: string }) {
  return (
    <motion.div
      className="welcome-banner gradient-dark text-accent p-6 rounded-2xl shadow-goldGlow relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Banner Content */}
      <div className="banner-content z-10">
        <h1 className="text-4xl font-heading font-bold">
          Welcome back, {name}!
        </h1>
        <p className="text-lg text-muted mt-2">
          Your journey to success starts here.
        </p>
      </div>

      {/* Static Glow Animation */}
      <div className="static-animation absolute right-0 top-0 h-full w-full opacity-50 z-0">
        <motion.div
          className="static-glow"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
