import { useState } from "react";
import SupportHelp from "./SupportHelp";

const SupportUs = () => {
  const [showSupportHelp, setShowSupportHelp] = useState(false);

  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Toggle Button */}
      <div className="container mx-auto max-w-4xl mb-8">
        <button
          onClick={() => setShowSupportHelp(!showSupportHelp)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition duration-300 flex items-center gap-2 mx-auto"
        >
          {showSupportHelp ? "View Support Us" : "View Support Help"}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 10l-4.147 4.146a.5.5 0 01-.708-.708L14.293 10l-3.44-3.438a.5.5 0 11.708-.708L15.707 10z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Conditional Rendering */}
      {showSupportHelp ? (
        <SupportHelp />
      ) : (
        <>
          {/* Support Us Section */}
          <div className="container mx-auto mb-12">
          <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
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
          <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
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
                  improves the lives of senior citizens and enhances the community&apos;s
                  social fabric.
                </li>
                <li>
                  <strong>Updates and Involvement:</strong> Members will be
                  regularly informed about the organization&apos;s initiatives, progress,
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


        </>
      )}
    </section>
  );
};

export default SupportUs;
