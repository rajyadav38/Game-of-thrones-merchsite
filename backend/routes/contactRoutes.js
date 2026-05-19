const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");

const { verifyAdmin } = require("../middleware/authMiddleware");

// SEND MESSAGE
router.post(
  "/",

  async (req, res) => {
    try {
      const newMessage = new Contact(req.body);

      await newMessage.save();

      res.status(201).json({
        message: "Message sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

// ADMIN GET ALL MESSAGES
router.get(
  "/",

  verifyAdmin,

  async (req, res) => {
    try {
      const messages = await Contact.find().sort({
        createdAt: -1,
      });

      res.json(messages);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

module.exports = router;
