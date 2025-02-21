/* eslint-disable react/prop-types */
import { FaShoppingBag, FaHiking, FaCar, FaHome, FaPlane, FaHospital, FaUsers, FaCity } from 'react-icons/fa';

const Service = ({ handleServiceInquiry }) => {
  const services = [
    {
      title: "Products from Senior Citizens",
      description: "Buy products handcrafted by senior citizens in Nepal and empower them economically! Your contribution not only helps them sustain their livelihoods but also ensures they live with dignity. Due to poverty and a lack of social security, many senior citizens face neglect and hardship. By purchasing these products, you provide them with the opportunity to lead a more respectable and independent life. Through our network partners, we provide training and material support to help senior citizens create these goods. Your support directly contributes to their well-being."
    },
    {
        title: "Trek to Support Senior Citizens of Nepal",
        description: "Nepal, home to Mount Everest, the world's highest peak, is a land of breathtaking natural beauty, rich arts, and vibrant culture. Many travelers describe a visit to Nepal as a once-in-a-lifetime experience. Now, you can make your journey even more meaningful! When you purchase a tour package from us, a portion of the proceeds goes toward supporting Nepal's most vulnerable senior citizens. For every tour package you buy, we allocate $100 to help senior citizens in need. If you have a network and would like to contribute further, we welcome your support in raising funds for this cause. Travel with purpose—experience Nepal while making a difference!"
      },
    {
      title: "Customized Travel Packages for Senior Citizens",
      description: "Our specially curated travel packages cater to the unique needs of senior citizens. As a dedicated non-profit organization focused on their welfare, we are committed to offering the best services tailored for them. These packages are designed by organizations as part of their corporate social responsibility (CSR) initiatives, ensuring high-quality and comfortable experiences for senior travelers."
    },
    {
        title: "Medical and Psychosocial Services",
        description: "We facilitate specialized medical treatments for senior citizens in a stress-free environment by coordinating with leading hospitals in Nepal and India. We have signed Memorandum of Understanding (MoU). In addition to medical care, our trained psychosocial counselors offer counseling services to seniors in need of emotional and mental health support."
      },

    {
      title: "Transport Service",
      description: "We provide transportation services for senior citizens to visit hospitals (with or without professional accompaniment), visa processing centers, embassies, temples, or any other destinations. Our services also include airport pick-up and drop-off, ensuring a safe and hassle-free travel experience."
    },
    {
      title: "Care Service at Home",
      description: "For seniors who prefer to stay in their homes, we offer professional home care services. This ensures they receive the necessary health and personal care support in a comfortable and familiar environment."
    },

    {
      title: "Day Care Service",
      description: "We are in the process of establishing a daycare facility for senior citizens, where they can spend quality time, engage in social activities, and interact with their peers. These centers will provide opportunities for seniors to share their experiences and knowledge while fostering a sense of community. We are also working to create forums where senior citizens can impart their wisdom and skills to younger generations."
    },
    {
      title: "Senior Citizen Village",
      description: "We are developing a Senior Citizen Village, a dedicated community designed to offer a fulfilling and well-cared-for retirement. This facility will provide a secure, comfortable, and enriching environment where seniors can enjoy their later years with proper care and companionship."
    }
  ];

  const serviceIcons = {
    "Products from Senior Citizens": FaShoppingBag,
    "Trek to Support Senior Citizens of Nepal": FaHiking,
    "Transport Service": FaCar,
    "Care Service at Home": FaHome,
    "Customized Travel Packages for Senior Citizens": FaPlane,
    "Medical and Psychosocial Services": FaHospital,
    "Day Care Service": FaUsers,
    "Senior Citizen Village": FaCity,
  };

  return (
    <div className="container mx-auto mb-16 text-center">
      <h2 className="text-teal-500 font-playfair text-4xl font-bold text-gradient text-center mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const ServiceIcon = serviceIcons[service.title];
          return (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                <ServiceIcon className="text-4xl sm:text-3xl text-teal-600 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-teal-600 text-center sm:text-left">
                  {service.title}
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 flex-grow">
                <p className="text-left mb-6">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={(e) => handleServiceInquiry(e, service)}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Inquire About This Service
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
