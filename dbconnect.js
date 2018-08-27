module.exports = require("mongoose")
  .connect(
    require("./config/keys").mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected To MongoDB via Mongoose"))
  .catch(err => console.log(err));
