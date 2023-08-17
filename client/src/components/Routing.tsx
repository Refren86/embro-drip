import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";

function Routing() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export { Routing };
