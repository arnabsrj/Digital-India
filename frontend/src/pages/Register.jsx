import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    mobile: "",
    dob: "",
    qualification: "",
    category: "",
    gender: "",
    district: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setFormData({
      ...formData,
      [id || name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit application");

      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        fatherName: "",
        email: "",
        mobile: "",
        dob: "",
        qualification: "",
        category: "",
        gender: "",
        district: "",
        state: "",
        pincode: "",
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <main className="register-page">
      <div className="reg-hero">
        <div className="reg-hero-content">
          <h1>CSP Online Registration</h1>
          <p>Apply CSP Online 2025</p>
        </div>
      </div>

      <div className="reg-form-container">
        <form className="reg-form" onSubmit={handleSubmit}>
          <div className="reg-form-grid">
            <div className="reg-form-group span-2">
              <h3 className="reg-section-title">Personal Details</h3>
            </div>

            <div className="reg-form-group">
              <label htmlFor="fullName">Your Full Name</label>
              <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="reg-form-group">
              <label htmlFor="fatherName">Father Name</label>
              <input type="text" id="fatherName" value={formData.fatherName} onChange={handleChange} />
            </div>

            <div className="reg-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="reg-form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input type="tel" id="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>

            <div className="reg-form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} />
            </div>

            <div className="reg-form-group">
              <label htmlFor="qualification">Highest Qualification</label>
              <input type="text" id="qualification" value={formData.qualification} onChange={handleChange} />
            </div>

            <fieldset className="reg-form-group">
              <legend>Social Category</legend>
              <div className="reg-radio-group">
                {["general", "sc", "st", "obc"].map((cat) => (
                  <label key={cat}>
                    <input type="radio" name="category" value={cat} checked={formData.category === cat} onChange={handleChange} />
                    {cat.toUpperCase()}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="reg-form-group">
              <legend>Gender</legend>
              <div className="reg-radio-group">
                {["male", "female"].map((g) => (
                  <label key={g}>
                    <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} />
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="reg-form-group">
              <label htmlFor="district">District</label>
              <input type="text" id="district" value={formData.district} onChange={handleChange} required />
            </div>

            <div className="reg-form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" value={formData.state} onChange={handleChange} required />
            </div>

            <div className="reg-form-group">
              <label htmlFor="pincode">Pin Code</label>
              <input type="text" id="pincode" value={formData.pincode} onChange={handleChange} />
            </div>

            <div className="reg-form-group span-2">
              <button type="submit" className="reg-submit-btn">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
