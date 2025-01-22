import { createTheme } from "@mui/material/styles";
import { Roboto_Condensed, Open_Sans } from "next/font/google";

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

const baseDarkTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#BC9A2D",
      light: "#E3D3A0",
      dark: "#8F761F",
    },
    secondary: {
      main: "#272727",
      light: "#3C3C3C",
      dark: "#1A1A1A",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#AE8E59",
      contrastText: "#ffffff",
    },
    grey: {
      100: "#3C3C3C",
      200: "#3F3F3F",
      300: "#4A4A4A",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#BC9A2D",
    },
    background: {
      default: "#272727",
      paper: "#1E1E1E",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#3C3C3C",
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.2rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
      fontFamily: openSans.style.fontFamily,
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
      fontFamily: openSans.style.fontFamily,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "body": {
          backgroundColor: "#272727",
          color: "#FFFFFF",
        },
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          backgroundColor: "#1E1E1E",
        },
      },
    },
  },
});

const baseLightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#BC9A2D",
      light: "#E3D3A0",
      dark: "#8F761F",
    },
    secondary: {
      main: "#F5F5F5",
      light: "#FFFFFF",
      dark: "#E0E0E0",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#000000",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#000000",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#000000",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#AE8E59",
      contrastText: "#000000",
    },
    grey: {
      100: "#F2F2F2",
      200: "#E6E6E6",
      300: "#CCCCCC",
      400: "#B3B3B3",
      500: "#999999",
      600: "#808080",
    },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    action: {
      disabledBackground: "rgba(0,0,0,0.12)",
      hoverOpacity: 0.04,
      hover: "#f1f1f1",
    },
    divider: "#E5E5E5",
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.2rem",
      fontFamily: robotoCondensed.style.fontFamily,
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
      fontFamily: openSans.style.fontFamily,
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
      fontFamily: openSans.style.fontFamily,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: openSans.style.fontFamily,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "body": {
          backgroundColor: "#FFFFFF",
          color: "#2A3547",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          backgroundColor: "#F5F5F5",
        },
      },
    },
  },
});

export { baseDarkTheme, baseLightTheme };
