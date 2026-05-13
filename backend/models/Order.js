const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  userEmail: String,
  address: String,
  phone: String,

  items: Array,

  total: Number,

  status: {
    type: String,
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
