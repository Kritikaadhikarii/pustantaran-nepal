import { useState } from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const productImages = [
  product1,
  product2,
  product3
];

const ProductCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const duplicatedImages = productImages.concat(productImages);

  return (
    <div
      className="relative overflow-hidden bg-white my-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredIndex(null);
      }}
    >
      <div
        className={`flex items-center gap-2 sm:gap-4 md:gap-6 ${
          isHovered ? "animation-paused" : "animate-scroll"
        }`}
        style={{
          animationDuration: `${productImages.length * 5}s`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[320px] md:h-[260px] lg:w-[350px] lg:h-[280px] flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={src}
              alt={`Product ${(index % productImages.length) + 1}`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <button
                  className="bg-white text-teal-600 font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-sm sm:text-base"
                  style={{ zIndex: 10 }}
                  onClick={() => navigate("/products")}
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
