const User = require("../models/User");
const ExpenseTransaction = require("../models/ExpenseTransaction");

let addExpense = async (req, res) => {
  try {
    let newTransaction = new ExpenseTransaction(req.body);
    let user = await User.findById(req.auth.id);
    newTransaction.user = user;
    let category = user.expense_categories.find(
      category => category.name === req.body.category.name
    );

    if (!category) {
      user.expense_categories.push(req.body.category);
      await user.save();
      category = user.expense_categories.find(
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

let editExpense = async (req, res) => {
  try {
    let expense = await ExpenseTransaction.findById(
      req.params.expenseId
    ).populate("user", "id");

    if (!expense) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = expense.user.id == req.auth.id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    expense = await ExpenseTransaction.findByIdAndUpdate(
      req.params.expenseId,
      { $set: req.body },
      { new: true }
    );

    return res.json(expense);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

let deleteExpense = async (req, res) => {
  try {
    let expense = await ExpenseTransaction.findById(
      req.params.expenseId
    ).populate("user", "id");

    if (!expense) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = expense.user.id == req.auth.id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    await expense.remove(req.params.expenseId);

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

getExpense = async (req, res) => {
  try {
    if (req.params.expenseId) {
      let expense = await ExpenseTransaction.findById(
        req.params.expenseId
      ).populate("user", "id");
      let hasAuthorization = expense && expense.user.id == req.auth.id;
      if (!hasAuthorization) {
        return res.status(401).json({
          error:
            "Could not find the transaction or you don't have the permission"
        });
      } else {
        return res.json(expense);
      }
    } else {
      let expenses = await ExpenseTransaction.find({
        user: await User.findById(req.auth.id)
      });

      return res.json(expenses);
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

module.exports = {
  addExpense,
  editExpense,
  deleteExpense,
  getExpense
};
