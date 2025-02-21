import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const GalleryGrid = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 1500);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  // Get current 3 images with wraparound
  const displayImages = Array(3).fill(null).map((_, i) => {
    const index = (startIndex + i) % images.length;
    return images[index];
  });

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6 font-poppins">
        Gallery
      </h2>
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto w-[90%]">
          Experience the joy and warmth through our gallery showcasing moments 
          of companionship, activities, and the vibrant community life of 
          our senior citizens.
        </p>
        <button
          onClick={() => navigate("/gallery")}
          className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
        >
          Get to know more through images
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
              aria-label="Previous images"
            >
              <FaChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Gallery Images */}
            <div className="flex gap-2 sm:gap-2 lg:gap-4">
              {displayImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    src={src}
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="text-teal-700 hover:text-teal-800 p-1 transition-colors duration-200 hover:bg-teal-50 rounded-full"
              aria-label="Next images"
            >
              <FaChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
