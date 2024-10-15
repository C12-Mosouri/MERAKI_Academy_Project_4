const { mongo, default: mongoose } = require("mongoose");
const favModel = require("../models/favSchema");

//updateFav not createFav
const createFav = (req, res) => {
  const userId = req.token.userId;
  const { productId } = req.body;
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

const getAllMyFav = (req, res) => {
  favModel
    .find({})
    .populate("productId userId")
    // .populate("userId","-role")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All MyFav Are Here",
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
const removeFromFavByProductId = (req, res) => {
  const { favId } = req.body;
  console.log(req.body);
  favModel
    .findByIdAndDelete({ _id: favId }, { new: true })
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

const getFavByUserId = (req, res) => {
  const userId = req.token.userId;
  favModel
    .find({_id : userId})
    .populate("productId userId")
    // .populate("userId","-role")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All MyFav Are Here",
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
module.exports = {
  createFav,
  getAllMyFav,
  removeFromFavByProductId,
  getFavByUserId,
};
