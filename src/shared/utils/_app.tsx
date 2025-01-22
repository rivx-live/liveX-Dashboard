import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./supabaseClient";
import { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "../base/theme"; // Adjust the path to your theme file

function MyApp({ Component, pageProps }: AppProps) {
  const { initialSession } = pageProps;

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={initialSession}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
