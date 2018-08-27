const express = require("express");
const app = express();
require("./dbconnect");
const passport = require("passport");

require("./config/passport-google");
app.use(passport.initialize());

const googleAuthRoutes = require("./routes/authGoogle");
app.use("/auth/google/", googleAuthRoutes);

app.listen(5000, err => {
  if (err) throw err;
  console.log("listening on 5000");
});
