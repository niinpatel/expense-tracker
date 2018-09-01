import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { googleResponse } from "../../actions/authActions";

class Login extends Component {
  static propTypes = {
    googleResponse: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="login-wrap">
        <div className="login-content">
          <div className="login-logo">
            <a href="">
              <img src="images/icon/logo.png" alt="Expense Tracker" />
            </a>
          </div>
          <div className="login-form">
            <form>
              <div className="social-login-content">
                <div className="social-button">
                  <GoogleLogin
                    clientId={
                      "551468354047-l9atq2c5s36g72g5eebnjmll5kov7qmr.apps.googleusercontent.com"
                    }
                    buttonText="Sign in with Google "
                    onSuccess={this.props.googleResponse}
                    onFailure={this.props.googleResponse}
                    className="au-btn au-btn--block au-btn--orange"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { googleResponse }
)(Login);
