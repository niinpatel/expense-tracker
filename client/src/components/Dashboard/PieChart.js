import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/dist/Chart.bundle.min";

export default class PieChart extends Component {
  componentWillReceiveProps(nextProps) {
    console.log();
    if (this.chartNode) {
      this.chartNode.height = 350;
      new Chart(this.chartNode, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Income and Expenses Chart",
              data: [nextProps.income, nextProps.expense],
              backgroundColor: ["#63c76a", "#ff4b5a"],
              hoverBackgroundColor: ["#63c76a", "#ff4b5a"],
              borderWidth: [0, 0],
              hoverBorderColor: ["transparent", "transparent"]
            }
          ],
          labels: ["Income", "Expenses"]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 55,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 16,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16
          }
        }
      });
    }
  }

  static propTypes = {
    income: PropTypes.number,
    expense: PropTypes.number
  };

  render() {
    return (
      <div className="col-xl-6 ">
        <div>
          <canvas id="percent-chart" ref={node => (this.chartNode = node)} />
        </div>
      </div>
    );
  }
}
