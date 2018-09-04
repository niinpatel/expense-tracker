import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "chart.js/dist/Chart.bundle.min";

class IncomeExpenseChart extends Component {
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

    this.setState(
      {
        totalExpense: parseFloat(totalExpense),
        totalIncome: parseFloat(totalIncome)
      },
      this.drawChart
    );
  }

  drawChart = () => {
    if (this.chartNode) {
      this.chartNode.height = 350;
      new Chart(this.chartNode, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Income and Expenses Chart",
              data: [this.state.totalIncome, this.state.totalExpense],
              backgroundColor: ["#63c76a", "#ff4b5a"],
              hoverBackgroundColor: ["#63c76a", "#ff4b5a"],
              borderWidth: [0, 0],
              hoverBorderColor: ["transparent", "transparent"]
            }
          ],
          labels: ["Income", "Expenses"]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 55,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 16,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16
          }
        }
      });
    }
  };

  render() {
    const saved = this.state.totalIncome - this.state.totalExpense;
    return (
      <div className="col-lg-6 m-t-5">
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
              <div className="col-xl-6 ">
                <div>
                  <canvas
                    id="percent-chart"
                    ref={node => (this.chartNode = node)}
                  />
                </div>
              </div>
              <div className="row no-gutters lead">
                <p>
                  You saved{" "}
                  <span
                    className={
                      saved < 0
                        ? "text-danger"
                        : "text-success" + " font-weight-bold"
                    }
                  >
                    ${saved}
                  </span>{" "}
                  this month. {saved > 0 && "Well done!"}
                </p>
              </div>
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

export default connect(mapStateToProps)(IncomeExpenseChart);
