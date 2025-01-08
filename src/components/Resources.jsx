import React from "react";

const Resources = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Title Section */}
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-teal-600">Resources</h2>
        <p className="text-gray-600 mt-2">
          Explore publications, laws, and articles related to senior citizens. Content will be updated shortly.
        </p>
      </div>

      {/* Sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Publications Section */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            Publications / Newsletters
          </h3>
          <p className="text-gray-700">
            Currently, we do not have any publications or newsletters. However,
            we plan to publish resources related to senior citizens that were
            shared with us by various organizations. Stay tuned for updates!
          </p>
        </div>

        {/* Laws Related with Senior Citizen Section */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            Laws Related with Senior Citizens
          </h3>
          <p className="text-gray-700">
            This section will feature laws and regulations that impact the lives
            of senior citizens. Content will be updated soon to provide you with
            valuable legal insights and resources.
          </p>
        </div>

        {/* News Articles Section */}
        <div className="bg-white p-6 rounded shadow-lg md:col-span-2">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            News Articles
          </h3>
          <p className="text-gray-700">
            Discover news articles highlighting the issues, achievements, and
            stories of senior citizens. This section is currently under
            development and will be updated shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
