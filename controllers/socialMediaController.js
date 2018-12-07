const handlers = require("./handlers");

module.exports = {
  /** TWITTER */
  twPost: async (req, res) => {
    const { msg, imageURL } = req.body;
    /* eslint-enable */
    console.log("req.body.data", req.body);
    // res.status(201).send("two");
  },

  /** FACEBOOK */
  fbPost: async (req, res) => {
    const { msg, img } = req.body.data;
    /* eslint-enable */
  },

  /** INSTAGRAM */
  igPost: async (req, res) => {
    const { msg, img } = req.body.data;
    /* eslint-enable */
    res.status(201).send(dbReply);

    if (error) {
      res.status(203).send("Invalid Registration Request");
    }
  },
  /** TELEGRAM */
  tgPost: async (req, res) => {
    const { msg } = req.body.data;
    /* eslint-enable */
  }
};
