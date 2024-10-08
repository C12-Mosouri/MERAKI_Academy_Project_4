const express = require("express");
const { createOrder } = require("../controllers/order");
const orderRouter = express.Router();

orderRouter.post("/", createOrder);

module.exports = orderRouter;
