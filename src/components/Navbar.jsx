import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo from the assets folder

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Pustantaran Nepal Logo" className="h-12" />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/about-us"
            className="hover:text-gray-200 transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/background"
            className="hover:text-gray-200 transition duration-200"
          >
            Background
          </Link>
          <Link
            to="/funding"
            className="hover:text-gray-200 transition duration-200"
          >
            Funding
          </Link>
          <Link
            to="/products"
            className="hover:text-gray-200 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/resources"
            className="hover:text-gray-200 transition duration-200"
          >
            Resources
          </Link>
          <Link
            to="/support-us"
            className="hover:text-gray-200 transition duration-200"
          >
            Support Us
          </Link>
          <Link
            to="/team"
            className="hover:text-gray-200 transition duration-200"
          >
            Team
          </Link>
          <Link
            to="/why-us"
            className="hover:text-gray-200 transition duration-200"
          >
            Why Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="focus:outline-none text-white"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden bg-teal-700 md:hidden flex flex-col space-y-2 px-6 py-4"
      >
        <Link to="/about-us" className="hover:text-gray-200 transition duration-200">
          About Us
        </Link>
        <Link to="/background" className="hover:text-gray-200 transition duration-200">
          Background
        </Link>
        <Link to="/funding" className="hover:text-gray-200 transition duration-200">
          Funding
        </Link>
        <Link to="/products" className="hover:text-gray-200 transition duration-200">
          Products
        </Link>
        <Link to="/resources" className="hover:text-gray-200 transition duration-200">
          Resources
        </Link>
        <Link to="/support-us" className="hover:text-gray-200 transition duration-200">
          Support Us
        </Link>
        <Link to="/team" className="hover:text-gray-200 transition duration-200">
          Team
        </Link>
        <Link to="/why-us" className="hover:text-gray-200 transition duration-200">
          Why Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
