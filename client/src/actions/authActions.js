import Axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const googleResponse = response => dispatch => {
  if (response.error) {
    console.log(response.error);
    dispatch({
      type: GET_ERRORS,
      payload: response.error
    });
    return;
  }

  Axios.post("/auth/google/validate", {
    access_token: response.accessToken
  }).then(res => {
    const { jwt, user } = res.data;
    localStorage.setItem("jwt", jwt);
    setAuthToken(jwt);
    dispatch(setCurrentUser(user));
  });
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const setCurrentUserFromJwt = () => dispatch => {
  Axios.get("/auth/google/validate")
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwt");
  setAuthToken(false);
  dispatch(setCurrentUser(null));
};
