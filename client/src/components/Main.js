import React, { Component } from "react";
import PropTypes from "prop-types";
import MobileHeader from "./Layout/MobileHeader";
import Sidebar from "./Layout/Sidebar";
import Desktopheader from "./Layout/DesktopHeader";
import DashboardMain from "./Dashboard/DashboardMain";
import Footer from "./Layout/Footer";
import StatsMain from "./Stats/StatsMain";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Main extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <MobileHeader />
          <Sidebar />
          <div className="page-container">
            <Desktopheader />
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={DashboardMain} />
                <Route path="/stats" component={StatsMain} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
