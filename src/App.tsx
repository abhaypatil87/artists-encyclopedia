import React from "react";
import "./App.css";
import Router from "./routes";
import { ApolloProvider } from "@apollo/client";
import getClient from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={getClient}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
