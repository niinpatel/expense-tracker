const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: String,
  picture: String
});

module.exports = User = mongoose.model("User", userSchema);
