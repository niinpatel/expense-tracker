import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Datatable extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="table-responsive table-responsive-data2">
        <table className="table table-data2">
          <thead>
            <tr>
              <th>amount</th>
              <th>type</th>
              <th>category</th>
              <th>date</th>
              <th>account</th>
              <th>comment</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr className="tr-shadow">
              <td>$679.00</td>
              <td>
                <span className="status--process">Income</span>
              </td>
              <td>Salary</td>
              <td>2018-09-27 02:12</td>
              <td className="desc">Business</td>
              <td>Salary from job</td>
              <td>
                <div className="table-data-feature">
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="zmdi zmdi-edit" />
                  </button>
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="zmdi zmdi-delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="spacer" />
            <tr className="tr-shadow">
              <td>$999.00</td>
              <td>
                <span className="status--process">Income</span>
              </td>
              <td>Freelance Income</td>
              <td>2018-09-27 02:12</td>
              <td className="desc">Business</td>
              <td>Income from freelancer.com</td>
              <td>
                <div className="table-data-feature">
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="zmdi zmdi-edit" />
                  </button>
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="zmdi zmdi-delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="spacer" />
            <tr className="tr-shadow">
              <td>$99.00</td>
              <td>
                <span className="status--denied">Expense</span>
              </td>
              <td>Food</td>
              <td>2018-09-27 02:12</td>
              <td className="desc">Personal</td>
              <td>Eat out with friends</td>
              <td>
                <div className="table-data-feature">
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="zmdi zmdi-edit" />
                  </button>
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="zmdi zmdi-delete" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="spacer" />
            <tr className="tr-shadow">
              <td>$800.00</td>
              <td>
                <span className="status--denied">Expense</span>
              </td>
              <td>Rent</td>
              <td>2018-09-27 02:12</td>
              <td className="desc">Personal</td>
              <td>Rent Paid</td>
              <td>
                <div className="table-data-feature">
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="zmdi zmdi-edit" />
                  </button>
                  <button
                    className="item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="zmdi zmdi-delete" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
