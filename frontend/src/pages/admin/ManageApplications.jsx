import React, { useState, useEffect } from "react";
import "./AdminPages.css";

const ManageApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const appsPerPage = 15; // Show 15 rows per page

  // Fetch all applications
  const fetchApplications = async () => {
    try {
      const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
      if (!adminInfo || !adminInfo.token) {
        throw new Error("You are not authorized.");
      }

      const res = await fetch("http://localhost:5000/api/applications", {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch applications");
      const data = await res.json();
      setApplications(data);
      setFilteredApps(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = applications.filter(
      (app) =>
        (app.name && app.name.toLowerCase().includes(value)) ||
        (app.email && app.email.toLowerCase().includes(value))
    );
    setFilteredApps(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredApps.length / appsPerPage);
  const indexOfLast = currentPage * appsPerPage;
  const indexOfFirst = indexOfLast - appsPerPage;
  const currentApps = filteredApps.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return (
      <div className="admin-container">
        <h2>Loading Applications...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-container">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Manage CSP Applications</h2>

      {/* 🔍 Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {filteredApps.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Father Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Date of Birth</th>
                <th>Highest Qualification</th>
                <th>Social Category</th>
                <th>Gender</th>
                <th>District</th>
                <th>State</th>
                <th>Pin Code</th>
              </tr>
            </thead>

            <tbody>
              {currentApps.map((app) => (
                <tr key={app._id}>
                  <td>{app.name || "N/A"}</td>
                  <td>{app.fatherName || "N/A"}</td>
                  <td>{app.email || "N/A"}</td>
                  <td>{app.mobile || "N/A"}</td>
                  <td>
                    {app.dob ? new Date(app.dob).toLocaleDateString() : "N/A"}
                  </td>
                  <td>{app.qualification || "N/A"}</td>
                  <td>{app.category || "N/A"}</td>
                  <td>{app.gender || "N/A"}</td>
                  <td>{app.district || "N/A"}</td>
                  <td>{app.state || "N/A"}</td>
                  <td>{app.pincode || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Previous
            </button>

            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageApplications;
