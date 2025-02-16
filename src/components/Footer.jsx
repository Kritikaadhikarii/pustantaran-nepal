import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-teal-600 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src={logo} alt="Pustantaran Nepal Logo" className="h-12 mr-4" />
          <p className="text-sm md:text-base">
            Building a better society for senior citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6 md:mb-0">
          <Link
            to="/about-us"
            className="p-2 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/funding"
            className="p-2 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200"
          >
            Funding
          </Link>
          <Link
            to="/products"
            className="p-2 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/resources"
            className="p-2 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200"
          >
            Resources
          </Link>
          <Link
            to="/support-us"
            className="p-2 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200"
          >
            Support Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-teal-50 hover:text-teal-900 transition duration-200 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-6 border-t border-teal-500 pt-4">
        &copy; {new Date().getFullYear()} Pustantaran Nepal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
