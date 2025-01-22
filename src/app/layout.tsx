"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { useThemeToggle } from "@/shared/utils/useThemeToggle";
import { darkTheme, lightTheme } from "@/shared/base/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { darkMode } = useThemeToggle();

  return (
    <html lang="en" data-theme={darkMode ? "dark" : "light"}>
      <head>
        <title>LiveX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to LiveX, the future of live shopping." />
        <meta property="og:title" content="LiveX - Revolutionizing Live Shopping" />
        <meta
          property="og:description"
          content="Join the LiveX community and take part in live shopping events that connect influencers and brands."
        />
        <meta property="og:image" content="/images/branding/liveX-logo.png" />
        <meta property="og:url" content="https://livex.com" />
        <link rel="icon" href="/images/branding/favicon.ico" />
      </head>
      <body className={`min-h-screen flex flex-col ${darkMode ? "bg-gradient-dark text-accent" : "bg-gradient-light text-midnight"}`}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          {/* Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={darkMode ? "dark" : "light"}
          />
          {/* Main Content */}
          <div id="root-layout" className="flex-grow">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
