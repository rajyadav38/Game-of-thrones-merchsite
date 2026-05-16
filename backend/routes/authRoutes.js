const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  await user.save();

  res.json({ message: "Signup successful" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
  );

  res.json({
    token,
    role: user.role,
    name: user.name,
    email: user.email,
  });
});

router.get("/cart/:email", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
    });

    res.json(user.cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/cart/add", async (req, res) => {
  try {
    const { email, product } = req.body;

    const user = await User.findOne({
      email,
    });

    const existingProduct = user.cart.find(
      (item) => item.productId?.toString() === product._id.toString(),
    );

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      user.cart.push({
        productId: product._id,
        name: product.name,
        image: product.image,
        category: product.category,
        price: product.price,
        description: product.description,
        quantity: 1,
      });
    }

    await user.save();

    res.json(user.cart);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/cart/remove", async (req, res) => {
  try {
    const { email, productId } = req.body;

    const user = await User.findOne({
      email,
    });

    user.cart = user.cart.filter((item) => item._id !== productId);

    await user.save();

    res.json(user.cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/cart/decrease", async (req, res) => {
  try {
    const { email, productId } = req.body;

    const user = await User.findOne({
      email,
    });

    const product = user.cart.find(
      (item) => item.productId?.toString() === productId.toString(),
    );

    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
        user.markModified("cart");
      } else {
        user.cart = user.cart.filter(
          (item) => item.productId?.toString() !== productId.toString(),
        );
        user.markModified("cart");
      }
    }

    await user.save();

    res.json(user.cart);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/cart/increase", async (req, res) => {
  try {
    const { email, productId } = req.body;

    const user = await User.findOne({
      email,
    });
    const product = user.cart.find(
      (item) => item.productId?.toString() === productId.toString(),
    );

    if (product) {
      product.quantity += 1;
      user.markModified("cart");
    }

    await user.save();

    res.json(user.cart);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/wishlist/:email", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
    });

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/wishlist/add", async (req, res) => {
  try {
    const { email, product } = req.body;

    const user = await User.findOne({
      email,
    });

    const exists = user.wishlist.find((item) => item._id === product._id);

    if (exists) {
      return res.json(user.wishlist);
    }

    user.wishlist.push(product);

    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/wishlist/remove", async (req, res) => {
  try {
    const { email, productId } = req.body;

    const user = await User.findOne({
      email,
    });

    user.wishlist = user.wishlist.filter((item) => item._id !== productId);

    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
