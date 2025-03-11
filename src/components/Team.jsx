const Team = () => {
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
              It is my great pleasure to welcome you to Pustantaran Nepal and urge
              everyone to join us in our crusade for senior care. A popular Nepali
              proverb, <span className="font-semibold text-teal-700">&quot;Aago tapnu mudhako kura sunnu budha ko&quot;</span> –{" "}
              <em className="text-gray-600">&quot;Get warmth from the log, listen to the older persons,&quot;</em>{" "}
              shows great respect for senior citizens. It coincidentally
              correlates with an African saying,{" "}
              <span className="font-semibold text-teal-700">
                &quot;When an old man dies, a library burns to the ground.&quot;
              </span>{" "}
              Senior citizens are a source of knowledge and inspiration – the real
              gurus. This precisely reflects the role of senior citizens.
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
              population, both state and non-state actors and agencies must act in
              a timely manner. <span className="font-semibold text-teal-700">Pustantaran Nepal</span> – a group of
              middle-aged professionals with an activist spirit – strongly
              believes that aging is not a burden but a matter to rejoice, and we
              are committed to working to provide a respectable environment for
              elderly people.
            </p>

            <p className="text-gray-700 leading-relaxed">
              On behalf of the founding members of Pustantaran Nepal, I would
              sincerely like to thank all those who have shown a keen interest in
              joining this journey.
            </p>

            <div className="mt-10 text-right">
              <p className="text-gray-700 font-semibold italic">Thank you!</p>
              <div className="h-1 w-16 bg-teal-500 mt-2 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisors Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-teal-500 text-center mb-12">Our Advisors</h2>
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
    </section>
  );
};

export default Team;
