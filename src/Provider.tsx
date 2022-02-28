import React, { Suspense } from "react";
import { client } from "Apollo/apollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Provider: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ApolloProvider client={client}>
          <Suspense fallback={<div>suspending...</div>}>{children}</Suspense>
        </ApolloProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Provider;
