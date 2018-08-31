import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PieChart extends Component {
  static propTypes = {
    income: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expense: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    return (
      <div className="col-xl-6 ">
        <div className="percent-chart">
          <canvas id="percent-chart" />
        </div>
      </div>
    );
  }
}
