const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const incomeTransactionSchema = new Schema({
  user: { type: ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  category: { name: String, color: String },
  amount: Number,
  account: String,
  comment: String,
  type: {
    type: String,
    default: "income"
  }
});

module.exports = mongoose.model("IncomeTransaction", incomeTransactionSchema);
