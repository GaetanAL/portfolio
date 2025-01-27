
/**
 *  Node modules
 */
import { StrictMode } from "react";

/**
 * CSS link
 */
import { createRoot } from "react-dom/client";

/**
 * Components
 */
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
