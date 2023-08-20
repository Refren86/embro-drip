import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@/components/App";

import "swiper/scss";
import "swiper/scss/pagination";
import "./styles/global.scss";

import "./lib/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
