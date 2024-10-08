const express = require("express");
const { createCart, getAllMyCart } = require("../controllers/cart");
const authentication = require("../middleware/authentication");

const cartRouter = express.Router();

cartRouter.post("/", authentication, createCart);
cartRouter.get("/", authentication, getAllMyCart);
module.exports = cartRouter;
