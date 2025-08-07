const db = require('../models');

const propertyResolvers = {
  Query: {
    properties: async (_, { location }) => {
      const where = location ? { location } : {};
      return await db.Property.findAll({ where });
    },
    property: async (_, { id }) => {
      return await db.Property.findByPk(id);
    },
  },
  Mutation: {
createProperty: async (parent, args, context) => {
  const { db } = context;

  if (!db) {
    throw new Error('DB not found in context');
  }
  console.log('Creating property with args:', args);

  // args contains: { name, location, pricePerNight, description }
  const newProperty = await db.Property.create(args);
  console.log('new property', newProperty.toJSON());
  return newProperty;
},

    updateProperty: async (_, { id, ...updates }) => {
      const property = await db.Property.findByPk(id);
      if (!property) throw new Error('Property not found');
      return await property.update(updates);
    },
    deleteProperty: async (_, { id }) => {
      const deleted = await db.Property.destroy({ where: { id } });
      return deleted > 0;
    },
  },
};

module.exports = propertyResolvers;
