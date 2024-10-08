const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  size: { type: String },
  color: { type: String },
  price: { type: Number },
  rate: { type: Number },
  description: { type: String },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Product", productSchema);
