import React from "react";
import Hero from "./Hero";

const AboutUs = () => {
  return (
    <>
    <Hero />
    
    <section className="bg-gray-100 py-10 px-6">
      {/* About Us Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          About Us
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="text-gray-700 mb-4">
            Pustantaran Nepal is registered as a profit-not-distributing company
            with the Office of the Company Registrar in Kathmandu. The
            organization was founded by a group of middle-aged professionals
            from both the profit and non-profit sectors who came together with
            a shared commitment to address the critical issues faced by senior
            citizens. Recognizing a significant gap and genuine need for
            consistent interventions to ensure the rights and well-being of
            senior citizens, we felt compelled to act.
          </p>
          <p className="text-gray-700 mb-4">
            In Nepali society, the issue of senior citizens remains one of the
            most neglected. We strongly believe in creating a supportive and
            respectful environment for senior citizens at both the household and
            community levels.
          </p>
          <p className="text-gray-700 mb-4">
            Our work is driven by the belief that aging is golden and a gift
            from God, not a burden. Senior citizens are a wealth of experience
            and expertise across various fields. By creating opportunities to
            transfer their knowledge and skills to future generations, we can
            drive positive societal change.
          </p>
          <p className="text-gray-700 mb-4">
            The challenges of aging are inevitable, both locally and globally.
            By respecting and caring for our seniors, we set a precedent for
            future generations to respect and care for us. Therefore, it is
            imperative to foster a society that treats senior citizens with
            dignity and respect.
          </p>
          <p className="text-gray-700 mb-4">
            We are determined to change the narrative around senior care.
            Providing proper care centers and necessary support is not about
            abandoning one’s parents but about creating a conducive environment
            for their happiness and dignity.
          </p>
          <p className="text-gray-700 mb-4">
            Pustantaran Nepal aims to offer professional support and services to
            senior citizens, enabling them to live fulfilling, dignified lives.
            Life is unpredictable, regardless of age. We want to break the
            stigma that elderly people are "settling stars" (
            <em>Danda Mathiko Jun</em>) and instead provide them with an
            environment that values and cherishes them throughout their
            lifetime.
          </p>
          <p className="text-gray-700">
            Our goal is to establish a model care center that can be replicated
            across other regions, setting a standard for proper care and support
            for senior citizens.
          </p>
        </div>
      </div>

      {/* Vision, Mission, and Objectives Section */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Vision, Mission, and Objectives
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          {/* Vision */}
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Vision</h3>
          <p className="text-gray-700 mb-4">
            A society where senior citizens are respected, valued, and empowered
            to lead dignified lives, with access to care, opportunities for
            knowledge transfer, and an environment that fosters intergenerational
            harmony and inclusion.
          </p>

          {/* Mission */}
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Mission</h3>
          <p className="text-gray-700 mb-4">
            To enhance the quality of life for senior citizens by promoting their
            human rights, ensuring their well-being, and creating opportunities
            for a dignified and fulfilling life.
          </p>

          {/* Objectives */}
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            Objectives
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              To organize awareness programs, provide technical support, and
              engage in evidence-based advocacy to enhance societal understanding
              of senior citizens' issues and foster a positive perception of
              aging.
            </li>
            <li>
              To create a supportive environment for senior citizens by promoting
              awareness, fostering respect, and delivering appropriate care
              services, including health and psychosocial support, to ensure they
              live independently and actively in their communities.
            </li>
            <li>
              To facilitate intergenerational knowledge sharing by leveraging the
              expertise of senior citizens and creating opportunities for their
              economic empowerment through skill-based initiatives.
            </li>
            <li>
              To advocate for the enactment of laws and policies that safeguard
              the welfare of senior citizens and provide property and after-life
              management services.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
