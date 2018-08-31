import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class DesktopHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false
    };
  }
  static propTypes = {
    user: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClicks);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClicks);
  }

  handleClicks = event => {
    const { showDropDown } = this.state;
    if (this.changeDropDownNode.contains(event.target)) {
      if (this.logoutNode.contains(event.target)) {
        this.props.logoutUser();
        return;
      }
      this.setState({
        showDropDown: !showDropDown
      });
    } else if (showDropDown && !this.dropDownNode.contains(event.target)) {
      this.setState({
        showDropDown: false
      });
    }
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
                  <div
                    className={`account-item clearfix js-item-menu ${
                      this.state.showDropDown ? "show-dropdown" : ""
                    }`}
                    ref={node => (this.changeDropDownNode = node)}
                  >
                    <div className="image">
                      <img
                        src={user.picture}
                        alt={`${user.first_name} ${user.last_name}`}
                      />
                    </div>
                    <div className="content">
                      <button className="js-acc-btn">
                        {`${user.first_name} ${user.last_name}`}
                      </button>
                    </div>
                    <div
                      className="account-dropdown js-dropdown"
                      ref={node => (this.dropDownNode = node)}
                    >
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
                        <a href="/" ref={node => (this.logoutNode = node)}>
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
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DesktopHeader);
