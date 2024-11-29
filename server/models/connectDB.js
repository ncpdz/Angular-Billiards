const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("angular", "root", "phi171102", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
