//* Imports
import React from "react";
import ReactDOM from "react-dom/client";
import "preline/dist/hs-ui.bundle";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

//* JSX
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
