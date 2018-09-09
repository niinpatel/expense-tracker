import React, { Component } from "react";
import { connect } from "react-redux";
import { addIncome } from "../../actions/transactionActions";

class AddIncomeModal extends Component {
  state = {
    date: "",
    amount: "",
    category: "",
    comment: "",
    account: "Personal"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let transaction = {};
    transaction.date = this.state.date ? this.state.date : undefined;
    transaction.amount = this.state.amount;
    transaction.category = { name: this.state.category };
    transaction.comment = this.state.comment;
    transaction.account = this.state.account;
    this.props.addIncome(transaction);
  };
  render() {
    return (
      <div
        className="modal fade"
        id="add-income"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="smallmodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="smallmodalLabel">
                Add an Income
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card-body card-block">
                <form>
                  <div className="form-group">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="amount"
                      type="number"
                      placeholder="Enter Amount.."
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="category"
                      type="text"
                      placeholder="Category.."
                      className="form-control"
                      value={this.state.category}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="comment"
                      type="text"
                      placeholder="Comments.."
                      className="form-control"
                      value={this.state.comments}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="account"
                      id="select"
                      className="form-control"
                      value={this.state.account}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addIncome }
)(AddIncomeModal);
