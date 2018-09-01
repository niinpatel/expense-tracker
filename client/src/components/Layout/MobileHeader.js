import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "hamburgers/dist/hamburgers.min.css";

export default class MobileHeader extends Component {
  componentDidMount() {
    // Hamburger Menu
    try {
      $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(".navbar-mobile").slideToggle("500");
      });
      $(".navbar-mobile__list li.has-dropdown > a").on("click", function() {
        var dropdown = $(this).siblings("ul.navbar-mobile__dropdown");
        $(this).toggleClass("active");
        $(dropdown).slideToggle("500");
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" href="/">
                <img src="images/icon/logo.png" alt="Expense Tracker" />
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
  }
}
