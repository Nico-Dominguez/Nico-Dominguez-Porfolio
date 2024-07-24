import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const GRNDublin = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  const galleryItems = [
    { type: "image", src: "/dublin/dub-1.png", alt: "Image 1" },
    { type: "image", src: "/dublin/dub-2.png", alt: "Image 2" },
    { type: "image", src: "/dublin/dub-3.png", alt: "Image 3" },
    { type: "image", src: "/dublin/dub-4.png", alt: "Image 4" },
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
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
        GRN Dublin
      </h1>
      <div className="flex flex-col gap-5 bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500 rounded">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6">
          <p className="md:w-1/2">
            While working at GRN Palmetto, GRN Dublin noticed my impactful work
            and reached out for help with their branding. Eager for the
            challenge, I jumped in to revitalize their brand and create a
            consistent image. I started with thorough industry research and
            worked closely with President Bill Owad to develop content that
            truly captured their company’s essence, successfully refreshing
            their brand identity.
          </p>
          <div className="md:w-1/2 flex flex-col text-left ml-10  gap-5 lg:gap-14 justify-center">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">My Role:</h3>
              <p className="font-serif italic">Digital Marketer</p>
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-2xl">Date:</h3>
              <p className="font-serif italic">August 2022 - Present</p>
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
              className="absolute font-bold top-[-70px] right-4 text-4xl px-3 py-1 shadow-xl backdrop-blur-lg border-2 border-blue-500"
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
      {/* next section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex gap-4 flex-col p-6 bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500">
          <h1 className="text-2xl font-bold mb-4">Marketing Content</h1>
          <p>
            Revamping GRN Dublin’s social media and marketing content was both
            exciting and challenging. They wanted a complete content rebranding
            with standout graphics to differentiate them from competitors. My
            goal was to create marketing content that aligned with their brand
            strategy and resonated with the life sciences and biomedical
            sectors, helping them attract top companies and candidates.
          </p>
          <p>
            I started by designing a job posting template that captured Dublin's
            brand with consistent use of their logo and colors. I ensured these
            posts were visible and cohesive by regularly updating their LinkedIn
            profile.
          </p>
          <p>
            In addition, I created a variety of marketing materials, including
            flyers, infographics, and detailed job packets for C-level
            positions. This project was a valuable experience, enhancing my
            skills in client collaboration and content creation for large
            organizations.
          </p>
        </div>
        <div className="md:w-1/2 flex gap-4 flex-col p-6 bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500 ">
          <h1 className="text-2xl font-bold mb-4">The Result</h1>
          <p>
            Developed and executed marketing campaigns: Designed and implemented
            effective marketing strategies, resulting in a 21.8% engagement rate
            on LinkedIn over a 6-month period.
          </p>
          <p>
            Implemented social media strategies: Enhanced brand visibility and
            market penetration by 22.9% through A/B testing and post-scheduling,
            demonstrating effective client engagement and communication.
          </p>
          <p>
            Created marketing assets: Produced videos, graphics, and marketing
            materials using Adobe Creative Suite, aligning with modern UI trends
            and showcasing proficiency in tools essential for high-quality
            presentations.
          </p>
        </div>
      </div>

      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-atlanta-north"
          className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-500/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-palmetto"
          className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-500/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNDublin;
