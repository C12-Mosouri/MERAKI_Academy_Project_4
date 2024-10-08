const express = require("express");
const { createCart } = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.post("/", createCart);

module.exports = cartRouter;
