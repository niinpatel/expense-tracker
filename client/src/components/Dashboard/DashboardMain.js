import React, { Component } from "react";
import Filters from "./Filters";
import DataTable from "./DataTable";
import Charts from "./Charts";

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
        <Charts />
        <DataTable />
      </div>
    );
  }
}
