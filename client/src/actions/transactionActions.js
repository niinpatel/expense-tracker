import { SET_EXPENSES, SET_INCOMES, GET_ERRORS } from "./types";

export const setExpenses = transactions => {
  return {
    type: SET_EXPENSES,
    payload: transactions
  };
};

export const setIncomes = transactions => {
  return {
    type: SET_INCOMES,
    payload: transactions
  };
};

export const getErrors = errors => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};
