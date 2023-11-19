import React, { createContext, useContext } from "react";
import { config } from "../config.js";

const Context = createContext(config.api.url);
const Provider = Context.Provider;

export function ApiProvider({
  baseUrl,
  children,
}: React.PropsWithChildren<{ baseUrl?: string }>) {
  const value = useContext(Context);
  return <Provider value={baseUrl ?? value}>{children}</Provider>;
}

export function useApi() {
  return useContext(Context);
}
