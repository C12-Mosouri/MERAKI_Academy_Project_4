const CartModel = require("../models/cart");

const createCart = (req, res) => {
  const { product, totalPrice, userId } = req.body;
  const newCart = new CartModel({
    product,
    totalPrice,
    userId,
  });
  newCart
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The Product Added To Cart Successfully",
        Category: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

module.exports = { createCart };
