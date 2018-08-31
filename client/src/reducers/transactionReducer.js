import { SET_EXPENSES, SET_INCOMES } from "../actions/types";

const initialState = {
  incomes: [],
  expenses: []
};

export default function(state = initialState, action) {
  if (action.type === SET_EXPENSES) {
    return {
      ...state,
      expenses: action.payload.map(each => ({ ...each, type: "expense" }))
    };
  } else if (action.type === SET_INCOMES) {
    return {
      ...state,
      incomes: action.payload.map(each => ({ ...each, type: "income" }))
    };
  } else {
    return state;
  }
}
