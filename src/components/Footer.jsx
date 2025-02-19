import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-teal-50 text-teal-600 pt-8 md:pt-12 pb-6 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 justify-items-center md:justify-items-stretch">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logo} alt="Pustantaran Nepal Logo" className="h-16" />
            <p className="text-sm leading-relaxed text-center md:text-left">
              Building a better society for senior citizens.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-xl p-2 rounded-full hover:bg-[#4267B2] hover:text-white transition duration-200">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-xl p-2 rounded-full hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:text-white transition duration-200">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-xl p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white transition duration-200">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-xl p-2 rounded-full hover:bg-[#0077b5] hover:text-white transition duration-200">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-teal-800">Quick Links</h3>
            <div className="flex flex-col space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
              <Link to="/about-us" className="hover:text-teal-900 transition duration-200">About Us</Link>
              <Link to="/funding" className="hover:text-teal-900 transition duration-200">Funding</Link>
              <Link to="/products" className="hover:text-teal-900 transition duration-200">Products & Services</Link>
              <Link to="/resources" className="hover:text-teal-900 transition duration-200">Resources</Link>
              <Link to="/support-us" className="hover:text-teal-900 transition duration-200">Support Us</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-teal-800">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-teal-700" />
                <p className="text-sm">Budanilkantha Municipality-08, Kathmandu</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FaEnvelope className="flex-shrink-0 text-teal-700" />
                <a href="mailto:info@pustantaranepal.org" 
                   className="text-sm hover:text-teal-900 transition duration-200">
                  info@pustantaranepal.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm pt-8 border-t border-teal-200 max-w-full">
          &copy; {new Date().getFullYear()} Pustantaran Nepal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
