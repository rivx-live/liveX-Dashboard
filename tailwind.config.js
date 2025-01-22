/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BC9A2D", // Gold
        secondary: "#272727", // Dark background
        accent: "#F3E9DC", // Light accent
        muted: "#6C6C6C", // Muted text
        goldHover: "#d4b344", // Bright gold hover
        midnight: "#121212", // Darker background
        platinum: "#E5E5E5", // Platinum
        ivory: "#FFFDF7", // Soft ivory
        success: "#28a745", // Success green
        error: "#dc3545", // Error red
      },
      fontFamily: {
        sans: ["Open Sans", "Arial", "sans-serif"], // Body text
        heading: ["Oswald", "Helvetica", "Arial", "sans-serif"], // Headers
      },
      borderRadius: {
        xl: "1rem", // Standard rounding
        "2xl": "1.5rem", // Larger corners
        "3xl": "2rem", // Extra-large corners
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0, 0, 0, 0.1)", // Minimal shadow
        goldGlow: "0 4px 15px rgba(188, 154, 45, 0.5)", // Golden glow
        elevated: "0px 6px 20px rgba(0, 0, 0, 0.25)", // Elevated shadow
        frosted: "0px 8px 24px rgba(255, 255, 255, 0.2)", // Frosted effect
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, #272727, #000000)", // Dark gradient
        "gradient-light": "linear-gradient(to bottom, #F3E9DC, #FFFFFF)", // Light gradient
        shimmer: "linear-gradient(90deg, #BC9A2D 25%, #F3E9DC 50%, #BC9A2D 75%)", // Shimmer effect
        frosted: "linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))", // Frosted effect
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out", // Smooth fade-in
        shimmer: "shimmer 1.5s infinite linear", // Shimmer effect
        bounce: "bounce 1s infinite", // Bounce animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      screens: {
        sm: "480px", // Small devices
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Large screens
        "2xl": "1536px", // Extra-large screens
        "3xl": "1920px", // Ultra-wide screens
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Form styles
    require("@tailwindcss/typography"), // Typography utilities
    require("tailwindcss-animatecss")({
      classes: ["fadeIn", "bounce", "zoomIn"], // Animation classes
      settings: {
        animatedSpeed: 500, // Animation speed
        heartBeatSpeed: 1000, // Heartbeat speed
      },
      variants: ["responsive"], // Responsive animations
    }),
  ],
};
