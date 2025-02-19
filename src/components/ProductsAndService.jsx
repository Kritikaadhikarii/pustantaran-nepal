import { useState } from "react";
import { FaShoppingBag } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
import Product from './Product';
import Service from './Service';

const ProductsAndService = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [productForInquiry, setProductForInquiry] = useState(null);
  const [serviceForInquiry, setServiceForInquiry] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'products', or 'services'

  // Function to handle product inquiry
  const handleInquiry = (e, product) => {
    e.stopPropagation();
    setProductForInquiry(product);
    setShowContactModal(true);
  };

  // Function to handle service inquiry
  const handleServiceInquiry = (e, service) => {
    e.preventDefault();
    setServiceForInquiry(service);
    setShowContactModal(true);
  };

  const sendInquiryEmail = () => {
    let subject, body;

    if (productForInquiry) {
      subject = encodeURIComponent(`Product Inquiry: ${productForInquiry.name} - ${fullName}`);
      body = encodeURIComponent(
        `Dear Pustantaran Nepal Team,

I would like to inquire about the following product:

--------------------
PRODUCT DETAILS
--------------------
Product Name: ${productForInquiry.name}
Price: NPR ${productForInquiry.price.toLocaleString()}
Product ID: #${productForInquiry.id}

--------------------
INQUIRER INFORMATION
--------------------
Full Name: ${fullName}
Contact Number: ${contactNumber}

--------------------
ADDITIONAL INFORMATION
--------------------
I am interested in this product and would like to:
- Know more about its specifications
- Understand the availability
- Learn about delivery options
- Discuss any customization possibilities

I would appreciate if you could provide detailed information about this product. I am available at my contact number for any further discussion.

Looking forward to hearing from you soon.

Best regards,
${fullName}`
      );
    } else if (serviceForInquiry) {
      subject = encodeURIComponent(`Service Inquiry: ${serviceForInquiry.title} - ${fullName}`);
      body = encodeURIComponent(
        `Dear Pustantaran Nepal Team,

I would like to inquire about the following service:

--------------------
SERVICE DETAILS
--------------------
Service Name: ${serviceForInquiry.title}

--------------------
INQUIRER INFORMATION
--------------------
Full Name: ${fullName}
Contact Number: ${contactNumber}

--------------------
ADDITIONAL INFORMATION
--------------------
I am interested in this service and would like to:
- Know more about the service details
- Understand the availability
- Learn about the process
- Discuss any specific requirements

I would appreciate if you could provide detailed information about this service. I am available at my contact number for any further discussion.

Looking forward to hearing from you soon.

Best regards,
${fullName}`
      );
    }

    window.location.href = `mailto:info@pustantaran.com?subject=${subject}&body=${body}`;
    setShowContactModal(false);
    setContactNumber("");
    setFullName("");
    setProductForInquiry(null);
    setServiceForInquiry(null);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 relative">
      {/* Nepal Skyline Vector */}
      <div className="pointer-events-none absolute left-0 w-full" style={{ bottom: '5rem' }}>
        <svg
          viewBox="0 0 1200 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-48 fill-teal-600/5"
          preserveAspectRatio="none"
        >
          {/* Mountains in background */}
          <path d="M0,300 L150,100 L300,300" />
          <path d="M250,300 L400,50 L550,300" />
          <path d="M500,300 L650,150 L800,300" />
          
          {/* Temples and Stupas */}
          <path d="M600,300 L600,180 L650,150 L700,180 L700,300" />
          <path d="M800,300 L800,200 L850,170 L900,200 L900,300" />
          <path d="M950,300 L950,220 L1000,200 L1050,220 L1050,300" />
          <path d="M1100,300 L1100,230 L1150,210 L1200,230 L1200,300" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Main Title */}
        <div className="container mx-auto mb-16 text-center">
          <h1 className="text-teal-600 font-playfair text-6xl font-bold mb-8">
            Products and Services
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
              onClick={() => setViewMode('products')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'products'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Products Only
            </button>
            <button
              onClick={() => setViewMode('services')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'services'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Services Only
            </button>
          </div>
        </div>

        {/* Conditional Rendering based on viewMode */}
        {(viewMode === 'all' || viewMode === 'products') && (
          <Product 
            showContactModal={showContactModal}
            setShowContactModal={setShowContactModal}
            handleInquiry={handleInquiry}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        )}

        {(viewMode === 'all' || viewMode === 'services') && (
          <Service handleServiceInquiry={handleServiceInquiry} />
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div 
            className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-md transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-6 flex items-center gap-2">
              {productForInquiry ? <FaShoppingBag /> : serviceIcons[serviceForInquiry?.title]} 
              Contact Details for {productForInquiry ? 'Product' : 'Service'} Inquiry
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <MdEmail className="text-teal-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <BiPhone className="text-teal-500" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter your contact number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                After clicking <span className="text-teal-600 font-semibold">Proceed</span>, 
                you&apos;ll be directed to your email to complete the inquiry. Feel free to edit the email content as needed.
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setContactNumber("");
                  setFullName("");
                  setProductForInquiry(null);
                  setServiceForInquiry(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={sendInquiryEmail}
                disabled={!contactNumber || !fullName}
                className={`px-6 py-2 rounded-lg text-white font-medium transform hover:scale-105 transition-all ${
                  contactNumber && fullName 
                    ? 'bg-teal-500 hover:bg-teal-600' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsAndService;
