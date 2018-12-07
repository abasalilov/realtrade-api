const controller = require("../controllers");
const { emailController } = controller;

module.exports = app => {
  app.post("/email", emailController.sendEmailMessage);

  //   app.post("/user-registration", userController.postNewUserRegistration);

  //   app.post("/user-login", userController.loginUser);

  //   app.get("/admin-login", requireLogin, (req, res) => {
  //     res.send(admins);
  //   });

  //   app.get("/current_user", (req, res) => {
  //     res.send(users);
  //   });
};
