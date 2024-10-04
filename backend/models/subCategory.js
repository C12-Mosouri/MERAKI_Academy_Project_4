const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
