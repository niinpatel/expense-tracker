import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="header-mobile d-block d-lg-none">
      <div className="header-mobile__bar">
        <div className="container-fluid">
          <div className="header-mobile-inner">
            <a className="logo" href="/">
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
              <Link to="/">
                <i className="fas fa-tachometer-alt" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/stats">
                <i className="fas fa-chart-bar" />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
