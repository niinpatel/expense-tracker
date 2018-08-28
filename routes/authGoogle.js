const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authControl");

//@route /auth/google/validate
router
  .route("/validate")
  .post(
    passport.authenticate("google-token", { session: false }),
    authController.validateToken
  )
  .get(authController.requireSignin, authController.validateUser);

module.exports = router;
