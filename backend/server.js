const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: "https://game-of-thrones-merchsite-ly6f.vercel.app",
  }),
);

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/orders", require("./routes/orderRoutes"));

app.use("/api/contact", contactRoutes);

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB Connected");
  })

  .catch((err) => {
    console.log("Mongo Error:", err.message);
  });

// PORT
const PORT = process.env.PORT || 5000;

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
