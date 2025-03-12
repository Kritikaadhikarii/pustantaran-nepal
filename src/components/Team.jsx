import { useState } from "react";

const ProfilePictureSVG = () => (
  <svg
    className="w-full h-full text-teal-500"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
    <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" />
  </svg>
);

const Team = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const advisors = [
    {
      name: "Dr. Lorem Ipsum",
      title: "Senior Medical Advisor",
      expertise: "Geriatric Care Specialist",
      qualification: "MD, Geriatric Medicine",
      address: "Kathmandu, Nepal",
      sector: "Healthcare",
      description:
        "Dr. Lorem Ipsum is a renowned geriatric care specialist with over 20 years of experience in elderly healthcare...",
    },
    {
      name: "Prof. Ipsum Dolor",
      title: "Strategic Advisor",
      expertise: "Social Gerontologist",
      qualification: "PhD, Social Work",
      address: "Kathmandu, Nepal",
      sector: "Social Work",
      description:
        "Prof. Ipsum Dolor is a social gerontologist with a focus on the social aspects of aging...",
    },
    {
      name: "Mr. Dolor Sit",
      title: "Legal Advisor",
      expertise: "Elder Law Specialist",
      qualification: "LLM, Human Rights Law",
      address: "Kathmandu, Nepal",
      sector: "Legal",
      description:
        "Mr. Dolor Sit is an elder law specialist with extensive experience in human rights law...",
    },
    {
      name: "Mrs. Sit Amet",
      title: "Wellness Advisor",
      expertise: "Mental Health Professional",
      qualification: "MA, Psychology",
      address: "Kathmandu, Nepal",
      sector: "Mental Health",
      description:
        "Mrs. Sit Amet is a mental health professional with a focus on the psychological well-being of the elderly...",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6">
      {/* The Team Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-4">
          The Team
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700 mb-4">
            Initially, a group of 11 individuals came together to address the
            critical issues faced by senior citizens. We believe in taking
            small, foundational steps before embarking on a larger journey. Our
            vision is to expand the organization&apos;s membership to 10,000
            individuals, as we are confident that many share our passion for
            contributing to the noble cause of providing dignified care for
            senior citizens.
          </p>
        </div>
      </div>

      {/* Message from Executive Director */}
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <h2 className="text-4xl font-bold text-teal-500 text-center mb-12">
            Message from Executive Director
          </h2>
          <div className="absolute w-24 h-1 bg-teal-500 bottom-0 left-1/2 transform -translate-x-1/2 -mb-6"></div>
        </div>

        <div className="bg-gradient-to-b from-white to-teal-50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl border-l-4 border-teal-500">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl text-teal-600 opacity-20">&quot;</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              It is my great pleasure to welcome you to Pustantaran Nepal and
              urge everyone to join us in our crusade for senior care. A popular
              Nepali proverb,{" "}
              <span className="font-semibold text-teal-700">
                &quot;Aago tapnu mudhako kura sunnu budha ko&quot;
              </span>{" "}
              –{" "}
              <em className="text-gray-600">
                &quot;Get warmth from the log, listen to the older
                persons,&quot;
              </em>{" "}
              shows great respect for senior citizens. It coincidentally
              correlates with an African saying,{" "}
              <span className="font-semibold text-teal-700">
                &quot;When an old man dies, a library burns to the ground.&quot;
              </span>{" "}
              Senior citizens are a source of knowledge and inspiration – the
              real gurus. This precisely reflects the role of senior citizens.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Unfortunately, several studies have confirmed that they have been
              systematically disregarded and denied their rights to enjoy life.
              Senior citizens from underdeveloped countries, like Nepal, are
              particularly vulnerable to heat, cold, injury, and disasters.
              Special attention and action are genuinely needed to address this
              issue.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Since aging is an inevitable phenomenon and the demographic
              landscape has drastically changed due to the rapidly growing aging
              population, both state and non-state actors and agencies must act
              in a timely manner.{" "}
              <span className="font-semibold text-teal-700">
                Pustantaran Nepal
              </span>{" "}
              – a group of middle-aged professionals with an activist spirit –
              strongly believes that aging is not a burden but a matter to
              rejoice, and we are committed to working to provide a respectable
              environment for elderly people.
            </p>

            <p className="text-gray-700 leading-relaxed">
              On behalf of the founding members of Pustantaran Nepal, I would
              sincerely like to thank all those who have shown a keen interest
              in joining this journey.
            </p>

            <div className="mt-10 text-right">
              <p className="text-gray-700 font-semibold italic">Thank you!</p>
              <div className="h-1 w-16 bg-teal-500 mt-2 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Advisors Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-teal-500 text-center mb-6">
          Our Advisers
        </h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          We have nominated distinguished individuals interested in the issue of
          aging as advisers. Our advisers are not just showpieces but active
          contributors who guide the organization. They have agreed to support
          us to the fullest extent possible in raising awareness on the issue of
          aging and contributing to the long-term sustainability of the
          organization. We are proud to have a diverse group of advisers and to
          have earned their trust in our efforts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedAdvisor(advisor)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 flex-shrink-0 bg-teal-50 rounded-full overflow-hidden p-1">
                  <ProfilePictureSVG />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-600 hover:text-teal-700">
                    {advisor.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{advisor.title}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {advisor.expertise}
                  </p>
                  <p className="text-gray-500 text-sm">{advisor.address}</p>
                  <p className="text-gray-500 text-sm">
                    Sector: {advisor.sector}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisor Modal */}
        {selectedAdvisor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-teal-50 rounded-full overflow-hidden p-1">
                    <ProfilePictureSVG />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-teal-600">
                      {selectedAdvisor.name}
                    </h3>
                    <p className="text-teal-500 font-medium">{selectedAdvisor.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAdvisor(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4 border-t border-gray-200 pt-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Expertise</h4>
                  <p className="text-gray-700">{selectedAdvisor.expertise}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Qualification</h4>
                  <p className="text-gray-700">{selectedAdvisor.qualification}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Address</h4>
                  <p className="text-gray-700">{selectedAdvisor.address}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Sector</h4>
                  <p className="text-gray-700">{selectedAdvisor.sector}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">About</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedAdvisor.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Friends of Pustantaran Nepal Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-teal-500 text-center mb-6">
            Friends of Pustantaran Nepal
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              The issue of aging is multi-dimensional, so the lone efforts of
              any single organization are not enough to create a conducive
              environment for senior citizens. If you, along with your friends
              and family, would like to contribute to the cause of aging in
              Nepal, you can form a group called ‘Friends of Pustantaran Nepal’
              and support our mission. You can contribute through your knowledge
              and skills, as well as by helping to raise funds. Please reach out
              to us at info@pustantarannepal.org if you are interested in
              forming a group.
            </p>

            <h3 className="text-2xl font-bold text-teal-500 mt-8 mb-4">
              List of Friends of Pustantaran Nepal
            </h3>
            <div className="bg-gray-50 p-4 rounded">
              {/* Add list of friends here when available */}
              <p className="text-gray-600 italic">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
