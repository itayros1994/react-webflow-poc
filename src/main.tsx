import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function mountApp() {
  const el = document.getElementById("react-hello-world");

  if (!el) {
    console.warn("react-hello-world element not found");
    return;
  }

  createRoot(el).render(<App />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}