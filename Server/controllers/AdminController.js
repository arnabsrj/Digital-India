// controllers/adminController.js

/**
 * @desc    Register a new admin (DEV/SETUP ONLY)
 * @route   POST /api/admin/register
 * @access  Public (make private later)
 */
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and password',
      });
    }

    // TODO: Replace with real DB + password hashing
    const admin = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      password: '***hashed***', // Use bcrypt in production
      createdAt: new Date().toISOString(),
    };

    console.log('Registered admin:', admin);

    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('registerAdmin error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

/**
 * @desc    Login admin and return mock token
 * @route   POST /api/admin/login
 * @access  Public
 */
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // TODO: Replace with real DB lookup + bcrypt compare
    if (email === 'admin@example.com' && password === 'password') {
      res.json({
        success: true,
        message: 'Login successful',
        token: 'fake-jwt-token-for-dev-only',
        user: {
          id: '1',
          name: 'Admin User',
          email: 'admin@example.com',
        },
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }
  } catch (error) {
    console.error('loginAdmin error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// Export both functions
module.exports = {
  registerAdmin,
  loginAdmin,
};