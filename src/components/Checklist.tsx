"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

const Checklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: "Complete Profile", completed: false },
    { id: 2, text: "Upload Profile Picture", completed: false },
    { id: 3, text: "Verify Email Address", completed: false },
    { id: 4, text: "Take Persona Quiz", completed: false },
  ]);

  const toggleComplete = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="bg-gradient-dark p-4 rounded-2xl shadow-goldGlow">
      <h2 className="text-xl font-heading mb-4 text-primary">Your Checklist</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between mb-3 p-3 rounded-lg ${
              item.completed ? "bg-secondary" : "bg-muted"
            }`}
          >
            <span>{item.text}</span>
            <button
              onClick={() => toggleComplete(item.id)}
              className={`py-1 px-3 rounded-md text-sm ${
                item.completed ? "bg-primary text-secondary" : "bg-muted text-white"
              }`}
            >
              {item.completed ? "Completed" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
