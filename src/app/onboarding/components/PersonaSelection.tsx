"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "src/app/dashboards/influencer/onboarding/persona.module.css";

// Define props for individual persona cards
interface PersonaCardProps {
  persona: string;
  selected: boolean;
  onSelect: (persona: string) => void;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona, selected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(persona)}
      className={`${styles.card} ${selected ? styles.cardSelected : ""}`}
    >
      <h3 className={styles.cardTitle}>{persona}</h3>
    </motion.div>
  );
};

// Define props for the PersonaSelection component
interface PersonaSelectionProps {
  onSelect: (persona: string) => void; // Callback when a persona is selected
}

const PersonaSelection: React.FC<PersonaSelectionProps> = ({ onSelect }) => {
  const [selectedPersona, setSelectedPersona] = React.useState<string | null>(null);

  const handleSelect = (persona: string) => {
    setSelectedPersona(persona); // Update local state for UI feedback
    onSelect(persona); // Pass the selected persona to the parent component
  };

  const personas = ["Visionary", "Creator", "Connector"]; // Example persona options

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold text-primary mb-4">Who Are You?</h1>
      <div className={styles.grid}>
        {personas.map((persona) => (
          <PersonaCard
            key={persona}
            persona={persona}
            selected={persona === selectedPersona}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonaSelection;
