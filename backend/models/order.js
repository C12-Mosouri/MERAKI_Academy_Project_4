const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  payment: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
});

module.exports = mongoose.model("Order", orderSchema);
