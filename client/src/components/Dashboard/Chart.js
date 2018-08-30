import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Chart extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="col-lg-12 m-t-50">
        <div className="au-card chart-percent-card">
          <div className="au-card-inner">
            <h3 className="title-2 tm-b-5">Stats</h3>
            <div className="row no-gutters">
              <div className="col-xl-6 m-t-5">
                <div className="chart-info__right">
                  <div className="chart-statis">
                    <span className="index incre">
                      <i className="zmdi zmdi-long-arrow-up" />
                      $1678
                    </span>
                    <span className="label">Income</span>
                  </div>
                  <div className="chart-statis mr-0">
                    <span className="index decre">
                      <i className="zmdi zmdi-long-arrow-down" />
                      $899
                    </span>
                    <span className="label">Expense</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="percent-chart">
                  <canvas id="percent-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
