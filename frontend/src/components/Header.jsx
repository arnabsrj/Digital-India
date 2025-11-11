import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header id="main-header-wrapper">
      <div className="header-container">
        {/* Main Header Bar */}
        <div id="main-header">
          {/* Logo */}
          <div className="header-logo">
            <NavLink to="/">
              <img
                src="https://placehold.co/180x60/transparent/2c5282?text=DIGITAL%0AINDIA"
                alt="Digital India Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join-network"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Join Our Network
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offerings"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Our Offerings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vacant-place"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Vacant Place
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/join-network"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Our Network
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offerings"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Offerings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vacant-place"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vacant Place
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Orange Info Banner */}
      <div className="info-banner">
        <div className="header-container">
          <p>
            It is pleasure to inform you that we have been engaged as business
            correspondent .. Please contact us for opening and Maintaining of
            Bank's Customer Service Point (C.S.P) in any State
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;