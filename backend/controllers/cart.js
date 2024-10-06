const CartModel = require("../models/cart");

const createCart = (req, res) => {
  const { product, totalPrice, userId } = req.body;
  const newCart = new CartModel({
    product,
    totalPrice,
    userId,
  });
};
