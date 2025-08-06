require('dotenv').config();
require('reflect-metadata');

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Sample typeDefs & resolvers
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from StayEase backend!',
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(` Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
