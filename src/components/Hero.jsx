import React from "react";

const Hero = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:pr-4 p-4 md:p-8 lg:p-10 flex items-center h-full">
          <div className="text-center md:text-left">
            <h1 className="text-xl uppercase tracking-widest mb-4 lg:text-3xl text-blue-600 dark:text-blue-200 ">
              Hello!
            </h1>
            <p className="text-blue-600 text-2xl lg:text-4xl xl:text-6xl dark:text-blue-100">
              I'm{" "}
              <span className="italic font-serif text-blue-900 dark:text-blue-300">
                Nico
              </span>
              , an aspiring{" "}
              <span className="font-bold">Digital Marketing Specialist</span>{" "}
              based in{" "}
              <span className="font-serif italic text-blue-900 dark:text-blue-300">
                South Carolina
              </span>
              .
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="w-2/4 h-1/4 md:h-full bg-gray-300 overflow-hidden">
            <img
              src="/Nico-Headshot.png"
              alt="Hero image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
