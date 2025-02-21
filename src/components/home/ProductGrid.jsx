/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const productImages = [product1, product2, product3, product1, product2, product3];

const ProductGrid = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % productImages.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 1500);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  // Get current 3 images with wraparound
  const displayImages = Array(3).fill(null).map((_, i) => {
    const index = (startIndex + i) % productImages.length;
    return productImages[index];
  });

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
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="text-teal-700 hover:text-teal-800 p-1 transition-colors duration-200 hover:bg-teal-50 rounded-full"
              aria-label="Previous products"
            >
              <FaChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Product Images */}
            <div className="flex gap-2 sm:gap-2 lg:gap-4">
              {displayImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    src={src}
                    alt={`Product ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
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
