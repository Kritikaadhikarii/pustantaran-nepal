import { useState } from "react";
import SupportHelp from "./SupportHelp";
import qrCode from "../assets/qr.png";

const SupportUs = () => {
  const [viewMode, setViewMode] = useState('all'); // 'all', 'benefits', 'support'

  const SectionTitle = ({ children }) => (
    <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
      {children}
    </h2>
  );

  const Card = ({ children }) => (
    <div className="bg-white p-6 rounded shadow-lg">
      {children}
    </div>
  );

  const handleDownloadQR = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'pustantaran-donation-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Main Title */}
      <div className="container mx-auto mb-8 text-center">
        <h1 className="text-teal-600 font-playfair text-6xl font-bold mb-8">
          Support Us
        </h1>
        
        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              viewMode === 'all'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            View All
          </button>
          <button
            onClick={() => setViewMode('benefits')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              viewMode === 'benefits'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Benefits of Membership
          </button>
          <button
            onClick={() => setViewMode('support')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              viewMode === 'support'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            How Your Support Helps
          </button>
        </div>
      </div>

      {/* Conditional Content Rendering */}
      {(viewMode === 'all' || viewMode === 'support' || viewMode === 'benefits') && (
        <div className="container max-w-5xl mx-auto mb-12">
          <Card>
            <div className="max-w-4xl mx-auto py-6">
              <p className="text-gray-700 text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                We firmly believe that our mission can be realized through close
                coordination and cooperation with all stakeholders. If you want to
                bring a positive change in the lives of senior citizens in Nepal, <span className="text-teal-500 font-semibold">we
                invite you to join us</span>.
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-teal-500">
                    You can support us by:
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-3">
                    <li>Becoming a member of our organization.</li>
                    <li>Connecting us with potential funding sources.</li>
                    <li>Providing valuable technical expertise in the field of senior care.</li>
                    <li>Making a donation using the QR code.</li>
                  </ul>
                  <p className="text-gray-700 pt-2">
                    For collaboration opportunities, please reach out to us at{" "}
                    <a href="mailto:info@pustantarannepal.org" className="text-teal-500 underline">
                      info@pustantarannepal.org
                    </a>
                    . Together, we can make a meaningful difference.
                  </p>
                </div>
                
                <div className="flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg">
                  <img src={qrCode} alt="Donation QR Code" className="w-56 h-56 object-contain"/>
                  <p className="text-teal-600 font-semibold mt-4 text-lg">Scan to Support Us</p>
                  <button
                    onClick={handleDownloadQR}
                    className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download QR
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {(viewMode === 'all' || viewMode === 'support') && (
        <SupportHelp />
      )}

      {(viewMode === 'all' || viewMode === 'benefits') && (
        <div className="container mx-auto mb-12">
          <SectionTitle>Benefits of Becoming a Member</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Priority Access to Services</h3>
              <p className="text-gray-600 text-center">Members and their families will receive prioritized care and services provided by the organization.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Exclusive Discounts</h3>
              <p className="text-gray-600 text-center">Members will enjoy significant discounts on services, making it easier and more affordable for them to access senior care and other services offered by the organization.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Networking and Community Engagement</h3>
              <p className="text-gray-600 text-center">Being a member provides the opportunity to connect with like-minded individuals, professionals, and organizations working toward the common goal of senior citizens welfare.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Recognition and Rewards</h3>
              <p className="text-gray-600 text-center">Members will be recognized for their contributions, with opportunities to receive acknowledgments for their support and dedication to the cause.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Personal Fulfillment</h3>
              <p className="text-gray-600 text-center">Membership offers the satisfaction of being part of a meaningful, impactful cause that improves the lives of senior citizens and enhances the community's social fabric.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Updates and Involvement</h3>
              <p className="text-gray-600 text-center">Members will be regularly informed about the organization's initiatives, progress, and future opportunities to engage in advocacy, events, and campaigns.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Discounted or Free Health Services</h3>
              <p className="text-gray-600 text-center">Depending on the membership level, members may receive discounted or free health check-ups, counseling, or mental health support services for senior citizens.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-teal-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2 text-center">Long-Term Impact</h3>
              <p className="text-gray-600 text-center">By being a member, individuals contribute to creating lasting changes and better living conditions for senior citizens, leaving a positive legacy for future generations.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SupportUs;
