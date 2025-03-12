import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import mainBg from "../../assets/main.jpg";
import ProductGrid from "./ProductGrid";
import GalleryGrid from "./GalleryGrid";
import PartnerCarousel from './PartnerCarousel';
import qrCode from "../../assets/qr.png";
import MemberStats from './MemberStats';

const Hero = () => {
  const navigate = useNavigate();

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
              <button
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-teal-400 bg-opacity-55 sm:w-auto rounded-xl hover:bg-teal-600 focus:ring-2 focus:ring-teal-900"
                onClick={() => navigate("/support-us")}
              >
                Support Us
              </button>
            </div>
            <p className="my-6 text-base text-white">
              Every support can create a big impact. Let&apos;s join hands to make a better society for our senior citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-12 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 font-poppins text-center tracking-tight">
              Background
            </h2>
            <div className="text-gray-600 text-md mb-12 space-y-6 leading-relaxed font-poppins">
            <p className="text-gray-600 mb-8 leading-relaxed">
                Nepal, a beautiful Himalayan country, faces challenges like political instability and limited economic opportunities, 
                driving approximately 1,500 youths abroad daily for employment. Many migrate to developed countries for education 
                and better prospects, while those from low-income backgrounds often take up labor-intensive jobs in Gulf nations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                According to the 2021 census, Nepal&apos;s population is 29.1 million, with over 2.9 million (10%) aged 60 and above. 
                Additionally, 10.8 million people (30–59 age group) are either nearing old age or engaged in foreign employment. 
                Nepal is set to become an aging society by 2028, with 7% of its population being 65 or older. This shift, coupled 
                with declining birth rates and increasing life expectancy (70.48 years), demands urgent attention to senior citizens&apos; 
                well-being and social integration.
              </p>
            </div>

            <h2 className="text-4xl font-bold text-teal-800 mb-8 font-poppins text-center tracking-tight">
              About Us
            </h2>
            <div className="text-gray-600 text-md mb-8 space-y-6 leading-relaxed font-poppins">
            <p className="text-gray-600 mb-8 leading-relaxed">
                Pustantaran Nepal is a profit-not-distributing organization registered in Kathmandu, founded by professionals 
                from the profit and non-profit sectors. We aim to address senior citizens&apos; challenges by ensuring their dignity, 
                care, and knowledge sharing opportunities. Aging is a gift, not a burden, and seniors&apos; vast experiences can 
                contribute to society&apos;s growth. We advocate for proper care, intergenerational learning, and policies that 
                enhance the lives of elderly citizens.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Realizing the urgent need to work in senior citizen welfare, we—a group of 11 middle-aged professionals working 
                in sectors ranging from Health to International Organizations at national and international levels—have formed 
                a social enterprise. This is our dream project, a way of giving back to the community, as our country and society 
                have played a significant role in our success and in shaping who we are today. We believe in taking small, 
                foundational steps before embarking on a larger journey and aspire to grow our membership to 10,000 individuals 
                committed to contributing to the cause of senior citizens.
              </p>
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => navigate("/about-us")}
                  className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Learn more about us
                  <FaArrowRight className="w-4 h-4" />
                </button>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
              <div className="p-6 ">
                <h3 className="text-teal-700 font-semibold mb-2">Our Focus</h3>
                <p className="text-gray-600">Empowering seniors through active engagement and skill development</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-teal-700 font-semibold mb-2">Our Impact</h3>
                <p className="text-gray-600">Creating sustainable opportunities for dignity and independence</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-teal-700 font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">Building an inclusive society that celebrates senior wisdom</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <img 
                  src={qrCode} 
                  alt="QR Code" 
                  className="w-32 h-32 cursor-pointer transition-opacity duration-300 group-hover:opacity-80"
                />
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = qrCode;
                    link.download = 'pustantaran-nepal-qr.png';
                    link.click();
                  }}
                >
                  <span className="text-white text-sm mb-2">Click to Download</span>
                  <button
                    className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-teal-700"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-6">
                <button
                  onClick={() => navigate("/about-us")}
                  className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Learn more about us
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
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
              <GalleryGrid />
            </div>
          </div>
        </div>
      </section>

      <PartnerCarousel />
      <MemberStats />
      {/* Social Feed Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8 font-poppins">
            Social Updates
          </h2>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Stay connected with our latest activities, events, and success stories. 
              Follow us on social media to see how we&apos;re making a difference in 
              the lives of senior citizens.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* <SocialCarousel /> */}
        </div>
      </section>
      
    </div>
  );
};

export default Hero;
