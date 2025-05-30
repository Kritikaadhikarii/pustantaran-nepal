import { useState, useEffect } from "react";
import IncredibleLogo from "./IncredibleMountainLogo.jpg";
import NaulinLogo from "./LogoofNaulinSportsVilla.jpg";
import { FaGlobe, FaFacebookSquare } from "react-icons/fa"; // Import icons

const PartnerCarousel = () => {
  const partners = [
    { 
      logo: IncredibleLogo, 
      name: "Incredible Mountain", 
      url: "https://www.incrediblemountains.com/",
      icon: <FaGlobe className="text-blue-600" />
    }, 
    { 
      logo: NaulinLogo, 
      name: "Naulin Sports Villa", 
      url: "https://www.facebook.com/naulinsportsvilla",
      icon: <FaFacebookSquare className="text-blue-800" />
    }
  ];
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
                className="flex-1 min-w-0 px-2 flex flex-col items-center"
              >
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 sm:h-20 w-auto mx-auto object-contain transition-all duration-300"
                  />
                  <div className="flex items-center justify-center mt-2 text-sm text-gray-700 gap-1">
                    {partner.icon}
                    <span>Visit</span>
                  </div>
                </a>
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