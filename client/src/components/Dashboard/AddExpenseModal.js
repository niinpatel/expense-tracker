import React, { Component } from "react";

class AddExpenseModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="add-expense"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="smallmodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="smallmodalLabel">
                Add an Expense
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
                <form action="" method="post" className="">
                  <div className="form-group">
                    <input type="date" name="date" className="form-control" />
                  </div>

                  <div className="form-group">
                    <input
                      name="amount"
                      type="number"
                      placeholder="Enter Amount.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="category"
                      type="text"
                      placeholder="Category.."
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="Comment"
                      type="text"
                      placeholder="Comments.."
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <select name="account" id="select" className="form-control">
                      <option value="Personal">Personal</option>
                    </select>
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
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddExpenseModal;
