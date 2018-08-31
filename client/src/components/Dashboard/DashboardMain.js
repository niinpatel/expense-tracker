import React, { Component } from "react";
import Filters from "./Filters";
import DataTable from "./DataTable";
import Chart from "./ChartWrapper";

export default class DashboardMain extends Component {
  static propTypes = {};

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
        <DataTable />
      </div>
    );
  }
}
