const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../config/keys");
const expressJwt = require("express-jwt");
const User = require("../models/User");

let requireSignin = expressJwt({
  secret: secretOrKey,
  requestProperty: "auth"
});

let validateToken = (req, res) => {
  if (req.user) {
    let token = jwt.sign(
      {
        id: req.user.id
      },
      secretOrKey,
      {
        expiresIn: 60 * 60 * 6
      }
    );

    return res.json({
      user: req.user,
      jwt: token
    });
  } else {
    res.status(401).json({ error: "Validation failed" });
  }
};

let validateUser = async (req, res) => {
  try {
    let user = await User.findById(req.auth.id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: JSON.stringify(err) });
  }
};

module.exports = { requireSignin, validateToken, validateUser };
