import {
  SET_EXPENSES,
  SET_INCOMES,
  REMOVE_TRANSACTION,
  ADD_EXPENSE
} from "../actions/types";

const initialState = {
  incomes: [],
  expenses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case SET_INCOMES:
      return {
        ...state,
        incomes: action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case REMOVE_TRANSACTION:
      const type = action.payload.type === "Income" ? "incomes" : "expenses";
      const removeIndex = state[type].indexOf(action.payload);
      const newTransactionList = [...state[type]];
      newTransactionList.splice(removeIndex, 1);
      return {
        ...state,
        [type]: newTransactionList
      };
    default:
      return state;
  }
}
