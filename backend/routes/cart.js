const express = require("express");
const {
  createCart,
  getAllMyCart,
  getCartByUserId,
  removeByCartId,
} = require("../controllers/cart");
const authentication = require("../middleware/authentication");
const cart = require("../models/cart");

const cartRouter = express.Router();

cartRouter.post("/", authentication, createCart);
cartRouter.get("/allcart", authentication, getAllMyCart);
cartRouter.get("/", authentication, getCartByUserId);
cartRouter.delete("/", removeByCartId);
module.exports = cartRouter;
