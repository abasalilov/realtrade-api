const db = require("../db");
const Sequelize = require("sequelize");

const RTUser = db.define("rt_users", {
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  pw: { type: Sequelize.INTEGER },
  eos: { type: Sequelize.STRING },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = RTUser;
