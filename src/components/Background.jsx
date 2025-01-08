import React from "react";

const Background = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Title Section */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Background</h2>
        <p className="text-gray-600 text-lg">
          Understanding the evolving challenges faced by Nepal as it transitions into a Federal Democratic Republic.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            A Transitioning Nation
          </h3>
          <p className="text-gray-700 mb-4">
            Nepal, the youngest Federal Democratic Republic in the world, is transitioning to a federal structure. The
            Constitution of Nepal 2015 divides the Himalayan country into seven federal provinces with legislative powers. As
            the country transitions from a unitary system in a post-conflict context, economic opportunities remain limited.
          </p>
          <p className="text-gray-700 mb-4">
            Approximately 1,500 youth leave Nepal daily for foreign employment. Many who can afford it travel to the United
            States, the United Kingdom, Canada, and other European countries for further studies and better opportunities.
            Meanwhile, a majority of youth living in poverty, who either dropped out of school or completed their education
            but could not secure jobs, toil in Gulf countries.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            Nepal's Aging Population
          </h3>
          <p className="text-gray-700 mb-4">
            According to the 2021 census, out of Nepal's total population of 29.1 million, over 2.9 million people are aged 60
            and above, constituting more than 10% of the total population. Additionally, 10.8 million people are aged 30 to
            59, a group that is either moving toward old age or engaged in foreign employment.
          </p>
          <p className="text-gray-700 mb-4">
            Nepal is expected to become an aging society by 2028, defined as one where people aged 65 and older account for
            7% or more of the total population. This shift necessitates immediate action to mitigate future complications.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded shadow-lg col-span-1 lg:col-span-2">
          <blockquote className="italic text-lg text-center">
            “I had to ask my wife to leave her job to take care of my elderly mother because care homes in Nepal are not
            adequate,” says Ramu Lamsal (name changed), a working professional who had to compromise his wife’s career. There
            is significant social stigma associated with placing elderly family members in care homes.
          </blockquote>
        </div>

        {/* Bottom Content */}
        <div className="bg-white p-6 rounded shadow-lg col-span-1 lg:col-span-2">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            The Need for Elderly Care
          </h3>
          <p className="text-gray-700 mb-4">
            Nepal urgently needs a robust elderly care system. Youths, busy with their careers or migrating abroad, often lack
            the time and knowledge to care for their elderly parents. Furthermore, there are very few institutions dedicated
            to senior citizens' care. Elderly individuals deserve the support, love, and affection they need in their later
            years. However, societal neglect has left many vulnerable to violence, often due to conflicts over their
            state-provided elderly allowance, which is approximately USD 20 per month.
          </p>
          <p className="text-gray-700 mb-4">
            Elderly people possess vast experience across various fields, which could contribute significantly to societal
            progress if the government facilitated knowledge transfer to younger generations. Unfortunately, they are often
            marginalized and forced to live lives of humiliation due to the lack of platforms to address their concerns.
          </p>
          <p className="text-gray-700">
            Recognizing this issue, a group of professionals has come together to address it. Most of the team members, being
            middle-aged, acknowledge that the challenges faced by senior citizens will eventually affect everyone.
            <strong> Pustantaran Nepal</strong> aims to advocate for the rights of senior citizens and assist in delivering
            essential services to them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Background;
