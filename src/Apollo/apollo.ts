import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { ISLOGIN_QUERY } from "./Query/user";

export const uploadCoverImage = async (
  file: File
): Promise<string | undefined> => {
  try {
    const body = new FormData();
    body.append("file", file);
    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      credentials: "include",
      body,
    });
    const { url } = await response.json();
    return url;
  } catch {
    return undefined;
  }
};

const server = "//localhost:4000/graphql";

const wsLink = new WebSocketLink({
  uri: "ws:" + server,
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
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

const graphqlLink = onErrorLink.concat(httpLink);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  graphqlLink
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
