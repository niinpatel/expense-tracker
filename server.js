const express = require("express");
const app = express();

app.listen(3000, err => {
  if (err) throw err;
  console.log("listening on 3000");
});
