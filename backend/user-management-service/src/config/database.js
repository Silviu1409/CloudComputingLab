const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'oracle',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SID,
});

module.exports = sequelize;
