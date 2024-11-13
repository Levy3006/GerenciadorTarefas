import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// criar e renderizar app react na div #root
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
