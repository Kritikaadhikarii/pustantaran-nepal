import React from "react";

const Team = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* The Team Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          The Team
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700 mb-4">
            Initially, a group of 11 individuals came together to address the
            critical issues faced by senior citizens. We believe in taking
            small, foundational steps before embarking on a larger journey. Our
            vision is to expand the organization's membership to 10,000
            individuals, as we are confident that many share our passion for
            contributing to the noble cause of providing dignified care for
            senior citizens.
          </p>
        </div>
      </div>

      {/* Message from Executive Director */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Message from Executive Director
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700 mb-4">
            It is my great pleasure to welcome you to Pustantaran Nepal and urge
            everyone to join us in our crusade for senior care. A popular Nepali
            proverb, <strong>“Aago tapnu mudhako kura sunnu budha ko”</strong> –{" "}
            <em>“Get warmth from the log, listen to the older persons,”</em>{" "}
            shows great respect for senior citizens. It coincidentally
            correlates with an African saying,{" "}
            <strong>
              “When an old man dies, a library burns to the ground.”
            </strong>{" "}
            Senior citizens are a source of knowledge and inspiration – the real
            gurus. This precisely reflects the role of senior citizens.
          </p>
          <p className="text-gray-700 mb-4">
            Unfortunately, several studies have confirmed that they have been
            systematically disregarded and denied their rights to enjoy life.
            Senior citizens from underdeveloped countries, like Nepal, are
            particularly vulnerable to heat, cold, injury, and disasters.
            Special attention and action are genuinely needed to address this
            issue.
          </p>
          <p className="text-gray-700 mb-4">
            Since aging is an inevitable phenomenon and the demographic
            landscape has drastically changed due to the rapidly growing aging
            population, both state and non-state actors and agencies must act in
            a timely manner. <strong>Pustantaran Nepal</strong> – a group of
            middle-aged professionals with an activist spirit – strongly
            believes that aging is not a burden but a matter to rejoice, and we
            are committed to working to provide a respectable environment for
            elderly people.
          </p>
          <p className="text-gray-700">
            On behalf of the founding members of Pustantaran Nepal, I would
            sincerely like to thank all those who have shown a keen interest in
            joining this journey.
          </p>
          <p className="text-gray-700 font-semibold mt-6 text-right">Thank you!</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
