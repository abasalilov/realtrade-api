const controllers = require("../controllers");
const { socialMediaController } = controllers;

module.exports = app => {
  app.post("/social-media-tw", socialMediaController.twPost);
  app.post("/social-media-fb", socialMediaController.fbPost);
  app.post("/social-media-ig", socialMediaController.igPost);
  app.post("/social-media-tg", socialMediaController.tgPost);
};
