import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const PartnerCarousel = () => {
  const partners = [logo, logo, logo, logo, logo, logo, logo, logo]; // Added more logos
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Responsive slides logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= partners.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - slidesToShow : prevIndex - 1
    );
  };

  const visiblePartners = partners.slice(currentIndex, currentIndex + slidesToShow);
  // If we need to wrap around to the beginning
  if (visiblePartners.length < slidesToShow) {
    visiblePartners.push(...partners.slice(0, slidesToShow - visiblePartners.length));
  }

  return (
    <div className="w-full bg-white py-8 relative">
      <div className="max-w-7xl mx-auto relative px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">Our Partners</h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            &lt;
          </button>
          
          <div className="flex justify-between w-full px-12 gap-4">
            {visiblePartners.map((partner, idx) => (
              <div 
                key={`${currentIndex}-${idx}`} 
                className="flex-1 min-w-0 px-2"
              >
                <img
                  src={partner}
                  alt={`Partner ${idx + 1}`}
                  className="h-16 sm:h-20 w-auto mx-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;