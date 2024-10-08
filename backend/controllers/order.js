const orderModel = require("../models/order");

const createOrder = (req, res) => {
  const { cartId, payment, address, phoneNumber } = req.body;
  const newOrder = new orderModel({ cartId, payment, address, phoneNumber });

  newOrder
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The Order Is Ready To Deliver",
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

const getAllMyOrder = (req, res) => {
  orderModel
    .find({})
    .populate("cartId")
    // .populate("userId","-role")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All My Product Are Ready To Order",
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
module.exports = { createOrder, getAllMyOrder };
