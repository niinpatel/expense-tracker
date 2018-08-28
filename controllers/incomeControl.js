const User = require("../models/User");
const IncomeTransaction = require("../models/IncomeTransaction");

let addIncome = async (req, res) => {
  try {
    let newTransaction = new IncomeTransaction(req.body);
    let user = await User.findById(req.auth.id);
    newTransaction.user = user;

    user.income_transactions.unshift(newTransaction.id);

    if (!user.income_categories.includes(req.body.category)) {
      user.income_categories.push(req.body.category);
    }

    await newTransaction.save();
    await user.save();
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

let editIncome = async (req, res) => {
  try {
    let income = await IncomeTransaction.findById(req.params.incomeId).populate(
      "user",
      "id"
    );

    if (!income) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = income.user.id == req.auth.id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    income = await IncomeTransaction.findByIdAndUpdate(
      req.params.incomeId,
      { $set: req.body },
      { new: true }
    );

    return res.json(income);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

let deleteIncome = async (req, res) => {
  try {
    let income = await IncomeTransaction.findById(req.params.incomeId).populate(
      "user",
      "id"
    );

    if (!income) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = income.user.id == req.auth.id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    let user = await User.findById(req.auth.id);
    let removeIndex = user.income_transactions.indexOf(req.params.incomeId);

    user.income_transactions.splice(removeIndex, 1);
    await user.save();
    await income.remove(req.params.incomeId);

    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

module.exports = {
  addIncome,
  editIncome,
  deleteIncome
};
