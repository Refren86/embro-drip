import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "@/components/ui/Toaster";
import { ThemeProvider } from "./ThemeProvider";

function GeneralProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        // TODO: add fancy loader
        <div className="h-screen bg-[#030712] text-white flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>{children}</BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}

export { GeneralProvider };
