const express = require("express");

const productRouter = express.Router();
const { addNewProduct } = require("../controllers/product");

productRouter.post("/", addNewProduct);

module.exports = productRouter;
