const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControl");
const incomeController = require("../controllers/incomeControl");

// @route /api/income/add
router
  .route("/:incomeId*?")
  .post(authController.requireSignin, incomeController.addIncome)
  .put(authController.requireSignin, incomeController.editIncome)
  .delete(authController.requireSignin, incomeController.deleteIncome)
  .get(authController.requireSignin, incomeController.getIncome);

module.exports = router;
