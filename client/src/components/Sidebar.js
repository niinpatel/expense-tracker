import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Sidebar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <a href="index.html">
            <img src="images/icon/logo.png" alt="Cool Admin" />
          </a>
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li className="active">
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
          </nav>
        </div>
      </aside>
    );
  }
}
