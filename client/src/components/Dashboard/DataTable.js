import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DataRow from "./DataRow";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };
  }

  static propTypes = {
    incomes: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired
  };

  componentWillReceiveProps(nextProps) {
    let { incomes, expenses } = nextProps;
    let transactions = [...incomes, ...expenses];
    transactions = transactions.sort((a, b) => {
      return a.date > b.date ? 1 : -1;
    });

    this.setState({
      transactions: transactions
    });
  }

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
            {this.state.transactions.map(transaction => {
              return [
                <DataRow transaction={transaction} key={transaction._id} />,
                <tr className="spacer" key={transaction._id + "spacer"} />
              ];
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incomes: state.transactions.incomes,
  expenses: state.transactions.expenses
});

export default connect(mapStateToProps)(DataTable);
