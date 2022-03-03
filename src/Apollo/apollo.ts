import { ApolloClient, InMemoryCache, makeVar, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "@apollo/client/utilities";
import { getCookie } from "Global/cookie";

export const isLogin = makeVar(Boolean(getCookie("isLogin")));

const server = "//localhost:4000/graphql";

const wsLink = new WebSocketLink({
  uri: "ws:" + server,
  options: {
    reconnect: true,
  },
});

const uploadHttpLink = createUploadLink({
  uri: "http:" + server,
  credentials: "include", // cookie를 얻기 위한 설정
  // include - 서버 도메인이 다름
  // same-origin
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // console.log("GraphQL Error", graphQLErrors);
  }
  if (networkError) {
    // console.log("Network Error", networkError);
  }
});

const httpLink = onErrorLink.concat(uploadHttpLink);

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
