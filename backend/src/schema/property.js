const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Property {
    id: ID
    title: String
    description: String
    price: Float
    userId: Int
  }

  type Query {
    properties(userId: Int): [Property!]!
    property(id: ID!): Property
  }

  type Mutation {
    createProperty(
      title: String
      description: String
      price: Float
      userId: Int
    ): Property!

    updateProperty(
      id: ID!
      title: String
      description: String
      price: Float
      userId: Int
    ): Property!

    deleteProperty(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
