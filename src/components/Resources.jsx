import React from "react";
import { FaBook, FaNewspaper, FaFileAlt, FaChartLine } from "react-icons/fa";
import { MdLibraryBooks, MdGavel } from "react-icons/md";

const Resources = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-20 px-6">
      <div className="container mx-auto mb-16 max-w-7xl">
        <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          Our Resources
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          Access valuable information and resources related to senior citizen care and rights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaBook className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Publications
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Access our research papers, reports, and publications on senior citizen issues and care practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaNewspaper className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Newsletters
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Stay updated with our monthly newsletters covering latest developments and success stories.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <MdGavel className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Legal Resources
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Find information about senior citizens' rights, laws, and policies in Nepal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <MdLibraryBooks className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Guidelines
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Access comprehensive guidelines for senior care centers and caregivers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Forms & Documents
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Download necessary forms and documents for various services and procedures.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaChartLine className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Research & Statistics
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Explore data and research findings related to senior citizens in Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
