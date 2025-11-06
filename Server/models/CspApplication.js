const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fatherName: { type: String },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: String },
    qualification: { type: String },
    category: { type: String },
    gender: { type: String },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String },
    status: { type: String, default: "Pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
