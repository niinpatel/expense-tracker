import React from "react";
import IncomeExpenseChart from "./IncomeExpenseChart";
import BreakDownChart from "./BreakDownChart";

const Charts = () => (
  <div className="row">
    <IncomeExpenseChart />
    <BreakDownChart />
  </div>
);

export default Charts;
