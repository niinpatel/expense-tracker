import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Filters extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="table-data__tool mt-5">
        <div className="table-data__tool-left">
          <div className="rs-select2--light rs-select2--md">
            <select className="js-select2" name="property" defaultValue="all-accounts">
              <option value="all-accounts">All Accounts</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            <div className="dropDownSelect2" />
          </div>
          <div className="rs-select2--light rs-select2--sm">
            <select className="js-select2" name="time" defaultValue="monthly">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
            <div className="dropDownSelect2" />
          </div>
          <button className="au-btn-filter">
            <i className="zmdi zmdi-filter-list" />
            filters
          </button>
        </div>
        <div className="table-data__tool-right">
          <button className="au-btn au-btn-icon au-btn--green au-btn--small">
            <i className="zmdi zmdi-plus" />
            add income
          </button>
          <button className="au-btn au-btn-icon au-btn--red au-btn--small">
            <i className="zmdi zmdi-plus" />
            add expense
          </button>
          <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
            <select className="js-select2" name="type" defaultValue="export">
              <option value="export">Export</option>
              <option value="pdf-export">As PDF</option>
              <option value="csv-export">As CSV</option>
            </select>
            <div className="dropDownSelect2" />
          </div>
        </div>
      </div>
    );
  }
}