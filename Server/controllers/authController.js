const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");

// @desc    Authenticate admin and get token
// @access  Public
const loginAdmin = async (req, res) => {
  // --- DEBUGGING START ---
  console.log("\n--- NEW ADMIN LOGIN ATTEMPT ---");
  const { email, password } = req.body;
  console.log("1. Received data from frontend:");
  console.log("  > Email:", email);
  console.log("  > Password:", password ? "********" : "(empty)");
  // --- DEBUGGING END ---

  try {
    // --- DEBUGGING START ---
    const trimmedEmail = email ? email.trim() : "";
    console.log("2. Trimmed email to search database:", trimmedEmail);
    // --- DEBUGGING END ---

    // Check if user exists
    let user = await AdminUser.findOne({ email: trimmedEmail }); // Use trimmedEmail

    if (!user) {
      // --- DEBUGGING START ---
      console.log("3. [ERROR] User not found in database.");
      console.log("---------------------------------");
      // --- DEBUGGING END ---
      return res
        .status(400)
        .json({ msg: "Invalid credentials (User not found)" });
    }

    // --- DEBUGGING START ---
    console.log("3. [SUCCESS] User found:", user.email);
    console.log("   > Stored Hash:", user.password);
    console.log("4. Comparing received password with stored hash...");
    // --- DEBUGGING END ---

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // --- DEBUGGING START ---
      console.log("5. [ERROR] Password mismatch. Login failed.");
      console.log("---------------------------------");
      // --- DEBUGGING END ---
      return res
        .status(400)
        .json({ msg: "Invalid credentials (Password mismatch)" });
    }

    // --- DEBUGGING START ---
    console.log("5. [SUCCESS] Password matched! Creating token.");
    // --- DEBUGGING END ---

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" }, // Token expires in 5 hours
      (err, token) => {
        if (err) throw err;
        // --- DEBUGGING START ---
        console.log("6. Token created. Login successful.");
        console.log("---------------------------------");
        // --- DEBUGGING END ---
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("!!! SERVER ERROR !!!", err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get logged in admin user
// @access  Private
const getAdminUser = async (req, res) => {
  try {
    // req.user is set by the 'protect' middleware
    const user = await AdminUser.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  loginAdmin,
  getAdminUser, // <-- This export is crucial
};
