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

module.exports = {addNewProduct}