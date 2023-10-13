import React from "react";
import * as config from "../config.js";
import { ApiProvider } from "../utils/api.js";
import { App } from "./App.js";

export function Context() {
  return (
    <ApiProvider uri={config.api.url}>
      <App />
    </ApiProvider>
  );
}
