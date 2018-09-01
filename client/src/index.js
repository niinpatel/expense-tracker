import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { logoutUser, setCurrentUserFromJwt } from "./actions/authActions";
import "animsition/dist/css/animsition.min.css";
import "animsition/dist/js/animsition.min";
import "./css/font-face.css";
import "./css/theme.css";

if (localStorage.jwt) {
  let decoded = jwt_decode(localStorage.jwt);
  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(logoutUser());
  } else {
    setAuthToken(localStorage.jwt);
    store.dispatch(setCurrentUserFromJwt());
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
