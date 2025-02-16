import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-teal-600 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Pustantaran Nepal Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/about-us"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/funding"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Funding
          </Link>
          <Link
            to="/products"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/resources"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Resources
          </Link>
          <Link
            to="/support-us"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Support Us
          </Link>
          <Link
            to="/team"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Team
          </Link>
          <Link
            to="/why-us"
            className="hover:text-teal-900 hover:bg-teal-50 p-4 rounded-full transition duration-200"
          >
            Why Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="focus:outline-none text-teal-600 text-2xl"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden bg-teal-700 text-white md:hidden grid grid-cols-2 gap-4 px-6 py-4 rounded-lg shadow-lg"
      >
        <Link
          to="/about-us"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          About Us
        </Link>
        <Link
          to="/background"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Background
        </Link>
        <Link
          to="/funding"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Funding
        </Link>
        <Link
          to="/products"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Products
        </Link>
        <Link
          to="/resources"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Resources
        </Link>
        <Link
          to="/support-us"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Support Us
        </Link>
        <Link
          to="/team"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Team
        </Link>
        <Link
          to="/why-us"
          className="hover:bg-teal-800 p-3 rounded-lg text-center transition duration-200"
        >
          Why Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
