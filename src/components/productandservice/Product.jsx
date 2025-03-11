/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';

const Product = ({ handleInquiry, selectedProduct, setSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products');
      setLoading(false);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <div className="text-center py-10">Loading products...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

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
            key={product._id}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => openModal(product)}
          >
            <div className="relative overflow-hidden">
              <img
                src={`https://be-pustantarannepal.onrender.com/api/products/image/${product._id}`}
                alt={product.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.error('Error loading image:', product._id);
                  e.target.src = '/placeholder.jpg';
                }}
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
                  NPR {product.price?.toLocaleString()}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInquiry(e, product);
                  }}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  Buy Now
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
              src={`https://be-pustantarannepal.onrender.com/api/products/image/${selectedProduct._id}`}
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
                NPR {selectedProduct.price?.toLocaleString()}
              </span>
              <button
                onClick={(e) => {
                  closeModal();
                  handleInquiry(e, selectedProduct);
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Buy This Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
