"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "src/app/onboarding/styles/persona.module.css"; // Corrected path

// Define props for individual persona cards
interface PersonaCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ title, description, imageUrl }) => (
  <motion.div
    className={styles.card}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Image
      src={imageUrl}
      alt={title}
      className={styles.image}
      width={200} // Set appropriate width
      height={200} // Set appropriate height
      quality={90} // Optional: Set image quality
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </motion.div>
);

export default function Step2PersonaPage() {
  const personas = [
    { title: "Traveler", description: "Explore new places", imageUrl: "/images/traveler.png" },
    { title: "Foodie", description: "Savor the flavors", imageUrl: "/images/foodie.png" },
    { title: "Creator", description: "Express your creativity", imageUrl: "/images/creator.png" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Choose Your Persona</h1>
      <div className={styles.cards}>
        {personas.map((persona, index) => (
          <PersonaCard
            key={index}
            title={persona.title}
            description={persona.description}
            imageUrl={persona.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
