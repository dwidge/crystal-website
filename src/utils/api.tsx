import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export function ApiProvider({
  uri,
  children,
}: React.PropsWithChildren<{ uri: string }>) {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
