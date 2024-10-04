const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      Quantity: { type: Number },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalPrice: { type: Number },
});

module.exports = mongoose.model("Cart", cartSchema);
