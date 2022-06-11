import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { EntriesProvider } from "../context/entries";
import { UiProvider } from "../context/ui";
import { lightTheme, darkTheme } from "../themes";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UiProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
