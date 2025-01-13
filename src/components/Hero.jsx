import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Turn your visitors into profitable {" "}
              <span className="relative inline-flex sm:inline">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
                <span className="relative">business</span>
              </span>
            </p>

            <div className="px-8 mt-9 sm:items-center sm:justify-center sm:px-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-gray-900"
              >
                Get more customers
              </a>
            </div>
            <p className="mt-8 text-base text-gray-500">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt="Illustration without play button"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
