import { useState } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [productForInquiry, setProductForInquiry] = useState(null);

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 description",
      image: product1,
      price: 1000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 description",
      image: product2,
      price: 2000,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Product 3 description",
      image: product3,
      price: 3000,
    },
  ];

  // Function to open the modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Function to handle product inquiry
  const handleInquiry = (e, product) => {
    e.stopPropagation();
    setProductForInquiry(product);
    setShowContactModal(true);
  };

  const sendInquiryEmail = () => {
    const product = productForInquiry;
    const subject = encodeURIComponent(`Product Inquiry: ${product.name} - ${fullName}`);
    const body = encodeURIComponent(
      `Dear Pustantaran Nepal Team,

I would like to inquire about the following product:

--------------------
PRODUCT DETAILS
--------------------
Product Name: ${product.name}
Price: NPR ${product.price.toLocaleString()}
Product ID: #${product.id}

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
${fullName}
`
    );
    window.location.href = `mailto:info@pustantaran.com?subject=${subject}&body=${body}`;
    setShowContactModal(false);
    setContactNumber("");
    setFullName("");
    setProductForInquiry(null);
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
        {/* Title */}
        <div className="container mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-teal-600 mb-4 animate-fade-in">
            Products from Senior Citizens
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover unique handcrafted treasures created with passion by our talented senior artisans.
          </p>
        </div>

        {/* Product Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => openModal(product)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-500 font-medium">
                    NPR {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={(e) => handleInquiry(e, product)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div 
            className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-md transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
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
                you'll be directed to your email to complete the inquiry. Feel free to edit the email content as needed.
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setContactNumber("");
                  setFullName("");
                  setProductForInquiry(null);
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-2xl">
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
            />
            <h3 className="text-3xl font-bold text-teal-600 mb-4">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {selectedProduct.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-medium text-teal-500">
                NPR {selectedProduct.price.toLocaleString()}
              </span>
              <button
                onClick={(e) => {
                  closeModal();
                  handleInquiry(e, selectedProduct);
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Inquire About This Product
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
