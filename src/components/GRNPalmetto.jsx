import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const GRNPalmetto = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { type: "image", src: "/palmetto/pal-2.jpg", alt: "Image 1" },
    { type: "image", src: "/palmetto/pal-3.png", alt: "Image 2" },
  ];

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4 text-yellow-500">GRN Palmetto</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse bg-yellow-400 p-6 rounded">
          <p className="lg:w-1/2 text-slate-900">
            Working for GRN Palmetto for three and a half years, I performed
            thorough research and analysis of their target audience and
            competitors. I developed a unique brand strategy emphasizing
            simplicity, authenticity, and consistency. I designed a new logo
            that captured the essence of the brand and created a consistent
            visual identity across all marketing materials. Additionally, I
            developed a tone of voice that conveyed the brand's personality,
            values, and messaging in a consistent and engaging way. As a result,
            the client's brand image became more recognizable, and they
            experienced an increase in brand awareness and customer engagement.
          </p>
          <div className="w-1/2 flex flex-col text-left ml-10  gap-5 lg:gap-14 justify-center">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3 text-slate-900">
                My Role:
              </h3>
              <p className="italic font-serif text-slate-900">
                Marketing Communications Specialist
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-2xl text-slate-900">
                Date:
              </h3>
              <p className="italic font-serif text-slate-900">
                August 2020 - March 2024
              </p>
            </div>
          </div>
        </div>
        {/* Your existing content here */}
      </div>

      {/* gallery */}
      <div className="mt-8">
        <div className="overflow-x-auto scrollbar scrollbar-thumb-yellow-400">
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
              className="absolute font-bold top-[-70px] right-4 text-4xl text-slate-900 px-3 py-1 bg-yellow-600 rounded"
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

      <div className="flex gap-4 flex-col bg-yellow-400 p-6 rounded">
        <h1 className="text-2xl font-bold mb-4 text-slate-900">The Goal:</h1>
        <p className="text-slate-900">
          Upon joining GRN Palmetto, I was entrusted with the responsibility of
          formulating a fresh brand strategy that accurately represented the
          company's essence. To kick-start this process, I diligently delved
          into comprehending the target audience, studying competitors, and
          staying abreast of industry trends. Armed with this knowledge, I
          crafted purpose-driven content that compellingly enticed customers to
          engage in business with us.
        </p>
        <p className="text-slate-900">
          By leveraging key visual elements like the logo, color scheme, and
          tone of voice, I adeptly conveyed the company's brand identity,
          establishing a strong connection with the intended audience. Through
          the creation of distinctive videos, I tailored the content to resonate
          with customers in a compelling and personalized manner.
        </p>
        <p className="text-slate-900">
          After creating videos, I ensured a seamless content flow by
          complementing them with job post graphics that resonated with the
          video content. By employing consistent colors and a unified tone of
          voice, I established a cohesive brand image. In addition, by
          consistently producing compelling content, I utilized various graphics
          including flyers, polls, and surveys to engage our target audience and
          gain insights into their preferences and intentions. As a result, I
          achieved a remarkable 800% growth in the company's follower count over
          a span of three years.
        </p>
      </div>
      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-dublin"
          className="w-1/4 px-4 py-2 bg-yellow-400 text-slate-900 rounded hover:bg-yellow-600 transition duration-300 text-center shadow-lg shadow-yellow-400/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-atlanta-north"
          className="w-1/4 px-4 py-2 bg-yellow-400 text-slate-900 rounded hover:bg-yellow-600 transition duration-300 text-center shadow-lg shadow-yellow-400/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNPalmetto;
