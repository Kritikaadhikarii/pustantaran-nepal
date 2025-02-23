import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

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
      setLoading(false);
    }
  };

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  useEffect(() => {
    if (!isPaused && products.length > 0) {
      intervalRef.current = setInterval(handleNext, 1500);
      return () => clearInterval(intervalRef.current);
    }
  }, [handleNext, isPaused, products.length]);

  // Get current 3 products with wraparound
  const displayProducts = Array(3).fill(null).map((_, i) => {
    if (products.length === 0) return null;
    const index = (startIndex + i) % products.length;
    return products[index];
  });

  if (loading) return <div className="text-center py-10">Loading products...</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6 font-poppins">
        Our Products / Services
      </h2>
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto w-[90%]">
          Discover our range of handcrafted products made by senior citizens.
          Each item tells a story of skill, dedication, and creativity while
          supporting their independence and dignity.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
        >
          View all products / services
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="py-4">
        <div className="flex flex-col items-center">
          <div
            className="flex items-center gap-1 sm:gap-2 lg:gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={handlePrev}
              className="text-teal-700 hover:text-teal-800 p-1 transition-colors duration-200 hover:bg-teal-50 rounded-full"
              aria-label="Previous products"
            >
              <FaChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex gap-2 sm:gap-2 lg:gap-4">
              {displayProducts.map((product, index) => product && (
                <div
                key={`${product._id}-${index}`}
                className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  className="w-full h-full object-cover rounded-lg shadow-md"
                    src={`https://be-pustantarannepal.onrender.com/api/products/image/${product._id}`}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-teal-700 hover:text-teal-800 p-1 transition-colors duration-200 hover:bg-teal-50 rounded-full"
              aria-label="Next products"
            >
              <FaChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
