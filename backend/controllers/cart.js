const CartModel = require("../models/cart");

const createCart = (req, res) => {
  const userId = req.token.userId;
  const { product } = req.body;
  const newCart = new CartModel({
    product,
    userId,
  });
  newCart
    .save()
    // .populate("productId")
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
    .populate({ path: "product", populate: { path: "productId" } })
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

const getCartByUserId = (req, res) => {
  const userId = req.token.userId;
  console.log(userId);
  CartModel.find({ userId: userId })
    .populate("product").populate("product.productId")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All MyCart Are Ready",
        Product: result,
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

module.exports = { createCart, getAllMyCart, getCartByUserId };
