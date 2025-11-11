import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-blue-800 uppercase">
            Digital India CSP
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 lg:gap-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-800 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-800 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-800 transition">Services</Link></li>
            <li><Link to="/join-network" className="hover:text-blue-800 transition">Join Our Network</Link></li>
            <li><Link to="/offerings" className="hover:text-blue-800 transition">Our Offerings</Link></li>
            <li><Link to="/vacant-place" className="hover:text-blue-800 transition">Vacant Place</Link></li>
            <li><Link to="/contacts" className="hover:text-blue-800 transition">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-blue-800 transition">Blog</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Slide Down) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 text-gray-700 font-medium bg-white border-t">
            <li><Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/services" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/join-network" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Join Our Network</Link></li>
            <li><Link to="/offerings" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Our Offerings</Link></li>
            <li><Link to="/vacant-place" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Vacant Place</Link></li>
            <li><Link to="/contacts" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/blog" className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-800" onClick={() => setIsOpen(false)}>Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;