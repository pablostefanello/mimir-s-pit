const { Sequelize } = require('sequelize')

const database = new Sequelize('mimirspit', 'root', '1234', { host: "localhost", dialect: "mysql" })

try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = database