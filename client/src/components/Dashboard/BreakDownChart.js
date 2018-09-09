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
      this.pieChartNode.height = 395;

      const data = {};
      data.datasets = [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderWidth: [0, 0]
        }
      ];
      data.labels = [];
      this.state.expenseByCategories.forEach(({ amount, category }) => {
        data.labels.push(category.name);
        data.datasets[0].data.push(amount);
        data.datasets[0].backgroundColor.push(category.color);
        data.datasets[0].hoverBackgroundColor.push(category.color);
      });

      if (this.Chart) {
        this.Chart.destroy();
      }
      this.Chart = new Chart(this.pieChartNode, {
        type: "pie",
        data,
        options: {
          legend: {
            position: "top",
            labels: {
              fontFamily: "Poppins"
            }
          },
          responsive: false
        }
      });
    }
  };
  render() {
    return (
      <div className="col-lg-6 m-t-5">
        <div className="au-card">
          <div className="au-card-inner">
            <h3 className="title-2">Expenses Breakdown</h3>
            <canvas
              className="m-l-15"
              id="pieChart"
              ref={node => (this.pieChartNode = node)}
            />
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
