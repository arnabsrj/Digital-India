import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./VacantPlace.css";

const VacantPlace = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vacancies");
        const data = await res.json();
        setVacancies(data);
      } catch (err) {
        console.error("Error fetching vacancies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);

  if (loading) return <p className="loading-text">Loading Vacancies...</p>;

  return (
    <main className="vacant-page">
      <section className="vp-hero">
        <div className="vp-hero-content">
          <h1>Find Vacant Locations</h1>
          <p>Search for CSP opportunities in your area.</p>
        </div>
      </section>

      <section className="vp-results-container">
        <h2>Current Openings</h2>
        {vacancies.length === 0 ? (
          <p>No current vacancies available.</p>
        ) : (
          <div className="vp-vacancy-list">
            {vacancies.map((item) => (
              <div key={item._id} className="vp-vacancy-card">
                <div className="vp-location">
                  <h3>{item.location}</h3>
                  <p>{item.district}, {item.state}</p>
                </div>
                <div>
                  <span className={item.status === 'Available' ? 'vp-status-available' : 'vp-status-filled'}>
                    {item.status}
                  </span>
                </div>
                <Link to="/register" className="vp-apply-btn">Apply Now</Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default VacantPlace;
