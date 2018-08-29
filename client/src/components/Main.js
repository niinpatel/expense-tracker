import React, { Component } from "react";
import PropTypes from "prop-types";
import Mobileheader from "./Mobileheader";
import Sidebar from "./Sidebar";
import Desktopheader from "./Desktopheader";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export default class Main extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="page-wrapper">
        <Mobileheader />
        <Sidebar />
        <div className="page-container">
          <Desktopheader />
          <div className="main-content">
            <Dashboard />
            {/* <Stats /> */}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
