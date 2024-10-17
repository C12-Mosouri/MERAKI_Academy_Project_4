const CartModel = require("../models/cart");

const createCart = (req, res) => {
  const userId = req.token.userId;
  const { product } = req.body;
  const newCart = new CartModel({
    product,
    userId,
    quantity: 1,
  });
  CartModel.findOne(product)
    .then((result) => {
      if (result) {
        console.log(result);
        quantity++;
      } else {
        // findone (id product ) {} or null
        // if return {} => Q+1
        // null .save()
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
      }
    })
    .catch((err) => {
      console.log(err);
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
    .populate("product")
    .populate("product.productId")
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

const removeByCartId = (req, res) => {
  const { cartId } = req.body;
  console.log(req.body);
  CartModel.findOneAndDelete({ _id: cartId }, { new: true })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Product Removed",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = { createCart, getAllMyCart, getCartByUserId, removeByCartId };
