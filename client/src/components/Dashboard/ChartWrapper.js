import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

class ChartWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalIncome: 0,
      totalExpense: 0
    };
  }

  static propTypes = {
    incomes: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired
  };

  componentWillReceiveProps(nextProps) {
    let { incomes, expenses } = nextProps;
    let totalIncome = incomes.reduce((ac, cu) => {
      return ac + cu.amount;
    }, 0);

    let totalExpense = expenses.reduce((ac, cu) => {
      return ac + cu.amount;
    }, 0);

    totalExpense = totalExpense.toString().split(".")[1]
      ? totalExpense.toFixed(2)
      : totalExpense;

    totalIncome = totalIncome.toString().split(".")[1]
      ? totalIncome.toFixed(2)
      : totalIncome;

    this.setState({
      totalExpense,
      totalIncome
    });
  }

  render() {
    return (
      <div className="col-lg-12 m-t-50">
        <div className="au-card chart-percent-card">
          <div className="au-card-inner">
            <h3 className="title-2 tm-b-5">Stats</h3>
            <div className="row no-gutters">
              <div className="col-xl-6 m-t-5">
                <div className="chart-info__right">
                  <div className="chart-statis">
                    <span className="index incre">
                      <i className="zmdi zmdi-long-arrow-up" />$
                      {this.state.totalIncome}
                    </span>
                    <span className="label">Income</span>
                  </div>
                  <div className="chart-statis mr-0">
                    <span className="index decre">
                      <i className="zmdi zmdi-long-arrow-down" />$
                      {this.state.totalExpense}
                    </span>
                    <span className="label">Expense</span>
                  </div>
                </div>
              </div>
              <Chart
                income={this.state.totalIncome}
                expense={this.state.totalExpense}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incomes: state.transactions.incomes,
  expenses: state.transactions.expenses
});

export default connect(mapStateToProps)(ChartWrapper);
