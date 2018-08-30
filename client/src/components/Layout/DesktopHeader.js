import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DesktopHeader extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props;
    return (
      <header className="header-desktop">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="header-wrap float-right">
              <div className="header-button">
                <div className="account-wrap">
                  <div className="account-item clearfix js-item-menu">
                    <div className="image">
                      <img
                        src={user.picture}
                        alt={`${user.first_name} ${user.last_name}`}
                      />
                    </div>
                    <div className="content">
                      <a className="js-acc-btn" href="#">
                        {`${user.first_name} ${user.last_name}`}
                      </a>
                    </div>
                    <div className="account-dropdown js-dropdown">
                      <div className="info clearfix">
                        <div className="image">
                          <Link to="/">
                            <img
                              src={user.picture}
                              alt={`${user.first_name} ${user.last_name}`}
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h5 className="name">
                            <Link to="/">{`${user.first_name} ${
                              user.last_name
                            }`}</Link>
                          </h5>
                          <span className="email">{user.email}</span>
                        </div>
                      </div>
                      <div className="account-dropdown__body">
                        <div className="account-dropdown__item">
                          <Link to="/">
                            <i className="zmdi zmdi-settings" />
                            Setting
                          </Link>
                        </div>
                      </div>
                      <div className="account-dropdown__footer">
                        <Link to="/">
                          <i className="zmdi zmdi-power" />
                          Logout
                        </Link>
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

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DesktopHeader);
