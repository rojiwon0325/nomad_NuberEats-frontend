module.exports = {
  client: {
    includes: ["./src/Apollo/Query/*"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
