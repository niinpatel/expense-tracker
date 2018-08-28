const express = require("express");
const app = express();
const cors = require("cors");
require("./dbconnect");
const passport = require("passport");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/passport-google");
app.use(passport.initialize());

const googleAuthRoutes = require("./routes/authGoogle");
app.use("/auth/google/", googleAuthRoutes);

const expenseRoutes = require("./routes/expense");
app.use("/api/expense/", expenseRoutes);

const incomeRoutes = require("./routes/income");
app.use("/api/income/", incomeRoutes);

app.listen(5000, err => {
  if (err) throw err;
  console.log("listening on 5000");
});
