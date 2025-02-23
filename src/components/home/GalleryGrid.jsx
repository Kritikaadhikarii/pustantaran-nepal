/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/images/all');
      setImages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isPaused && images.length > 0) {
      intervalRef.current = setInterval(handleNext, 1500);
      return () => clearInterval(intervalRef.current);
    }
  }, [handleNext, isPaused, images.length]);

  // Get current 3 images with wraparound, handling cases with less than 3 images
  const displayImages = Array(3).fill(null).map((_, i) => {
    if (images.length === 0) return null;
    const index = (startIndex + i) % images.length;
    return images[index];
  });

  if (loading) return <div className="text-center py-10">Loading gallery...</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6 font-poppins">
        Our Gallery
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
          View all gallery images
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
            >
              <FaChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex gap-2 sm:gap-2 lg:gap-4">
              {displayImages.map((image, index) => image && (
                <div
                  key={`${image._id}-${index}`}
                  className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    src={`https://be-pustantarannepal.onrender.com/uploads/${image.filename}`}
                    alt="Gallery"
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-teal-700 hover:text-teal-800 p-1 transition-colors duration-200 hover:bg-teal-50 rounded-full"
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
