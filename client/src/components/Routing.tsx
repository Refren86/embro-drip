import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/HomePage/HomePage";

function Routing() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export { Routing };
