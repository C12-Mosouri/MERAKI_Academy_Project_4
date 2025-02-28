const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  
});

module.exports = mongoose.model("Cart", cartSchema);
