import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/store/store';
import { Toaster } from '@/components/ui/Toaster';
import { ThemeProvider } from './ThemeProvider';

function GeneralProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        // TODO: add fancy loader
        <div className="h-screen bg-[#030712] text-white flex justify-center items-center">Loading...</div>
      }
    >
      <ReduxProvider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>{children}</BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </ReduxProvider>
    </Suspense>
  );
}

export { GeneralProvider };
