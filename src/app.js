const express = require("express");
const app = express();
const morgan = require("morgan");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const sushiRouter = require("../src/sushi/sushi.router");
const orderRouter = require("./orders/orders.router");
const cors = require("cors");

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use("/sushi", sushiRouter);
app.use("/order", orderRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
