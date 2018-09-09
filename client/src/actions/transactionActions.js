import {
  SET_EXPENSES,
  SET_INCOMES,
  GET_ERRORS,
  REMOVE_TRANSACTION,
  ADD_EXPENSE
} from "./types";
import axios from "axios";

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

export const addExpense = transaction => dispatch => {
  axios
    .post("/api/expense/", transaction)
    .then(res => {
      dispatch({
        type: ADD_EXPENSE,
        payload: res.data
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ERRORS,
        payload: e.response.data
      });
    });
};

export const deleteTransaction = transaction => dispatch => {
  const { type, _id } = transaction;
  let request;
  if (type === "Income") {
    request = axios.delete(`/api/income/${_id}`);
  } else request = axios.delete(`/api/expense/${_id}`);
  request.then(res => {
    dispatch({
      type: REMOVE_TRANSACTION,
      payload: transaction
    });
  });
};

export const getErrors = errors => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};
