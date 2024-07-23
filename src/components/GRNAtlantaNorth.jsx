import React, { useState } from "react";
import { Link } from "react-router-dom";

const GRNAtlantaNorth = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 1" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 2" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 3" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 4" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 5" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 6" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 7" },
    { type: "image", src: "/Nico-Headshot.png", alt: "Image 8" },
    { type: "video", src: "/path/to/video.mp4" },
  ];

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4 text-indigo-200">
        GRN Atlanta North
      </h1>
      <div className="flex flex-col gap-5 bg-indigo-700 rounded">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6">
          <p className="lg:w-1/2">
            Working with one of the GRN franchise offices to redesign their
            brand and create a consistent brand image was an exciting
            opportunity for me. I began by conducting research to understand the
            office's target audience, industry trends, and competitors. This
            information informed the development of a unique brand strategy that
            captured the essence of the office and differentiated them from
            their competitors. I designed a new logo that was consistent with
            the brand strategy and conveyed the office's professionalism and
            expertise. To ensure a consistent brand image, I created brand
            guidelines that outlined how the brand should be used across all
            marketing materials. By the end of the project, GRN Atlanta North
            had a new, modern look that resonated with its target audience and
            established a consistent brand image that reflected its values and
            mission.
          </p>
          <div className="w-1/2 flex flex-col text-left ml-10 gap-5 lg:gap-14 justify-center">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">My Role:</h3>
              <ul className="list-decimal ml-6 text-left italic font-serif">
                <li>Develop a new logo that resonated with their industry</li>
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
        <div className="overflow-x-auto scrollbar scrollbar-thumb-indigo-700">
          <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer w-64 h-48 bg-gray-200 flex-shrink-0"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-3xl max-h-[80vh] relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
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

      <div className="flex gap-4 flex-col bg-indigo-700 rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Logo redesign</h1>
        <p>
          I recently worked with GRN Atlanta North in the Consumer Products
          Goods industry (CPG) to redesign their logo. We created a simple, bold
          logo that incorporated an industry-specific symbol, the shopping cart.
          The new logo conveyed the company's focus on quality, precision, and
          innovation, while also being visually appealing and memorable. The
          redesigned logo helped the company stand out in a crowded industry and
          establish a strong brand identity that resonated with their target
          audience.
        </p>
      </div>

      {/* gallery */}
      <div className="mt-8">
        <div className="overflow-x-auto scrollbar scrollbar-thumb-indigo-700">
          <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer w-64 h-48 bg-gray-200 flex-shrink-0"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-3xl max-h-[80vh] relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
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

      <div className="flex gap-4 flex-col bg-indigo-700 rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Marketing Content</h1>
        <p>
          During my collaboration with ATL North, I successfully harmonized
          marketing content with the established brand strategy. I took the
          initiative to produce various content types including flyers, videos,
          and banners, all incorporating the redesigned logo to ensure a
          coherent brand image across multiple channels. This concerted effort
          aimed to cultivate customer loyalty and drive sales, resulting in a
          tangible boost to the company's bottom line.
        </p>
      </div>

      {/* button */}
      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-palmetto"
          className="w-1/4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 text-center shadow-lg shadow-indigo-500/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-dublin"
          className="w-1/4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 text-center shadow-lg shadow-indigo-500/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNAtlantaNorth;
