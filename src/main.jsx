import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
