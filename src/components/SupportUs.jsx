import React from "react";

const SupportUs = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Support Us Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Support Us
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700 mb-4">
            We firmly believe that our mission can be realized through close
            coordination and cooperation with all stakeholders. If you want to
            bring a positive change in the lives of senior citizens in Nepal, we
            invite you to join us.
          </p>
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            You can support us by:
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Becoming a member of our organization.</li>
            <li>Connecting us with potential funding sources.</li>
            <li>Providing valuable technical expertise in the field of senior care.</li>
          </ul>
          <p className="text-gray-700">
            For collaboration opportunities, please reach out to us at{" "}
            <a
              href="mailto:info@pustantarannepal.org"
              className="text-teal-500 underline"
            >
              info@pustantarannepal.org
            </a>
            . Together, we can make a meaningful difference.
          </p>
        </div>
      </div>

      {/* Benefits of Becoming a Member */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Benefits of Becoming a Member
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <ul className="list-decimal ml-6 text-gray-700 space-y-4">
            <li>
              <strong>Priority Access to Services:</strong> Members and their
              families will receive prioritized care and services provided by
              the organization.
            </li>
            <li>
              <strong>Exclusive Discounts:</strong> Members will enjoy
              significant discounts on services, making it easier and more
              affordable for them to access senior care and other services
              offered by the organization.
            </li>
            <li>
              <strong>Networking and Community Engagement:</strong> Being a
              member provides the opportunity to connect with like-minded
              individuals, professionals, and organizations working toward the
              common goal of senior citizen welfare.
            </li>
            <li>
              <strong>Recognition and Rewards:</strong> Members will be
              recognized for their contributions, with opportunities to receive
              acknowledgments for their support and dedication to the cause.
            </li>
            <li>
              <strong>Personal Fulfillment:</strong> Membership offers the
              satisfaction of being part of a meaningful, impactful cause that
              improves the lives of senior citizens and enhances the community's
              social fabric.
            </li>
            <li>
              <strong>Updates and Involvement:</strong> Members will be
              regularly informed about the organization's initiatives, progress,
              and future opportunities to engage in advocacy, events, and
              campaigns.
            </li>
            <li>
              <strong>Discounted or Free Health Services:</strong> Depending on
              the membership level, members may receive discounted or free
              health check-ups, counseling, or mental health support services
              for senior citizens.
            </li>
            <li>
              <strong>Long-Term Impact:</strong> By being a member, individuals
              contribute to creating lasting changes and better living
              conditions for senior citizens, leaving a positive legacy for
              future generations.
            </li>
          </ul>
        </div>
      </div>

      {/* List of Contributors */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          List of Contributors
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-teal-500 text-white">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Contact Information</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Motivation for Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">[Name]</td>
                <td className="border border-gray-300 px-4 py-2">[Address]</td>
                <td className="border border-gray-300 px-4 py-2">[Contact]</td>
                <td className="border border-gray-300 px-4 py-2">[Email]</td>
                <td className="border border-gray-300 px-4 py-2">[Motivation]</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Our Supporters */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Our Supporters
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace with actual logos */}
            <a href="https://partner-website.com" target="_blank" rel="noreferrer">
              <img
                src="/path-to-logo-1.png"
                alt="Partner 1"
                className="w-full h-20 object-contain"
              />
            </a>
            <a href="https://partner-website.com" target="_blank" rel="noreferrer">
              <img
                src="/path-to-logo-2.png"
                alt="Partner 2"
                className="w-full h-20 object-contain"
              />
            </a>
            {/* Add more partner logos here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
