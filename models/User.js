const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let getRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};

const userSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: String,
  picture: String,
  expense_categories: [
    {
      name: { type: String },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ],
  income_categories: [
    {
      name: { type: String },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ],
  accounts: [String]
});

module.exports = User = mongoose.model("User", userSchema);
