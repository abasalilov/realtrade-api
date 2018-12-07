const mysql = require("mysql");
const Sequelize = require("sequelize");

const db = new Sequelize("realtrade", "aleks", "archer22", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  minUptime: 1000,

  pool: {
    max: 22,
    min: 2,
    connectTimeout: 60 * 60 * 1000,
    aquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    idle: 6000,
    debug: true,
    waitForConnections: true,
    port: 3306
  }
});

console.log("db up on port", db.config.port);
/* eslint-enable */

module.exports = db;
