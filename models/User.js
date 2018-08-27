const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  name: String,
  email: String
});

module.exports = User = mongoose.model("User", userSchema);
