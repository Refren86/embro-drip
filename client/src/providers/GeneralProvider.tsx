import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./ThemeProvider";

function GeneralProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}

export { GeneralProvider };
