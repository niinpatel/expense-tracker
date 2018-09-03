import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/dist/Chart.bundle.min";

class BreakDownChart extends Component {
  componentDidMount() {
    if (this.pieChartNode) {
      this.pieChartNode.height = 160;
      new Chart(this.pieChartNode, {
        type: "pie",
        data: {
          datasets: [
            {
              data: [45, 25, 20, 10, 30, 11, 14],
              backgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)",
                "red",
                "blue",
                "pink"
              ],
              hoverBackgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)",
                "red",
                "blue",
                "pink"
              ]
            }
          ],
          labels: ["Green", "Green", "Green"]
        },
        options: {
          legend: {
            position: "top",
            labels: {
              fontFamily: "Poppins"
            }
          },
          responsive: true
        }
      });
    }
  }
  render() {
    return (
      <div className="col-lg-6 m-t-5">
        <div className="au-card m-b-30">
          <div className="au-card-inner">
            <h3 className="title-2 m-b-40">Expenses Breakdown</h3>
            <canvas id="pieChart" ref={node => (this.pieChartNode = node)} />
          </div>
        </div>
      </div>
    );
  }
}

BreakDownChart.propTypes = {};

export default BreakDownChart;
