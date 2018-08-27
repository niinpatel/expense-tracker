const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const User = require("../models/User");
const { googleClientId, googleSecret } = require("./keys");

options = {
  clientID: googleClientId,
  clientSecret: googleSecret
};

callback = (accessToken, refreshToken, profile, done) => {
  // add or u pdate user
  // return done(err, user)
};

passport.use(new GoogleTokenStrategy(options, callback));

module.exports = passport;
