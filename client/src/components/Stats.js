import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Stats extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Yearly Sales</h3>
                  <canvas id="sales-chart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Team Commits</h3>
                  <canvas id="team-chart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Bar chart</h3>
                  <canvas id="barChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Rader chart</h3>
                  <canvas id="radarChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Line Chart</h3>
                  <canvas id="lineChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Doughut Chart</h3>
                  <canvas id="doughutChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Pie Chart</h3>
                  <canvas id="pieChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Polar Chart</h3>
                  <canvas id="polarChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card m-b-30">
                <div className="au-card-inner">
                  <h3 className="title-2 m-b-40">Single Bar Chart</h3>
                  <canvas id="singelBarChart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
