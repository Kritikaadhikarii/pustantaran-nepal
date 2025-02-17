import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GalleryCarousel = ({ images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); // Hook to handle navigation

  const duplicatedImages = images.concat(images); // Duplicate images for seamless loop

  return (
    <div
      className="relative overflow-hidden bg-white mt-8"
      onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredIndex(null); // Reset the hovered index
      }}
    >
      <div
        className={`flex items-center gap-2 sm:gap-4 md:gap-6 ${
          isHovered ? "animation-paused" : "animate-scroll"
        }`}
        style={{
          animationDuration: `${images.length * 5}s`, // Adjust speed based on the number of images
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[320px] md:h-[260px] lg:w-[350px] lg:h-[280px] flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {/* Image */}
            <img
              className="w-full h-full object-cover rounded-lg"
              src={src}
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay and Button */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <button
                  className="bg-white text-teal-600 font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-sm sm:text-base"
                  style={{ zIndex: 10 }}
                  onClick={() => navigate("/gallery")} // Navigate to /gallery
                >
                  View Gallery
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
