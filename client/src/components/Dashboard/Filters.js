import React, { Component } from "react";
// import PropTypes from "prop-types";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.min";

export default class Filters extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  componentDidMount() {
    // Slider 2
    try {
      $(".js-select2").each(function() {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next(".dropDownSelect2")
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="table-data__tool mt-5">
        <div className="table-data__tool-left">
          <div className="rs-select2--light rs-select2--md">
            <select
              className="js-select2"
              name="property"
              defaultValue="all-accounts"
            >
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
          <button className="au-btn au-btn--small btn-secondary">export</button>
        </div>
      </div>
    );
  }
}
