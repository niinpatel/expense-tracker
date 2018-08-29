import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Datatable from "./Datatable";
import Chart from "./Chart";

export default class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="overview-wrap">
              <h2 className="title-1">overview</h2>
            </div>
          </div>
        </div>
        <Filters />
        <Chart />
        <Datatable />
      </div>
    );
  }
}
