// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // You can use your own CSS file here
import App from "./App"; // Ensure App.js exists in the src folder

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
