import React, { Component } from "react";
import PropTypes from "prop-types";
// import { GoogleLogin } from "react-google-login";
// import { clientId } from "../config";

export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  // responseGoogle = responseGoogle => {
  //   console.log(responseGoogle);
  // };

  render() {
    return (
      <div className="login-wrap">
        <div className="login-content">
          <div className="login-logo">
            <a href="">
              <img src="images/icon/logo.png" alt="CoolAdmin" />
            </a>
          </div>
          <div className="login-form">
            <form>
              <div className="social-login-content">
                <div className="social-button">
                  {/* <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google "
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    className="au-btn au-btn--block au-btn--blue2"
                  /> */}
                  <button className="au-btn au-btn--block au-btn--blue2">
                    Sign in with google
                  </button>
                </div>
              </div>
            </form>
            <div className="register-link" />
          </div>
        </div>
      </div>
    );
  }
}
