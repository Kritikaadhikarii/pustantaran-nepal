import React, { useState } from 'react';
import {
  FaBook,
  FaNewspaper,
  FaFileAlt,
  FaChartLine,
  FaPlayCircle,
} from "react-icons/fa";
import { MdLibraryBooks, MdGavel } from "react-icons/md";
import ResourceFile from './ResourceFile';

const ResourceCard = ({ resource }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
    <div className="flex items-center mb-6">
      <resource.icon className="text-4xl text-teal-500 mr-4" />
      <h3 className="font-playfair text-2xl font-semibold text-teal-500">
        {resource.title}
      </h3>
    </div>
    <p className="text-gray-700 leading-relaxed">{resource.description}</p>
  </div>
);

const Resources = () => {
  const [viewMode, setViewMode] = useState("all");

  const resources = [
    { type: 'information', icon: FaBook, title: 'Publications', description: 'Access our research papers, reports, and publications on senior citizen issues and care practices.' },
    { type: 'information', icon: FaNewspaper, title: 'Newsletters', description: 'Stay updated with our monthly newsletters covering latest developments and success stories.' },
    { type: 'resources', icon: FaPlayCircle, title: 'Audio-Visual Content', description: 'Access our collection of audio and visual contents about elderly care, health tips, and inspiring senior stories.' },
    { type: 'information', icon: MdGavel, title: 'Legal Resources', description: "Find information about senior citizens' rights, laws, and policies in Nepal." },
    { type: 'resources', icon: MdLibraryBooks, title: 'Guidelines', description: 'Access comprehensive guidelines for senior care centers and caregivers.' },
    { type: 'resources', icon: FaFileAlt, title: 'Forms & Documents', description: 'Download necessary forms and documents for various services and procedures.' },
    { type: 'information', icon: FaChartLine, title: 'Research & Statistics', description: 'Explore data and research findings related to senior citizens in Nepal.' },
  ];

  const resourceFiles = [
    { fileName: "Senior Care Guidelines.pdf", fileType: "PDF Document" },
    { fileName: "Membership Form.docx", fileType: "Word Document" },
    { fileName: "Annual Report 2023.pdf", fileType: "PDF Document" },
    { fileName: "Healthcare Manual.pdf", fileType: "PDF Document" },
    { fileName: "Legal Rights Guide.pdf", fileType: "PDF Document" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-20 px-6">
      <div className="container mx-auto mb-16 max-w-7xl">
        <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          Our Resources
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-lg">
          Access valuable information and resources related to senior citizen
          care and rights
        </p>

        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setViewMode("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 
              ${viewMode === "all" 
                ? "bg-teal-500 text-white" 
                : "bg-white text-teal-500 hover:bg-teal-50"}`}
          >
            View All
          </button>
          <button
            onClick={() => setViewMode("information")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 
              ${viewMode === "information" 
                ? "bg-teal-500 text-white" 
                : "bg-white text-teal-500 hover:bg-teal-50"}`}
          >
            Information Only
          </button>
          <button
            onClick={() => setViewMode("resources")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 
              ${viewMode === "resources" 
                ? "bg-teal-500 text-white" 
                : "bg-white text-teal-500 hover:bg-teal-50"}`}
          >
            Resources Only
          </button>
        </div>

        {/* Conditional Content Rendering */}
        {viewMode === "information" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </>
        )}

        {viewMode === "resources" && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {resourceFiles.map((file, index) => (
              <ResourceFile 
                key={index}
                fileName={file.fileName}
                fileType={file.fileType}
              />
            ))}
          </div>
        )}

        {viewMode === "all" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-teal-600 mb-6 text-center">
                Downloadable Resources
              </h3>
              {resourceFiles.map((file, index) => (
                <ResourceFile 
                  key={index}
                  fileName={file.fileName}
                  fileType={file.fileType}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
