const express = require("express");
const { createOrder, getAllMyOrder } = require("../controllers/order");
const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllMyOrder);
module.exports = orderRouter;
