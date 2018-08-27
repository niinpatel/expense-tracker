const express = require("express");
const passport = require("passport");
const axios = require("axios");
const qs = require("qs");
const router = express.Router();

router.post("/get-token", (req, res) => {
  // get access-token from bigG
});

router.post(
  "/validate",
  passport.authenticate("passport-google-token", { session: false }),
  (req, res) => {
    // if req.user, send jwt token
    // else send error with 401
  }
);

router.get("/validate", (req, res) => {
  // get current logged user
});

module.exports = router;
