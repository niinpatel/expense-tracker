const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const getRandomColor = require("../utils/getRandomColor");

const userSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: String,
  picture: String,
  expense_categories: [
    {
      name: { type: String, trim: true },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ],
  income_categories: [
    {
      name: { type: String, trim: true },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ],
  accounts: [String]
});

module.exports = User = mongoose.model("User", userSchema);
