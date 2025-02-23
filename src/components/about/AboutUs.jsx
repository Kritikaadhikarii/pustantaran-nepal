import { useState } from "react";
import Background from "./Background";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  const [showBackground, setShowBackground] = useState(false);

  const advisors = [
    {
      name: "Dr. Lorem Ipsum",
      title: "Senior Medical Advisor",
      expertise: "Geriatric Care Specialist",
      qualification: "MD, Geriatric Medicine"
    },
    {
      name: "Prof. Ipsum Dolor",
      title: "Strategic Advisor",
      expertise: "Social Gerontologist",
      qualification: "PhD, Social Work"
    },
    {
      name: "Mr. Dolor Sit",
      title: "Legal Advisor",
      expertise: "Elder Law Specialist",
      qualification: "LLM, Human Rights Law"
    },
    {
      name: "Mrs. Sit Amet",
      title: "Wellness Advisor",
      expertise: "Mental Health Professional",
      qualification: "MA, Psychology"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-12 px-6">
      {/* Toggle Button */}
      <div className="container mx-auto max-w-4xl mb-8">
        <button
          onClick={() => setShowBackground(!showBackground)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition duration-300 flex items-center gap-2 mx-auto"
        >
          {showBackground ? "View About Us" : "View Background"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 10l-4.147 4.146a.5.5 0 01-.708-.708L14.293 10l-3.44-3.438a.5.5 0 11.708-.708L15.707 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Conditional Rendering */}
      {showBackground ? (
        <Background />
      ) : (
        <>
          {/* About Us Section */}
          <div className="container mx-auto mb-16 max-w-4xl">
            <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4 relative">
              About Us
              <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full -z-10"></span>
              <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full -z-10"></span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pustantaran Nepal is registered as a profit-not-distributing
                company with the Office of the Company Registrar in Kathmandu.
                The organization was founded by a group of middle aged
                professionals from both the profit and non-profit sectors who
                came together with a shared commitment to address the critical
                issues faced by senior citizens. Recognizing a significant gap
                and genuine need for consistent interventions to ensure the
                rights and well-being of senior citizens, we felt compelled to
                act.
              </p>
              <p>
                In Nepali society, the issue of senior citizens remains one of
                the most neglected. We strongly believe in creating a supportive
                and respectful environment for senior citizens at both the
                household and community levels.
              </p>
              <p>
                Our work is driven by the belief that aging is golden and a gift
                from God, not a burden. Senior citizens are a wealth of
                experience and expertise across various fields. By creating
                opportunities to transfer their knowledge and skills to future
                generations, we can drive positive societal change.
              </p>
              <p>
                The challenges of aging are inevitable, both locally and
                globally. By respecting and caring for our seniors, we set a
                precedent for future generations to respect and care for us.
                Therefore, it is imperative to foster a society that treats
                senior citizens with dignity and respect.
              </p>
              <p>
                We are determined to change the narrative around senior care.
                Providing proper care centres and necessary support is not about
                abandoning one&apos;s parents but about creating a conducive
                environment for their happiness and dignity.
              </p>
              <p>
                Pustantaran Nepal aims to offer professional support and
                services to senior citizens, enabling them to live fulfilling,
                dignified lives. Life is unpredictable, regardless of age. We
                want to break the stigma that elderly people are &quot;settling
                stars&quot; (Danda Mathiko Jun) and instead provide them with an
                environment that values and cherishes them throughout their
                lifetime.
              </p>
              <p>
                Our goal is to establish a model care centre that can be
                replicated across other regions, setting a standard for proper
                care and support for senior citizens.
              </p>
            </div>
          </div>

          <div className="container mx-auto mb-16 max-w-4xl">
            <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4 relative">
              Background
              <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full -z-10"></span>
              <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full -z-10"></span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nepal, the youngest Federal Democratic Republic in the world, is
                transitioning to a federal structure. The Constitution of Nepal
                2015 divides the Himalayan country into seven federal provinces
                with legislative powers. As the country transitions from a
                unitary system in a post-conflict context, economic
                opportunities remain limited. Approximately 1,500 youth leave
                Nepal daily for foreign employment. Many who can afford it
                travel to the United States, the United Kingdom, Canada, and
                other European countries for further studies and better
                opportunities. Meanwhile, a majority of youth living in poverty,
                who either dropped out of school or completed their education
                but could not secure jobs, toil in Gulf countries.
                <br />
                <br />
                According to the 2021 census, out of Nepal&apos;s total population of
                29.1 million, over 2.9 million people are aged 60 and above,
                constituting more than 10% of the total population.
                Additionally, 10.8 million people are aged 30 to 59, a group
                that is either moving toward old age or engaged in foreign
                employment. If current trends continue, Nepal will face
                significant challenges in the coming years. Senior citizens&apos;
                issues require immediate attention, as life expectancy in Nepal
                has increased to 70.48 years, while the birth rate is gradually
                declining. However, this issue remains under prioritized due to
                the country&apos;s numerous other challenges.
                <br />
                <br />
                The census also indicates that Nepal has approximately 8.2
                million youth aged 15–29, making up around 20.8% of the total
                population. Furthermore, 42.5% of the population falls within
                the age group of 15–39, many of whom are leaving Nepal in search
                of education and employment opportunities abroad. Nepal is
                expected to become an aging society by 2028, defined as one
                where people aged 65 and older account for 7% or more of the
                total population. This shift necessitates immediate action to
                mitigate future complications. With the changing population
                dynamics, Nepal risks losing economic opportunities and faces
                potential shortages of human resources to run vital services.
                <br />
                <br />
                “I had to ask my wife to leave her job to take care of my
                elderly mother because care homes in Nepal are not adequate,”
                says Ramu Lamsal (name changed), a working professional who had
                to compromise his wife’s career. Additionally, there is
                significant social stigma associated with placing elderly family
                members in care homes. Ramu&apos;s case is not unique—many people in
                Nepal have had to sacrifice their careers for elderly care to
                avoid social judgment.
                <br />
                <br />
                Nepal urgently needs a robust elderly care system. Youths, busy
                with their careers or migrating abroad, often lack the time and
                knowledge to care for their elderly parents. Furthermore, there
                are very few institutions dedicated to senior citizens&apos; care.
                Elderly individuals deserve the support, love, and affection
                they need in their later years. However, societal neglect has
                left many vulnerable to violence, often due to conflicts over
                their state-provided elderly allowance, which is approximately
                USD 20 per month.
                <br />
                <br />
                Elderly people possess vast experience across various fields,
                which could contribute significantly to societal progress if the
                government facilitated knowledge transfer to younger
                generations. Unfortunately, they are often marginalized and
                forced to live lives of humiliation due to the lack of platforms
                to address their concerns.
                <br />
                <br />
                Recognizing this issue, a group of professionals has come
                together to address it. Most of the team members, being
                middle-aged, acknowledge that the challenges faced by senior
                citizens will eventually affect everyone. Pustantaran Nepal aims
                to advocate for the rights of senior citizens and assist in
                delivering essential services to them.
              </p>
            </div>
            <button
              onClick={() => setShowBackground(!showBackground)}
              className="text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 transition-colors py-6"
            >
              {showBackground ? "View About Us" : "Learn More About Background"}
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Advisors Section - Add this before Vision, Mission section */}
          <div className="container mx-auto mb-16 max-w-4xl">
            <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-8 relative">
              Our Advisors
              <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full -z-10"></span>
              <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full -z-10"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisors.map((advisor, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {advisor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-teal-600">
                        {advisor.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {advisor.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {advisor.expertise}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {advisor.qualification}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision, Mission, and Objectives Section */}
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-8 relative">
              Vision, Mission, and Objectives
              <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full -z-10"></span>
              <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full -z-10"></span>
            </h2>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg mb-12 z-10">
              <img
                src={img2}
                alt="Vision"
                className="w-full md:w-1/3 h-64 object-cover rounded-l-lg md:rounded-r-none"
              />
              <div className="p-6 md:pl-8">
                <h3 className="text-2xl font-bold text-teal-500 mb-4">
                  Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A society where senior citizens are respected, valued, and
                  empowered to lead dignified lives, with access to care,
                  opportunities for knowledge transfer, and an environment that
                  fosters intergenerational harmony and inclusion.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg mb-12 z-10">
              <img
                src={img3}
                alt="Mission"
                className="w-full md:w-1/3 h-64 object-cover rounded-r-lg md:rounded-l-none"
              />
              <div className="p-6 md:pr-8">
                <h3 className="text-2xl font-bold text-teal-500 mb-4">
                  Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To enhance the quality of life for senior citizens by
                  promoting their human rights, ensuring their well-being, and
                  creating opportunities for a dignified and fulfilling life.
                </p>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg">
              <div className="p-6 md:pl-8">
                <h3 className="text-2xl font-bold text-teal-500 mb-4">
                  Objectives
                </h3>
                <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-4">
                  <li>
                    To organize awareness programs, provide technical support,
                    and engage in evidence-based advocacy to enhance societal
                    understanding of senior citizens&apos; issues and foster a
                    positive perception of aging.
                  </li>
                  <li>
                    To create a supportive environment for senior citizens by
                    promoting awareness, fostering respect, and delivering
                    appropriate care services, including health and psychosocial
                    support, to ensure they live independently and actively in
                    their communities.
                  </li>
                  <li>
                    To facilitate intergenerational knowledge sharing by
                    leveraging the expertise of senior citizens and creating
                    opportunities for their economic empowerment through
                    skill-based initiatives.
                  </li>
                  <li>
                    To advocate for the enactment of laws and policies that
                    safeguard the welfare of senior citizens and provide
                    property and after-life management services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutUs;
