import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GreenbankLanding } from "./screens/GreenbankLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <GreenbankLanding />
  </StrictMode>
);
