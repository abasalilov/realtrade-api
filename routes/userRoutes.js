// const requireLogin = require("../middlewares/requireLogin");
// const controller = require("../controllers");
// const { userController } = controller;

// const users = ["GMAS", "Development"];
// const admins = ["GMAS", "Development"];

// module.exports = app => {
//   app.get("/users/xss", (req, res) => {
//     res.send(usersXss);
//   });

//   app.post("/username-check", userController.confirmUniqueUser);

//   app.post("/user-registration", userController.postNewUserRegistration);

//   app.post("/user-login", userController.loginUser);

//   app.get("/admin-login", requireLogin, (req, res) => {
//     res.send(admins);
//   });

//   app.get("/current_user", (req, res) => {
//     res.send(users);
//   });
// };
