const CartModel = require("../models/cart");

const createCart = (req, res) => {
  const { userId } = req.token.userId;
  const { product } = req.body;
  const newCart = new CartModel({
    product,
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
const getAllMyCart = (req, res) => {
  CartModel.find({})
    .populate("product userId")
    // .populate("userId","-role")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All MyCart Are Here",
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
module.exports = { createCart, getAllMyCart };
