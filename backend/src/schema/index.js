const { gql } = require('apollo-server-express');
const propertyTypeDefs = require('./property');

const typeDefs = gql`
  ${propertyTypeDefs}
  # add other typeDefs here
`;

module.exports = typeDefs;
