const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const itemsRoutes = require("./routes/itemsRoutes");
const userRoutes = require("./routes/usersRoutes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from React frontend
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Load environment variables
dotenv.config();

// Initialize Express
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// API Routes
app.use("/api/items", itemsRoutes); // Items-related routes
app.use("/api/users", userRoutes); // User-related routes

// Health check endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An error occurred!", error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
