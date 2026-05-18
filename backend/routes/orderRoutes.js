const express = require("express");
const Order = require("../models/Order");

const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE ORDER
router.post("/", verifyToken, async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET USER ORDERS
router.get(
  "/user/:email",

  verifyToken,

  async (req, res) => {
    try {
      const orders = await Order.find({
        userEmail: req.params.email,
      });

      res.json(orders);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

// ADMIN GET ALL ORDERS
router.get(
  "/",

  verifyAdmin,

  async (req, res) => {
    try {
      const orders = await Order.find();

      res.json(orders);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

// ADMIN UPDATE ORDER STATUS
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
