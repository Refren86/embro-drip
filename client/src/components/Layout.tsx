import { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export { Layout };
