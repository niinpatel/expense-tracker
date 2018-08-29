import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";
import classNames from "classnames";

export default class Sidebar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <Link to="/">
            <img src="images/icon/logo.png" alt="Cool Admin" />
          </Link>
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li
                className={classNames({
                  active: window.location.pathname === "/"
                })}
              >
                <Link to="/">
                  <i className="fas fa-tachometer-alt" />
                  Dashboard
                </Link>
              </li>
              <li
                className={classNames({
                  active: window.location.pathname === "/stats"
                })}
              >
                <Link to="/stats">
                  <i className="fas fa-chart-bar" />
                  Stats
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
