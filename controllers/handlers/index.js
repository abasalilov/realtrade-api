const twitterPostHander = require("./twitterPostHandler");
const fbPostHandler = require("./fbPostHandler");
const igPostHandler = require("./igPostHandler");
const tgPostHandler = require("./tgPostHandler");

const controllers = {
  twitterPostHander,
  fbPostHandler,
  igPostHandler,
  tgPostHandler
};

module.exports = controllers;
