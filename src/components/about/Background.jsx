const Background = () => {
  return (
    <div className="container mx-auto mb-16 max-w-4xl">
      <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-10 relative">
        Our Background
        <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full"></span>
        <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full"></span>
      </h2>

      {/* First Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-teal-500 mb-4">A Transitioning Nation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nepal, the youngest Federal Democratic Republic in the world, is transitioning to a federal structure. The
          Constitution of Nepal 2015 divides the Himalayan country into seven federal provinces with legislative powers. As
          the country transitions from a unitary system in a post-conflict context, economic opportunities remain limited.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Approximately 1,500 youth leave Nepal daily for foreign employment. Many who can afford it travel to the United
          States, the United Kingdom, Canada, and other European countries for further studies and better opportunities.
          Meanwhile, a majority of youth living in poverty, who either dropped out of school or completed their education
          but could not secure jobs, toil in Gulf countries.
        </p>
      </div>

      {/* Aging Population Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-teal-500 mb-4">Nepal&apos;s Aging Population</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          According to the 2021 census, out of Nepal&apos;s total population of 29.1 million, over 2.9 million people are aged 60
          and above, constituting more than 10% of the total population. Additionally, 10.8 million people are aged 30 to
          59, a group that is either moving toward old age or engaged in foreign employment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nepal is expected to become an aging society by 2028, defined as one where people aged 65 and older account for
          7% or more of the total population. This shift necessitates immediate action to mitigate future complications.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 rounded-lg shadow-lg mb-12">
        <blockquote className="italic text-lg text-center">
          &quot;I had to ask my wife to leave her job to take care of my elderly mother because care homes in Nepal are not
          adequate,&quot; says Ramu Lamsal (name changed), a working professional who had to compromise his wife&apos;s career. There
          is significant social stigma associated with placing elderly family members in care homes.
        </blockquote>
      </div>

      {/* Need for Elderly Care Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-teal-500 mb-4">The Need for Elderly Care</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nepal urgently needs a robust elderly care system. Youths, busy with their careers or migrating abroad, often lack
          the time and knowledge to care for their elderly parents. Furthermore, there are very few institutions dedicated
          to senior citizens&apos; care.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Elderly people possess vast experience across various fields, which could contribute significantly to societal
          progress if the government facilitated knowledge transfer to younger generations. Unfortunately, they are often
          marginalized and forced to live lives of humiliation due to the lack of platforms to address their concerns.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Recognizing this issue, a group of professionals has come together to address it. Most of the team members, being
          middle-aged, acknowledge that the challenges faced by senior citizens will eventually affect everyone.
          <strong> Pustantaran Nepal</strong> aims to advocate for the rights of senior citizens and assist in delivering
          essential services to them.
        </p>
      </div>
    </div>
  );
};

export default Background;
