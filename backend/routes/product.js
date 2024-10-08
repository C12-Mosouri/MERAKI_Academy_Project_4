const express = require("express");

const productRouter = express.Router();
const {
  addNewProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
  getProductById,
} = require("../controllers/product");
const authentication = require("../middleware/authentication");
const { createNewComment } = require("../controllers/coomments");

productRouter.post("/", addNewProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);
productRouter.post("/:id/comments", authentication, createNewComment);
productRouter.get("/:id", getProductById);

module.exports = productRouter;
