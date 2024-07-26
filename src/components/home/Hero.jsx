import React from "react";

const Hero = () => {
  return (
    <div className="p-6 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        <div className="w-full md:w-3/5 md:pr-8">
          <h1 className="text-xl uppercase tracking-widest mb-4 lg:text-2xl text-blue-600 dark:text-blue-200">
            Hello!
          </h1>
          <p className="text-blue-600 text-2xl lg:text-4xl xl:text-5xl dark:text-blue-100 leading-tight">
            I'm{" "}
            <span className="italic font-serif text-blue-900 dark:text-blue-300">
              Nico
            </span>
            , a <span className="font-bold">Digital Marketing Specialist</span>{" "}
            based in{" "}
            <span className="font-serif italic text-blue-900 dark:text-blue-300">
              South Carolina
            </span>
            .
          </p>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 relative">
          <div className="absolute inset-0 bg-blue-200 dark:bg-blue-700 rounded-full transform -rotate-6"></div>
          <img
            src="/Nico-Headshot.png"
            alt="Nico's headshot"
            className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-blue-900 shadow-lg transform rotate-3 transition-transform hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
