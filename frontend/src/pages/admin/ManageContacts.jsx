// --- frontend/src/pages/admin/ManageContacts.jsx ---
// Admin can view and manage contact form submissions.

import React, { useState, useEffect } from "react";
import "./AdminPages.css";

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 15;

  // Fetch all contact messages
  const fetchContacts = async () => {
    try {
      const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
      if (!adminInfo || !adminInfo.token)
        throw new Error("You are not authorized.");

      const res = await fetch(
        "https://digital-india-backend-unnn.onrender.com/api/contact",
        {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch contact messages");
      const data = await res.json();
      setContacts(data);
      setFilteredContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = contacts.filter(
      (contact) =>
        (contact.name && contact.name.toLowerCase().includes(value)) ||
        (contact.email && contact.email.toLowerCase().includes(value))
    );
    setFilteredContacts(filtered);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  if (loading) {
    return (
      <div className="admin-container">
        <h2>Loading Contacts...</h2>
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
      <h2>Manage Contact Messages</h2>

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

      {currentContacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name || "N/A"}</td>
                  <td>{contact.email || "N/A"}</td>
                  <td>{contact.phone || "N/A"}</td>
                  <td>{contact.message || "N/A"}</td>
                  <td>
                    {contact.createdAt
                      ? new Date(contact.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageContacts;
