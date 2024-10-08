const express = require("express");

const productRouter = express.Router();
const { addNewProduct, getAllProducts } = require("../controllers/product");

productRouter.post("/", addNewProduct);
productRouter.get("/", getAllProducts);

module.exports = productRouter;
