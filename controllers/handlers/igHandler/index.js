const Client = require("instagram-private-api").V1;

// http://bluebirdjs.com/docs/api/spread.html
// TODO
function postToIG(user, photoURL) {
  const device = new Client.Device(user);
  const storage = new Client.CookieFileStorage(
    __dirname + `/cookies/${user}.json`
  );
  // And go for login
  Client.Session.create(device, storage, user, "Zenith22")
    .then(function(session) {
      // globalSession = session;
      // Now you have a session, we can follow / unfollow, anything...
      // And we want to follow Instagram official profile
      console.log("session", session);
      return Client.Upload.photo(session, "../jonah.jpg")
        .then(function(upload) {
          // upload instanceof Client.Upload
          // nothing more than just keeping upload id
          console.log(upload);
          console.log(upload.params.uploadId);
          return Client.Media.configurePhoto(
            session,
            upload.params.uploadId,
            "platform test 1"
          );
        })
        .then(function(medium) {
          // we configure medium, it is now visible with caption
          console.log(medium.params);
        });
    })
    .then(function(a, b) {
      console.log("a", a);
      console.log("b", b);
      // {followedBy: ... , following: ... }
      // Yey, you just followed @instagram
    });
}

// let globalSession = new Client.Session(device, storage, "aleksb86", "Zenith22");

// JPEG is the only supported format now, pull request for any other format welcomed!
