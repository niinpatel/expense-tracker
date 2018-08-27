const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../config/keys");
const expressJwt = require("express-jwt");

//@route POST /auth/google/validate
router
  .route("/validate")
  .post(
    passport.authenticate("google-token", { session: false }),
    (req, res) => {
      // if req.user >> create and send jwt, else send error 401
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
    }
  )
  .get(
    expressJwt({
      secret: secretOrKey,
      requestProperty: "auth"
    }),
    async (req, res) => {
      try {
        let user = await User.findById(req.auth.id);
        res.json(user);
      } catch (err) {
        console.log(err);
        res.status(400).json({ error: JSON.stringify(err) });
      }
    }
  );

module.exports = router;
