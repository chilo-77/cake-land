const app = require("./app");
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const mongoUri = process.env.STRING;

mongoose.connect(mongoUri).then(() => {});

app.listen(port, () => {
  console.log("Server Is Working");
});
