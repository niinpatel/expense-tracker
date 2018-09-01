const express = require("express");
const app = express();
const cors = require("cors");
require("./dbconnect");
const passport = require("passport");
const bodyParser = require("body-parser");
const path = require("path");
const { port } = require("./config/keys");

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

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "favicon.ico"));
  });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, err => {
  if (err) throw err;
  console.log(`listening on ${port}`);
});
