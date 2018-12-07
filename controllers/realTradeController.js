const bcrypt = require("bcryptjs");
const models = require("../models");
const { agent, broker, rt_user } = models;

const hashPassword = async password => {
  // Generate a salt at level 10 strength
  /* eslint-disable */
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

module.exports = {
  postNewRegistration: async (req, res) => {
    const {
      _firstName,
      _lastName,
      _email,
      _pw,
      _agency,
      _brokerage,
      eos
    } = req.body.data;
    console.log("req", req.body.data);
    /* eslint-enable */
    const hashed = await hashPassword(_pw);
    if (typeof _agency !== "undefined") {
      return agent
        .create({
          firstname: _firstName,
          lastname: _lastName,
          email: req.body.data._email,
          pw: hashed,
          agency_name: _agency,
          eos
        })
        .then(dbReply => {
          console.log("dbReply", dbReply);
          return res.status(201).send(dbReply);
        })
        .catch(dbErr => {
          console.log("dbErr", dbErr);
          return res.status(203).send(dbErr);
        });
    } else if (typeof _brokerage !== "undefined") {
      return broker
        .create({
          firstname: _firstName,
          lastname: _lastName,
          email: req.body.data._email,
          pw: hashed,
          brokerage_name: _brokerage,
          eos
        })
        .then(dbReply => {
          console.log("dbReply", dbReply);
          return res.status(201).send(dbReply);
        })
        .catch(dbErr => {
          console.log("dbErr", dbErr);
          return res.status(203).send(dbErr);
        });
    } else {
      return rt_user
        .create({
          firstname: _firstName,
          lastname: _lastName,
          email: req.body.data._email,
          pw: hashed,
          eos
        })
        .then(dbReply => {
          console.log("dbReply", dbReply);
          return res.status(201).send(dbReply);
        })
        .catch(dbErr => {
          console.log("dbErr", dbErr);
          return res.status(203).send(dbErr);
        });
    }
  },
  loginUser: async (req, res) => {
    const { userType, username, pw } = req.body;
    const subbedPW = pw;
    let confirmation = "";
    if (userType === "rt_user") {
      const dbAuthReply = await rt_user.findOne({ where: { email: username } });

      console.log("dbAuthReply", dbAuthReply);
      // .then(dbAuthReply => {
      //   if (dbAuthReply.dataValues !== null) {
      //     const { pw } = dbAuthReply.dataValues;
      //     const confirmation = bcrypt.compareSync(subbedPW, pw);
      //     if (confirmation) {
      //       res.status(200).send("Logged In");
      //     } else {
      //       res.status(400).send("Username or password are invalid");
      //     }
      //   } else {
      //     res.status(400).send("Username or password are invalid");
      //   }
      // })
      // .catch(dbErr => {
      //   console.log("dbErr", dbErr);
      //   return res.status(203).send("Username or password are invalid");
      // });
    }

    if (userType === "broker") {
      return broker
        .findOne({ where: { email: username } })
        .then(dbAuthReply => {
          if (dbAuthReply.dataValues !== null) {
            const { pw } = dbAuthReply.dataValues;
            const confirmation = bcrypt.compareSync(subbedPW, pw);
            if (confirmation) {
              res.status(200).send("Logged In");
            } else {
              res.status(400).send("Username or password are invalid");
            }
          } else {
            res.status(400).send("Username or password are invalid");
          }
        })
        .catch(dbErr => {
          console.log("dbErr", dbErr);
          return res.status(203).send("Username or password are invalid");
        });
    }

    if (userType === "agent") {
      return agent
        .findOne({ where: { email: username } })
        .then(dbAuthReply => {
          if (dbAuthReply.dataValues !== null) {
            const { pw } = dbAuthReply.dataValues;
            const confirmation = bcrypt.compareSync(subbedPW, pw);
            if (confirmation) {
              res.status(200).send("Logged In");
            } else {
              res.status(400).send("Username or password are invalid");
            }
          } else {
            res.status(400).send("Username or password are invalid");
          }
        })
        .catch(dbErr => {
          console.log("dbErr", dbErr);
          return res.status(203).send("Username or password are invalid");
        });
    }
  },
  confirmUniqueUser: async (req, res) => {
    console.log("req.body", req.body);
    let confirmation = "";
    if (req.body.role === "user") {
      return rt_user
        .findAll({ where: { email: req.body.data } })
        .then(checkUnique => {
          if (checkUnique.length === 0) {
            res
              .status(200)
              .send(`Good news! Username: ${req.body.data} is available`);
          } else {
            res.status(203).send("This username is taken");
          }
        });
    }

    if (req.body.role === "broker") {
      return broker
        .findAll({ where: { email: req.body.data } })
        .then(checkUnique => {
          if (checkUnique.length === 0) {
            res
              .status(200)
              .send(`Good news! Username: ${req.body.data} is available`);
          } else {
            res.status(203).send("This username is taken");
          }
        });
    }

    if (req.body.role === "agent") {
      return agent
        .findAll({ where: { email: req.body.data } })
        .then(checkUnique => {
          if (checkUnique.length === 0) {
            res
              .status(200)
              .send(`Good news! Username: ${req.body.data} is available`);
          } else {
            res.status(203).send("This username is taken");
          }
        });
    }
  }
};
