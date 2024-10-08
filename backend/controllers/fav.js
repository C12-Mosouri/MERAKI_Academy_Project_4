const { mongo, default: mongoose } = require("mongoose");
const favModel = require("../models/favSchema");

const createFav = (req, res) => {
  const { productId, userId } = req.body;
  const newFav = new favModel({
    productId,
    userId,
  });
  newFav
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The Product Added To Fav Successfully",
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

module.exports = { createFav };
