import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const GRNAtlantaNorth = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  const galleryItems = [
    { type: "image", src: "/atlanta/atl-1.png", alt: "Image 1" },
    { type: "image", src: "/atlanta/atl-2.png", alt: "Image 2" },
    { type: "image", src: "/atlanta/atl-3.jpg", alt: "Image 3" },
    { type: "image", src: "/atlanta/Tagline.png", alt: "Image 4" },
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
        GRN Atlanta North
      </h1>
      <div className="flex flex-col gap-5 bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6">
          <p className="md:w-1/2">
            Redesigning the brand for a GRN franchise office was an exciting
            challenge. I started by researching their target audience, industry
            trends, and competitors. This led to a unique brand strategy that
            captured the office's essence and set them apart. I designed a new
            logo that conveyed professionalism and expertise, and created brand
            guidelines to ensure consistency across all materials. By the end,
            GRN Atlanta North had a modern look that resonated with its audience
            and reflected its values and mission.
          </p>
          <div className="md:w-1/2 flex flex-col text-left ml-10 gap-5 lg:gap-14 justify-center">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">My Role:</h3>
              <ul className="list-decimal ml-6 text-left italic font-serif">
                <li>Develop a new logo that resonated with their industry.</li>
                <li>
                  Create a brand image that is reflected across various media
                  channels.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-2xl">Date:</h3>
              <p className="italic font-serif">November 2022 - March 2023</p>
            </div>
          </div>
        </div>
        {/* Your existing content here */}
      </div>

      {/* gallery */}
      <div className="mt-8">
        <div className="overflow-x-auto scrollbar scrollbar-thumb-blue-700">
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
              className="absolute font-bold top-[-70px] right-4 text-4xl px-3 py-1 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-w-full max-h-full"
              />
            ) : (
              <video
                src={selectedItem.src}
                autoPlay
                controls
                className="max-w-full max-h-full"
              />
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex gap-4 flex-col bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500 p-6">
          <h1 className="text-2xl font-bold mb-4">Logo redesign</h1>
          <p>
            One of the goals was to redesign the brand identity. We created a
            simple, bold logo featuring a shopping cart, symbolizing the
            industry. The new logo conveyed quality, precision, and innovation
            while being visually appealing and memorable. This redesign helped
            the company stand out in a crowded market and establish a strong
            brand identity that resonated with their target audience.
          </p>
        </div>

        <div className="md:w-1/2 flex gap-4 flex-col bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500 p-6">
          <h1 className="text-2xl font-bold mb-4">Marketing Content</h1>
          <p>
            I harmonized marketing content with ATL North's brand strategy,
            producing flyers, videos, and banners that incorporated the
            redesigned logo for a consistent brand image. This effort aimed to
            cultivate customer loyalty and drive sales, resulting in a tangible
            boost to the company's bottom line.
          </p>
        </div>
      </div>

      {/* button */}
      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-palmetto"
          className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-500/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-dublin"
          className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-500/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNAtlantaNorth;
