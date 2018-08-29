import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <header className="header-desktop">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="header-wrap">
              <form className="form-header" />
              <div className="header-button">
                <div className="noti-wrap">
                  <div className="account-wrap">
                    <div className="account-item clearfix js-item-menu">
                      <div className="image">
                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                      </div>
                      <div className="content">
                        <a className="js-acc-btn" href="#">
                          john doe
                        </a>
                      </div>
                      <div className="account-dropdown js-dropdown">
                        <div className="info clearfix">
                          <div className="image">
                            <a href="#">
                              <img
                                src="images/icon/avatar-01.jpg"
                                alt="John Doe"
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="name">
                              <a href="#">john doe</a>
                            </h5>
                            <span className="email">johndoe@example.com</span>
                          </div>
                        </div>
                        <div className="account-dropdown__body">
                          <div className="account-dropdown__item">
                            <a href="#">
                              <i className="zmdi zmdi-settings" />
                              Setting
                            </a>
                          </div>
                        </div>
                        <div className="account-dropdown__footer">
                          <a href="#">
                            <i className="zmdi zmdi-power" />
                            Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
