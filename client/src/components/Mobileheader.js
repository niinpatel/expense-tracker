import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Mobileheader extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" href="index.html">
                <img src="images/icon/logo.png" alt="CoolAdmin" />
              </a>
              <button className="hamburger hamburger--slider" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav className="navbar-mobile">
          <div className="container-fluid">
            <ul className="navbar-mobile__list list-unstyled">
              <li>
                <a href="index.html">
                  <i className="fas fa-tachometer-alt" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="chart.html">
                  <i className="fas fa-chart-bar" />
                  Stats
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
