const db = require("../db");
const Sequelize = require("sequelize");

const Agent = db.define("agent", {
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  agency_name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  pw: { type: Sequelize.INTEGER },
  eos: { type: Sequelize.STRING },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = Agent;
