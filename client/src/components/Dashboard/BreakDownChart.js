import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/dist/Chart.bundle.min";
import { connect } from "react-redux";

class BreakDownChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseByCategories: []
    };
  }
  componentWillReceiveProps(nextProps) {
    const expenseByCategories = nextProps.expenses.reduce((ac, cu) => {
      const current = ac.find(each => each.category.name === cu.category.name);
      console.log(cu.category.name);
      if (current) {
        current.amount += cu.amount;
      } else {
        ac.push({
          category: cu.category,
          amount: cu.amount
        });
      }
      return ac;
    }, []);

    this.setState({ expenseByCategories }, this.drawChart);
  }

  drawChart = () => {
    if (this.pieChartNode) {
      this.pieChartNode.height = 150;

      const data = [];
      data.datasets = [
        { data: [], backgroundColor: [], hoverBackgroundColor: [] }
      ];
      data.labels = [];
      this.state.expenseByCategories.forEach(expense => {
        data.labels.push(expense.category.name);
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const randomColor = "rgb(" + r + "," + g + "," + b + ")";

        data.datasets[0].data.push(expense.amount);
        data.datasets[0].backgroundColor.push(
          expense.category.color || randomColor
        );
        data.datasets[0].hoverBackgroundColor.push(
          expense.category.color || randomColor
        );
      });
      new Chart(this.pieChartNode, {
        type: "pie",
        data,
        options: {
          legend: {
            position: "top",
            labels: {
              fontFamily: "Poppins"
            }
          },
          responsive: true
        }
      });
    }
  };
  render() {
    return (
      <div className="col-lg-6 m-t-5">
        <div className="au-card m-b-30">
          <div className="au-card-inner">
            <h3 className="title-2 m-b-40">Expenses Breakdown</h3>
            <canvas id="pieChart" ref={node => (this.pieChartNode = node)} />
          </div>
        </div>
      </div>
    );
  }
}

BreakDownChart.propTypes = {
  expenses: PropTypes.array
};

const mapStateToProps = state => ({
  expenses: state.transactions.expenses
});

export default connect(mapStateToProps)(BreakDownChart);
