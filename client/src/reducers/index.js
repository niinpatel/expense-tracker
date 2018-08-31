import { combineReducers } from "redux";
import authReducer from "./authReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  auth: authReducer,
  transactions: transactionReducer
});
