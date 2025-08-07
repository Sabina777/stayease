require('dotenv').config();
require('reflect-metadata');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./models'); // Sequelize models/index.js
const { gql } = require('apollo-server-express');

const typeDefs = require('./schema'); // GraphQL schema
const resolvers = require('./resolvers'); // GraphQL resolvers

module.exports = resolvers;

async function startServer() {
  const app = express();

  // Apollo Server Setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
      context: () => ({ db }), 

  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // Health check route
  app.get('/', (_, res) => {
    res.send('StayEase Backend is running...');
  });

  // Connect to database
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully.');

    // Optional: Sync DB (in dev only)
    await db.sequelize.sync(); // or sync({ force: true }) for reset
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
