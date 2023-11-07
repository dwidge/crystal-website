import React from "react";
import { config } from "../config.js";
import { ApiProvider } from "../api/api.js";
import { App } from "./App.js";

export function Context() {
  return (
    <ApiProvider uri={config.api.url}>
      <App />
    </ApiProvider>
  );
}
