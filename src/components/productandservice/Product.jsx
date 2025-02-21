/* eslint-disable react/prop-types */
import { IoMdClose } from 'react-icons/io';
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";

const Product = ({ handleInquiry, selectedProduct, setSelectedProduct }) => {
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

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-teal-500 font-playfair text-4xl font-bold text-gradient text-center mb-4">
          Products from Senior Citizens
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Discover unique handcrafted treasures created with passion by our talented senior artisans.
        </p>
      </div>

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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-2xl">
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              onClick={closeModal}
            >
              <IoMdClose />
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
    </>
  );
};

export default Product;
