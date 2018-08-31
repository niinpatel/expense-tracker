import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DataRow extends Component {
  static propTypes = {
    transaction: PropTypes.object.isRequired
  };

  render() {
    const { transaction } = this.props;
    return (
      <tr className="tr-shadow">
        <td>${transaction.amount}</td>
        <td>
          <span
            className={
              transaction.type === "income"
                ? "status--process"
                : "status--denied"
            }
          >
            {transaction.type}
          </span>
        </td>
        <td>{transaction.category}</td>
        <td>{transaction.date}</td>
        <td className="desc">{transaction.account}</td>
        <td>{transaction.comment}</td>
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
    );
  }
}
