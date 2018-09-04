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
    let userExists = await User.findOne({ googleId: profile.id });
    if (userExists) {
      let user = await User.findOneAndUpdate(
        { googleId: profile.id },
        {
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          email: profile._json.email,
          picture: profile._json.picture
        },
        {
          new: true,
          upsert: true
        }
      );
      return done(null, user);
    } else {
      const expense_categories = ["Rent", "Food", "Travel", "Entertainment"];
      const income_categories = ["Salary"];
      let user = await User.findOneAndUpdate(
        { googleId: profile.id },
        {
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          email: profile._json.email,
          picture: profile._json.picture,
          expense_categories: expense_categories.map(name => ({ name: name })),
          income_categories: income_categories.map(name => ({ name: name })),
          accounts: ["Personal"]
        },
        {
          new: true,
          upsert: true
        }
      );
      return done(null, user);
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: JSON.stringify(err) });
  }
};

passport.use(new GoogleTokenStrategy(options, callback));

module.exports = passport;
