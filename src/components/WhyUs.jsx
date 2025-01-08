import React from "react";

const WhyUs = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Why Choose Us Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Why Choose Pustantaran Nepal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Dedicated Focus on Senior Citizens
            </h3>
            <p className="text-gray-700">
              We are committed to addressing the unique issues faced by senior
              citizens, ensuring their voices are heard and their concerns are
              prioritized.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Creating a Supportive Environment
            </h3>
            <p className="text-gray-700">
              Our efforts aim to foster a respectful and conducive environment
              where senior citizens feel valued, empowered, and supported within
              their communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Advocacy for Rights
            </h3>
            <p className="text-gray-700">
              Pustantaran Nepal actively lobbies and advocates for the
              protection and promotion of senior citizens’ rights, working
              towards necessary legal and policy reforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Model Senior Care and Recreation Center
            </h3>
            <p className="text-gray-700">
              We are establishing a benchmark in senior care by developing a
              model Senior Citizen Care and Recreation Center that sets new
              standards for quality services and replicable solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Comprehensive Care Services
            </h3>
            <p className="text-gray-700">
              Our organization provides both home-based and center-based
              services, ensuring personalized care and support tailored to the
              needs of senior citizens.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          What We Do
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              1. Awareness Raising and Advocacy
            </h3>
            <p className="text-gray-700 mb-4">
              Pustantaran Nepal will raise awareness about senior citizens'
              issues to ensure they are not neglected in society. Our goal is to
              sensitize the public about the rights of senior citizens and
              create an environment where they are respected, and their
              knowledge is utilized for societal benefit.
            </p>
            <p className="text-gray-700">
              We will achieve this through initiatives such as media campaigns,
              interactive sessions, sensitization programs, and research and
              analysis. Our advocacy efforts will focus on amending and enacting
              laws related to senior citizens and formulating codes of conduct
              for operating senior care centers.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              2. Senior Citizens Care and Recreation Center
            </h3>
            <p className="text-gray-700 mb-4">
              Pustantaran Nepal aims to establish a model Senior Citizens Care
              and Recreation Center to provide quality care. The center will
              offer boarding, daycare, and recreational services for senior
              citizens. Additional support will also be provided to elderly
              people in their own homes as needed.
            </p>
            <p className="text-gray-700">
              Recreational activities will include monthly local tours and
              annual pilgrimage tours for spiritual retreats and rejuvenation.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              3. Engaging Youth and Senior Citizens
            </h3>
            <p className="text-gray-700 mb-4">
              We will facilitate intergenerational knowledge transfer by
              organizing programs that allow senior citizens to share their rich
              experiences and expertise with youth. These initiatives aim to
              create platforms for exchanging ideas and knowledge between the
              two generations.
            </p>
            <p className="text-gray-700">
              Additionally, we will raise awareness among youth to reconnect
              them with their homeland and encourage them to contribute to
              Nepal’s development using the skills and knowledge they acquire.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              4. Property and After-Life Management
            </h3>
            <p className="text-gray-700">
              With the consent of families and senior citizens, we will provide
              services related to property and after-life management. These
              activities will support senior citizens in managing their
              resources and planning for after-life matters according to their
              needs and wishes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
