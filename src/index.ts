import React from "react";
import ReactDOM from "react-dom/client";
import { Context } from "./components/Context.js";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  React.createElement(Context)
);
