import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";

const rootElement = document.querySelector(".root");

if (!rootElement) {
    throw new Error('Cannot find the ".root" element in index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);