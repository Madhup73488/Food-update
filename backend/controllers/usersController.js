const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/sendEmails");
const JWT_SECRET = process.env.JWT_SECRET;

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User

exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  password = password.trim(); // Trim whitespace around the entered password

  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Log the entered password and stored hash for debugging
    console.log("Entered password:", password);
    console.log("Stored hashed password:", user.password);

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);  // bcrypt does the hashing comparison internally
    console.log("Password match result:", isMatch);

    if (isMatch) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Request Password Reset
exports.requestReset = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const resetLink = `http://localhost:3000/reset-password?token=${token}`;

  // Send email with the reset link pointing to the frontend
  await sendEmail(
    email,
    "Reset Password",
    `Click here to reset your password: ${resetLink}`
  );
  res.status(200).json({ message: "Reset link sent!" });
};

// Reset Password (Verify Token)
exports.verifyToken = (req, res) => {
  const { token } = req.query;

  try {
    // Decode the JWT token to extract the user's email
    const decoded = jwt.verify(token, JWT_SECRET);

    // Redirect to the frontend reset password page with the token in the URL
    // This should be the React page where users can enter a new password
    return res.redirect(`http://localhost:3000/reset-password?token=${token}`);
  } catch (err) {
    // If the token is invalid or expired, return a relevant error message
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

// Update Password (Improved)
exports.updatePassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    // Decode the token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET);

    // Ensure that the decoded token contains the correct user id
    if (!decoded || !decoded.id) {
      return res.status(400).json({ error: "Invalid token" });
    }

    // Hash the new password before saving it
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password based on the user ID extracted from the token
    const updatedUser = await User.findByIdAndUpdate(
      decoded.id, // Using decoded.id for better security
      { password: hashedPassword },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.log("Error decoding token:", err);
    res.status(400).json({ error: "Invalid or expired token" });
  }
};
