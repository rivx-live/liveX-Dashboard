import { createTheme } from "@mui/material/styles";
import { Roboto_Condensed, Open_Sans } from "next/font/google";

// Define fonts
export const robotoCondensed = Roboto_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Common typography settings
const typography = {
  fontFamily: openSans.style.fontFamily,
  h1: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: 1.3,
  },
  h2: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: 1.4,
  },
  h3: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: 1.5,
  },
  h4: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1.6,
  },
  h5: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.7,
  },
  h6: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.8,
  },
  body1: {
    fontFamily: openSans.style.fontFamily,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: openSans.style.fontFamily,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  subtitle1: {
    fontFamily: openSans.style.fontFamily,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  subtitle2: {
    fontFamily: openSans.style.fontFamily,
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  button: {
    fontFamily: robotoCondensed.style.fontFamily,
    fontWeight: 700,
    fontSize: "1rem",
    textTransform: "uppercase" as const, // Fixed type issue here
  },
};

// Light Theme
export const lightTheme = createTheme({
  palette: {
    primary: { main: "#BC9A2D" }, // Gold
    secondary: { main: "#272727" }, // Dark background
    background: { default: "#FFFFFF", paper: "#F5F5F5" },
    text: { primary: "#2A3547", secondary: "#BC9A2D" },
  },
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#d4b344",
            boxShadow: "0 6px 15px rgba(188, 154, 45, 0.4)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        },
      },
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    primary: { main: "#BC9A2D" },
    secondary: { main: "#272727" },
    background: { default: "#272727", paper: "#1E1E1E" },
    text: { primary: "#FFFFFF", secondary: "#BC9A2D" },
  },
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#BC9A2D",
            boxShadow: "0 6px 15px rgba(188, 154, 45, 0.6)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          borderRadius: "12px",
        },
      },
    },
  },
});
