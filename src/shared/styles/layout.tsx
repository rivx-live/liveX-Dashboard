"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "@/shared/base/theme"; // Ensure correct import
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  return (
    <html lang="en" data-theme={darkMode ? "dark" : "light"}>
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline /> {/* Applies Material-UI baseline styles */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
