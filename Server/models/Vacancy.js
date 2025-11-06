const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    location: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    district: { type: String, required: true, trim: true },
    type: { type: String, default: "Full-time", enum: ["Full-time", "Part-time", "Contract"] },
    status: { type: String, default: "Available", enum: ["Available", "Filled", "Pending"] },
    salary: { type: String, default: "Negotiable" },
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacancy", vacancySchema);
