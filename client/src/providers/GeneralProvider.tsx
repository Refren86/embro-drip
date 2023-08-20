import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./ThemeProvider";

function GeneralProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export { GeneralProvider };
