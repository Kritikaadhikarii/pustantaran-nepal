import { useState } from "react";
import Contributors from "./Contributors";
import logo from "../assets/logo.png";

const Funding = () => {
  const [showContributors, setShowContributors] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-20 px-6">
      {/* Title Section */}
      <div className="container mx-auto mb-16 max-w-7xl">
        <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          Sources of Funding
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          Raising capital to establish a Geriatric Hospital and Senior Citizen Care Center with an estimated investment of USD 10,000,000.
        </p>

        {/* Toggle Button - Moved to top */}
        <div className="container mx-auto max-w-4xl mb-8">
          <button
            onClick={() => setShowContributors(!showContributors)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition duration-300 flex items-center gap-2 mx-auto"
          >
            {showContributors ? "View Funding Details" : "View Contributors"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M15.707 10l-4.147 4.146a.5.5 0 01-.708-.708L14.293 10l-3.44-3.438a.5.5 0 11.708-.708L15.707 10z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Conditional Rendering */}
        {showContributors ? (
          <Contributors />
        ) : (
          <>
            {/* Funding Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {/* Members' Contributions */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Members&apos; Contributions
                </h3>
                <p className="text-gray-700 mb-4">
                  Our members have pledged to contribute their time and resources toward the cause of senior citizens. Initially
                  founded by 11 members, we aim to expand our membership to 10,000 individuals. Funds will be raised through
                  membership fees and annual contributions, supporting the organization&apos;s growth and sustainability.
                </p>
                <p className="text-gray-700">
                  Members and their families will receive priority access to services and discounts. The benefits of membership will
                  far outweigh the costs.
                </p>
              </div>

              {/* Contributions from Service Receivers */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Contributions from Service Receivers
                </h3>
                <p className="text-gray-700 mb-4">
                  We plan to offer various services to senior citizens at reasonable rates. Profits generated will be reinvested into
                  the organization’s capital. Contributions from service receivers will form a significant portion of operational
                  costs.
                </p>
                <p className="text-gray-700">
                  Service fees will be determined based on the paying capacity of recipients to ensure inclusivity.
                </p>
              </div>

              {/* Private Donations */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Private Donations
                </h3>
                <p className="text-gray-700 mb-4">
                  Private donations from Nepali citizens and international donors will be an essential funding source. We plan to
                  appeal for donations and strategically place donation boxes in high-traffic locations like hotels, travel agencies,
                  and offices frequented by foreigners.
                </p>
                <p className="text-gray-700">
                  Contributions from the private sector will strengthen community ties and reduce reliance on traditional donors.
                </p>
              </div>

              {/* Corporate Social Responsibility */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Corporate Social Responsibility (CSR) Contributions
                </h3>
                <p className="text-gray-700">
                  Many corporate entities contribute to social causes as part of their CSR initiatives. Pustantaran Nepal will
                  collaborate with corporate organizations to fundraise and promote senior citizens’ rights.
                </p>
              </div>

              {/* Funding from INGOs */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Funding from INGOs, Donors, and the Government
                </h3>
                <p className="text-gray-700 mb-4">
                  We will seek funding from international NGOs, charity organizations, and bilateral and multilateral donors by
                  submitting fundraising proposals and engaging in advocacy efforts.
                </p>
                <p className="text-gray-700">
                  Additionally, Pustantaran Nepal will approach all three tiers of government to prioritize funding for senior
                  citizens’ welfare initiatives.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="container mx-auto max-w-5xl mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full mb-12">
                <p className="text-gray-700 text-lg">
                  Through these combined efforts, we are confident in raising the necessary capital to establish and sustain the Geriatric
                  Hospital and Senior Citizen Care Center, thereby promoting the welfare and dignity of Nepal&apos;s senior citizens.
                </p>
              </div>

              {/* Our Supporters */}
              <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-8">
                Our Supporters
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-wrap justify-center gap-12">
                  <div className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                    <img
                      src={logo}
                      alt="Pustantaran Nepal"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                    <img
                      src={logo}
                      alt="Pustantaran Nepal"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                    <img
                      src={logo}
                      alt="Pustantaran Nepal"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                    <img
                      src={logo}
                      alt="Pustantaran Nepal"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Funding;
