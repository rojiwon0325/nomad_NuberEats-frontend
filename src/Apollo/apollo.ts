import { ApolloClient, InMemoryCache, makeVar, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "@apollo/client/utilities";
import { getCookie } from "Global/cookie";

export const isLogin = makeVar(Boolean(getCookie("access_token")));

const server = "//localhost:4000/graphql";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
  };
});

const wsLink = new WebSocketLink({
  uri: "ws:" + server,
  options: {
    reconnect: true,
    connectionParams: () => ({
      Authentication: `Bearer ${getCookie("access_token")}`,
    }),
  },
});

const uploadHttpLink = createUploadLink({
  uri: "http:" + server,
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // console.log("GraphQL Error", graphQLErrors);
  }
  if (networkError) {
    // console.log("Network Error", networkError);
  }
});

const httpLink = authLink.concat(onErrorLink).concat(uploadHttpLink);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
