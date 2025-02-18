import {
  FaHeartbeat,
  FaHandsHelping,
  FaGavel,
  FaHome,
  FaUserNurse,
} from "react-icons/fa";
import { MdCampaign, MdLocalActivity } from "react-icons/md";
import { BsPeopleFill, BsPersonVcard } from "react-icons/bs";

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-20 px-6">
      {/* Why Choose Us Section */}
      <div className="container mx-auto mb-16 max-w-7xl">
        <h2 className=" text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          Why Choose Pustantaran Nepal
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          Dedicated to creating a better future for our senior citizens through
          comprehensive care and support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaHeartbeat className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Dedicated Focus on Senior Citizens
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We are committed to addressing the unique issues faced by senior
              citizens, ensuring their voices are heard and their concerns are
              prioritized.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaHandsHelping className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Creating a Supportive Environment
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our efforts aim to foster a respectful and conducive environment
              where senior citizens feel valued, empowered, and supported within
              their communities.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaGavel className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Advocacy for Rights
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Pustantaran Nepal actively lobbies and advocates for the
              protection and promotion of senior citizens’ rights, working
              towards necessary legal and policy reforms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaHome className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Model Senior Care and Recreation Center
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We are establishing a benchmark in senior care by developing a
              model Senior Citizen Care and Recreation Center that sets new
              standards for quality services and replicable solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
            <div className="flex items-center mb-6">
              <FaUserNurse className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                Comprehensive Care Services
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our organization provides both home-based and center-based
              services, ensuring personalized care and support tailored to the
              needs of senior citizens.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container mx-auto max-w-5xl">
        <h2 className=" text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          What We Do
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          Our comprehensive approach to senior citizen care and advocacy
        </p>
        <div className="space-y-8 flex flex-col items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
            <div className="flex items-center mb-6">
              <MdCampaign className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                1. Awareness Raising and Advocacy
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Pustantaran Nepal will raise awareness about senior citizens'
                issues to ensure they are not neglected in society. Our goal is
                to sensitize the public about the rights of senior citizens and
                create an environment where they are respected, and their
                knowledge is utilized for societal benefit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will achieve this through initiatives such as media
                campaigns, interactive sessions, sensitization programs, and
                research and analysis. Our advocacy efforts will focus on
                amending and enacting laws related to senior citizens and
                formulating codes of conduct for operating senior care centers.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
            <div className="flex items-center mb-6">
              <MdLocalActivity className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                2. Senior Citizens Care and Recreation Center
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Pustantaran Nepal aims to establish a model Senior Citizens Care
                and Recreation Center to provide quality care. The center will
                offer boarding, daycare, and recreational services for senior
                citizens. Additional support will also be provided to elderly
                people in their own homes as needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Recreational activities will include monthly local tours and
                annual pilgrimage tours for spiritual retreats and rejuvenation.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
            <div className="flex items-center mb-6">
              <BsPeopleFill className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                3. Engaging Youth and Senior Citizens
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We will facilitate intergenerational knowledge transfer by
                organizing programs that allow senior citizens to share their
                rich experiences and expertise with youth. These initiatives aim
                to create platforms for exchanging ideas and knowledge between
                the two generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Additionally, we will raise awareness among youth to reconnect
                them with their homeland and encourage them to contribute to
                Nepal’s development using the skills and knowledge they acquire.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full">
            <div className="flex items-center mb-6">
              <BsPersonVcard className="text-4xl text-teal-500 mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-teal-500">
                4. Property and After-Life Management
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                With the consent of families and senior citizens, we will
                provide services related to property and after-life management.
                These activities will support senior citizens in managing their
                resources and planning for after-life matters according to their
                needs and wishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
