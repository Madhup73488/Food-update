const express = require("express");
const { registerUser, loginUser } = require("../controllers/usersController");
const {
  requestReset,
  verifyToken,
  updatePassword,
} = require("../controllers/usersController");

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

router.post("/reset-request", requestReset);
router.get("/reset-password", verifyToken);
router.post("/update-password", updatePassword);

module.exports = router;
