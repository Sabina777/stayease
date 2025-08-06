const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stayease_db', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
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
