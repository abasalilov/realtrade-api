const db = require("../db");
const Sequelize = require("sequelize");

const Broker = db.define("broker", {
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  brokerage_name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  pw: { type: Sequelize.INTEGER },
  eos: { type: Sequelize.STRING },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = Broker;
