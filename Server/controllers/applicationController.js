const Application = require("../models/CspApplication");

// POST /api/applications
exports.createApplication = async (req, res) => {
  try {
    const {
      fullName,
      fatherName,
      email,
      mobile,
      dob,
      qualification,
      category,
      gender,
      district,
      state,
      pincode,
    } = req.body;

    if (!fullName || !email || !mobile || !district || !state) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newApp = new Application({
      name: fullName,
      fatherName,
      email,
      mobile,
      dob,
      qualification,
      category,
      gender,
      district,
      state,
      pincode,
      status: "Pending",
    });

    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/applications
exports.getApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
