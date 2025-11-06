const Vacancy = require("../models/Vacancy");

// @desc    Get all vacancies
// @access  Public
exports.getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create a new vacancy
// @access  Private (Admin)
exports.createVacancy = async (req, res) => {
  try {
    const { title, description, location, state, district, type, salary } = req.body;

    // ✅ Validate required fields
    if (!title || !description || !location || !state || !district) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newVacancy = new Vacancy({
      title,
      description,
      location,
      state,
      district,
      type: type || "Full-time",
      salary: salary || "Negotiable",
      status: "Available",
    });

    const vacancy = await newVacancy.save();
    res.status(201).json(vacancy);
  } catch (err) {
    console.error("Error creating vacancy:", err.message);
    res.status(500).send("Server Error");
  }
};
