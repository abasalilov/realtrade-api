// const bcrypt = require("bcryptjs");
// const models = require("../models");
// const { user } = models;

// const hashPassword = async password => {
//   // Generate a salt at level 10 strength
//   /* eslint-disable */
//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(password, salt);
//   return hash;
// };

// module.exports = {
//   postNewUserRegistration: async (req, res) => {
//     const { username, firstname, lastname, email, dob, pw } = req.body.data;
//     /* eslint-enable */
//     const hashed = await hashPassword(pw);
//     return user
//       .create({
//         username,
//         firstname,
//         lastname,
//         email: username,
//         dob,
//         pw: hashed,
//         googleId: ""
//       })
//       .then(dbReply => res.status(201).send(dbReply))
//       .catch(dbErr => res.status(203).send("Invalid Registration Request"));
//   },
//   confirmUniqueUser: async (req, res) => {
//     const username = req.body.data;
//     return user.findAll({ where: { username: username } }).then(checkUnique => {
//       if (checkUnique.length === 0) {
//         res.status(200).send(`Good news! Username: ${username} is available`);
//       } else {
//         res.status(203).send("This username is taken");
//       }
//     });
//   },
//   loginUser: async (req, res) => {
//     const { username, pw } = req.body;

//     const subbedPW = pw;
//     return user.findOne({ where: { username: username } }).then(dbAuthReply => {

//       const { pw } = dbAuthReply.dataValues;
//       const confirmation = bcrypt.compareSync(subbedPW, pw);
//           console.log('confirmation', confirmation);
//       if (confirmation) {
//         res.status(200).send("Logged In");
//       } else {
//         res.status(400).send("Username or password are invalid");
//       }
//     });
//   }
// };
