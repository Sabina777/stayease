const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stayease_db', 'postgres', 'sabmar-6060', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully.');
  } catch (error) {
    console.error(' DB connection failed:', error);
  }
})();
