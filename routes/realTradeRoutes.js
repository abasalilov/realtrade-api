const requireLogin = require("../middlewares/requireLogin");
const controller = require("../controllers");
const { realTradeController } = controller;

module.exports = app => {
  app.post("/realtrade-registration", realTradeController.postNewRegistration);

  app.post("/realtrade-login", realTradeController.loginUser);

  app.post("/rt-username-check", realTradeController.confirmUniqueUser);
};
