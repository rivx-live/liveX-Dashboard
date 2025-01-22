"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

export default function InteractiveChecklist({
  tasks,
  progress,
}: {
  tasks: { id: number; title: string; completed: boolean }[];
  progress: number;
}) {
  return (
    <div className="checklist-card bg-gradient-light shadow-elevated rounded-2xl p-6 relative overflow-hidden">
      {/* Circular Progress Indicator */}
      <div className="progress-bar-container mx-auto mb-6 w-24 h-24">
        <CircularProgressbar
          value={progress}
          text={`${Math.round(progress)}%`}
          styles={buildStyles({
            pathColor: "#BC9A2D",
            textColor: "#272727",
            trailColor: "#E5E5E5",
            backgroundColor: "#FFFFFF",
          })}
        />
      </div>

      {/* Checklist Title */}
      <h2 className="text-2xl font-heading text-primary mb-4 text-center">
        Your Checklist
      </h2>

      {/* Checklist Items */}
      <ul className="task-list mt-4 space-y-3">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: task.id * 0.1 }}
            className={`task-item flex items-center gap-2 p-3 rounded-lg ${
              task.completed
                ? "bg-muted text-muted line-through"
                : "bg-accent text-secondary"
            }`}
          >
            <span
              className={`w-4 h-4 border-2 rounded-full flex-shrink-0 ${
                task.completed ? "bg-primary border-primary" : "border-muted"
              }`}
            ></span>
            {task.title}
          </motion.li>
        ))}
      </ul>

      {/* Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="bg-gradient-dark rounded-3xl transform rotate-45 scale-125"></div>
      </div>
    </div>
  );
}
