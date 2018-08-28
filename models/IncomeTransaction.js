const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const incomeTransactionSchema = new Schema({
  user: { type: ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  category: String,
  amount: Number,
  account: String,
  comment: String
});

module.exports = mongoose.model("IncomeTransaction", incomeTransactionSchema);
