const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControl");
const expenseController = require("../controllers/expenseControl");

// @route /api/expense/add
router
  .route("/:expenseId*?")
  .post(authController.requireSignin, expenseController.addExpense)
  .put(authController.requireSignin, expenseController.editExpense)
  .delete(authController.requireSignin, expenseController.deleteExpense)
  .get(authController.requireSignin, expenseController.getExpense);

module.exports = router;
