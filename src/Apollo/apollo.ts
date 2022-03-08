import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "@apollo/client/utilities";
import { ISLOGIN_QUERY } from "./Query/user";

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
    graphQLErrors.forEach(({ message }) =>
      message === "Forbidden resource"
        ? client.refetchQueries({ include: [ISLOGIN_QUERY] })
        : null
    );
    //console.log(graphQLErrors);
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

const filtering = (array: { __ref: string }[]) => {
  return array.filter(
    (item1, idx) =>
      array.findIndex((item2) => item1.__ref === item2.__ref) === idx
  );
};

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          findAllMyRestaurant: {
            keyArgs: false,
            merge: (_, inc) => inc,
          },
        },
      },
    },
  }),
});
