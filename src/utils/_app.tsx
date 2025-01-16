import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabaseClient";
import { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import baseDarkTheme from "../utils/theme"; // Adjust the path to your theme file

function MyApp({ Component, pageProps }: AppProps) {
  const { initialSession } = pageProps;

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={initialSession}
    >
      <ThemeProvider theme={baseDarkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
