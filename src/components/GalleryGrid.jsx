import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const GalleryGrid = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : images.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < images.length - 3 ? prev + 1 : 0));
  };

  // Get current 3 images
  const displayImages = images.slice(startIndex, startIndex + 3);

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
          onClick={() => navigate("/about-gallery")}
          className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
        >
          More about our community
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="py-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
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

          {/* View Full Gallery Button */}
          <button
            className="bg-gradient-to-r from-teal-700 to-teal-600 text-white font-semibold py-2.5 px-8 rounded-lg mt-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-teal-600 hover:to-teal-700 font-poppins text-sm"
            onClick={() => navigate("/gallery")}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
