import React from "react";

const Funding = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Title Section */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Sources of Funding</h2>
        <p className="text-gray-600 text-lg">
          Raising capital to establish a Geriatric Hospital and Senior Citizen Care Center with an estimated investment of USD 10,000,000.
        </p>
      </div>

      {/* Funding Details */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Members' Contributions */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Members’ Contributions</h3>
          <p className="text-gray-700 mb-4">
            Our members have pledged to contribute their time and resources toward the cause of senior citizens. Initially
            founded by 11 members, we aim to expand our membership to 10,000 individuals. Funds will be raised through
            membership fees and annual contributions, supporting the organization's growth and sustainability.
          </p>
          <p className="text-gray-700">
            Members and their families will receive priority access to services and discounts. The benefits of membership will
            far outweigh the costs.
          </p>
        </div>

        {/* Contributions from Service Receivers */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Contributions from Service Receivers</h3>
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
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Private Donations</h3>
          <p className="text-gray-700 mb-4">
            Private donations from Nepali citizens and international donors will be an essential funding source. We plan to
            appeal for donations and strategically place donation boxes in high-traffic locations like hotels, travel agencies,
            and offices frequented by foreigners.
          </p>
          <p className="text-gray-700">
            Contributions from the private sector will strengthen community ties and reduce reliance on traditional donors.
          </p>
        </div>

        {/* Corporate Social Responsibility (CSR) Contributions */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Corporate Social Responsibility (CSR) Contributions</h3>
          <p className="text-gray-700">
            Many corporate entities contribute to social causes as part of their CSR initiatives. Pustantaran Nepal will
            collaborate with corporate organizations to fundraise and promote senior citizens’ rights.
          </p>
        </div>

        {/* Funding from INGOs, Donors, and Government */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Funding from INGOs, Donors, and the Government</h3>
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
      <div className="container mx-auto text-center mt-10">
        <p className="text-gray-700 text-lg">
          Through these combined efforts, we are confident in raising the necessary capital to establish and sustain the Geriatric
          Hospital and Senior Citizen Care Center, thereby promoting the welfare and dignity of Nepal’s senior citizens.
        </p>
      </div>

      {/* List of Contributors */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl mt-6 font-bold text-teal-600 text-center mb-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;
