const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys");
require("./services/passport");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
// require("./routes/userRoutes")(app);
require("./routes/emailRoutes")(app);
require("./routes/socialMediaRoutes")(app);
require("./routes/realTradeRoutes")(app);

// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;
console.log(`api listening on port:${PORT}`);
app.listen(PORT);
