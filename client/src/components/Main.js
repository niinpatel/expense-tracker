import React, { Component } from "react";
import PropTypes from "prop-types";
import MobileHeader from "./Layout/MobileHeader";
import Sidebar from "./Layout/Sidebar";
import Desktopheader from "./Layout/DesktopHeader";
import DashboardMain from "./Dashboard/DashboardMain";
import Footer from "./Layout/Footer";
import StatsMain from "./Stats/StatsMain";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import {
  setExpenses,
  setIncomes,
  getErrors
} from "../actions/transactionActions";

class Main extends Component {
  static propTypes = {
    setExpenses: PropTypes.func.isRequired,
    setIncomes: PropTypes.func.isRequired,
    getErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    Axios.get("/api/expense/")
      .then(res => {
        this.props.setExpenses(res.data);
      })
      .catch(err => {
        console.log(err);
        this.props.getErrors(err.response.data);
      });

    Axios.get("/api/income/")
      .then(res => {
        this.props.setIncomes(res.data);
      })
      .catch(err => {
        console.log(err);
        this.props.getErrors(err.response.data);
      });
  }

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

export default connect(
  null,
  { setExpenses, setIncomes, getErrors }
)(Main);
