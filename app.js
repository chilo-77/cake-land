const express = require("express");
const app = express();
const cakeRoutes = require("./routes/cakeRoutes");
const userRoutes = require("./routes/userRoutes");
const sideItemRoutes = require("./routes/sideItemRoutes");
const error = require("./utility/errorHandler");

app.use(express.json());
app.use(express.static("render"));
app.use("/images", express.static(__dirname + "/render/images/cakeCard"));

app.use("/cakes", cakeRoutes);
app.use("/user", userRoutes);
app.use("/sideItem", sideItemRoutes);

app.use(error);

module.exports = app;
