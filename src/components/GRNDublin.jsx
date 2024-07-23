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
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold mb-4 text-rose-200">GRN Dublin</h1>
      <div className="flex flex-col gap-5 bg-rose-700 rounded">
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6">
          <p className="lg:w-1/2">
            While actively contributing to GRN Palmetto, I received an outreach
            from GRN Dublin, who had taken notice of the impactful work I had
            executed for Palmetto. Recognizing their need for a Marketing
            professional to revitalize their brand and establish a consistent
            brand image, I eagerly took on the opportunity. To begin, I
            diligently conducted industry research, striving to comprehend the
            unique landscape in which they operate. Collaborating closely with
            the president, Bill Owad, I formulated compelling content that
            genuinely mirrored the essence of their company, ultimately
            rejuvenating their brand identity.
          </p>
          <div className="w-1/2 flex flex-col text-left ml-10  gap-5 lg:gap-14 justify-center">
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
        <div className="overflow-x-auto scrollbar scrollbar-thumb-rose-700">
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
      {/* next section */}

      <div className="flex gap-4 flex-col bg-rose-700 rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Marketing Content</h1>
        <p>
          Undertaking a project to revamp a client's social media presence and
          develop engaging marketing content for their audience can be both
          thrilling and demanding. GRN Dublin approached me seeking a
          comprehensive content rebranding, accompanied by the creation of
          distinctive graphics that would set them apart from their competitors.
          Through the creation of exceptional marketing content, precisely
          tailored to align with the client's brand strategy and resonate with
          their target audience, we aimed to attract companies and potential
          candidates in the life sciences and biomedical industry, establishing
          GRN Dublin as an appealing partner for collaboration.
        </p>
        <p>
          To start my work, I began by crafting a job posting template that
          effectively conveyed information about open positions and candidates
          seeking new job opportunities. The job template was thoughtfully
          designed to embody the essence of Dublin's brand, employing their logo
          and colors consistently throughout. To ensure maximum visibility and
          reach, the job posts were consistently uploaded to their LinkedIn
          platform, maintaining a cohesive and recognizable brand presence.
        </p>
        <p>
          In addition to crafting job templates, I successfully developed a
          range of diverse marketing content including flyers, infographics, and
          comprehensive job packets tailored specifically for C-level positions.
          This collaborative process of refreshing the client's social media
          presence and delivering impactful marketing content has proven to be
          an invaluable experience, granting me insights into working closely
          with clients and producing content for prominent corporations. The
          knowledge gained from this endeavor has been instrumental in expanding
          my expertise in client collaboration and content creation for larger
          organizations.
        </p>
      </div>
      <div className="flex w-full gap-4 justify-center mt-7">
        <Link
          to="/project/grn-atlanta-north"
          className="w-1/4 px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition duration-300 text-center shadow-lg shadow-rose-500/50"
        >
          Previous
        </Link>
        <Link
          to="/project/grn-palmetto"
          className="w-1/4 px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition duration-300 text-center shadow-lg shadow-rose-500/50"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default GRNAtlantaNorth;
