const User = require("../models/User");
const IncomeTransaction = require("../models/IncomeTransaction");

let addIncome = async (req, res) => {
  try {
    let newTransaction = new IncomeTransaction(req.body);
    let user = await User.findById(req.auth.id);
    newTransaction.user = user;
    let category = user.income_categories.find(
      category => category.name === req.body.category.name
    );

    if (!category) {
      user.income_categories.push(req.body.category);
      await user.save();
      category = user.income_categories.find(
        category => category.name === req.body.category.name
      );
    }

    newTransaction.category = category;
    await newTransaction.save();
    return res.json(newTransaction);
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

    await income.remove(req.params.incomeId);

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

getIncome = async (req, res) => {
  try {
    if (req.params.incomeId) {
      let income = await IncomeTransaction.findById(
        req.params.incomeId
      ).populate("user", "id");
      let hasAuthorization = income && income.user.id == req.auth.id;
      if (!hasAuthorization) {
        return res.status(401).json({
          error:
            "Could not find the transaction or you don't have the permission"
        });
      } else {
        return res.json(income);
      }
    } else {
      let incomes = await IncomeTransaction.find({
        user: await User.findById(req.auth.id)
      });

      return res.json(incomes);
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

module.exports = {
  addIncome,
  editIncome,
  deleteIncome,
  getIncome
};
