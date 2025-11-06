import React, { useState, useEffect } from "react";
import "./AdminPages.css";

const ManageVacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getToken = () => JSON.parse(localStorage.getItem("adminInfo"))?.token;

  const fetchVacancies = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://digital-india-backend-unnn.onrender.com/api/vacancies"
      );
      if (!res.ok) throw new Error("Failed to fetch vacancies");
      const data = await res.json();
      setVacancies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://digital-india-backend-unnn.onrender.com/api/vacancies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            title,
            description,
            location,
            state,
            district,
            salary,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed to create vacancy");

      setTitle("");
      setDescription("");
      setLocation("");
      setState("");
      setDistrict("");
      setSalary("");
      fetchVacancies();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Create New Vacancy</h2>
        </div>
        <div className="admin-card-body">
          {error && <p className="error-text">{error}</p>}
          <form className="admin-form" onSubmit={submitHandler}>
            <div className="admin-form-group">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>District</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Salary (optional)</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <button type="submit" className="admin-btn">
              Post Vacancy
            </button>
          </form>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Existing Vacancies</h2>
        </div>
        <div className="admin-card-body">
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : (
            <ul className="admin-list">
              {vacancies.map((v) => (
                <li key={v._id} className="admin-list-item">
                  <div>
                    <h3>{v.title}</h3>
                    <p>
                      {v.location}, {v.district}, {v.state}
                    </p>
                    <p>
                      <b>Status:</b> {v.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageVacancies;
