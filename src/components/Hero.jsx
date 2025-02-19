import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SocialCarousel from "./SocialCarousel";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import mainBg from "../assets/main.jpg";
import ProductGrid from "./ProductGrid";
import GalleryGrid from "./GalleryGrid";
import PartnerCarousel from './PartnerCarousel';

const Hero = () => {
  const navigate = useNavigate();
  const images = [img1, img2, img3, img4];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center mb-16">
        
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg font-semibold text-white">
              Join us in this innovative journey !
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Building a better society for our beloved senior{" "}
              <span className="relative inline-flex sm:inline">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
                <span className="relative">citizen</span>
              </span>
            </p>
            <div className="px-8 mt-9 sm:items-center sm:justify-center sm:px-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-gray-900"
              >
                Support Us
              </a>
            </div>
            <p className="my-6 text-base text-white">
              Every support can create a big impact. Let's join hands to make a better society for our senior citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-12 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 font-poppins">
            About Us
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are a passionate community of individuals dedicated to transforming 
              the lives of senior citizens in Nepal. Through our innovative programs 
              and initiatives, we create meaningful opportunities for elderly engagement, 
              skill development, and social connection. Our approach combines traditional 
              values with modern solutions to address the unique challenges faced by 
              our senior community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-teal-700 font-semibold mb-2">Our Focus</h3>
                <p className="text-gray-600">Empowering seniors through active engagement and skill development</p>
              </div>
              <div className="p-6">
                <h3 className="text-teal-700 font-semibold mb-2">Our Impact</h3>
                <p className="text-gray-600">Creating sustainable opportunities for dignity and independence</p>
              </div>
              <div className="p-6">
                <h3 className="text-teal-700 font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">Building an inclusive society that celebrates senior wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-teal-800 mb-8 font-poppins">
            Vision, Mission and Objectives 
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pustantaran Nepal is dedicated to enhancing the lives of senior citizens 
              through meaningful engagement, skill development, and community building. 
              We believe in creating opportunities that celebrate their wisdom while 
              fostering their independence and dignity.
            </p>
            <button
              onClick={() => navigate("/about-us")}  // Changed from "/about" to "/about-us"
              className="bg-gradient-to-r from-teal-700 to-teal-600 text-white font-semibold py-2.5 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-teal-600 hover:to-teal-700 font-poppins text-sm"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
        
      {/* Products and Gallery Section */}
      <section className="py-12 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Products Section */}
            <div className="mb-16 lg:mb-0">
              <ProductGrid />
            </div>

            {/* Gallery Section */}
            <div className="mb-16 lg:mb-0">
              <GalleryGrid images={images} />
            </div>
          </div>
        </div>
      </section>

      <PartnerCarousel />
      {/* Social Feed Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8 font-poppins">
            Social Updates
          </h2>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Stay connected with our latest activities, events, and success stories. 
              Follow us on social media to see how we're making a difference in 
              the lives of senior citizens.
            </p>
            <button
              onClick={() => navigate("/social-impact")}
              className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              See our social impact
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
          <SocialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Hero;
