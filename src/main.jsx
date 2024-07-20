import React from "react";
import ReactDOM from "react-dom/client";
import { PlayProvider } from "./contexts/Play";
import "./globals.css";
import { SellingExperience } from "./app/sellingexperience/page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayProvider>
      <SellingExperience />
    </PlayProvider>
  </React.StrictMode>
);
