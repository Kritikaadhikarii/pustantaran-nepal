import Hero from "./Hero";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const AboutUs = () => {
  return (
    <>
      <Hero />

      <section className="bg-gray-100 py-12 px-6">
        {/* About Us Section */}
        <div className="container mx-auto mb-16 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-10 relative">
            About Us
            <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full"></span>
            <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full"></span>
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <img
              src={img1}
              alt="About Us"
              className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pustantaran Nepal is registered as a profit-not-distributing company
                with the Office of the Company Registrar in Kathmandu. The
                organization was founded by a group of middle-aged professionals
                from both the profit and non-profit sectors who came together with
                a shared commitment to address the critical issues faced by senior
                citizens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In Nepali society, the issue of senior citizens remains one of the
                most neglected. We strongly believe in creating a supportive and
                respectful environment for senior citizens at both the household and
                community levels.
              </p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, and Objectives Section */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-10 relative">
            Vision, Mission, and Objectives
            <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full"></span>
            <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full"></span>
          </h2>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg mb-12">
            <img
              src={img2}
              alt="Vision"
              className="w-full md:w-1/3 h-64 object-cover rounded-l-lg md:rounded-r-none"
            />
            <div className="p-6 md:pl-8">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A society where senior citizens are respected, valued, and empowered
                to lead dignified lives, with access to care, opportunities for
                knowledge transfer, and an environment that fosters intergenerational
                harmony and inclusion.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg mb-12">
            <img
              src={img3}
              alt="Mission"
              className="w-full md:w-1/3 h-64 object-cover rounded-r-lg md:rounded-l-none"
            />
            <div className="p-6 md:pr-8">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To enhance the quality of life for senior citizens by promoting their
                human rights, ensuring their well-being, and creating opportunities
                for a dignified and fulfilling life.
              </p>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg">
            {/* <img
              src={img4}
              alt="Objectives"
              className="w-full md:w-1/3 h-64 object-cover rounded-l-lg md:rounded-r-none"
            /> */}
            <div className="p-6 md:pl-8">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">Objectives</h3>
              <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-4">
                <li>
                  To organize awareness programs, provide technical support, and
                  engage in evidence-based advocacy to enhance societal understanding
                  of senior citizens' issues and foster a positive perception of
                  aging.
                </li>
                <li>
                  To create a supportive environment for senior citizens by promoting
                  awareness, fostering respect, and delivering appropriate care
                  services.
                </li>
                <li>
                  To facilitate intergenerational knowledge sharing by leveraging the
                  expertise of senior citizens and creating opportunities for their
                  economic empowerment through skill-based initiatives.
                </li>
                <li>
                  To advocate for the enactment of laws and policies that safeguard
                  the welfare of senior citizens.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
