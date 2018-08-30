import React, { Component } from "react";
import Main from "./components/Main";
import Login from "./components/Layout/Login";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return this.props.isAuthenticated ? <Main /> : <Login />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
