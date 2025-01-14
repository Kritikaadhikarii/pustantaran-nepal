import { useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal and set the current index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Show the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Show the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard events for navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 py-10"
      tabIndex={0} // Make the container focusable to listen for key events
      onKeyDown={isOpen ? handleKeyDown : null} // Listen to key events only if the modal is open
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
          Gallery
        </h1>

        {/* Grid for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => openModal(index)} // Open modal on click
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          {/* Image Container */}
          <div className="relative flex items-center justify-center">
            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Modal item ${currentIndex + 1}`}
              className="w-full max-w-m sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-lg"
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 hover:bg-gray-600 p-2 px-3.5 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Left Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 rounded-full"
              onClick={prevImage}
            >
              &#8249;
            </button>

            {/* Right Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 rounded-full"
              onClick={nextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
