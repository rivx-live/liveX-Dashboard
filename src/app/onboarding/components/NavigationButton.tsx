"use client";

import React from "react";

interface NavigationButtonProps {
  label: string;
  onClick: () => void;
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  fullWidth = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${variant === "contained" ? "bg-primary text-black" : "border border-primary text-primary"} ${
        fullWidth ? "w-full" : ""
      } px-6 py-3 font-bold rounded-lg hover:scale-105 transform transition ${className}`}
    >
      {label}
    </button>
  );
};

export default NavigationButton;
