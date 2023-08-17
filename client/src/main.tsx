import React from "react";
import ReactDOM from "react-dom/client";

import "swiper/css";
import 'swiper/css/pagination';
import "./styles/global.scss";

import { App } from "@/components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
