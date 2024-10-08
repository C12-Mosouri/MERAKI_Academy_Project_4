const product = require("../models/product");
const ProductModel = require("../models/product");

const addNewProduct = (req, res) => {
  const { name, img, size, color, price, rate, description, subCategoryId } =
    req.body;
  const newProduct = new ProductModel({
    name,
    img,
    size,
    color,
    price,
    rate,
    description,
    subCategoryId,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "The Product Has Been Added",
        article: result,
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
const getAllProducts = (req, res) => {
  ProductModel.find({})
    .populate("subCategoryId")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All Product Are Here",
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
const updateProductById = (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  ProductModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Product Updated`,
        result: result,
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
const deleteProductById = (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete(id)
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Product Deleted`,
        result: result,
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

const getProductById = (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  ProductModel.findById({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Product Found`,
        result: result,
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
  addNewProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
  getProductById,
};
