const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "user",
  },

  cart: [
    {
      type: Object,
    },
  ],

  wishlist: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
