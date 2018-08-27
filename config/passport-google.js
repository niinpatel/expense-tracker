const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const User = require("../models/User");
const { googleClientId, googleSecret } = require("./keys");

options = {
  clientID: googleClientId,
  clientSecret: googleSecret
};

callback = async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOneAndUpdate(
      { googleId: profile.id },
      {
        name: profile.displayName,
        email: profile._json.email,
        picture: profile._json.picture
      },
      {
        new: true,
        upsert: true
      }
    );

    return done(null, user);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: JSON.stringify(err) });
  }
};

passport.use(new GoogleTokenStrategy(options, callback));

module.exports = passport;
