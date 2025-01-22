"use client";

import React from "react";

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label = "Next" }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:scale-105 transform transition"
    >
      {label}
    </button>
  );
};

export default NextButton;
