import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import MainLayout from "./layouts/MainLayout";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
