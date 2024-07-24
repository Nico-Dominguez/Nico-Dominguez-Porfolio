import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const GRNPalmetto = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  const galleryItems = [
    { type: "image", src: "/palmetto/pal-2.jpg", alt: "Image 1" },
    { type: "image", src: "/palmetto/pal-3.png", alt: "Image 2" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
        GRN Palmetto
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6 rounded bg-blue-800 dark:bg-white dark:bg-opacity-10 shadow-xl border-2 border-blue-500">
          <p className="lg:w-1/2">
            At GRN Palmetto, where I spent over four years, I dove into research
            and analysis to understand their audience and competitors. I crafted
            a brand strategy focused on simplicity, authenticity, and
            consistency. This included designing a new logo and establishing a
            cohesive visual identity and tone of voice. The result? A more
            recognizable brand with heightened awareness and customer
            engagement.
          </p>
          <div className="w-1/2 flex flex-col text-left ml-10  gap-5 lg:gap-14 justify-center">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">My Role:</h3>
              <p className="italic font-serif">
                Marketing Communications Specialist
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-2xl">Date:</h3>
              <p className="italic font-serif">August 2020 - March 2024</p>
            </div>
          </div>
        </div>
        {/* Your existing content here */}
      </div>

      {/* gallery */}
      <div className="mt-8">
        <div className="overflow-x-auto scrollbar scrollbar-thumb-blue-400">
          <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer w-64 h-48 bg-gray-200 flex-shrink-0"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="max-w-3xl max-h-[80vh] relative">
            <button
              className="absolute font-bold top-[-70px] right-4 text-4xl px-3 py-1 rounded"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex gap-4 flex-col p-6 rounded bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500">
          <h1 className="text-2xl font-bold mb-4">The Strategy</h1>
          <p>
            Joining GRN Palmetto, I took on the task of crafting a fresh brand
            strategy that truly reflected the company's essence. I started by
            understanding our audience, analyzing competitors, and keeping up
            with industry trends. With these insights, I created engaging
            content that drew customers in.
          </p>
          <p>
            I used key visual elements like the logo, color scheme, and tone of
            voice to clearly communicate our brand identity. By producing
            distinctive videos and matching them with job post graphics, I
            ensured a cohesive brand image. This approach included consistent
            colors and a unified tone, which, along with engaging content like
            flyers, polls, and surveys, led to an impressive 800% growth in our
            follower count over three years.
          </p>
          <p>
            To further connect with our audience, I actively sought customer
            feedback through surveys, LinkedIn polls, and targeted emails. These
            efforts provided valuable insights into customer preferences and
            allowed us to tailor our strategies for better engagement and
            satisfaction.
          </p>
        </div>
        <div className="md:w-1/2 flex gap-4 flex-col p-6 rounded bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500">
          <h1 className="text-2xl font-bold mb-4">The Result</h1>
          <p>
            Implemented effective social media strategies: Engaged the target
            audience and fostered community growth, resulting in an 800%
            increase in follower count over 3 years.
          </p>
          <p>
            Optimized marketing efforts: Used data-driven strategies to improve
            lead generation, web traffic, and promotional success. Applied
            performance metrics to refine campaigns and drive impactful results.
          </p>
        </div>
      </div>

      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-dublin"
          className="w-1/4 px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-700/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-atlanta-north"
          className="w-1/4 px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-700/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNPalmetto;
