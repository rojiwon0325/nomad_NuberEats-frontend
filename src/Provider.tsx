import React, { Suspense } from "react";
import { client } from "apollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const Provider: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Suspense fallback={<div>suspending...</div>}>{children}</Suspense>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default Provider;
