import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteTransaction } from "../../actions/transactionActions";

class DataRow extends Component {
  static propTypes = {
    transaction: PropTypes.object.isRequired,
    deleteTransaction: PropTypes.func.isRequired
  };

  render() {
    const { transaction } = this.props;
    return (
      <tr className="tr-shadow">
        <td>${transaction.amount}</td>
        <td>
          <span
            className={
              transaction.type === "Income"
                ? "status--process"
                : "status--denied"
            }
          >
            {transaction.type}
          </span>
        </td>
        <td>{transaction.category.name}</td>
        <td>
          <Moment format="DD-MM-YYYY">{transaction.date}</Moment>
        </td>
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
              onClick={e => this.props.deleteTransaction(transaction)}
            >
              <i className="zmdi zmdi-delete" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { deleteTransaction }
)(DataRow);
