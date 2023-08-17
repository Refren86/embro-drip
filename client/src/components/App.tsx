import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Routing } from "@/components/Routing";
import { GeneralProvider } from "@/providers/GeneralProvider";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <GeneralProvider>
      <Routing />
    </GeneralProvider>
  );
}

export { App };
