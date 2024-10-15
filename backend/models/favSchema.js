const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Fav", favSchema);
