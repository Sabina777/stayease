const propertyResolvers = require('./property');

const resolvers = {
  Query: {
    ...propertyResolvers.Query,
  },
  Mutation: {
    ...propertyResolvers.Mutation,
  },
};

module.exports = resolvers;
