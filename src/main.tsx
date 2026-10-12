import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
const ssrPath = container.dataset.ssrPath;

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Hydrate only when the prerendered markup belongs to this exact URL;
// otherwise (dev server, SPA fallback, 404 page) render from scratch.
if (container.hasChildNodes() && ssrPath && normalize(ssrPath) === normalize(window.location.pathname)) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  createRoot(container).render(app);
}
