const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: String,
  picture: String,
  expense_categories: [String],
  income_categories: [String],
  accounts: [String],
  income_transactions: { type: ObjectId, ref: "IncomeTransaction" },
  expense_transactions: { type: ObjectId, ref: "ExpenseTransaction" }
});

module.exports = User = mongoose.model("User", userSchema);
