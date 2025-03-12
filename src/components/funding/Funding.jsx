import { useState, useEffect, useCallback, useRef } from "react";
import Contributors from "./Contributors";
import logo from "../../assets/logo.png";
import qrCode from "../../assets/qr.png"; // Add this import
import axios from "axios";

const Funding = () => {
  const [showContributors, setShowContributors] = useState(false);
  const [supporters, setSupporters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const handleDownloadQR = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'pustantaran-donation-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fetchSupporters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://be-pustantarannepal.onrender.com/api/supporters?page=${page}&limit=8`);
      setSupporters(prev => [...prev, ...response.data.supporters]);
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error('Error fetching supporters:', error);
    } finally {
      setLoading(false);
    }
  };

  const lastSupporterRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchSupporters();
  }, [page]);

  const renderSupporters = () => (
    <div className="overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of supporters */}
        {supporters.map((supporter) => (
          <div
            key={`first-${supporter._id}`}
            className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex-shrink-0 mx-4 flex items-center justify-center"
          >
            <img
              src={`https://be-pustantarannepal.onrender.com/${supporter.logo}`}
              alt={supporter.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
        {/* Duplicate set for seamless scrolling */}
        {supporters.map((supporter) => (
          <div
            key={`second-${supporter._id}`}
            className="w-48 h-48 p-4 bg-gray-50 rounded-lg flex-shrink-0 mx-4 flex items-center justify-center"
          >
            <img
              src={`https://be-pustantarannepal.onrender.com/${supporter.logo}`}
              alt={supporter.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Members' Contributions */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4 text-center">
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4 text-center">
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4 text-center">
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4 text-center">
                  Corporate Social Responsibility (CSR) Contributions
                </h3>
                <p className="text-gray-700">
                  Many corporate entities contribute to social causes as part of their CSR initiatives. Pustantaran Nepal will
                  collaborate with corporate organizations to fundraise and promote senior citizens’ rights.
                </p>
              </div>

              {/* Funding from INGOs */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <div className="text-teal-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4 text-center">
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

              {/* Direct Donations via QR */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <h3 className="font-playfair text-2xl font-semibold text-teal-500 mb-4">
                  Direct Donations
                </h3>
                <div className="flex flex-col items-center">
                  <img src={qrCode} alt="Donation QR Code" className="w-48 h-48 object-contain mb-4"/>
                  <p className="text-gray-700 mb-4 text-center">
                    Scan the QR code to make a direct donation to support our cause. Every contribution helps us get closer to our goal.
                  </p>
                  <button
                    onClick={handleDownloadQR}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download QR Code
                  </button>
                </div>
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
                {renderSupporters()}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Funding;
