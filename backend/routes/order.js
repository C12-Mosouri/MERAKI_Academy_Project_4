const express = require("express");
const { createOrder, getAllMyOrder } = require("../controllers/order");
const authentication = require("../middleware/authentication");
const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllMyOrder);
module.exports = orderRouter;
